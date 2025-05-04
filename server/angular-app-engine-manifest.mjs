
export default {
  basePath: 'https://aleandropresta.github.io/notes-app',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
