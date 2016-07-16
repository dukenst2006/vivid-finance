import * as types from './mutation-types';

export const createNotification = ({ dispatch }, notification) => {
  dispatch(types.CREATE_NOTIFICATION, notification);
};

export const deleteNotification = ({ dispatch }, id) => {
  dispatch(types.DELETE_NOTIFICATION, id);
};
