import http from './../http';

export default {
    resource : 'customers',

    index () {
        return http.get(this.resource, {}, (success) => {

        }, (error) => {

        });
    },

    store (customer) {
        return http.post(this.resource, customer, (success) => {

        }, (error) => {

        });
    },

    show (id) {
        return http.get(this.resource + '/' + id, {}, (success) => {

        }, (error) => {

        })
    },

    update (id, customer) {
        return http.put(this.resource + '/' + id, customer, (success) => {

        }, (error) => {

        });
    },

    destroy(id) {
        return http.delete(this.resource + '/' + id, {}, (success) => {

        }, (error) => {

        });
    }
}