import formVisibleReducer from '../../reducers/form-visible-reducer';
import * as c from '../../actions/ActionTypes';

describe("formVisibleReducer", () => {

  test('Should return default state if no action typ3e is recogized', () => {
    expect(formVisibleReducer(false, { type: null })).toEqual(false);
  });

  test('shhoultoggle form visibility state to true', () => {
    expect(formVisibleReducer(false, { type: c.TOGGLE_FORM })).toEqual(true);
  });
});