
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://aleandropresta.github.io/notes-app/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 3734, hash: '87dd6bdf3c46514d0b337a4374ad2245a16ae64d2ddb2b1f56b31bd407bf108a', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1931, hash: '49f8f9d6722d7eb1b7643a3d72f3462f80174ec179e0b89f4d7682bb8b3bd6b2', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-JKIXGYRF.css': {size: 26001, hash: 'b/byWHJfO2g', text: () => import('./assets-chunks/styles-JKIXGYRF_css.mjs').then(m => m.default)}
  },
};
