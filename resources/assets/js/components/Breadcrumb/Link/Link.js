import CSSUtil from './../../../utils/css';

export default {
    data () {
        return {
            element: 'link'
        }
    },

    props: {
        /**
         * The content
         */
        content: {
            type: Object,
            required: true
        },

        /**
         * The route
         */
        to: {
            type: String,
            required: true
        },

        /**
         * The variants for the BEM styling
         */
        variants: {
            type: Array,
            required: false
        }
    },

    components: {
        'v-breadcrumb-content' (resolve) {
            require(['./../Content/Content.vue'], resolve)
        }
    },

    computed: {
        /**
         * The block name from the parent
         *
         * @returns {string}
         */
        block () {
            return this.$parent.block;
        },

        /**
         * Computed property which will output the
         * corrected class names for the link
         *
         * @returns {Array} The corrected class names
         */
        linkClass () {
            return CSSUtil.elementClasses(this.block, this.element, this.variants);
        }
    }
};