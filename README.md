## 基于react开发的简书项目  （学习）

1. 初始化

引入styled-components进行组件样式和全局样式处理

引入reset.css设置统一样式

使用createGlobal设置reset 和 iconfont 全局样式

2. 引入redux管理数据  配合react-redux

拆分reducer， 在每个组件下设置对应的reducer， 最后使用combineReducers合并所有的reducer

3. 引入redux-thunk中间件进行异步action的使用

4. 引入react-router-dom进行路由管理

5. 解决图片和文字垂直居中对齐 和 图片间隙的问题

该文章讲的非常清晰明朗 https://juejin.im/post/5a7d6b886fb9a06349129463

  
6. 使用 shouldComponentUpdate 来进行组件的性能优化

在数据变更时 判断该组件需不需要进行更新

可以使用PureComponent 代替 Component， pureComponent（避免踩坑，建议搭配immutable.js使用）底层实现了shouldComponentUpdate，不需要我们自己在每个组件中去实现这个方法