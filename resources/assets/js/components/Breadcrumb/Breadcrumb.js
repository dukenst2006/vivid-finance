import CSSUtil from './../../utils/css';

export default {
    data () {
        return {
            block: 'Breadcrumb'
        }
    },

    props: {
        /**
         * The items to be displayed
         */
        items: {
            type: Array,
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
        'v-breadcrumb-item' (resolve) {
            require(['./Item/Item.vue'], resolve)
        }
    },

    computed: {
        /**
         * Computed property which will output the
         * corrected class names for the breadcrumb
         *
         * @returns {Array} The corrected class names
         */
        breadcrumbClass () {
            return CSSUtil.blockClasses(this.block, this.variants);
        }
    }
};