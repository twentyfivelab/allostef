import communesData from "@/data/service-area-communes.json";

type RawCommune = {
  name: string;
  postalCodes: string[];
  departmentCode: string;
  departmentName: string;
  latitude: number;
  longitude: number;
};

export type ServiceAreaCommune = {
  name: string;
  postalCodes: string[];
  departmentCode: string;
  departmentName: string;
};

const MERU_CENTER = {
  latitude: 49.2459,
  longitude: 2.1298,
};

const MAX_DISTANCE_KM_BY_DEPARTMENT: Record<string, number> = {
  "60": 30,
  "95": 33,
};

const toRadians = (value: number) => (value * Math.PI) / 180;

const haversineKm = (lat1: number, lon1: number, lat2: number, lon2: number) => {
  const earthRadiusKm = 6371;
  const deltaLat = toRadians(lat2 - lat1);
  const deltaLon = toRadians(lon2 - lon1);
  const a =
    Math.sin(deltaLat / 2) ** 2 +
    Math.cos(toRadians(lat1)) * Math.cos(toRadians(lat2)) * Math.sin(deltaLon / 2) ** 2;
  return 2 * earthRadiusKm * Math.asin(Math.sqrt(a));
};

const normalize = (value: string) =>
  value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[\u2019’']/g, "")
    .replace(/[-\s/.,()]/g, "")
    .toLowerCase();

const rawCommunes = communesData as RawCommune[];

const validatedCommunes = rawCommunes.filter((commune) => {
  const maxDistanceKm = MAX_DISTANCE_KM_BY_DEPARTMENT[commune.departmentCode];
  if (!maxDistanceKm) {
    return false;
  }

  const distanceKm = haversineKm(
    MERU_CENTER.latitude,
    MERU_CENTER.longitude,
    commune.latitude,
    commune.longitude,
  );

  return distanceKm <= maxDistanceKm;
});

const hasUnexpectedCommune = rawCommunes.some((commune) => {
  const maxDistanceKm = MAX_DISTANCE_KM_BY_DEPARTMENT[commune.departmentCode];
  if (!maxDistanceKm) {
    return true;
  }

  const distanceKm = haversineKm(
    MERU_CENTER.latitude,
    MERU_CENTER.longitude,
    commune.latitude,
    commune.longitude,
  );

  return distanceKm > maxDistanceKm;
});

if (hasUnexpectedCommune) {
  throw new Error("La liste des communes contient des entrées hors zone d'intervention.");
}

const hasMeru = validatedCommunes.some((commune) => normalize(commune.name) === "meru");
if (!hasMeru) {
  throw new Error("La commune de Meru doit figurer dans la zone d'intervention.");
}

export const serviceAreaCommunes: ServiceAreaCommune[] = validatedCommunes
  .map((commune) => ({
    name: commune.name,
    postalCodes: commune.postalCodes,
    departmentCode: commune.departmentCode,
    departmentName: commune.departmentName,
  }))
  .sort((a, b) => a.name.localeCompare(b.name, "fr", { sensitivity: "base" }));
