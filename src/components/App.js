import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Transactions from './Transactions';
import { monthsSelector } from '../selectors/index';


class App extends Component {
  static propTypes = {
    months: PropTypes.array.isRequired
  };

  state = { month: 'year/month' };

  handleMonthChange = (event) => this.setState({ month: event.target.value });

  render() {
    return (
      <div className="App">
        <select onChange={this.handleMonthChange} value={this.state.month}>
          { this.props.months.map(month => <option value={month.id} key={month.id}>{month.id}</option>)}
        </select>
        <Transactions month={this.state.month} />
      </div>
    );
  }
}

export default connect(state => ({
  months: monthsSelector(state)
}))(App);
