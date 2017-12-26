### vueProject

vue构建的单页面应用-移动端开发<br/>
包括购物车的项目，项目涉及到对money的逻辑计算。<br/>
涉及 ES6 等新属性，<br/>

#### 项目运行：
cnpm install<br/>
npm run dev启动项目<br/>

#### 技术栈：
vue ，vuex ， vue-router ，webpack ， ES6 ，mui ， sass ， flex <br/>

#### 小部分说明：
prop 事件传递<br/>
父组件通过 prop 给子组件下发数据，子组件通过事件给父组件发送消息。<br/>
![image](https://raw.githubusercontent.com/wiki/Amyidol/vueProject/prop.png)
1,日期格式化的实现方案分析(使用全局过滤器和momentjs实现<br/>
2，实现思路分析和参数传递获取，api文档中的参数传递：<br/>
3,页面功能代码实现<br/>
4,....
vue-评论组件：<br/>
1，实现点击购物车按钮后将购买数量同步到底部购物车徽章中：<br/>
2, 点击购物车按钮后出现小球动画飞入提醒：<br/>
3.....
bug解决：在switch状态相互影响的问题<br/>
.....<br/>

#### 梗概目录说明<br/>
--build  // webpack配置文件<br/>
-- config // 项目打包路径<br/>
-- dist // 源利用webpack发布后的文件存储目录<br/>
-- src // 源码目录<br/>
---- Home.vue // 系统首页<br/>
---- App.vue // 系统根组件<br/>
---- main.js // webpack打包的入口文件<br/>
---- components //vue组件页面存放区（功能分类存放区）<br/>
------ goods <br/>
------ news <br/>
------ photo <br/>
------ shopcar<br/>    
------ subcom<br/>     
-- -- kits //存放公共方法的文件夹<br/>
---- statics // 项目静态资源文件存放<br/>
------ css <br/>
---- -- imgs <br/>
---- -- mui <br/>
---- index.html // 入口html文件<br/>
---- package.json // nodejs包管理文件<br/>
---- README.md // 项目说明文件<br/>
---- .gitignore // git忽略文件<br/>
