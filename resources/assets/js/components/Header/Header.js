import CSSUtil from './../../utils/css';

export default {
    data () {
        return {
            block: 'Header'
        }
    },

    props: {
        variants: {
            type: Array,
            required: false
        },

        sidebar : {
            type : Object,
            required : false
        },

        actions : {
            type : Object,
            required : false
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
        headerClass () {
            return CSSUtil.blockClasses(this.block, this.variants);
        }
    }
};