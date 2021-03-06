// gulpfile.js
const gulp  = require('gulp'),
    browserSync = require('browser-sync').create(),
    htmlmin = require('gulp-htmlmin'),
    nunjucksRender = require('gulp-nunjucks-render'),
    sass = require('gulp-sass'); // importing the plugin

const PATHS = {
    output: 'dist',
    templates: 'src/templates',
    pages: 'src/pages',
}

// writing up the gulp nunjucks task
gulp.task('nunjucks', function() {
    console.log('Rendering nunjucks files..');
    return gulp.src(PATHS.pages + '/**/*.+(html|js|css)')
        .pipe(nunjucksRender({
          path: [PATHS.templates],
          watch: true,
        }))
        .pipe(gulp.dest(PATHS.output));
});

gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: PATHS.output
        },
    });
});

gulp.task('watch', ['sass'], function() {
    // trigger Nunjucks render when pages or templates changes
    gulp.watch([PATHS.pages + '/**/*.+(html|js|css)', PATHS.templates + '/**/*.+(html|js|css)'], ['nunjucks'])
    
    // reload browsersync when `dist` changes
    gulp.watch("dist/assets/css/*.scss", ['sass']);
    gulp.watch(PATHS.output + '/*').on('change', browserSync.reload);
});

gulp.task('sass', function(){
    return gulp.src('dist/assets/css/bulma.scss')
      .pipe(sass()) // Converts Sass to CSS with gulp-sass
      .pipe(gulp.dest('dist/assets/css/'))
      .pipe(browserSync.stream());
  });

gulp.task('minify', function() {
  return gulp.src(PATHS.output + '/*.html')
    .pipe(htmlmin({
        collapseWhitespace: true,
        cssmin: true,
        jsmin: true,
        removeOptionalTags: true,
        removeComments: false
    }))
    .pipe(gulp.dest(PATHS.output));
});

// run browserSync auto-reload together with nunjucks auto-render
gulp.task('auto', ['browserSync', 'watch']);

//default task to be run with gulp
gulp.task('default', ['nunjucks']);