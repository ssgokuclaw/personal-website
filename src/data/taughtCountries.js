// Add or remove country entries to mark where you've taught a student.
// iso uses ISO Alpha-3 codes: https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3
export const taughtCountryDetails = [
  {
    iso: 'USA',
    numericId: '840',
    name: 'United States',
    region: 'North America',
    coordinateLabel: '39.8 N, 98.6 W',
    timezone: 'Americas',
    globe: { x: 31, y: 43 },
    map: { x: 22, y: 39 },
    mapLabel: 'right',
  },
  {
    iso: 'BIH',
    numericId: '070',
    name: 'Bosnia and Herzegovina',
    region: 'Europe',
    coordinateLabel: '44.2 N, 17.7 E',
    timezone: 'Central Europe',
    globe: { x: 58, y: 38 },
    map: { x: 55, y: 36 },
    mapLabel: 'above',
  },
  {
    iso: 'ALB',
    numericId: '008',
    name: 'Albania',
    region: 'Europe',
    coordinateLabel: '41.2 N, 20.2 E',
    timezone: 'Central Europe',
    globe: { x: 60, y: 43 },
    map: { x: 56, y: 39 },
    mapLabel: 'below',
  },
];

export const taughtCountries = taughtCountryDetails.map((country) => country.iso);
