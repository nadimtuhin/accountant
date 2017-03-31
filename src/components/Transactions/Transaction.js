import React, { Component, PropTypes } from 'react';

class Transaction extends Component {
  static propTypes = {
    transaction: PropTypes.object.isRequired
  };

  render() {
    const { transaction } = this.props;

    return (
      <tr key={transaction.id}>
        <td>{transaction.date.toString()}</td>
        <td>{transaction.category.name}</td>
        <td>{transaction.amount}</td>
      </tr>
    );
  }
}

export default Transaction;
