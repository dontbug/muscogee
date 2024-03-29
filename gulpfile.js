var gulp = require('gulp');
	sass = require('gulp-ruby-sass');
	watch = require('gulp-watch');
	gls = require('gulp-live-server');
	livereload = require('gulp-livereload');


//Sass
gulp.task('sass', function () {
	return sass('app/stylesheets/sass/**/*.sass')
		.on('error', sass.logError)
		.pipe(gulp.dest('app/stylesheets/css'))
		.pipe(livereload());
});


//Html
gulp.task('html', function() {
	return gulp.src('app/**/*.html')
		.pipe(livereload());
});


//Scripts
gulp.task('js', function() {
	return gulp.src('app/**/*.js')
		.pipe(gulp.dest(''))
		.pipe(livereload());
});



//Watch
gulp.task('watch', function() {
	gulp.watch('app/**/*.sass',  ['sass']);
	gulp.watch('app/**/*.html',  ['html']);
	gulp.watch('app/**/*.js',    ['js']);
	livereload.listen();
});


//Server
gulp.task('serve', function() {
	var server = gls.static('app', 3000);
	server.start();
});


//Default tasks
gulp.task('default', ['watch', 'serve', 'html', 'sass']);
