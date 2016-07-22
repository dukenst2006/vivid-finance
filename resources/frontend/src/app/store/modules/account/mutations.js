import {
  FETCH_ACCOUNT,
  CLEAR_ACCOUNT,
} from './mutation-types';

export const mutations = {
  [FETCH_ACCOUNT](state, account) {
    state.id = account.id;
    state.email = account.email;
    state.name = account.name;
    state.bio = account.bio;
    state.birthday = account.birthday;
    state.gender = account.gender;
    state.mobile = account.mobile;
    state.telephone = account.telephone;
    state.avatar = account.avatar;
  },

  [CLEAR_ACCOUNT](state) {
    state.avatar = null;
    state.bio = null;
    state.birthday = null;
    state.email = null;
    state.gender = null;
    state.id = null;
    state.mobile = null;
    state.name = null;
    state.telephone = null;
  },
};
