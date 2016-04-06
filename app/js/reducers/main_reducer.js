import * as types from './../constants/action_types';

const initialState = {
  name: '',
  email: '',
  message: '',
  sucess: false,
  incorrect: false
};

export default function(state = initialState, action) {

  switch(action.type) {

    case 'NAME_CHANGE':
      return {
        ...state,
        name: action.name
      };

    case 'EMAIL_CHANGE':
      return {
        ...state,
        email: action.email
      };

    case 'MESSAGE_CHANGE':
      return {
        ...state,
        message: action.message
      };

    default:
      return state;
  }
}
