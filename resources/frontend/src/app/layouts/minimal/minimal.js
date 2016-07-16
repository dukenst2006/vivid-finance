export default {
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
  },
};
