const { Nuxt, Builder } = require('nuxt');
const app = require('express')();
const proxyMiddleware = require('http-proxy-middleware');
const host = process.env.HOST || '127.0.0.1';
const port = process.env.PORT || '5005';
// 配置 http-proxy-middleware
const proxyTable = {
  '/api/': {
    target: 'http://localhost:3001', // 测试地址
    //  target: 'http://10.66.48.231:81', // 测试地址
    pathRewrite: {
      '^/api': '',
    },
    changeOrigin: true,
  },
  '/newApi/': {
    target: 'http://10.66.140.9:6601', // 测试地址
    pathRewrite: {
      '^/newApi': '',
    },
    changeOrigin: true,
  },
  '/nodeApi/': {
    target: 'http://127.0.0.1:8888', // 测试地址
    // target: 'http://10.66.140.9:8888', // 测试地址
    pathRewrite: {
      '^/nodeApi': '',
    },
    changeOrigin: true,
  }
};
Object.keys(proxyTable).forEach((context) => {
  let options = proxyTable[context];
  if (typeof options === 'string') {
    options = { target: options };
  }
  app.use(proxyMiddleware(context, Object.assign({}, options, {
    logLevel: 'debug',
  })));
});
app.set('port', port)
// 在这里初始化 nuxt.js
async function start() {
  // 加载 nuxt.config.js
  let config = require('./nuxt.config.js')
  config.dev = !(process.env.NODE_ENV === 'production')
  const nuxt = await new Nuxt(config)
  // middleware
  app.use(nuxt.render)
  // Build in dev
  if (config.dev) {
    try {
      await new Builder(nuxt).build()
    } catch (error) {
      console.error(error) // eslint-disable-line no-console
      process.exit(1)
    }
  }
  // Listen the server
  app.listen(port, host)
  console.log('Server listening on ' + host + ':' + port) // eslint-disable-line no-console
}
start()
