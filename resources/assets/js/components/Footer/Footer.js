import CSSUtil from './../../utils/css';

export default {
    data () {
        return {
            block: 'Footer'
        };
    },

    props: {
        variants: {
            type: Array,
            required: false
        },
        header: {
            type: Object,
            required: false
        },
        title: {
            type: Object,
            required: false
        },
        body: {
            type: Object,
            required: false
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
         * Computed property which will output
         * whether there is a body or not
         *
         * @returns {boolean} If there is a body
         */
        hasBody () {
            return !!this.body;
        },

        /**
         * Computed property which will output the
         * corrected class names for the panel
         *
         * @returns {Array} The corrected class name
         */
        footerClass () {
            return CSSUtil.blockClasses(this.block, this.variants);
        },

        /**
         * Computed property which will output the
         * corrected class names for the header
         *
         * @returns {Array} The corrected class name
         */
        headerClass () {
            return CSSUtil.elementClasses(this.block, 'header', this.body.variants);
        },

        /**
         * Computed property which will output the
         * corrected class names for the title
         *
         * @returns {Array} The corrected class name
         */
        titleClass () {
            return CSSUtil.elementClasses(this.block, 'title', this.body.variants);
        },

        /**
         * Computed property which will output the
         * corrected class names for the body
         *
         * @returns {Array} The corrected class name
         */
        bodyClass () {
            return CSSUtil.elementClasses(this.block, 'body', this.body.variants);
        }
    }
};
