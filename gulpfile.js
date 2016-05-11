var gulp = require('gulp');

// gulp.task('default', function() {
//     // 将你的默认的任务代码放在这
//     console.log("hello world");
// });

var webpack = require("webpack");
var webpackConfig = require("./webpack.config.js");
gulp.task("webpack", function(callback) {
    var myConfig = Object.create(webpackConfig);
    // run webpack
    webpack(myConfig, function(err, stats) {
  	     console.log("webpack log")
        callback();
    });
});

// Copy index.html file
gulp.task('copyhtml', function(){
  return gulp.src('./src/index.html')
    .pipe(gulp.dest('./dist'));
});
// Copy output.js file
gulp.task('copyjs', function(){
  return gulp.src('./src/view/output.js')
    .pipe(gulp.dest('./dist/view'));
});
// Copy img file
gulp.task("img", function() {
	return gulp.src('./src/img/*')
	.pipe(gulp.dest('./dist/img'))
});


gulp.task('default', ['webpack', 'copyhtml', 'copyjs', 'img']);