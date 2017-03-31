import { ADD_TRANSACTION } from '../constants/actionTypes';

export default function transactionsReducer(state, { type, payload }) {
  switch (type) {
    case ADD_TRANSACTION:
      return {
        ...state,
        [payload.transaction.id]: payload.transaction
      };
    default:
      return state;
  }
};
