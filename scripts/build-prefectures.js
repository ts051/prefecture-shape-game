const fs = require("fs");
const path = require("path");

const input = path.join(__dirname, "..", "data", "japan.geojson");
const output = path.join(__dirname, "..", "data", "prefectures-lite.json");
const source = JSON.parse(fs.readFileSync(input, "utf8"));

function perpendicularDistance(point, start, end) {
  const dx = end[0] - start[0];
  const dy = end[1] - start[1];
  if (dx === 0 && dy === 0) return Math.hypot(point[0] - start[0], point[1] - start[1]);
  const t = ((point[0] - start[0]) * dx + (point[1] - start[1]) * dy) / (dx * dx + dy * dy);
  const px = start[0] + t * dx;
  const py = start[1] + t * dy;
  return Math.hypot(point[0] - px, point[1] - py);
}

function simplify(points, tolerance) {
  if (points.length <= 3) return points;
  let maxDistance = 0;
  let index = 0;
  const last = points.length - 1;
  for (let i = 1; i < last; i += 1) {
    const distance = perpendicularDistance(points[i], points[0], points[last]);
    if (distance > maxDistance) {
      index = i;
      maxDistance = distance;
    }
  }
  if (maxDistance > tolerance) {
    return simplify(points.slice(0, index + 1), tolerance).slice(0, -1)
      .concat(simplify(points.slice(index), tolerance));
  }
  return [points[0], points[last]];
}

function eachRing(geometry) {
  if (geometry.type === "Polygon") return geometry.coordinates;
  if (geometry.type === "MultiPolygon") return geometry.coordinates.flat();
  return [];
}

const records = source.features.map((feature) => {
  const rings = eachRing(feature.geometry);
  const all = rings.flat();
  const minX = Math.min(...all.map((p) => p[0]));
  const maxX = Math.max(...all.map((p) => p[0]));
  const minY = Math.min(...all.map((p) => p[1]));
  const maxY = Math.max(...all.map((p) => p[1]));
  const span = Math.max(maxX - minX, maxY - minY);
  const midLat = (minY + maxY) / 2;
  const projectedWidth = (maxX - minX) * Math.cos((midLat * Math.PI) / 180);
  const projectedHeight = maxY - minY;
  const tolerance = span * 0.0035;

  const normalized = rings
    .map((ring) => simplify(ring, tolerance))
    .filter((ring) => ring.length >= 3)
    .map((ring) => ring.map(([x, y]) => [
      Number(((x - minX) / (maxX - minX || 1)).toFixed(4)),
      Number((1 - (y - minY) / (maxY - minY || 1)).toFixed(4)),
    ]));

  return {
    id: feature.properties.id,
    name: feature.properties.nam_ja,
    roman: feature.properties.nam,
    aspect: Number((projectedWidth / (projectedHeight || 1)).toFixed(4)),
    rings: normalized,
  };
}).sort((a, b) => a.id - b.id);

fs.writeFileSync(output, JSON.stringify(records));
console.log(`Wrote ${records.length} prefectures to ${output}`);
