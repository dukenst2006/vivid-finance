import http from './../services/http';
import stub from './../stubs/company';

export default {
    stub,

    all () {
        http.get('company', {}, () => {

        });
    },

    byId (company) {
        http.get('company/' + company.id, {}, () => {

        });
    },

    store (company) {
        http.post('company', company, response => {

        });
    },

    update (company) {
        http.put('company/' + company.id, company, () => {

        });
    },

    delete (company) {
        http.delete('company/' + company.id, {}, () => {

        });
    }
};
