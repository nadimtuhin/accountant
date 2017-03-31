import { combineReducers } from 'redux';
import transactionsReducer from './transactionsReducer';
import walletReducer from './walletReducer';
import categoryReducer from './categoryReducer';
import monthsReducer from './monthsReducer';
import settingsReducer from './settingsReducer';
import budgetReducer from './budgetReducer';
import savingsReducer from './savingsReducer';
import eventReducer from './eventReducer';

export default combineReducers({
  wallet: walletReducer,
  category: categoryReducer,
  months: monthsReducer,
  transactions: transactionsReducer,
  settings: settingsReducer,
  budget: budgetReducer,
  savings: savingsReducer,
  event: eventReducer,
});
