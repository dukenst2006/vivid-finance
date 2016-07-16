import Vue from 'vue';
import * as types from './mutation-types';
import { fetchCustomers, clearCustomer } from './../customers/actions';
import { fetchInvoices, clearInvoice } from './../invoices/actions';
import { fetchAccount, clearAccount } from './../account/actions';
import { createNotification } from './../notifications/actions';

export const loginSuccessful = ({ dispatch }, token) => {
  dispatch(types.LOGIN_SUCCESSFUL, token);
  createNotification({ dispatch }, 'Login successful!', 'success');
  fetchCustomers({ dispatch });
  fetchInvoices({ dispatch });
  fetchAccount({ dispatch });
  window.router.go({
    name: 'dashboard.index',
  });
};

export const loginFailed = ({ dispatch }, data) => {
  createNotification({ dispatch }, data.error.message, 'danger');
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
  clearAccount({ dispatch });
  clearCustomer({ dispatch });
  clearInvoice({ dispatch });
  createNotification({ dispatch }, 'Logout successful!', 'success');
  window.router.go({
    name: 'login.index',
  });
};

export const checkAuthentication = ({ dispatch }) => {
  dispatch(types.CHECK_AUTHENTICATION);
};
