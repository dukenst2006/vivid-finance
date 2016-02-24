import CSSUtil from './../../../utils/css';

export default {
    data () {
        return {
            element: 'actions'
        };
    },

    props: {

        /**
         * The variants used for BEM
         */
        variants: {
            type: Array,
            required: false
        },

        /**
         * The actions
         */
        items: {
            type: Array,
            required: true
        }
    },

    components: {
        'v-header-action' (resolve) {
            require(['./../Action/Action.vue'], resolve)
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
         * corrected class names for the actions
         *
         * @returns {Array} The corrected class names
         */
        actionsClass () {
            return CSSUtil.elementClasses(this.block, this.element, this.variants);
        }
    }
};