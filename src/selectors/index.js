import { EXPENSE, INCOME, LDRD } from '../constants/terms';

export const defaultWalletSelector = (state) => state.wallet.items[state.wallet.order[0]];
export const walletsSelector = (state) => state.wallet.order.map(wallet => state.wallet.items[wallet]);
export const walletSelector = (state, { walletId } ) => state.wallet.items[walletId];

export const categorySelector = (state, { categoryId }) => state.category.items[categoryId];

export const categoriesSelector = (state) => ({
  [EXPENSE]: state.category[EXPENSE].map(categoryId => categorySelector(state, { categoryId })),
  [INCOME]: state.category[INCOME].map(categoryId => categorySelector(state, { categoryId })),
  [LDRD]: state.category[LDRD].map(categoryId => categorySelector(state, { categoryId })),
});

export const transactionsSelector = (state, props) => {
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
