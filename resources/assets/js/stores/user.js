import http from './../services/http';
import stub from './../stubs/user';

export default {
    stub,

    all () {
        http.get('user', {}, () => {

        });
    },

    byId (user) {
        http.get('user/' + user.id, {}, () => {

        });
    },

    store (user) {
        http.post('user', user, response => {

        });
    },

    update (user) {
        http.put('user/' + user.id, user, () => {

        });
    },

    delete (user) {
        http.delete('user/' + user.id, {}, () => {

        });
    }
};
