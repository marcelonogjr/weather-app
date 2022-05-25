type ZoomQueryType = 'small' | 'medium' | 'large';

export const zoomConversion = (zoomQuery: ZoomQueryType) => {
  const zoomDesignation = ['small', 'medium', 'large'];

  const zoomNumber = [11, 8, 5];

  return zoomNumber[zoomDesignation.indexOf(zoomQuery)];
};

type mapLayerQueryType =
  | 'clouds'
  | 'precipitation'
  | 'pressure'
  | 'wind'
  | 'temperature';
type mapLayerType = [
  'clouds_new',
  'precipitation_new',
  'pressure_new',
  'wind_new',
  'temp_new'
];

export const weatherLayerConversion = (mapLayerQuery: mapLayerQueryType) => {
  const mapLayerDesignation = [
    'clouds',
    'precipitation',
    'pressure',
    'wind',
    'temperature',
  ];

  const mapLayer: mapLayerType = [
    'clouds_new',
    'precipitation_new',
    'pressure_new',
    'wind_new',
    'temp_new',
  ];

  return mapLayer[mapLayerDesignation.indexOf(mapLayerQuery)];
};
