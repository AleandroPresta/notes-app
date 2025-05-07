
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://aleandropresta.github.io/notes-app/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 3734, hash: 'ed668d4204724404f61db7ef20c917d864ea0776ccef70950b4dbcb56b34cf53', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1931, hash: '3498e8adb66704bb6d6df18b5f2a7bdded606488daf2b3b7d8248afa42742ce4', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-X7LTUHWS.css': {size: 39550, hash: '2omNimpBK2o', text: () => import('./assets-chunks/styles-X7LTUHWS_css.mjs').then(m => m.default)}
  },
};
