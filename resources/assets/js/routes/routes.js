export default {
    /**
     * Method used to get all the routes used in the application
     * @returns {object} The desired routes
     */
    getRoutes () {
        return {
            // Account Resource
            '/account' : {
                name: 'account.show',
                component (resolve) {
                    require(['./../views/account/Show.vue'], resolve)
                }
            },
            '/account/edit' : {
                name: 'account.edit',
                component (resolve) {
                    require(['./../views/account/Edit.vue'], resolve)
                }
            },

            // User Resource
            '/user': {
                name: 'user.index',
                component (resolve) {
                    require(['./../views/user/Index.vue'], resolve)
                }
            },
            '/user/add': {
                name: 'user.add',
                component (resolve) {
                    require(['./../views/user/Add.vue'], resolve)
                }
            },
            '/user/:user': {
                name: 'user.show',
                component (resolve) {
                    require(['./../views/user/Show.vue'], resolve)
                }
            },
            '/user/:user/edit': {
                name: 'user.edit',
                component (resolve) {
                    require(['./../views/user/Edit.vue'], resolve)
                }
            },

            // customer Resource
            '/customer': {
                name: 'customer.index',
                component (resolve) {
                    require(['./../views/customer/Index.vue'], resolve)
                }
            },
            '/customer/add': {
                name: 'customer.add',
                component (resolve) {
                    require(['./../views/customer/Add.vue'], resolve)
                }
            },
            '/customer/:customer': {
                name: 'customer.show',
                component (resolve) {
                    require(['./../views/customer/Show.vue'], resolve)
                }
            },
            '/customer/:customer/edit': {
                name: 'customer.edit',
                component (resolve) {
                    require(['./../views/customer/Edit.vue'], resolve)
                }
            },

            // Invoice Resource
            '/invoice': {
                name: 'invoice.index',
                component (resolve) {
                    require(['./../views/invoice/Index.vue'], resolve)
                }
            },
            '/invoice/add': {
                name: 'invoice.add',
                component (resolve) {
                    require(['./../views/invoice/Add.vue'], resolve)
                }
            },
            '/invoice/:invoice': {
                name: 'invoice.show',
                component (resolve) {
                    require(['./../views/invoice/Show.vue'], resolve)
                }
            },
            '/invoice/:invoice/edit': {
                name: 'invoice.edit',
                component (resolve) {
                    require(['./../views/invoice/Edit.vue'], resolve)
                }
            }
        }
    },

    /**
     * Method used to get all the redirects
     *
     * @returns {object} The redirects
     */
    getRedirects () {
        return {}
    }
};
