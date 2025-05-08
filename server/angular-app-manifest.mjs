
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://aleandropresta.github.io/notes-app/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 26667, hash: '498e45e0e64aaab6d008c0eb3b181373480b86967e90b23c640e5fa7fdd225f2', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 18051, hash: '6924acf22254455e88504c7a3af70c8a24fce31eac247128a49032cc4a6e1f00', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-J6OKSZ66.css': {size: 48969, hash: '7XMhbR8FCUw', text: () => import('./assets-chunks/styles-J6OKSZ66_css.mjs').then(m => m.default)}
  },
};
