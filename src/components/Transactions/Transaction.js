import React, { Component, PropTypes } from 'react';

class Transaction extends Component {
  static propTypes = {
    transaction: PropTypes.object.isRequired,
    updateTransaction: PropTypes.func.isRequired,
    removeTransaction: PropTypes.func.isRequired,
  };

  handleUpdate = () => this.props.updateTransaction(this.props.transaction.id);
  handleRemove = () => this.props.removeTransaction(this.props.transaction.id);

  render() {
    const { transaction } = this.props;

    return (
      <tr key={transaction.id}>
        <td>{transaction.date.toString()}</td>
        <td>{transaction.category.name}</td>
        <td>{transaction.amount}</td>
        <td>
          <button onClick={this.handleUpdate}>edit</button>
          <button onClick={this.handleRemove}>delete</button>
        </td>
      </tr>
    );
  }
}

export default Transaction;
