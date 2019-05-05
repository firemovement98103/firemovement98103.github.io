const {
  accountTypeValueToKey, assetTypeValueToKey, taxTreatmentValueToKey, debtTypeValueToKey,
} = require('../accountInfo');

describe('accountTypeValueToKey', () => {
  it('should return BROKERAGE for a brokerage account', () => {
    expect(accountTypeValueToKey('Brokerage')).toEqual('BROKERAGE');
  });
});

describe('assetTypeValueToKey', () => {
  it('should return CAR for a car selection', () => {
    expect(assetTypeValueToKey('Car')).toEqual('CAR');
  });
});

describe('taxTreatmentValueToKey', () => {
  it('should return ROTH for Roth', () => {
    expect(taxTreatmentValueToKey('Roth')).toEqual('ROTH');
  });
});

describe('debtTypeValueToKey', () => {
  it('should return MORTGAGE for Mortgage', () => {
    expect(debtTypeValueToKey('Mortgage')).toEqual('MORTGAGE');
  });
});
