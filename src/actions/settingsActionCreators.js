import { CHANGE_MONTH } from '../constants/actionTypes';

export function changeMonth(month) {
  return {
    type: CHANGE_MONTH,
    payload: {
      month
    }
  };
}
