export const categorySelector = (state, { categoryId }) => state.categories.items[categoryId];

export const transactionsSelector = state => {
  const month = state.months.items['month/year'];
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
