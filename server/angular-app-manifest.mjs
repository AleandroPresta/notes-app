
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://aleandropresta.github.io/notes-app/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 3734, hash: 'a1d03811fb0123707af6a00ed38fd5c5513d784ff77173a0b4d3e3dc1ed6a7d4', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1931, hash: '7b93266f51b07326e6be17b1d795b74fab9e80195ae5abbf1d497840b1f4859f', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-JC3RGWVQ.css': {size: 39576, hash: 'LArJpnGCAoU', text: () => import('./assets-chunks/styles-JC3RGWVQ_css.mjs').then(m => m.default)}
  },
};
