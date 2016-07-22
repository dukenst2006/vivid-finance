import * as types from './mutation-types';
import uuid from 'uuid';

export const createNotification = ({ dispatch }, content, style) => {
  const notification = {
    id: uuid.v4(),
    content,
    style,
  };

  dispatch(types.CREATE_NOTIFICATION, notification);
};

export const deleteNotification = ({ dispatch }, id) => {
  dispatch(types.DELETE_NOTIFICATION, id);
};
