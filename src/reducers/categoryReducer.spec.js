import categoryReducer from './categoryReducer';
import state from '../store/state.stub';
import { ADD_CATEGORY } from '../constants/actionTypes';

test('categoryReducer', () => {
  const category = {
    id: 'test'
  };

  const result = categoryReducer(state.category, {
    type: ADD_CATEGORY,
    payload: { category }
  });

  expect(result.items['test']).toEqual(category);
});
