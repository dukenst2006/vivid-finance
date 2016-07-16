import BlockMixin from './../../mixins/block';
import * as VNotificationClose from './close/close.vue';

export default {
  /**
   * The mixins
   */
  mixins: [
    BlockMixin,
  ],

  /**
   * The data
   *
   * @returns {object} The data
   */
  data() {
    return {
      block: 'notification',
    };
  },

  props: {
    content: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
    closeFunction: {
      type: Function,
      required: true,
    },
  },

  methods: {
    /**
     * Method used to fire the countdown
     */
    startTimer() {
      setTimeout(() => {
        this.closeFunction(this.id);
      }, 5000);
    },
  },

  ready() {
    this.startTimer();
  },

  components: {
    VNotificationClose,
  },
};
