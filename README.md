# gulp-export-comments

Removes all jsdocs style comments from either `.js` or `.ts` file. 

[![Build Status](https://travis-ci.org/jiborobot/gulp-export-comments.svg?branch=master)](https://travis-ci.org/jiborobot/gulp-export-comments)

This is used as a workaround for when the TypeScript compiler strips jsdoc comments from its output. By extracting the comments first, you can run the output directly from `.ts` files into jsdocs.

## Install

```
npm i gulp-export-comments --save-dev
```

## Usage

The examples below illustrate usage in a gulp file. (Note that this plugin auto converts all file extentions to `.js`
for the benefit of jsdocs.)

Write the comments directly to files:

```js
var gulp = require('gulp');
var comments = require('gulp-export-comments');

gulp.task('comments', function() {
    return gulp.src('src/**/*.{ts,js}')
        .pipe(comments())
        .pipe(gulp.dest('lib/docs'));
});

```

Stream comments directly into `gulp-jsdocs`:

```js
var gulp = require('gulp');
var comments = require('gulp-export-comments');
var jsdoc = require('gulp-jsdoc');

gulp.task('docs', function(done) {
    gulp.src('/src/**/*.{ts,js}')
        .pipe(comments())
        .pipe(jsdoc('docs.json', done));
});
```
