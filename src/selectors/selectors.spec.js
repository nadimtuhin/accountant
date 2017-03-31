import isArray from 'lodash/isArray';
import state from '../store/state.stub';
import {
  categorySelector, categoriesSelector, transactionsSelector,
  walletSelector, defaultWalletSelector, walletsSelector
} from './index';
import { EXPENSE, INCOME, LDRD, LOAN } from '../constants/terms';

test('test categorySelector', () => {
  const result = categorySelector(state, { categoryId: LOAN });
  const expectedResult = state.categories.items[LOAN];

  expect(result).toEqual(expectedResult);
});

test('test categoriesSelector', () => {
  const result = categoriesSelector(state);
  const expectedResult = true;

  expect(isArray(result[EXPENSE])).toEqual(expectedResult);
  expect(isArray(result[INCOME])).toEqual(expectedResult);
  expect(isArray(result[LDRD])).toEqual(expectedResult);
});

test('test transactionsSelector', () => {
  const result = transactionsSelector(state, { month: 'year/month' });
  expect(result.month.id).toEqual('year/month');
  expect(isArray(result.transactions)).toEqual(true);
});

test('test walletSelector', () => {
  const result = walletSelector(state, { walletId: 'cash' });
  const expectedResult = state.wallets.items['cash'];

  expect(result).toEqual(expectedResult);
});

test('test defaultWalletSelector', () => {
  const result = defaultWalletSelector(state);
  const expectedResult = state.wallets.items[state.wallets.order[0]];

  expect(result).toEqual(expectedResult);
});

test('test walletsSelector', () => {
    const result = walletsSelector(state);
    const expectedResult = true;
    expect(isArray(result)).toEqual(expectedResult);
});
