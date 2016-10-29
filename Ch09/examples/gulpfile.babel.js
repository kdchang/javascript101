'use strict';

import gulp from 'gulp';
import sass from 'gulp-sass';// import autoprefixer from 'gulp-autoprefixer';
import uglify from 'gulp-uglify';// import autoprefixer from 'gulp-autoprefixer';
import connect from 'gulp-connect';// import autoprefixer from 'gulp-autoprefixer';
import browserify from 'browserify';// import autoprefixer from 'gulp-autoprefixer';
import babelify from 'babelify';// import autoprefixer from 'gulp-autoprefixer';
import source from 'vinyl-source-stream';

const dirs = {
  src: 'src',
  dest: 'dist'
};

const stylesPaths = {
  src: `${dirs.src}/styles/*.scss`,
  dest: `${dirs.dest}/css`
};

const scriptsPaths = {
  src: `${dirs.src}/scripts/*.js`,
  dest: `${dirs.dest}/js`
};

gulp.task('styles', () => {
  gulp.src(stylesPaths.src)
    .pipe(sass())         // 編譯 Scss
    .pipe(gulp.dest(stylesPaths.dest))  //
    .pipe(connect.reload());
});

gulp.task('scripts', function(){
    return browserify({
        entries: ['./src/scripts/main.js']
    })
    .transform(babelify)
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest(scriptsPaths.dest));
});

gulp.task('server', function () {
  connect.server({
    livereload: true,
    port: 7777,
  });
});

gulp.task('watch', function () {
  gulp.watch(stylesPaths.src, ['styles']);
  gulp.watch(scriptsPaths.src, ['scripts']);
});

gulp.task('default', ['scripts', 'styles', 'server', 'watch']);
gulp.task('build', ['scripts', 'styles']);
