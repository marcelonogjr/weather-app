
type ZoomQueryType  = "small" | "medium" | "large";

export const zoomConversion = (zoomQuery: ZoomQueryType) => {
  const zoomDesignation = [
    'small',
    'medium',
    'large'
  ]

  const zoomNumber = [
    12,
    8,
    4
  ]

  return zoomNumber[zoomDesignation.indexOf(zoomQuery)];
};