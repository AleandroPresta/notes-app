
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://aleandropresta.github.io/notes-app/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 3734, hash: '3b5dd288f1878bd96fedd70584c81d6e046cff380178af9539c29e24be455d73', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1931, hash: '2b8a8012a01365291a858ffbf4d7ca90e36b735aa0979ad0d945ea21f7a0e7ac', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-JLVKJGLP.css': {size: 39528, hash: 'rfOtp82xslE', text: () => import('./assets-chunks/styles-JLVKJGLP_css.mjs').then(m => m.default)}
  },
};
