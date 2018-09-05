const gulp = require('gulp');
const scss = require('gulp-sass');
const connect = require('gulp-connect');

gulp.task('connect', () => {
	connect.server({
		port: 1337,
		root: '.',
		livereload: true
	});
});

gulp.task('html', () => {
	gulp.src('*.html')
		.pipe(connect.reload());
});

gulp.task('scss', () => {
	gulp.src('scss/*.scss')
		.pipe(scss({ outputStyle: 'compressed' }).on('error', scss.logError))
		.pipe(gulp.dest('css'))
		.pipe(connect.reload());
});

gulp.task('watch', () => {
	gulp.watch('*.html', ['html']);
	gulp.watch('scss/*', ['scss']);
});

gulp.task('default', ['connect', 'html', 'scss', 'watch']);