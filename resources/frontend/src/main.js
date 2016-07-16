// Node modules
import Vue from 'vue';
import VuexRouterSync from 'vuex-router-sync';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';

// Application specific
import * as App from './app';
import { routes, redirects } from './app/routes';
import store from './app/store';

// Styling
require('./assets/stylus/vivid-finance.styl');

// Import vuex, vue-resource and vue-router
Vue.use(VueResource);
Vue.use(VueRouter);

// Configure Vue
Vue.config.debug = process.env.NODE_ENV !== 'production';
Vue.http.headers.common.Accept = 'application/json';
Vue.http.options.root = process.env.API_ENDPOINT;
store.dispatch('CHECK_AUTHENTICATION');

// Initialize the router
const router = new VueRouter({
  hashbang: false,
});
window.router = router;
router.map(routes);
router.redirect(redirects);
router.beforeEach((transition) => {
  if (transition.to.auth && !store.state.auth.authenticated) {
    transition.redirect('/login');
  } else if (transition.to.guest && store.state.auth.authenticated) {
    transition.redirect('/dashboard');
  } else {
    transition.next();
  }
});

// Using VueRouter with Vuex
VuexRouterSync.sync(store, router);

// 3...
// 2...
// 1...
// Takeoff!
const app = Vue.extend(App);
router.start(app, '#app');
