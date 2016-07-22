import { deleteNotification } from './../../store/modules/notifications/actions';

export default {
  vuex: {
    getters: {
      notifications: ({ notifications }) => notifications.all,
    },
    actions: {
      deleteNotification,
    },
  },

  props: {
    background: {
      type: String,
      required: false,
    },
  },

  data() {
    return {
      wrapper: {
        variants: [
          'background-image',
        ],
      },
      content: {
        variants: [
          'centered',
        ],
      },
    };
  },
  components: {
    VWrapper(resolve) {
      require(['./../../components/wrapper/wrapper.vue'], resolve);
    },
    VContent(resolve) {
      require(['./../../components/content/content.vue'], resolve);
    },
    VNotification(resolve) {
      require(['./../../components/notification/notification.vue'], resolve);
    },
  },
};
