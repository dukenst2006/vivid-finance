export default {
    components : {
        'v-sidebar' (resolve) {
            require(['./components/Sidebar.vue'], resolve)
        },
        'v-header' (resolve) {
            require(['./components/Header.vue'], resolve)
        }
    }
}