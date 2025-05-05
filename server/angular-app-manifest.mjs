
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://aleandropresta.github.io/notes-app/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 3734, hash: '2a0bbe4bc2fd192fa27779eb0d59f1f1b9620d811637ed849702ef6f9043b150', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1931, hash: 'c4ec81a4f8fdd5dd15f458a5b0b19529ae7ff4927da37a7fe0647c042ebd7bbc', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-JC3RGWVQ.css': {size: 39576, hash: 'LArJpnGCAoU', text: () => import('./assets-chunks/styles-JC3RGWVQ_css.mjs').then(m => m.default)}
  },
};
