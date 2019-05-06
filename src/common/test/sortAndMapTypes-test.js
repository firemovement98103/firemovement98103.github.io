const sortAndMapTypes = require('../sortAndMapTypes').default;

const TEST_OBJ = {
  key: 'value',
  key2: 'alphabetically first',
};
describe('sortAndMapTypes', () => {
  it('should sort the options alphabetically by the values of the object', () => {
    expect(sortAndMapTypes(TEST_OBJ)
      .map(({ label }) => label)).toEqual([TEST_OBJ.key2, TEST_OBJ.key]);
  });
  it('should produce an array of label/value objects for use by select', () => {
    expect(sortAndMapTypes(TEST_OBJ)[0]).toHaveProperty('label');
    expect(sortAndMapTypes(TEST_OBJ)[0]).toHaveProperty('value');
  });
});
