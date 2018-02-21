var gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('browserSync', function() {
	browserSync.init({
		server: {
			baseDir: 'app'
		},
	})
})

gulp.task('watch', ['browserSync'], function() {
	gulp.watch('docs/*.css', browserSync.reload);
	gulp.watch('docs/*.html', browserSync.reload);
	gulp.watch('docs/*.js', browserSync.reload);
});