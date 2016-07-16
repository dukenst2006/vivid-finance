import { logout } from './../../store/modules/auth/actions';

export default {
  /**
   * The Vuex data
   */
  vuex: {
    actions: {
      logout,
    },
    getters: {
      account: ({ account }) => account,
    },
  },

  /**
   * The data
   *
   * @returns {object} The data
   */
  data() {
    const vm = this;

    return {
      header: {
        variants: [
          'main',
        ],
        sidebar: {
          navIcon: {
            variants: [
              'header',
            ],
          },
          figure: {
            variants: [
              'logo',
            ],
            image: {
              variants: [
                'logo',
              ],
              src: require('./../../../assets/img/logo/logo.svg'),
            },
            description: {
              variants: [
                'logo',
              ],
              content: 'Finance',
            },
          },
        },
        actions: {
          items: [
            {
              to: 'account.show',
              icon: {
                variants: [
                  'account-circle',
                ],
              },
            },
            {
              action() {
                vm.logout();
              },
              icon: {
                variants: [
                  'logout',
                ],
              },
            },
          ],
        },
      },
      sidebar: {
        variants: [
          'main',
        ],
      },
      user: {
        variants: [
          'sidebar',
        ],
        figure: {
          variants: [
            'sidebar',
          ],
          image: {
            src: vm.account.avatar,
            variants: [
              'sidebar',
            ],
          },
          information: {
            variants: [
              'sidebar',
            ],
            header: {
              variants: [
                'sidebar',
              ],
              title: {
                variants: [
                  'sidebar',
                ],
                content: vm.account.name,
              },
            },
            body: {
              variants: [
                'sidebar',
              ],
              items: [
                {
                  variants: [
                    'sidebar',
                  ],
                  content: vm.account.email,
                },
              ],
            },
          },
        },
        actions: {
          variants: [
            'sidebar',
          ],
          items: [{
            variants: ['sidebar'],
            to: 'account.show',
            iconGroup: {
              icon: {
                icon: {
                  variants: [
                    'account-circle',
                  ],
                },
              },
              description: {
                variants: [
                  'margin-left',
                ],
                content: 'My account',
              },
            },
          }, {
            variants: ['sidebar'],
            action() {
              vm.logout();
            },
            iconGroup: {
              icon: {
                icon: {
                  variants: [
                    'account-circle',
                  ],
                },
              },
              description: {
                variants: [
                  'margin-left',
                ],
                content: 'Logout',
              },
            },
          }],
        },
      },
      featured: {
        to: 'invoice.create',
        iconGroup: {
          icon: {
            variants: [
              'align-right',
            ],
            icon: {
              variants: [
                'plus-circle',
              ],
            },
          },
          description: {
            content: 'Create invoice',
          },
        },
      },
      menu: {
        groups: [
          {
            items: [
              {
                to: 'dashboard.index',
                iconGroup: {
                  description: {
                    content: 'Dashboard',
                  },
                  icon: {
                    icon: {
                      variants: [
                        'speedometer',
                      ],
                    },
                    variants: [
                      'align-right',
                    ],
                  },
                },
              },
              {
                to: 'customer.index',
                iconGroup: {
                  description: {
                    content: 'Customers',
                  },
                  icon: {
                    icon: {
                      variants: [
                        'account-multiple',
                      ],
                    },
                    variants: [
                      'align-right',
                    ],
                  },
                },
              },
              {
                to: 'invoice.index',
                iconGroup: {
                  description: {
                    content: 'Invoices',
                  },
                  icon: {
                    icon: {
                      variants: [
                        'file',
                      ],
                    },
                    variants: [
                      'align-right',
                    ],
                  },
                },
              },
            ],
            header: {},
            title: {
              content: 'Overview',
            },
          },
        ],
        variants: [
          'main',
          'sidenbar',
        ],
      },
      clearfix: {
        variants: [
          'footer',
        ],
      },
      footer: {
        variants: [
          'sidebar',
        ],
        header: {
          active: true,
          variants: [
            'sidebar',
          ],
        },
        title: {
          text: 'Happy with our service?',
          variants: [
            'sidebar',
          ],
        },
        body: {
          active: true,
          variants: [
            'sidebar',
          ],
        },
      },
      banner: {
        variants: [
          'green',
        ],
        iconGroup: {
          description: {
            content: 'Go buy us a cup of coffee!',
          },
          icon: {
            icon: {
              variants: [
                'account-multiple',
              ],
            },
            variants: [
              'align-right',
            ],
          },
        },
      },
      content: {
        variants: [
          'main',
        ],
      },
    };
  },

  /**
   * The components
   */
  components: {
    VWrapper(resolve) {
      require(['./../../components/wrapper/wrapper.vue'], resolve);
    },
    VHeader(resolve) {
      require(['./../../components/header/header.vue'], resolve);
    },
    VSidebar(resolve) {
      require(['./../../components/sidebar/sidebar.vue'], resolve);
    },
    VContent(resolve) {
      require(['./../../components/content/content.vue'], resolve);
    },
    VFeatured(resolve) {
      require(['./../../components/featured/featured.vue'], resolve);
    },
    VClearfix(resolve) {
      require(['./../../components/clearfix/clearfix.vue'], resolve);
    },
    VUser(resolve) {
      require(['./../../components/user/user.vue'], resolve);
    },
    VFooter(resolve) {
      require(['./../../components/footer/footer.vue'], resolve);
    },
    VMenu(resolve) {
      require(['./../../components/menu/menu.vue'], resolve);
    },
    VBanner(resolve) {
      require(['./../../components/banner/banner.vue'], resolve);
    },
  },
};
