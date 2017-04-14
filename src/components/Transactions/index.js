import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Transaction from './Transaction';
import {
  categoriesSelector, eventsSelector, transactionsSelector,
  walletsSelector
} from '../../selectors/index';
import AddTransaction from './AddTransaction';
import {
  addTransaction,
  removeTransaction,
  updateTransaction
} from '../../actions/transactionActionCreators';

class Transactions extends Component {
  static propTypes = {
    categories: PropTypes.object.isRequired,
    wallets: PropTypes.array.isRequired,
    events: PropTypes.array.isRequired,
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
    const { categories, wallets, events } = this.props;

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
          <AddTransaction
            addTransaction={addTransaction}
            categories={categories}
            wallets={wallets}
            events={events}
          />
        </div>
      </div>
    );
  }
}

export default connect((state, props) => ({
  ...transactionsSelector(state, props), //month, transactions
  categories: categoriesSelector(state),
  wallets: walletsSelector(state),
  events: eventsSelector(state),
}), {
  updateTransaction,
  removeTransaction,
  addTransaction
})(Transactions);
