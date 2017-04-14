import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Transactions from './Transactions';
import { monthsSelector } from '../selectors/index';
import { changeMonth } from '../actions/settingsActionCreators';


class App extends Component {
  static propTypes = {
    months: PropTypes.array.isRequired,
    month: PropTypes.string.isRequired,
    changeMonth: PropTypes.func.isRequired,
  };

  handleMonthChange = (event) => this.props.changeMonth(event.target.value);

  render() {
    return (
      <div className="App">
        <select onChange={this.handleMonthChange} value={this.props.month}>
          { this.props.months.map(month => <option value={month.id} key={month.id}>{month.id}</option>)}
        </select>
        <Transactions month={this.props.month} />
      </div>
    );
  }
}

function monthViewSelector(state) {
  return state.settings.monthView;
}

export default connect(state => ({
  months: monthsSelector(state),
  month: monthViewSelector(state),
}), {
  changeMonth
})(App);
