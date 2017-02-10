const gulp = require('gulp'),
      browserSync = require('browser-sync');

gulp.task('serve', function () {
  browserSync({
    server: {
      baseDir: './dist'
    }
  });
});

gulp.task('watch-html', browserSync.reload);


// Default task
gulp.task('runserver', ['serve', 'watch-html'], function() {
  gulp.watch('./dist/*.html', ['watch-html']);
  gulp.watch('./dist/*.js', ['watch-html']);
  gulp.watch('./dist/css/*.css', ['watch-html']);
  gulp.watch('./dist/js/*.js', ['watch-html']);
});