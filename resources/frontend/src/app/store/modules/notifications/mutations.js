import {
  CREATE_NOTIFICATION,
  DELETE_NOTIFICATION,
} from './mutation-types';

export const mutations = {
  [CREATE_NOTIFICATION](state, notification) {
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
