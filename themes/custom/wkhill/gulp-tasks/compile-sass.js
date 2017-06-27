/**
 * @file
 * Task: Compile: Sass.
 */

 /* global module */

module.exports = function (gulp, plugins, options) {
  'use strict';

  gulp.task('compile:sass', function () {
    return gulp.src([
      options.sass.files
    ])
      .pipe(plugins.sourcemaps.init())
      .pipe(plugins.sassGlob())
      .pipe(plugins.sass({
        errLogToConsole: true,
 	includePaths: ['./node_modules/foundation-sites/scss'],
        outputStyle: 'expanded'
      }))
      .on("error", notify.onError(function (error) {
            return "Error: " + error.message;
      }))
      .pipe(plugins.autoprefixer({
        browsers: ['last 2 versions', 'ie >= 9', 'and_chr >= 2.3'],
        cascade: false
      }))
      .pipe(plugins.sourcemaps.write())
      .pipe(gulp.dest(options.sass.destination));
  });
};
