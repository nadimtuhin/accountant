import u from 'immutability-helper';
import moment from 'moment';
import { ADD_TRANSACTION } from '../constants/actionTypes';

function getMonthName(date) {
  return moment(date).format('YYYY/MM');
}

export default function monthsReducer(state={}, { type, payload }) {
  switch (type) {
    case ADD_TRANSACTION: {
      const month = getMonthName(payload.transaction.date);

      if(!state[month]) {
        return {
          ...state,
          [month]: {
            transactions: [payload.transaction.id]
          }
        };
      }

      return u(state, {
        [month]: {
          transactions: {
            $push: [payload.transaction.id]
          }
        }
      });
    }
    default:
      return state;
  }
};
