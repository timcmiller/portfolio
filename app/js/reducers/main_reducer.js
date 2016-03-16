import * as types from './../constants/action_types';

const initialState = {
  heading: 'Hello World'
};

export default function(state = initialState, action) {

  switch(action.type) {

    default:
      return state;
  }
}
