import fs from "node:fs";

const COMMUNES_PATH = new URL("../data/service-area-communes.json", import.meta.url);
const communes = JSON.parse(fs.readFileSync(COMMUNES_PATH, "utf8"));

const MERU_CENTER = {
  latitude: 49.2459,
  longitude: 2.1298,
};

const MAX_DISTANCE_KM_BY_DEPARTMENT = {
  "60": 30,
  "95": 33,
};

const EXCLUDED_NORMALIZED_NAMES = new Set(["creil"]);
const EXCLUDED_POSTAL_CODES = new Set(["60100"]);

const toRadians = (value) => (value * Math.PI) / 180;

const haversineKm = (lat1, lon1, lat2, lon2) => {
  const earthRadiusKm = 6371;
  const deltaLat = toRadians(lat2 - lat1);
  const deltaLon = toRadians(lon2 - lon1);
  const a =
    Math.sin(deltaLat / 2) ** 2 +
    Math.cos(toRadians(lat1)) * Math.cos(toRadians(lat2)) * Math.sin(deltaLon / 2) ** 2;
  return 2 * earthRadiusKm * Math.asin(Math.sqrt(a));
};

const normalize = (value) =>
  value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[\u2019’']/g, "")
    .replace(/[-\s/.,()]/g, "")
    .toLowerCase();

const errors = [];

for (const commune of communes) {
  const normalizedName = normalize(commune.name);
  const hasExcludedPostalCode = (commune.postalCodes || []).some((postalCode) =>
    EXCLUDED_POSTAL_CODES.has(postalCode),
  );

  if (EXCLUDED_NORMALIZED_NAMES.has(normalizedName) || hasExcludedPostalCode) {
    errors.push(`Commune explicitement exclue presente: ${commune.name} (${(commune.postalCodes || []).join(", ")})`);
    continue;
  }

  const maxDistance = MAX_DISTANCE_KM_BY_DEPARTMENT[commune.departmentCode];
  if (!maxDistance) {
    errors.push(`Departement non autorise: ${commune.departmentCode} (${commune.name})`);
    continue;
  }

  if (typeof commune.latitude !== "number" || typeof commune.longitude !== "number") {
    errors.push(`Coordonnees manquantes: ${commune.name}`);
    continue;
  }

  const distance = haversineKm(
    MERU_CENTER.latitude,
    MERU_CENTER.longitude,
    commune.latitude,
    commune.longitude,
  );

  if (distance > maxDistance) {
    errors.push(
      `Hors rayon ${commune.departmentCode}: ${commune.name} (${distance.toFixed(2)} km > ${maxDistance} km)`,
    );
  }
}

if (!communes.some((commune) => normalize(commune.name) === "meru")) {
  errors.push("La commune de Meru est absente.");
}

if (errors.length > 0) {
  console.error("Verification de zone echouee:");
  for (const error of errors) {
    console.error(`- ${error}`);
  }
  process.exit(1);
}

console.log(`Verification OK: ${communes.length} communes valides.`);
