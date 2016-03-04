import CSSUtil from './../../utils/css';
import * as FooterBody from './Body/Body.vue';
import * as FooterHeader from './Header/Header.vue';

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

    components: {
        'v-footer-body': FooterBody,
        'v-footer-header': FooterHeader
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
