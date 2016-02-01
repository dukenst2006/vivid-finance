import http from './../services/http';
import stub from './../stubs/invoice';

export default {
    stub,

    all () {
        http.get('invoice', {}, () => {

        });
    },

    byId (invoice) {
        http.get('invoice/' + invoice.id, {}, () => {

        });
    },

    store (invoice) {
        http.post('invoice', invoice, response => {

        });
    },

    update (invoice) {
        http.put('invoice/' + invoice.id, invoice, () => {

        });
    },

    delete (invoice) {
        http.delete('invoice/' + invoice.id, {}, () => {

        });
    }
};
