import isArray from 'lodash/isArray';
import state from '../store/state.stub';
import { categorySelector, categoriesSelector, transactionsSelector } from './index';
import { EXPENSE, INCOME, LDRD, LOAN } from '../constants/terms';

test('test category selector', () => {
  const result = categorySelector(state, { categoryId: LOAN });
  const expectedResult = state.categories.items[LOAN];

  expect(result).toEqual(expectedResult);
});

test('test categoriesSelector', () => {
  const result = categoriesSelector(state).categories;
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
