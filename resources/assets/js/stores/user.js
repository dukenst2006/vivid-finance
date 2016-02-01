import http from './../services/http';
import stub from './../stubs/user';

export default {
    stub,

    all () {
        http.get('user', {}, response => {

        });
    },

    byId (user) {
        http.get('user/' + user.id, {}, response => {

        });
    },

    store (user) {
        http.post('user', user, response => {

        });
    },

    update (user) {
        http.put('user/' + user.id, user, response => {

        });
    },

    delete (user) {
        http.delete('user/' + user.id, {}, response => {

        });
    }
};
