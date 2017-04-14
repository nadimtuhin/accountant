import u from 'immutability-helper';
import remove from 'lodash/fp/remove';
import isEqual from 'lodash/fp/isEqual';
import { ADD_TRANSACTION, REMOVE_TRANSACTION } from '../constants/actionTypes';
import getMonthName from './lib/getMonthName';


export default function monthsReducer(state = {}, { type, payload }) {
  switch (type) {
    case ADD_TRANSACTION: {
      const { id, date } = payload.transaction;
      const month = getMonthName(date);

      // if there is no month already
      if (!state[month]) {
        return {
          ...state,
          [month]: {
            id: month,
            transactions: [id]
          }
        };
      }

      // add transaction to a existing month
      return u(state, {
        [month]: {
          transactions: {
            $push: [id]
          }
        }
      });
    }

    case REMOVE_TRANSACTION: {
      const { id, date } = payload.transaction;
      const month = getMonthName(date);

      return u(state, {
        [month]: {
          transactions: {
            $apply: remove(isEqual(id))
          }
        }
      });
    }

    default:
      return state;
  }
};
