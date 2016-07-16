import Vue from 'vue';
import * as types from './mutation-types';
import { receiveCustomers } from './../customers/actions';
import { receiveInvoices } from './../invoices/actions';
import { receiveAccount } from './../account/actions';
import { createNotification } from './../notifications/actions';

export const loginSuccessful = ({ dispatch }, token) => {
  dispatch(types.LOGIN_SUCCESSFUL, token);
  createNotification({ dispatch },
    {
      type: 'success',
      message: 'Login successful!',
    }
  );
  receiveCustomers({ dispatch });
  receiveInvoices({ dispatch });
  receiveAccount({ dispatch });
  window.router.go({
    name: 'dashboard.index',
  });
};

export const loginFailed = ({ dispatch }, data) => {
  createNotification({ dispatch },
    {
      type: 'danger',
      message: data.error.message,
    }
  );
};

export const login = ({ dispatch }, { email, password }) => {
  Vue.http.post('auth',
    {
      email,
      password,
    })
    .then(
      ({ data }) => {
        loginSuccessful({ dispatch }, data.token);
      },
      ({ data }) => {
        loginFailed({ dispatch }, data);
      }
    );
};


export const logout = ({ dispatch }) => {
  dispatch(types.LOGOUT);
  window.router.go({
    name: 'login.index',
  });
};

export const checkAuthentication = ({ dispatch }) => {
  dispatch(types.CHECK_AUTHENTICATION);
};
