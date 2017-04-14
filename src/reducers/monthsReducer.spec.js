import moment from 'moment';
import state from '../store/state.stub';
import monthsReducer from './monthsReducer';
import { addTransaction, removeTransaction } from '../actions/transactionActionCreators';

test('monthsReducer', () => {
  const transaction = { id: 'test', date: moment('2017/04/01', 'YYYY/MM/DD') };
  const months = monthsReducer(state.months, addTransaction(transaction));

  expect(months['2017/04'].transactions.includes(transaction.id)).toEqual(true);
  expect(months['2017/04'].id).toEqual('2017/04');
});


test('remove transaction from transactions list', () => {
  const transaction = state.transactions['uuid-1'];
  const months = monthsReducer(state.months, removeTransaction(transaction));

  expect(months['2017/03'].transactions.includes('uuid-1')).toEqual(false);
});
