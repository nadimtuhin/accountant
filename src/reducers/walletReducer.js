import u from 'immutability-helper';
import { ADD_WALLET } from '../constants/actionTypes';

export default function walletReducer(state, { type, payload }) {
  switch (type) {
    case ADD_WALLET:
      return u(state, {
        order: {
          $push: [payload.wallet.id]
        },
        items: {
          [payload.wallet.id]: {
            $set: payload.wallet
          }
        }
      });
    default:
      return state;
  }
};
