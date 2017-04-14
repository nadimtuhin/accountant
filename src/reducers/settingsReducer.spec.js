import state from '../store/state.stub';
import settingsReducer from './settingsReducer';
import { changeMonth } from '../actions/settingsActionCreators';

test('settingsReducer', () => {
  const settings = settingsReducer(state.settings, changeMonth('2017/02'));
  expect(settings.monthView).toEqual('2017/02');
});
