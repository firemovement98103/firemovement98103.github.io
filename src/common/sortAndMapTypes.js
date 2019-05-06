export default types => Object.entries(types).sort(([, a], [, b]) => {
  if (a > b) {
    return 1;
  }
  return a < b ? -1 : 0;
})
  .map(([key, value]) => ({
    label: value,
    value: key,
  }));
