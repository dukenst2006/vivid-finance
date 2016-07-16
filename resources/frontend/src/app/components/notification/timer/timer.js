import ElementMixin from './../../../mixins/element';

export default {
  data() {
    return {
      element: 'timer',
    };
  },

  props: {
    /**
     * The function to close the notification
     */
    closeNotification: {
      type: Function,
      required: true,
    },
    timer: {
      type: Function,
      required: false,
    },
  },

  mixins: [
    ElementMixin,
  ],

  methods: {
    /**
     * Method used to fire the countdown
     */
    startTimer() {
      this.timer = setTimeout(() => {
        this.closeNotification();
      }, 5000);
    },
  },

  ready() {
    this.startTimer();
  },
};
