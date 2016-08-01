var gulp = require('gulp');
require('jibo-gulp')(gulp, {
    src: 'src/**/*.{ts}',
    tslintSrc: 'src/**/*.ts',
    typings: 'typings/index.d.ts',
    target: 'es5',
    allowJs: false,
    clean: ['lib']
});
