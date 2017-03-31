import state from '../store/initialState';
import transactionsReducer from './transactionsReducer';
import { addTransaction } from '../actions/transactionActionCreators';

test('transactionReducer', () => {
  const transaction = { id: 'test' };
  const transactions = transactionsReducer(state.transactions, addTransaction(transaction));

  expect(transactions['test']).toEqual(transaction);
});
