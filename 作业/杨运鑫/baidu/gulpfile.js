// 引入gulp
var gulp = require('gulp');       // 基础库

// 引入gulp插件
var livereload = require('gulp-livereload'), // 网页自动刷新（服务器控制客户端同步刷新）
    webserver = require('gulp-webserver'); // 本地服务器

// 注册任务
gulp.task('webserver', function() {
    gulp.src('app') // 服务器目录（./代表根目录）
        .pipe(webserver({ // 运行gulp-webserver
            livereload: true, // 启用LiveReload
            open: true // 服务器启动时自动打开网页
        }));
});

// 监听任务
gulp.task('watch', function() {
    var server = livereload();

    gulp.watch(['dist/**']).on('change', function (file) {
        server.changed(file.path);
    });
});

// 默认任务
gulp.task('default', ['webserver','watch']);