import state from '../store/state.stub';
import transactionsReducer from './transactionsReducer';
import { addTransaction } from '../actions/transactionActionCreators';

test('transactionsReducer', () => {
  const transaction = { id: 'test' };
  const transactions = transactionsReducer(state.transactions, addTransaction(transaction));

  expect(transactions['test']).toEqual(transaction);
});
