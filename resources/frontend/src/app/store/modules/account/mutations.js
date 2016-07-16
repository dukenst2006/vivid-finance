import {
  RECEIVE_ACCOUNT,
} from './mutation-types';

export const mutations = {
  [RECEIVE_ACCOUNT](state, account) {
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
};
