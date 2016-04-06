import * as types from '../constants/action_types';

// export function sendEmail(formData) {
//   return function(dispatch){
//     dispatch(successEmail())

//     let request = new Request('contact/', {
//       method: 'POST',
//       headers: new Headers({
//         'Accept': 'application/json',
//         'Content-Type': 'application/json'
//       }),
//       credentials: 'same-origin',
//       body: JSON.stringify({
//         name: formData.name,
//         email: formData.email,
//         message: formData.message
//       })
//     });

//     return fetch()
//   }
// }

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
