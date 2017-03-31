import { EXPENSE, INCOME, LDRD } from '../constants/terms';

export const defaultWalletSelector = (state) => state.wallets.order[0];
export const categorySelector = (state, { categoryId }) => state.categories.items[categoryId];

export const categoriesSelector = (state) => ({
  [EXPENSE]: state.categories[EXPENSE].map(categoryId => categorySelector(state, { categoryId })),
  [INCOME]: state.categories[INCOME].map(categoryId => categorySelector(state, { categoryId })),
  [LDRD]: state.categories[LDRD].map(categoryId => categorySelector(state, { categoryId })),
});

export const transactionsSelector = (state, props ) => {
  const month = state.months[props.month];
  const transactions = month.transactions
    .map(transactionId => state.transactions[transactionId])
    .map(transaction => ({
      ...transaction,
      category: categorySelector(state, transaction)
    }))
  ;

  return {
    month,
    transactions
  }
};
