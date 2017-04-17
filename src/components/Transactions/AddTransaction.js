import React, { Component, PropTypes } from 'react';
import uuid from 'uuid';
import moment from 'moment';
import { EXPENSE, INCOME, LDRD } from '../../constants/terms';
import Input from '../Editor/Input';
import Select from '../Editor/Select';

/**
 * TODO: write a spec for this
 * @param props
 */
export const getDefaultDataFromProps = (props)  => ({
    categoryId: props.categories[EXPENSE][0].id,
    date: moment().format('YYYY-MM-DD'),
    walletId: props.wallets[0].id,
    categoryType: EXPENSE,
    amount: 0,
    remarks: '',
    eventId: '',
});

/**
 * Transaction category types
 */
const categoryTypes = [
  { id: EXPENSE, name: EXPENSE },
  { id: LDRD, name: 'LOAN & DEBT' },
  { id: INCOME, name: INCOME }
];

class AddTransaction extends Component {
  static propTypes = {
    categories: PropTypes.object.isRequired,
    wallets: PropTypes.array.isRequired,
    events: PropTypes.array.isRequired,
    addTransaction: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.state = getDefaultDataFromProps(props);
  }

  setValueOf = (name) => {
    return (e) => this.setState({
      [name]: e.target.value
    });
  };

  handleAdd = () => {
    const { amount, date, remarks, categoryId, walletId, eventId } = this.state;

    const transaction = {
      id: uuid(),
      date: date || new Date(),
      eventId,
      walletId,
      categoryId,
      remarks,
      amount,
    };

    if (!amount) return;

    this.props.addTransaction(transaction);
    this.setState(getDefaultDataFromProps(this.props));
  };

  render() {
    const { categories, wallets, events } = this.props;
    const { amount, date, categoryType, eventId, walletId, categoryId } = this.state;

    return (
      <div className="AddTransaction">
        <h3>Add new transaction</h3>
        <div className="form">
          <Select
            onChange={this.setValueOf('eventId')}
            value={eventId}
            options={events}
          />

          <Select
            onChange={this.setValueOf('walletId')}
            value={walletId}
            options={wallets}
          />

          <Select
            onChange={this.setValueOf('categoryType')}
            value={categoryType}
            options={categoryTypes}
          />

          <Input type='number' onChange={ this.setValueOf('amount') } value={amount} />
          <Input type='date' onChange={ this.setValueOf('date') } value={date} />

          <div className="form-group">
            <textarea onChange={this.setValueOf('remarks')} className="form-control" />
          </div>

          <Select
            onChange={this.setValueOf('categoryId')}
            value={categoryId}
            options={categories[categoryType]}
          />
        </div>

        <button className="btn btn-block" onClick={this.handleAdd}>Add</button>
      </div>
    );
  }
}

export default AddTransaction;
