import { CHANGE_MONTH } from '../constants/actionTypes';
export default function settingsReducer(state={}, { type, payload }) {
  switch (type) {
    case CHANGE_MONTH:
      return {
        ...state,
        monthView: payload.month
      };

    default:
      return state;
  }
};
