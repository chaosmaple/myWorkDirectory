var gulp = require('gulp'),
    stylus = require('gulp-stylus'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    nib = require('nib');

var paths = {
  build: {
    css: './build/stylesheets/',
    js: './build/scripts/',
    img: './build/images/'
  },
  dev: {
    stylus: './dev/stylus/*.styl',
    js: './dev/scripts/*.js'
  },
  vendor: './vendor/',
  images: './images/**/*'
};


//将dev中的scripts压缩导入生产环境中
gulp.task('scripts', [], function() {

  return gulp.src(paths.dev.js)
      .pipe(uglify())
      .pipe(gulp.dest(paths.build.js));

});


//编译stylus文件
gulp.task('stylus', [], function() {

  return gulp.src(paths.dev.stylus)
      .pipe(stylus({
        use: nib(),
        compress: true
      }))
      .pipe(gulp.dest(paths.build.css))

});

//压缩图片
gulp.task('imagemin', [], function() {

  return gulp.src(paths.images)
      .pipe(imagemin({optimizationLevel: 5}))
      .pipe(gulp.dest('build/img'));
});


//监视文件目录
gulp.task('watch', [], function() {
  gulp.watch(paths.dev.stylus, ['stylus']);
  gulp.watch(paths.dev.js, ['scripts']);
});

gulp.task('default', ['scripts', 'stylus', 'imagemin']);

