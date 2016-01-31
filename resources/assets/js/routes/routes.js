import UserIndex from './../components/views/user/Index.vue';
import UserAdd from './../components/views/user/Add.vue';
import UserShow from './../components/views/user/Show.vue';
import UserEdit from './../components/views/user/Edit.vue';
import CompanyIndex from './../components/views/company/Index.vue';
import CompanyAdd from './../components/views/company/Add.vue';
import CompanyShow from './../components/views/company/Show.vue';
import CompanyEdit from './../components/views/company/Edit.vue';
import InvoiceIndex from './../components/views/invoice/Index.vue';
import InvoiceAdd from './../components/views/invoice/Add.vue';
import InvoiceShow from './../components/views/invoice/Show.vue';
import InvoiceEdit from './../components/views/invoice/Edit.vue';

export default {
    getRoutes () {
        return {
            // User Resource
            '/user': {
                name: 'user.index',
                component: UserIndex
            },
            '/user/add': {
                name: 'user.add',
                component: UserAdd
            },
            '/user/:user': {
                name: 'user.show',
                component: UserShow
            },
            '/user/:user/edit': {
                name: 'user.edit',
                component: UserEdit
            },

            // Company Resource
            '/company': {
                name: 'company.index',
                component: CompanyIndex
            },
            '/company/add': {
                name: 'company.add',
                component: CompanyAdd
            },
            '/company/:company': {
                name: 'company.show',
                component: CompanyShow
            },
            '/company/:company/edit': {
                name: 'company.edit',
                component: CompanyEdit
            },

            // Invoice Resource
            '/invoice': {
                name: 'invoice.index',
                component: InvoiceIndex
            },
            '/invoice/add': {
                name: 'invoice.add',
                component: InvoiceAdd
            },
            '/invoice/:invoice': {
                name: 'invoice.show',
                component: InvoiceShow
            },
            '/invoice/:invoice/edit': {
                name: 'invoice.edit',
                component: InvoiceEdit
            }
        }
    },

    getRedirects () {
        return {}
    }
};
