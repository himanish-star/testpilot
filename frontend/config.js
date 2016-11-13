module.exports = {
  SERVER_PORT: 8000,
  IS_DEBUG: (process.env.NODE_ENV === 'development'),
  USE_HTTPS: (process.env.USE_HTTPS == 1),
  ENABLE_PONTOON: (process.env.ENABLE_PONTOON === '1'),
  AVAILABLE_LOCALES: (process.env.ENABLE_DEV_LOCALES === '1') ?
    // All locales on Pontoon for local & dev
    'en-US,ast,bn-BD,cs,de,es-ES,fa,fr,fy-NL,hu,it,ja,kab,pt-BR,ru,sk,sl,sv-SE,tr,uk,zh-CN,zh-TW' :
    // Enabled locales for stage & production - update as they reach 100%
    'en-US,de,it,zh-CN',

  // TODO: Move addon build to a better path
  ADDON_SRC_PATH: './addon/',

  SRC_PATH: './frontend/src/',
  DEST_PATH: './frontend/build/',
  DIST_PATH: './dist/',
  DJANGO_OLD_STATIC:  './testpilot/frontend/static/',
  CONTENT_SRC_PATH: './content-src/',

  PRODUCTION_EXPERIMENTS_URL: 'https://testpilot.firefox.com/api/experiments',
  IMAGE_NEW_BASE_PATH: 'frontend/src/images/experiments/',
  IMAGE_NEW_BASE_URL: '/static/images/experiments/',

  'sass-lint': true,
  'js-lint': true
};

// Pull in local debug-config.json overrides
const tryRequire = require('try-require');
Object.assign(module.exports, tryRequire('../debug-config.json') || {});
