import CSSUtil from './../../utils/css';
import * as BreadcrumbItem from './Item/Item.vue';

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
        'v-breadcrumb-item' : BreadcrumbItem
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