import CSSUtil from './../../../utils/css';
import * as TableCell from './../Cell/Cell.vue';

export default {
    data () {
        return {
            element: 'row'
        }
    },

    props: {

        columns: {
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
        'v-table-cell': TableCell
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
        rowClass () {
            return CSSUtil.elementClasses(this.block, this.element, this.variants);
        }
    }
};