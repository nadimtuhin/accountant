import toArray from 'lodash/toArray';
import { EXPENSE, INCOME, LDRD } from '../constants/terms';

export const defaultWalletSelector = (state) => state.wallet.items[state.wallet.order[0]];
export const walletsSelector = (state) => state.wallet.order.map(walletId => state.wallet.items[walletId]);
export const walletSelector = (state, { walletId } ) => state.wallet.items[walletId];


export const eventsSelector = (state) => state.event.order.map(eventId => state.event.items[eventId]);


export const categorySelector = (state, { categoryId }) => state.category.items[categoryId];

export const categoriesSelector = (state) => ({
  [EXPENSE]: state.category[EXPENSE].map(categoryId => categorySelector(state, { categoryId })),
  [INCOME]: state.category[INCOME].map(categoryId => categorySelector(state, { categoryId })),
  [LDRD]: state.category[LDRD].map(categoryId => categorySelector(state, { categoryId })),
});


export const monthsSelector = (state) => toArray(state.months);

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
  };
};
