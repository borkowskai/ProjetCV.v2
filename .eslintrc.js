module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: 'airbnb-base',
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    //added
    'prefer-arrow-callback': 0,
    'no-tabs': 0,
    'no-alert':0,
    'spaced-comment':0,
    'prefer-destructuring':0,
    'key-spacing':0,
    'no-undef' :0,
    'quotes' :0,

    'indent' :0,
    
    
    'no-restricted-syntax': 0,
    'no-console': 0,
    'no-plusplus': 0,
    'vars-on-top': 0,
    'func-names': 0,
    'linebreak-style': 0,
    'max-len': [
      'error',
      80,
      {
        ignoreComments: true,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
      },
    ],
    'import/prefer-default-export': 0
  },
};
