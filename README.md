#移动端工作目录
平时工作时候的基础目录，用来写移动端网页的基础构造

##基本目录

```
my_work_directory
├─ dev // 开发环境用文件目录
│   ├─ stylus // stylus文件目录
│   │   └─ *.styl
│   └─ scripts // js文件目录
│        └─ *.js
├─ build // 生产环境用文件目录
│   ├─ stylesheets
│   │   └─ *.css
│   └─ scripts
│        └─ *.js
├─ vendor // 存放库的目录
│   ├─ stylesheets
│   │   └─ *.css
│   └─ scripts
│        └─ *.js
├─ public.html // html基础结构文件
├─ package.json // npm配置文件
└─ gulpfile.js // gulp配置文件
```

##使用的库及工具

###库

* [lib.flexible](https://github.com/amfe/lib.flexible) ——
主要依赖的库，用于移动端屏幕宽度自适应。须作`内敛处理`，在所有的库加载前运行这个库
> 在页面css文件加载完成前页面会出现短暂的排版混乱（主要是root字号太大的缘故），正在考虑解决方案。

* [zepto.js](https://github.com/madrobby/zepto) ——
移动端的jquery替代方案，主要用于表单验证以及弹出框生成，插件存放于widget目录

* [Swiper](https://github.com/nolimits4web/Swiper) ——
轮播以及页面滑动特效。
> 库比较大……考虑有空后读源码重写一个比较轻量的替代方案。

* [zepto.fullpage](https://github.com/yanhaijing/zepto.fullpage) ——
用于制作移动端的fullpage特效，也可以使用[parallax.js](https://github.com/hahnzhu/parallax.js)

###工具

* 包管理 —— npm,bower

* 依赖管理 —— browserify

* 构建工具 —— gulp

* CSS预编译 —— stylus

* js压缩 —— uglify