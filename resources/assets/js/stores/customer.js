import http from './../services/http';
import stub from './../stubs/customer';

export default {
    stub,

    all () {
        http.get('customer', {}, response => {

        });
    },

    byId (customer) {
        http.get('customer/' + customer.id, {}, response => {

        });
    },

    store (customer) {
        http.post('customer', customer, response => {

        });
    },

    update (customer) {
        http.put('customer/' + customer.id, customer, response => {

        });
    },

    delete (customer) {
        http.delete('customer/' + customer.id, {}, response => {

        });
    }
};
