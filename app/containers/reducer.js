import { fromJS } from 'immutable';

export const initialState = fromJS({
  display: '',
});

function displayParagraphReducer(state = initialState, action) {
  switch (action.type) {
    case DISPLAY_PARAGRAPH:
      return state.set('display', action.display);
    default:
      return state;
  }
}

export default displayParagraphReducer;
