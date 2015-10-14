'use strict';

var app     = require('./package.json');
var gulp    = require('gulp');
var stachio = require('gulp-stachio');

gulp.task('default', () => {
    return gulp.src('src/index.hbs')
        /**
         * Optionally include variables via a context object.
         * `.pipe(stachio({ hello: 'world' })`
         */
        .pipe(stachio({ productName: app.productName }))
        .pipe(gulp.dest('.'));
});
