var gulp = require('gulp'),
    zip = require('gulp-zip'),
    runSequence = require('run-sequence'),
    notify = require('gulp-notify');

function gulpErrorHandler(err) {
    notify.onError({
        title: "Gulp",
        subtitle: "Failure!",
        message: "Error: <%= error.message %>",
        sound: "Beep"
    })(err);
    this.emit('end');
}

var CONFIG = {
    build: {
        src: [
            './**/*.*',
            '!build/**/*.*',
            '!node_modules/**/*.*',
            '!bower_components/**/*.*',
            '!gulpfile.js',
            '!bower.json',
            '!.DS_Store',
            '!.gitignore',
            '!.git',
            '!js/**',
            '!npm-debug.log'
        ],
        dest: 'build/'
    }
};

gulp.task('zip', function() {
    return gulp.src(CONFIG.build.src)
        .pipe(zip('inside-rbox-ghost.zip'))
        .pipe(gulp.dest(CONFIG.build.dest));
});

gulp.task('default', function(cb) {
    runSequence('zip', cb);
});
