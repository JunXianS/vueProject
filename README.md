# vueProject
基于vue构建的大型单页面应用-移动端开发
包括购物车的项目，项目涉及到对money的逻辑计算。
涉及 ES6 等新属性，

# 项目运行：
cnpm install
npm run启动项目

# 技术栈：
vue ，vuex ， vue-router ，webpack ， ES6 ，mui ， sass ， flex 

# 其中的一小部分说明：

1,新闻资讯-日期格式化的实现方案分析(使用全局过滤器和momentjs实现

2，新闻资讯-实现思路分析和参数传递获取，api文档中的参数传递：

3,资讯详情-页面功能代码实现

4,....

vue-评论组件：

1，实现点击购物车按钮后将购买数量同步到底部购物车徽章中：

2, 点击购物车按钮后出现小球动画飞入提醒：

3.....


bug解决：在switch状态相互影响的问题

.....

# 涉及后台项目接口：
包括后台接口api文件，以及说明

# 项目梗概目录说明（内部说明略）
.
|--build                                       // webpack配置文件

|-- config                                     // 项目打包路径

|-- dist                                       // 源利用webpack发布后的文件存储目录

|-- src                                        // 源码目录

|  |-- Home.vue                                // 系统首页

|  |-- App.vue                                 // 系统根组件

|  |-- main.js                                 // webpack打包的入口文件

|   |-- components                             //vue组件页面存放区（功能分类存放区）

|  |   |-- goods      

|  |   |-- news  

|  |   |-- photo 

|  |   |-- shopcar       

|  |   |-- subcom       

|  | -- kits                                      //存放公共方法的文件夹

|-- statics                                       // 项目静态资源文件存放

|  |-- css       

|  | -- imgs   

|  | -- mui   

|-- index.html                                    // 入口html文件

|-- package.json                                  // nodejs包管理文件

|-- README.md                                     // 项目说明文件

|-- .gitignore                                    // git忽略文件
.
