# Vue-Webpack-Gulp
以前用过backbone、requireJs、Grunt，所以大致对这三个东东有些概念，但看了github上很多关于Vue、Webpack、gulp的template，对于新手一眼过去还是有点懵，不知从哪个文件入手，一步步能变成那样。所以决定自己来试试，并写个最傻瓜的步骤便以后使用。
##Gulp
别问为什么从gulp开始，没为什么。来看看它的官网[http://www.gulpjs.com.cn/](http://www.gulpjs.com.cn/)，还有中文，太方便了。直接看"入门指南"，照着一二三四敲就好了，当然在这之前你得先建个项目文件夹。

```javascript

1. 全局安装 gulp：

$ npm install --global gulp

2. 作为项目的开发依赖（devDependencies）安装：

$ npm install --save-dev gulp

3. 在项目根目录下创建一个名为 gulpfile.js 的文件：

var gulp = require('gulp');

gulp.task('default', function() {
  // 将你的默认的任务代码放在这
  console.log("hello world")
});

4. 运行 gulp：

$ gulp

```
##Webpack
然后是Webpack,先去官网瞧瞧[https://webpack.github.io/](https://webpack.github.io/),照着官网的教程安装起来：
```sh
# 先是全局 $ npm install webpack -g
# 然后在根目录需要一个package.json文件，没有就
npm init 
# 不管它，一路回车就好了。
# 安装开发依赖
npm install webpack --save-dev

```
安装OK了，可以测试一下能不能用，建个index.html
```html
<!-- index.html -->
<html>
<head>
    <meta charset="utf-8">
</head>
<body>
    <h1>Hello World</h1>
    <h2 id="hello">Hello World</h2>
    <script src="out.js"></script>
</body>
</html>
```
再建个main.js
```javascript
/*** main.js ***/
document.getElementById('hello').innerHTML="just for test";
```
打个包试试看
`webpack main.js out.js`
打开index.html看看 是不是OK了?
##Webpack.config and usage with gulp
`webpack main.js out.js`的方式明显太low,我们需要一个配置文件来统筹。Webpack在执行的时候，默认会搜索当前目录的webpack.config.js文件，所以我们要建一个webpack.config.js文件
```js
var Webpack = require("webpack");
module.exports = {
    entry: ["./main.js"],
    output: {
        path: __dirname,
        filename: "out.js"
    }
}
```
现在试试执行`webpack`，是不是效果和之前一样。  

接下来要做的就是将Webpack和之前我们建的gulp结合起来，webpack官方已经都有具体的方案了，看这里[http://webpack.github.io/docs/usage-with-gulp.html](http://webpack.github.io/docs/usage-with-gulp.html)，将之前的gulpfile.js文件修改成以下：
```js
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
```
现在执行一下`gulp`,是不是还是一样的效果。
##Vue
还是先来官网瞧瞧[http://cn.vuejs.org/](http://cn.vuejs.org/)

安装`npm install vue -save`

在入口的JS中加入
```javascript
new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue.js!'
  }
})
```
在index.html中加入
```html
{{ message }}
```
