import store from './../../store'
const { deleteNotification } = store.actions;

export default {
    computed: {
        notifications () {
            return store.state.notifications;
        }
    },
    components: {
        'v-notification' (resolve) {
            require(['./../Notification.vue'], resolve)
        }
    },
    methods: {
        deleteNotification(notification) {
            deleteNotification(notification);
        }
    }
}