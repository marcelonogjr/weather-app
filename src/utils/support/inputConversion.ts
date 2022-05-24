
type ZoomQueryType  = "small" | "medium" | "large";

export const zoomConversion = (zoomQuery: ZoomQueryType) => {
  const zoomDesignation = [
    'small',
    'medium',
    'large'
  ]

  const zoomNumber = [
    11,
    8,
    5
  ]

  return zoomNumber[zoomDesignation.indexOf(zoomQuery)];
};