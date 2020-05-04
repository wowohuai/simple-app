## 基于react开发的简书项目  （学习）

1. 初始化

引入styled-components进行组件样式和全局样式处理

引入reset.css设置统一样式

使用createGlobal设置reset 和 iconfont 全局样式

2. 引入redux管理数据  配合react-redux

拆分reducer， 在每个组件下设置对应的reducer， 最后使用combineReducers合并所有的reducer

3. 引入redux-thunk中间件进行异步action的使用

