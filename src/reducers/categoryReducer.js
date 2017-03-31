import u from 'immutability-helper';
import { ADD_CATEGORY } from '../constants/actionTypes';

export default function categoryReducer(state={}, { type, payload }) {
  switch (type) {
    case ADD_CATEGORY:
      return u(state, {
        items: {
          [payload.category.id]: {
            $set: payload.category
          }
        }
      });
    default:
      return state;
  }
};
