import * as types from '../constants/action_types';

export function updateModals(refs) {
  return {
    type: types.UPDATE_MODALS,
    refs: refs
  };
}
