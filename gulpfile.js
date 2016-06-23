var gulp = require('gulp'),
	sass = require('gulp-sass'),
	exec = require('child_process').exec;
	tslint = require('gulp-tslint');

gulp.task('build-watch', ['sass', 'tsc', 'tslint'], function () {
	gulp.watch('public/**/*.scss', ['sass']);
	gulp.watch(['./**/*.ts'], ['tsc', 'tslint']);
})

// gulp.task('tsc', ['tsc-server', 'tsc-client'], function () {
// });

gulp.task('tsc', function (cb) {
	return exec('tsc', function (err, stdout, stderr) {
		console.log(stdout);
		console.log(stderr);
		cb(err);
	});
})

// gulp.task('tsc-client', function (cb) {
// 	return exec('tsc -P public', function (err, stdout, stderr) {
// 		console.log(stdout);
// 		console.log(stderr);
// 		cb(err);
// 	});
// })

gulp.task('sass', function () {
	return gulp.src(['public/**/*.scss', '!public/node_modules/**'])
		.pipe(sass())
		.pipe(gulp.dest(function (f) {
			return f.base;
		}))
});

gulp.task('tslint', function () {
	return gulp.src(['./**/*.ts', '!./node_modules/**', '!public/node_modules/**', '!./typings/**', '!public/typings/**'])
		.pipe(tslint())
        .pipe(tslint.report("verbose"));
});