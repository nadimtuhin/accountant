import { takeEvery, put } from 'redux-saga/effects';
import { ADD_TRANSACTION } from '../constants/actionTypes';
import getMonthName from '../reducers/lib/getMonthName';
import { changeMonth } from '../actions/settingsActionCreators';

export function* changeMonthAsync({ payload }) {
  const { transaction } = payload;
  const month = getMonthName(transaction.date);
  yield put(changeMonth(month));
}

export function* watchTransactions() {
  yield takeEvery(ADD_TRANSACTION, changeMonthAsync);
}

export default function* appSaga() {
  yield [
    watchTransactions()
  ];
}
