export const formatMGLT = (MGLT: string, distance: number | null) => {
  if (MGLT === "unknown") {
    return "-";
  } else {
    const trasnformInNumber = parseInt(MGLT);
    const distanceValue = !!distance ? distance : 0;
    const distancePeerMGLT = distanceValue / trasnformInNumber;
    return distancePeerMGLT.toFixed(1);
  }
};
