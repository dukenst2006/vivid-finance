import CSSUtil from './../../../utils/css';

export default {
    data () {
        return {
            element: 'header'
        };
    },

    props: {
        /**
         * The title
         */
        title: {
            type: Object,
            required: true
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
        'v-footer-title' (resolve) {
            require(['./../Title/Title.vue'], resolve)
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
         * corrected class names for the header
         *
         * @returns {Array} The corrected class name
         */
        headerClass () {
            return CSSUtil.elementClasses(this.block, this.element, this.variants);
        }
    }
}