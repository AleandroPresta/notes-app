
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://aleandropresta.github.io/notes-app/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 26667, hash: '0657b60fa202888577d9fdfa16a75413c98a286722eabe54c4eba4ca4ff52cc5', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 18051, hash: 'bdf35772a20bce52a292e081e4fcd9d7e2f471af66801d810cff2b6810bb9a9d', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-J6OKSZ66.css': {size: 48969, hash: '7XMhbR8FCUw', text: () => import('./assets-chunks/styles-J6OKSZ66_css.mjs').then(m => m.default)}
  },
};
