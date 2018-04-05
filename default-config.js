// Libraries.
const colorGuard = require('colorguard');
const cssMQPacker = require('css-mqpacker');
const cssnano = require('cssnano');
const postcssAutoReset = require('postcss-autoreset');
const postcssCqProlyfill = require('cq-prolyfill/postcss-plugin');
const postcssFontMagician = require('postcss-font-magician');
const postcssInitial = require('postcss-initial');
const postcssImageSet = require('postcss-image-set-polyfill');
const postcssImport = require('postcss-import');
const postcssCssNext = require('postcss-cssnext');
const postcssPresetEnv = require('postcss-preset-env');
const postcssReporter = require('postcss-reporter');

// Plugins for postcss.
const postcssPlugins = [
  postcssImport(),
  postcssAutoReset(),
  postcssInitial(),
  postcssPresetEnv(),
  postcssCqProlyfill(),
  postcssImageSet(),
  postcssFontMagician(),
  postcssCssNext({
    browsers: ['last 5 versions', '>= 1%', 'ie >= 11'],
    features: {
      customProperties: false
    }
  }),
  cssMQPacker(),
  colorGuard(),
  cssnano({
    autoprefixer: false,
    discardComments: {
      removeAll: true
    }
  }),
  postcssReporter()
];

module.exports = {
  nodeModulesPath: 'node_modules',

  componenet: {
    name: null,
    scope: null,
    nodeModulesPath: null
  },

  build: {
    module: {
      build: true,
      extension: '.mjs'
    },
    script: {
      build: true,
      extension: '.min.js',
      bundleImports: false,
      exportAllStaticImports: false
    },
    htmlMinifier: {
      collapseBooleanAttributes: true,
      collapseWhitespace: true,
      conservativeCollapse: false,
      ignoreCustomFragments: [/<demo-snippet>[\s\S]*<\/demo-snippet>/],

      // HtmlMinifier does not have support for async functions.
      // minifyCSS: async css => {
      //   const { css: processedCss } = await postcss(postcssPlugins).process(
      //     css
      //   );
      //   return processedCss;
      // },
      minifyCSS: true,
      minifyJS: true,
      quoteCharacter: '"',
      removeAttributeQuotes: false,
      removeComments: true,
      removeRedundantAttributes: true,
      removeScriptTypeAttributes: true,
      removeStyleLinkTypeAttributes: true,
      trimCustomFragments: true,
      useShortDoctype: true
    },
    postcss: {
      plugins: postcssPlugins,
      options: {}
    }
  },

  publish: {
    checkFiles: {
      package: true,
      script: true,
      module: true,
      license: true,
      readme: true
    },
    masterBranch: 'master',
    prereleaseBranchRegex: /^(?:[1-9][0-9]*)\.0-preview|master$/g,
    force: false
  },

  src: {
    path: 'src',
    entrypoint: null,
    template: null
  },

  dist: {
    path: 'dist'
  },

  demos: {
    path: 'demo',
    importsFilename: 'imports.mjs',
    importsImporterFilename: 'imports-importer.mjs'
  },

  docs: {
    path: 'docs',
    indexPage: 'index.html',
    nodeModulesPath: 'scripts',
    importsFilename: 'docs-imports.mjs',
    importsImporterFilename: 'docs-imports-importer.mjs',
    analysisFilename: 'analysis.json'
  },

  tests: {
    path: 'test',
    wctConfig: {
      plugins: {
        local: {
          browsers: ['chrome', 'firefox'],
          browserOptions: {
            chrome: ['headless', 'disable-gpu'],
            firefox: ['-headless']
          }
        }
      },
      npm: true
    }
  },

  temp: {
    path: '.tmp'
  },

  package: null
};
