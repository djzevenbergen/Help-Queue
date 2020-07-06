import formVisibleReducer from '../../reducers/form-visible-reducer';

describe("formVisibleReducer", () => {

  test('Should return default state if no action typ3e is recogized', () => {
    expect(formVisibleReducer(false, { type: null })).toEqual(false);
  });

  test('shhoultoggle form visibility state to true', () => {
    expect(formVisibleReducer(false, { type: 'TOGGLE_FORM' })).toEqual(true);
  });
});