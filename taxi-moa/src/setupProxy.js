const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://taximoa.lottenc.com:9100',
      changeOrigin: true,
    })
  );
};
