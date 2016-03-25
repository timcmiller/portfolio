import * as types from './../constants/action_types';

const initialState = {
  heading: 'Hello World',
  refs: {}
};

export default function(state = initialState, action) {

  switch(action.type) {

    case 'UPDATE_MODALS':
      return {
        ...state,
        refs: action.refs
      };

    default:
      return state;
  }
}
