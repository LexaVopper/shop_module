export function sliceUser(cPage) {
  let slicer = [0, 4];

  if (cPage > 1) {
    slicer[0] = slicer[0] + 4 * cPage - 4;
    slicer[1] = slicer[0] + 4;
  }
  return { start: slicer[0], end: slicer[1] };
}
