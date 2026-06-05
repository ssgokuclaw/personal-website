import { geoGraticule10, geoNaturalEarth1, geoOrthographic, geoPath } from 'd3-geo';
import { feature } from 'topojson-client';
import world from 'world-atlas/countries-110m.json';
import { taughtCountryDetails } from './taughtCountries.js';

const countries = feature(world, world.objects.countries).features;
const highlightedIds = new Set(taughtCountryDetails.map((country) => country.numericId));
const taughtById = new Map(taughtCountryDetails.map((country) => [country.numericId, country]));

function pathsFor(projection) {
  const path = geoPath(projection);

  return countries
    .map((country) => ({
      id: country.id,
      name: taughtById.get(country.id)?.name ?? country.properties.name,
      d: path(country) ?? '',
      centroid: path.centroid(country),
      highlighted: highlightedIds.has(country.id),
    }));
}

export function getFlatWorldMap() {
  const width = 960;
  const height = 520;
  const projection = geoNaturalEarth1()
    .fitExtent([[24, 24], [width - 24, height - 24]], { type: 'Sphere' });

  const path = geoPath(projection);

  return {
    width,
    height,
    graticule: path(geoGraticule10()),
    sphere: path({ type: 'Sphere' }),
    countries: pathsFor(projection),
  };
}

export function getTeachingGlobe() {
  const size = 640;
  const projection = geoOrthographic()
    .rotate([35, -24])
    .fitExtent([[18, 18], [size - 18, size - 18]], { type: 'Sphere' })
    .clipAngle(90);

  const path = geoPath(projection);

  return {
    width: size,
    height: size,
    graticule: path(geoGraticule10()),
    sphere: path({ type: 'Sphere' }),
    countries: pathsFor(projection),
  };
}
