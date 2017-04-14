import React, { Component, PropTypes } from 'react';
import { EXPENSE, INCOME, LDRD } from '../../constants/terms';
import uuid from 'uuid';

class AddTransaction extends Component {
  static propTypes = {
    categories: PropTypes.object.isRequired,
    wallets: PropTypes.array.isRequired,
    events: PropTypes.array.isRequired,
    addTransaction: PropTypes.func.isRequired
  };

  state = { type: EXPENSE };

  renderCategory = (category) => {
    return (
      <option value={category.id} key={category.id}>
        { category.name }
      </option>
    )
  };

  renderEvent = (event) => {
    return (
      <option value={event.id} key={event.id}>
        { event.name }
      </option>
    )
  };

  renderWallet = (wallet) => {
    return (
      <option value={wallet.id} key={wallet.id}>
        { wallet.name }
      </option>
    )
  };

  handleAdd = () => {
    const amount = this.amount.value;
    const remarks = this.remarks.value;
    const walletId = this.walletId.value;
    const categoryId = this.category.value;
    const eventId = this.eventId.value;
    const date = this.date.value || new Date();

    const transaction = {
      id: uuid(),
      date,
      eventId,
      walletId,
      categoryId,
      remarks,
      amount,
    };

    if(!amount) return;

    this.props.addTransaction(transaction);
  };

  handleTypeChange = (event) => this.setState({ type: event.target.value });

  render() {
    const { categories, wallets, events } = this.props;
    const { type } = this.state;

    return (
      <div className="AddTransaction">
        <h3>Add new transaction</h3>
        <div className="form">
          <div className="form-group">
            <select ref={n => this.walletId = n} className="form-control">
              { wallets.map(this.renderWallet) }
            </select>
          </div>

          <div className="form-group">
            <select ref={n => this.eventId = n} className="form-control">
              { events.map(this.renderEvent) }
            </select>
          </div>

          <div className="form-group">
            <select name="type" onChange={this.handleTypeChange} className="form-control">
              <option value={EXPENSE}>{EXPENSE}</option>
              <option value={LDRD}>LOAN & DEBT</option>
              <option value={INCOME}>{INCOME}</option>
            </select>
          </div>

          <div className="form-group">
            <input type="number" ref={n => this.amount = n} className="form-control" />
          </div>

          <div className="form-group">
            <input type="date" ref={n => this.date = n} className="form-control" />
          </div>

          <div className="form-group">
            <textarea ref={n => this.remarks = n} className="form-control" />
          </div>

          <div className="form-group">
            <select name="category" ref={n => this.category = n} className="form-control">
              { categories[type].map(this.renderCategory) }
            </select>
          </div>
        </div>

        <button className="btn btn-block" onClick={this.handleAdd}>Add</button>
      </div>
    );
  }
}

export default AddTransaction;
