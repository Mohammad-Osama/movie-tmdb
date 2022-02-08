const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
      createProxyMiddleware('/flask/**', { target: "http://localhost:3001" })
    );
  };