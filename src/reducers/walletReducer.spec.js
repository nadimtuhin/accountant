import walletReducer from './walletReducer';
import state from '../store/state.stub';
import { ADD_WALLET } from '../constants/actionTypes';

test('walletReducer', () => {
  const wallet = {
    id: 'test'
  };

  const result = walletReducer(state.wallet, {
    type: ADD_WALLET,
    payload: { wallet }
  });

  expect(result.items['test']).toEqual(wallet);
});
