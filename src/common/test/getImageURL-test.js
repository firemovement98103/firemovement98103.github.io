const getImageURL = require('../getImageURL').default;

describe('getImageURL', () => {
  describe('not production', () => {
    beforeAll(() => {
      process.env.NODE_ENV = 'development';
    });
    it('should return the base URL passed in if it is not production', () => {
      expect(getImageURL('base')).toEqual('base');
    });
  });
  describe('production', () => {
    beforeAll(() => {
      process.env.NODE_ENV = 'production';
    });
    it('should have the base string in the URL if production', () => {
      expect(getImageURL('base').endsWith('base')).toEqual(true);
    });
    it('should proceed the base string with dist', () => {
      expect(getImageURL('base').startsWith('dist/')).toEqual(true);
    });
  });
});
