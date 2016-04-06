import * as types from './../constants/action_types';

const initialState = {
  name: '',
  email: '',
  message: '',
  success: false,
  failure: false,
  nameInvalid: false,
  emailInvalid: false,
  messageInvalid: false
};

export default function(state = initialState, action) {

  switch(action.type) {

    case 'EMAIL_SUCCESS':
      return {
        ...state,
        name: "",
        email: "",
        message: "",
        success: true,
        failure: false
      };

    case 'EMAIL_FAILURE':
      return {
        ...state,
        failure: true
      };

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
