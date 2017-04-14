import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Transaction from './Transaction';
import { transactionsSelector } from '../../selectors/index';
import AddTransaction from './AddTransaction';
import {
  addTransaction,
  removeTransaction,
  updateTransaction
} from '../../actions/transactionActionCreators';

class Transactions extends Component {
  static propTypes = {
    month: PropTypes.object.isRequired,
    transactions: PropTypes.array.isRequired
  };

  renderTransaction = (transaction) => {
    const { removeTransaction, updateTransaction } = this.props;

    return (
      <Transaction
        key={transaction.id}
        transaction={transaction}
        removeTransaction={removeTransaction}
        updateTransaction={updateTransaction}
      />
    );
  };

  render() {
    const { month, transactions, addTransaction } = this.props;

    return (
      <div>
        <div className="col-md-6">
          <h3> Month: {month.month} </h3>
          <table className="table table-bordered">
            <tbody>
            { transactions.map(this.renderTransaction) }
            </tbody>
          </table>
        </div>
        <div className="col-md-6">
          <AddTransaction addTransaction={addTransaction} />
        </div>
      </div>
    );
  }
}

export default connect(transactionsSelector, {
  updateTransaction,
  removeTransaction,
  addTransaction
})(Transactions);
