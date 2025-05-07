
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://aleandropresta.github.io/notes-app/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 3734, hash: 'ef0c0d8341d670e3a300a18d406f4bf1b11dc59db88af5fdc8925ece2e4238c9', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1931, hash: '25d0dedc810ce39cd58c079df5ad869b3b1d6d14d7d0586771a02757781788a6', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-WU5TU2AA.css': {size: 39562, hash: 'MygZp7gtcj4', text: () => import('./assets-chunks/styles-WU5TU2AA_css.mjs').then(m => m.default)}
  },
};
