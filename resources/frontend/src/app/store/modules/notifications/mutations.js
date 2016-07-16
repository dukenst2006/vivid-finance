import uuid from 'uuid';
import {
  CREATE_NOTIFICATION,
  DELETE_NOTIFICATION,
} from './mutation-types';

export const mutations = {
  [CREATE_NOTIFICATION](state, notification) {
    notification.id = uuid.v4();
    state.all.push(notification);
  },
  [DELETE_NOTIFICATION](state, id) {
    state.all = state.all.filter(
      notification => notification.id !== id
        ? notification
        : undefined
    );
  },
};
