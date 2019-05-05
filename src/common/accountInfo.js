export const ACCOUNT_TYPES = {
  '401K': '401k',
  '457B': '457b',
  '403b': '403b',
  IRA: 'IRA',
  BROKERAGE: 'Brokerage',
  SIMPLE_IRA: 'IRA (Simple)',
  OTHER: 'Other',
  CHECKING: 'Checking',
  SAVINGS: 'Savings',
  BONDS: 'Bond Holdings',
  CDS: 'CDs',
  MONEY_MARKET: 'Money Market',
  HSA: 'HSA',
  SEP_IRA: 'SEP IRA',
  529: '529',
};

export const DEBT_ACCOUNT_TYPES = {
  STUDENT_LOANS: 'Student Loans',
  CREDIT_CARDS: 'Credit Cards',
  PERSONAL_LOAN: 'Personal Loan',
  CAR_LOAN: 'Car Loan',
  MORTGAGE: 'Mortgage',
  ADDITIONAL_MORTGAGE: 'Additional Mortgage',
  HELOC: 'HELOC',
  MEDICAL_DEBT: 'Medical',
  '401K_LOAN': '401k Loan',
  OTHER: 'Other debt',
};

export const ASSET_TYPES = {
  HOME_EQUITY: 'Home Equity',
  RENTAL_EQUITY: 'Rental Equity',
  CAR: 'Car',
  OTHER: 'Other asset',
};

export const TAX_TREATMENTS = {
  ROTH: 'Roth',
  TRADITIONAL: 'Traditional',
};

const valueToKey = (value, obj) => Object.entries(obj)
  .find(([, entryValue]) => value === entryValue)[0];
export const accountTypeValueToKey = value => valueToKey(value, ACCOUNT_TYPES);
export const assetTypeValueToKey = value => valueToKey(value, ASSET_TYPES);
export const debtTypeValueToKey = value => valueToKey(value, DEBT_ACCOUNT_TYPES);
export const taxTreatmentValueToKey = value => valueToKey(value, TAX_TREATMENTS);
