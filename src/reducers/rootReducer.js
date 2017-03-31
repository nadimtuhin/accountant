import { combineReducers } from 'redux';
import transactionsReducer from './transactionsReducer';
import walletReducer from './walletReducer';
import categoryReducer from './categoryReducer';
import monthsReducer from './monthsReducer';

export default combineReducers({
  wallet: walletReducer,
  category: categoryReducer,
  months: monthsReducer,
  transactions: transactionsReducer,
});
