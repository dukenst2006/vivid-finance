// Import Node Modules
import Vue from 'vue';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import Vuex from 'vuex';

import App from './App.vue';
import routes from './routes/routes';
import config from './config/env'

var app,
    router;

// Initialize Vue
window.Vue = Vue;
Vue.use(VueResource);
Vue.use(VueRouter);

// Configure Vue
Vue.config.debug = config.debug;
Vue.http.headers.Accept = 'application/json';
Vue.http.options.root = 'api/v1';
app = Vue.extend(App);

// Initialize the router
router = new VueRouter();
router.map(routes.getRoutes());
router.redirect(routes.getRedirects());

// 3...
// 2...
// 1...
// Takeoff!
router.start(app, '#app');