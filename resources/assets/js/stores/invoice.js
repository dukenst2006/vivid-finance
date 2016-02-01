import http from './../services/http';
import stub from './../stubs/invoice';

export default {
    stub,

    all () {
        http.get('invoice', {}, response => {

        });
    },

    byId (invoice) {
        http.get('invoice/' + invoice.id, {}, response => {

        });
    },

    store (invoice) {
        http.post('invoice', invoice, response => {

        });
    },

    update (invoice) {
        http.put('invoice/' + invoice.id, invoice, response => {

        });
    },

    delete (invoice) {
        http.delete('invoice/' + invoice.id, {}, response => {

        });
    }
};
