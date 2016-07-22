import BlockMixin from './../../mixins/block';
import * as VNotificationClose from './close/close.vue';
import * as VNotificationTimer from './timer/timer.vue';

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
      timer: null,
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

  components: {
    VNotificationClose,
    VNotificationTimer,
  },

  methods: {
    closeNotification() {
      clearTimeout(this.timer);
      this.closeFunction(this.id);
    },
  },
};
