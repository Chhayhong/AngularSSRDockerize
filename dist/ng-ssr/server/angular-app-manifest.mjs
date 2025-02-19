
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
    'index.csr.html': {size: 466, hash: 'ce0d2a2da3c3cea83ff427e223db4a2ee64e4882d54a029f7d30af5e07c4e8df', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 979, hash: '19aff205640c4c82c60144e8ba0b785f009d0efdd0ba3da63a57b94204b36482', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
