export default {
    data () {
        return {
            footer: {
                variants: [
                    'sidebar'
                ],
                header: {
                    active : true,
                    variants: [
                        'sidebar'
                    ]
                },
                title: {
                    content: 'Happy with our service?',
                    variants: [
                        'sidebar'
                    ]
                },
                body: {
                    active : true,
                    variants: [
                        'sidebar'
                    ]
                }
            }
        };
    },

    components: {
        'v-user' (resolve) {
            require(['./../User.vue'], resolve)
        },
        'v-menu' (resolve) {
            require(['./../Menu.vue'], resolve)
        },
        'v-footer' (resolve) {
            require(['./../Footer.vue'], resolve)
        }
    }
};