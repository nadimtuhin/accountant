import { ADD_TRANSACTION, REMOVE_TRANSACTION } from '../constants/actionTypes';
import omit from 'lodash/omit';

export default function transactionsReducer(state={}, { type, payload }) {
  switch (type) {
    case ADD_TRANSACTION:
      return {
        ...state,
        [payload.transaction.id]: payload.transaction
      };

    case REMOVE_TRANSACTION:
      return omit(state, payload.transaction.id);

    default:
      return state;
  }
};
