import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

class Transactions extends Component {
  static propTypes = {
    month: PropTypes.object.isRequired,
    transactions: PropTypes.array.isRequired
  };

  renderTransaction = (transaction) => {
    return (
      <tr key={transaction.id}>
        <td>{transaction.category.name}</td>
        <td>{transaction.amount}</td>
      </tr>
    )
  };

  render() {
    const { transactions } = this.props;

    return (
      <div>
        <table className="table table-bordered">
          <tbody>
            { transactions.map(this.renderTransaction) }
          </tbody>
        </table>
      </div>
    );
  }
}

const categorySelector = (state, { categoryId }) => state.categories.items[categoryId];

const transactionsSelector = state => {
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

export default connect(transactionsSelector)(Transactions);
