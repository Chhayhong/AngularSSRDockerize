
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 0,
    "redirectTo": "/home",
    "route": "/"
  },
  {
    "renderMode": 0,
    "route": "/home"
  },
  {
    "renderMode": 0,
    "route": "/home/*"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 466, hash: '3f39a927960f849aace3b0e54877a444c7e3249efe7d08cd56b26c8098d98d2a', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 979, hash: '9597925776b4e769a9f6008406497c564ddb474317f9723b1749566023a94c97', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
