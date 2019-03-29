let gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync').create(),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    cssnano = require('gulp-cssnano'),
    autoprefixer = require('gulp-autoprefixer'),
    imagemin = require('gulp-imagemin'),
    cache = require('gulp-cache'),
    del = require('del'),
    browserify = require('gulp-browserify');

gulp.task('sass', () => {
    return gulp.src('src/styles/sass/style.scss')
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last 20 versions'],
            cascade: false
        }))
        .pipe(concat('style.min.css'))
        .pipe(cssnano())
        .pipe(gulp.dest('src/styles/css'))
        .pipe(browserSync.reload({
            stream: true
        }))
});

gulp.task('images', () => {
    del(['./dist/images/*']);
    return gulp.src('src/images/**/*.+(png|jpg|gif|svg)')
        .pipe(cache(imagemin()))
        .pipe(gulp.dest('dist/images'));
});

gulp.task('fonts', () => {
    return gulp.src('src/fonts/**/*')
        .pipe(gulp.dest('dist/fonts'))
});

gulp.task('scripts', () => {
    return gulp.src('src/js/script.js')
        .pipe(browserify({transform: ['babelify']}))
        .pipe(concat('script.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('src/js'))
        .pipe(browserSync.reload({
            stream: true
        }))
});

gulp.task('html', () => {
    return gulp.src('src/*.html')
        .pipe(gulp.dest('dist'))
        .pipe(browserSync.reload({
            stream: true
        }))
});

gulp.task('clean:dist', () => {
    return del.sync('dist');
});

gulp.task('cache:clear', () => {
    return cache.clearAll();
});

gulp.task('browser-sync', () => {
    browserSync.init({
        server: {
            baseDir: 'src'
        },
        notify: false
    });
});

gulp.task('watch', () => {
    gulp.watch('src/styles/sass/**/*.scss', gulp.series('sass'), browserSync.reload);
    gulp.watch('src/*.html', gulp.series('html'), browserSync.reload);
    gulp.watch('src/js/script.js', gulp.series('scripts'), browserSync.reload);
});

gulp.task('default', gulp.series(gulp.series('html', 'sass', 'scripts'), gulp.parallel('browser-sync', 'watch')));