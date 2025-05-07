
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://aleandropresta.github.io/notes-app/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 3734, hash: '94f84fa372bab1d44602caf7001b395d20a5185a22eabfa7aa181f8e1704dd65', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1931, hash: 'c7a1f0b6c8997e2fbcb342bf031916c4b65b7f74621fcc2f9536ad5590b43ee1', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-TMH2GPAH.css': {size: 39749, hash: '5hqEmmLYQVs', text: () => import('./assets-chunks/styles-TMH2GPAH_css.mjs').then(m => m.default)}
  },
};
