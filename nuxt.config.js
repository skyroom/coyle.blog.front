module.exports = {
    modules: [
        // '@nuxtjs/axios',
        // '@nuxtjs/proxy',
        '@gauseen/nuxt-proxy',
    ],
    proxyTable: {
        '/blog': { 
            target: 'http://localhost:3001', 
            ws: false,
            pathRewrite: {
                '^/api': '',
            },
        }
    },
    // proxy: [
    //     ['/api', {
    //         target: 'http://localhost:3001', 
    //         pathRewrite: {
    //             '^/api': '',
    //         },
    //         changeOrigin: true,
    //     }]
    //     // '/api': {
    //     //     target: 'http://localhost:3001',
    //     //     pathRewrite: {
    //     //         '^/api': '',
    //     //     },
    //     //     changeOrigin: true,
    //     // },
    // ],
    /*
  ** Headers of the page
  */
    head: {
        title: 'Coyle.Blog',
        meta: [
            {
                charset: 'utf-8'
            }, {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1'
            }, {
                hid: 'description',
                name: 'description',
                content: 'Nuxt.js project'
            }
        ],
        link: [
            {
                rel: 'icon',
                type: 'image/x-icon',
                href: '/favicon.ico'
            }
        ]
    },
    /*
  ** Customize the progress bar color
  */
    loading: {
        color: '#3B8070'
    },
    /*
  ** Build configuration
  */
    build: {
        /*
    ** Run ESLint on save
    */
        vendor: [
            '~/plugins/mavonEditor',
            '~/plugins/axios',
        ],
        extend(config, {isDev, isClient}) {
            if (isDev && isClient) {
                config.module.rules.push({enforce: 'pre', test: /\.(js|vue)$/, loader: 'eslint-loader', exclude: /(node_modules)/})
            }
        },
    },
    plugins: [
        { src: '~/plugins/mavonEditor', ssr: false },
        { src: '~/plugins/axios', ssr: true }
    ]
}
