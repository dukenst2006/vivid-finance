import Vue from 'vue';
import * as types from './mutation-types';
import { createNotification } from './../notifications/actions';

export const fetchAccount = ({ dispatch }) => {
  Vue.http.get('account')
    .then(
      ({ data }) => {
        dispatch(types.FETCH_ACCOUNT, data);
      },
      ({ data }) => {
        createNotification({ dispatch }, data.errors, 'danger');
      }
    );
};

export const updateAccount = ({ dispatch }) => {
  Vue.http.put('account')
    .then(
      () => {
        dispatch(types.UPDATE_ACCOUNT);
      },
      ({ data }) => {
        createNotification({ dispatch }, data.errors, 'danger');
      }
    );
};

export const clearAccount = ({ dispatch }) => {
  dispatch(types.CLEAR_ACCOUNT);
};
