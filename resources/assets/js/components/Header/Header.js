import CSSUtil from './../../utils/css';

export default {
    data () {
        return {
            block: 'Header'
        }
    },

    props: {
        /**
         * The sidebar
         */
        sidebar: {
            type: Object,
            required: false
        },

        /**
         * The actions
         */
        actions: {
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
        'v-header-sidebar' (resolve) {
            require(['./Sidebar/Sidebar.vue'], resolve)
        },
        'v-header-actions' (resolve) {
            require(['./Actions/Actions.vue'], resolve)
        }
    },

    computed: {
        /**
         * Computed property which will output the
         * corrected class names for the header
         *
         * @returns {Array} The corrected class names
         */
        headerClass () {
            return CSSUtil.blockClasses(this.block, this.variants);
        }
    }
};