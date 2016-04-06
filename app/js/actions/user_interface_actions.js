import * as types from '../constants/action_types';

export function validateForm(name, email, message) {

  return function(dispatch) {
    var nameInvalid = false;
    var emailInvalid = false;
    var messageInvalid = false;

    if(name.length < 1 || !name.match(/^[a-zA-Z ]*$/)) {
      nameInvalid = true;
      return dispatch(emailFailure(nameInvalid, emailInvalid, messageInvalid));
    }
    if(email.length < 5 || !email.match(/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i)) {
      emailInvalid = true;
      return dispatch(emailFailure(nameInvalid, emailInvalid, messageInvalid));
    }
    if(message.length < 1) {
      messageInvalid = true;
      return dispatch(emailFailure(nameInvalid, emailInvalid, messageInvalid));
    }

    dispatch(sendEmail(name, email, message));
  };
}

export function sendEmail(name, email, message) {

  let request = new Request('contact/', {
    method: 'POST',
    headers: new Headers({
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }),
    credentials: 'same-origin',
    body: JSON.stringify({
      name,
      email,
      message
    })
  });

  return function(dispatch){
    return fetch(request)
      .then(function(res) {
      if (!(res.status >= 200 && res.status < 300)) {
        throw error;
      }
    })
    .then(function() {
      dispatch(emailSuccess());
    })
    .catch(function(error) {
      console.log('catching error ' + error);
      dispatch(emailFailure());
    });
  }
}

export function emailSuccess() {
  return {
    type: types.EMAIL_SUCCESS
  };
}

export function emailFailure(nameInvalid, emailInvalid, messageInvalid) {
  return {
    type: types.EMAIL_FAILURE,
    nameInvalid,
    emailInvalid,
    messageInvalid
  };
}

export function changeName(name) {
  return {
    type: types.NAME_CHANGE,
    name
  };
}

export function changeEmail(email) {
  return {
    type: types.EMAIL_CHANGE,
    email
  };
}

export function changeMessage(message) {
  return {
    type: types.MESSAGE_CHANGE,
    message
  };
}
