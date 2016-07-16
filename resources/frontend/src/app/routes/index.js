/**
 * The routes
 *
 * @type {object} The routes
 */
export const routes = {
  // Account Resource
  '/account': {
    name: 'account.show',
    component(resolve) {
      require(['../views/account/show/show.vue'], resolve);
    },
    auth: true,
  },
  '/account/edit': {
    name: 'account.edit',
    component(resolve) {
      require(['../views/account/edit/edit.vue'], resolve);
    },
    auth: true,
  },

  // customer Resource
  '/customer': {
    name: 'customer.index',
    component(resolve) {
      require(['../views/customer/index/index.vue'], resolve);
    },
    auth: true,
  },
  '/customer/create': {
    name: 'customer.create',
    component(resolve) {
      require(['../views/customer/create/create.vue'], resolve);
    },
    auth: true,
  },
  '/customer/:customer': {
    name: 'customer.show',
    component(resolve) {
      require(['../views/customer/show/show.vue'], resolve);
    },
    auth: true,
  },
  '/customer/:customer/edit': {
    name: 'customer.edit',
    component(resolve) {
      require(['../views/customer/edit/edit.vue'], resolve);
    },
    auth: true,
  },

  // Invoice Resource
  '/invoice': {
    name: 'invoice.index',
    component(resolve) {
      require(['../views/invoice/index/index.vue'], resolve);
    },
    auth: true,
  },
  '/invoice/create': {
    name: 'invoice.create',
    component(resolve) {
      require(['../views/invoice/create/create.vue'], resolve);
    },
    auth: true,
  },
  '/invoice/:invoice': {
    name: 'invoice.show',
    component(resolve) {
      require(['../views/invoice/show/show.vue'], resolve);
    },
    auth: true,
  },
  '/invoice/:invoice/edit': {
    name: 'invoice.edit',
    component(resolve) {
      require(['../views/invoice/edit/edit.vue'], resolve);
    },
    auth: true,
  },

  // Dashboard routes
  '/dashboard': {
    name: 'dashboard.index',
    component(resolve) {
      require(['../views/dashboard/index/index.vue'], resolve);
    },
    auth: true,
  },

  // Dashboard routes
  '/login': {
    name: 'login.index',
    component(resolve) {
      require(['../views/login/index/index.vue'], resolve);
    },
    guest: true,
  },

  // Not Found routes
  '/404': {
    name: 'not-found.index',
    component(resolve) {
      require(['./../views/not-found/index/index.vue'], resolve);
    },
    auth: true,
  },
};

/**
 * The redirects
 *
 * @type {object} The redirects
 */
export const redirects = {
  '/': '/dashboard',
  '*': '/404',
};
