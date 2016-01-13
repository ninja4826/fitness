var gulp = require('gulp');
var babel = require('babel');

gulp.task('build', function() {
    return gulp.src('src/*.js')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('dist'));
});

gulp.task('default', ['build']);
