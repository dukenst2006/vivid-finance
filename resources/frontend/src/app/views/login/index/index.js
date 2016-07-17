import { login } from './../../../store/modules/auth/actions';

export default {
  /**
   * The Vuex data
   */
  vuex: {
    actions: {
      login,
    },
  },

  data() {
    return {
      layout: {
        background: require('./../../../../assets/img/backgrounds/1.jpg'),
      },
      user: {
        email: null,
        password: null,
      },
      panel: {
        variants: [
          'primary',
        ],
        body: {
          variants: [
            'primary',
          ],
        },
        header: {
          variants: [
            'primary',
          ],
        },
        title: {
          variants: ['primary'],
          content: 'Login',
        },
      },
    };
  },

  /**
   * The components
   */
  components: {
    VPanel(resolve) {
      require(['./../../../components/panel/panel.vue'], resolve);
    },
    VLayout(resolve) {
      require(['./../../../layouts/minimal/minimal.vue'], resolve);
    },
    VIcon(resolve) {
      require(['./../../../components/icon/icon.vue'], resolve);
    },
  },
};
