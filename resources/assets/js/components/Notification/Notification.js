import CSSUtil from './../../utils/css';


export default {
    data () {
        return {
            block: 'Notification'
        }
    },
    props: {
        content: {
            type: String,
            required: true
        },
        variants: {
            type: Array,
            required: false
        },
        id: {
            type: Number,
            required: true
        },
        removeFn: {
            type: Function,
            required: true
        },
        hasTimer: {
            type: Boolean,
            required: false
        }
    },
    computed: {

        /**
         * Computed property which will output the
         * corrected class names for the panel
         *
         * @returns {Array} The corrected class name
         */
        notificationClass () {
            return CSSUtil.blockClasses(this.block, this.variants);
        }
    },

    methods: {
        startTimer() {
            setTimeout(this.dismissAlert, 5000);
        },

        dismissAlert() {
            this.removeFn(this.id)
        }
    },

    ready () {
        if (this.hasTimer) {
            this.startTimer();
        }
    }
}