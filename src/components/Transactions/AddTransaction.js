import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { categoriesSelector } from '../../selectors/index';
import { DEBT, EXPENSE, INCOME, LDRD, LOAN } from '../../constants/terms';
import uuid from 'uuid';
import { bindActionCreators } from 'redux';
import { addTransaction } from '../../actions/transactionActionCreators';

class AddTransaction extends Component {
  static propTypes = {
    categories: PropTypes.object.isRequired,
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

  handleAdd = () => {
    const amount = this.refs.amount.value;
    const remarks = this.refs.remarks.value;
    const categoryId = this.refs.category.value;

    // 'uuid-1': {
    //   id: 'uuid-1',
    //     date: 'date',
    //     type: EXPENSE,
    //     categoryId: 'transportation',
    //     wallet: 'cash',
    //     amount: 200,
    //     remark: 'pathao ride to office',
    //     event: 'tour2017'
    // },

    const transaction = {
      id: uuid(),
      wallet: this.props.wallet,
      date: new Date(),
      event: null,
      remarks,
      amount,
      categoryId,
    };

    console.log(transaction);
    this.props.addTransaction(transaction);
  };

  handleTypeChange = (event) => {
    this.setState({ type: event.target.value });
  };

  render() {
    const { categories } = this.props;
    const { type } = this.state;

    return (
      <div className="AddTransaction">
        <h3>Add new transaction</h3>
        <div className="form">
          <div className="form-group">
            <select name="type" onChange={this.handleTypeChange} className="form-control">
              <option value={EXPENSE}>{EXPENSE}</option>
              <option value={LDRD}>LOAN & DEBT</option>
              <option value={INCOME}>{INCOME}</option>
            </select>
          </div>

          <div className="form-group">
            <input type="number" ref="amount" className="form-control" />
          </div>

          <div className="form-group">
            <textarea ref="remarks" className="form-control" />
          </div>

          <div className="form-group">
            <select name="category" ref="category" className="form-control">
              { categories[type].map(this.renderCategory) }
            </select>
          </div>
        </div>

        <button className="btn btn-block" onClick={this.handleAdd}>Add</button>
      </div>
    );
  }
}

export default connect(state => ({
  ...categoriesSelector(state),
  wallet: state.wallets.order[0],
}), bindActionCreators.bind(null, {
  addTransaction
}))(AddTransaction);
