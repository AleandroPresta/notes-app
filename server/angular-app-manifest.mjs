
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://aleandropresta.github.io/notes-app/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 26667, hash: 'c67fd1960df47bc45e6186622e1283db87d6c74407c42febddbdadaca2be9a1d', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 18051, hash: '0a568082c86067d4c13a5c7edd2f1c73ac9dc61d8f97f0e72be213697b2e31d7', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-VDEMICAM.css': {size: 49086, hash: '9uyS2dZ9Yzo', text: () => import('./assets-chunks/styles-VDEMICAM_css.mjs').then(m => m.default)}
  },
};
