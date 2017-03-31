import { ADD_TRANSACTION } from '../constants/actionTypes';

export function addTransaction(transaction) {
  return {
    type: ADD_TRANSACTION,
    payload: {
      transaction
    }
  };
}
