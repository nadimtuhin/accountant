import React, { Component } from 'react';
import Transactions from './Transactions';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Transactions month={'year/month'} />
      </div>
    );
  }
}

export default App;
