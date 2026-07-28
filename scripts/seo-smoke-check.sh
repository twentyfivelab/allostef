#!/usr/bin/env bash
set -euo pipefail

BASE_URL="${1:-https://allostef.fr}"
URL_LIST_FILE="${2:-docs/search-console-priority-urls.txt}"
REPORT_DIR="${3:-docs/reports/seo-smoke}"

mkdir -p "$REPORT_DIR"
REPORT_TIMESTAMP="$(date +"%Y-%m-%d_%H-%M-%S")"
REPORT_BASENAME="$(echo "$BASE_URL" | sed -E 's#https?://##; s#[^a-zA-Z0-9._-]#-#g')"
REPORT_FILE="$REPORT_DIR/${REPORT_TIMESTAMP}_${REPORT_BASENAME}.log"

# Mirror all script output to a dated report for historical tracking.
exec > >(tee "$REPORT_FILE") 2>&1

normalize_url() {
  local input="$1"
  input="${input%/}"
  echo "$input"
}

check_http_200() {
  local url="$1"
  local code
  code="$(curl -L -s -o /tmp/allostef-seo-body.html -w "%{http_code}" "$url")"
  if [[ "$code" != "200" ]]; then
    echo "[FAIL] $url -> HTTP $code"
    return 1
  fi
  echo "[OK]   $url -> HTTP 200"
}

check_contains() {
  local needle="$1"
  local label="$2"
  if grep -qi "$needle" /tmp/allostef-seo-body.html; then
    echo "[OK]   $label"
  else
    echo "[FAIL] $label"
    return 1
  fi
}

check_canonical() {
  local expected_url="$1"
  local canonical
  canonical="$(grep -ioE '<link[^>]*canonical[^>]*>' /tmp/allostef-seo-body.html | head -n 1 | sed -nE 's/.*href="([^"]+)".*/\1/p')"

  if [[ -z "$canonical" ]]; then
    echo "[FAIL] Canonical missing on $expected_url"
    return 1
  fi

  local norm_expected norm_canonical
  norm_expected="$(normalize_url "$expected_url")"
  norm_canonical="$(normalize_url "$canonical")"

  if [[ "$norm_expected" == "$norm_canonical" ]]; then
    echo "[OK]   Canonical matches"
  else
    echo "[FAIL] Canonical mismatch: expected $norm_expected, got $norm_canonical"
    return 1
  fi
}

echo "Running SEO smoke checks on $BASE_URL"
echo "Report file: $REPORT_FILE"

failures=0

for endpoint in /robots.txt /sitemap.xml; do
  if ! check_http_200 "${BASE_URL}${endpoint}"; then
    failures=$((failures + 1))
  fi
done

if [[ ! -f "$URL_LIST_FILE" ]]; then
  echo "[FAIL] URL list file not found: $URL_LIST_FILE"
  exit 1
fi

while IFS= read -r url; do
  [[ -z "$url" ]] && continue

  if ! check_http_200 "$url"; then
    failures=$((failures + 1))
    continue
  fi

  if ! check_contains "<title" "Title tag present"; then
    failures=$((failures + 1))
  fi

  if ! check_canonical "$url"; then
    failures=$((failures + 1))
  fi

  if ! check_contains "application/ld+json" "Structured data present"; then
    failures=$((failures + 1))
  fi

done < "$URL_LIST_FILE"

if [[ "$failures" -gt 0 ]]; then
  echo "SEO smoke check finished with $failures failure(s)."
  exit 1
fi

echo "SEO smoke check passed with zero failures."
