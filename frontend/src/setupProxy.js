const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://j6d201.p.ssafy.io:9000', 
      // 프론트엔드에서 벡엔드로 줄때 타겟을 설정하고 8080번으로 주겠다.
      changeOrigin: true,
    })
  );
  app.use(
    '/fastapi',
    createProxyMiddleware({
      target: 'http://j6d201.p.ssafy.io:5555', 
      // 프론트엔드에서 벡엔드로 줄때 타겟을 설정하고 8080번으로 주겠다.
      changeOrigin: true,
    })
  );
};