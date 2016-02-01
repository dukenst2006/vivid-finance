export default {
    getRoutes () {
        return {
            // User Resource
            '/user': {
                name: 'user.index',
                component (resolve) {
                    require(['./../components/views/user/Index.vue'], resolve)
                }
            },
            '/user/add': {
                name: 'user.add',
                component (resolve) {
                    require(['./../components/views/user/Add.vue'], resolve)
                }
            },
            '/user/:user': {
                name: 'user.show',
                component (resolve) {
                    require(['./../components/views/user/Show.vue'], resolve)
                }
            },
            '/user/:user/edit': {
                name: 'user.edit',
                component (resolve) {
                    require(['./../components/views/user/Edit.vue'], resolve)
                }
            },

            // Company Resource
            '/company': {
                name: 'company.index',
                component (resolve) {
                    require(['./../components/views/company/Index.vue'], resolve)
                }
            },
            '/company/add': {
                name: 'company.add',
                component (resolve) {
                    require(['./../components/views/company/Add.vue'], resolve)
                }
            },
            '/company/:company': {
                name: 'company.show',
                component (resolve) {
                    require(['./../components/views/company/Show.vue'], resolve)
                }
            },
            '/company/:company/edit': {
                name: 'company.edit',
                component (resolve) {
                    require(['./../components/views/company/Edit.vue'], resolve)
                }
            },

            // Invoice Resource
            '/invoice': {
                name: 'invoice.index',
                component (resolve) {
                    require(['./../components/views/invoice/Index.vue'], resolve)
                }
            },
            '/invoice/add': {
                name: 'invoice.add',
                component (resolve) {
                    require(['./../components/views/invoice/Add.vue'], resolve)
                }
            },
            '/invoice/:invoice': {
                name: 'invoice.show',
                component (resolve) {
                    require(['./../components/views/invoice/Show.vue'], resolve)
                }
            },
            '/invoice/:invoice/edit': {
                name: 'invoice.edit',
                component (resolve) {
                    require(['./../components/views/invoice/Edit.vue'], resolve)
                }
            }
        }
    },

    getRedirects () {
        return {}
    }
};
