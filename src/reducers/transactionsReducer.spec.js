import state from '../store/state.stub';
import transactionsReducer from './transactionsReducer';
import { addTransaction, removeTransaction } from '../actions/transactionActionCreators';

test('transactionsReducer', () => {
  const transaction = { id: 'test' };
  const transactions = transactionsReducer(state.transactions, addTransaction(transaction));

  expect(transactions['test']).toEqual(transaction);
});

test('remove transaction from transactions list', () => {
    const transaction = state.transactions['uuid-1'];
    const transactions = transactionsReducer(state.transactions, removeTransaction(transaction));

    expect(transactions['uuid-1']).toEqual(undefined);
});
