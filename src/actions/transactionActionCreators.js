import { ADD_TRANSACTION, REMOVE_TRANSACTION, UPDATE_TRANSACTION } from '../constants/actionTypes';

export function addTransaction(transaction) {
  return {
    type: ADD_TRANSACTION,
    payload: {
      transaction
    }
  };
}

export function updateTransaction(transactionId) {
  return {
    type: UPDATE_TRANSACTION,
    payload: {
      transactionId
    }
  };
}

export function removeTransaction(transactionId) {
  return {
    type: REMOVE_TRANSACTION,
    payload: {
      transactionId
    }
  };
}
