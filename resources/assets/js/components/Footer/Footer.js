import CSSUtil from './../../utils/css';

export default {
    data () {
        return {
            block: 'Footer'
        };
    },

    props: {

        /**
         * The header
         */
        header: {
            type: Object,
            required: false
        },

        /**
         * The title
         */
        title: {
            type: Object,
            required: false
        },

        /**
         * The body
         */
        body: {
            type: Object,
            required: false
        },

        /**
         * The variants used for BEM
         */
        variants: {
            type: Array,
            required: false
        }
    },

    components : {
        'v-footer-header' (resolve) {
            require(['./Header/Header.vue'], resolve)
        },
        'v-footer-body' (resolve) {
            require(['./Body/Body.vue'], resolve)
        }
    },

    computed: {

        /**
         * Computed property which will output
         * whether there is a header or not
         *
         * @returns {boolean} If there is a header
         */
        hasHeader () {
            return !!this.header;
        },

        /**
         * Computed property which will output the
         * corrected class names for the footer
         *
         * @returns {Array} The corrected class name
         */
        footerClass () {
            return CSSUtil.blockClasses(this.block, this.variants);
        }
    }
};
