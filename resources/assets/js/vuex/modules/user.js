import {CHECK_AUTHENTICATION, LOGIN, LOGOUT} from "./../mutation-types";

const state = {
    isAuthenticated: false,
    idToken: null
};

const mutations = {
    [CHECK_AUTHENTICATION] (state) {
        state.isAuthenticated = !!localStorage.getItem('id_token');
    },

    [LOGIN] (state) {
        state.isAuthenticated = true;
    },

    [LOGOUT] (state) {
        state.isAuthenticated = false;
    }
};

export default {
    state,
    mutations
};