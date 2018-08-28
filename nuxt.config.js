module.exports = {
    /*
  ** Headers of the page
  */
    head: {
        title: 'coyle.blog.front',
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
        extend(config, {isDev, isClient}) {
            if (isDev && isClient) {
                config.module.rules.push({enforce: 'pre', test: /\.(js|vue)$/, loader: 'eslint-loader', exclude: /(node_modules)/})
            }
        },
        devServer: {
            // host: '192.168.54.107',
            // port: 8071,
            // https: false,
            // hotOnly: true,
            open: false,
            proxy: {
                '/api': {
                    target: 'http://localhost:3001',
                    ws: true,
                    changeOrigin: true,
                    pathRewrite: {
                        '/api': '' // remove base path
                    }
                }
            }
        }
    }
}
