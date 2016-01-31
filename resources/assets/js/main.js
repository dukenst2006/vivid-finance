// Import Node Modules
import Vue from 'vue';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import App from './App.vue';

var app,
    router;

// Initialize Vue
window.Vue = Vue;
Vue.use(VueResource);
Vue.use(VueRouter);

// Configurate Vue
Vue.config.debug = true;
Vue.http.options.root = 'api/v1';
Vue.http.headers.common['X-CSRF-TOKEN'] = document.getElementsByTagName("meta")['csrf-token'].content;

app = Vue.extend(App);

// Initialize the router
router = new VueRouter();
router.start(app, '#app');