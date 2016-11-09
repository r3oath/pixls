var gulp = require('gulp')
var sass = require('gulp-sass')

gulp.task('build', function() {
    return gulp
        .src('./sass/app.scss')
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(gulp.dest('./css'));
})

gulp.task('default', ['build'])
