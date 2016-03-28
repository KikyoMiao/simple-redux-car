# simple-redux-car

```
//项目运行
npm install
npm run watch
```

关于 Redux 的一些学习总结，仅供参考 不足之处欢迎指出 互相学习
学习参考资料来源：[《 Redux 中文文档 》][1] [《 看漫画 学 Redux 》][2]

### 首先最需要明白的概念
Redux 是单一数据源即“**所有的 state 都以一个对象树的形式储存在一个单一的 store 中。**”
**state 是只读的**，唯一改变 state 的方法是触发 action。

### 下面是 Redux 的一些基本概念
 - Redux 的核心是一个 store
 - store 童鞋是一个 Javascript 对象，用 createStore 创建
 - store 有两个核心方法：getState() 和 dipatch()
 - getState() 用于获取 state 当前状态
 - dipatch() 用于接受 action 信息来更新 state 状态
 - action 也是一个 Javascript 对象, 我们通常使用 type 字段来描述要执行的动作, 通过 dispatch() 将action传到store
 - reducer 是一个 Javascript 函数, 接收旧的 state 和 action，返回新的 state。
`(previousState, action) => newState`


  [1]: http://cn.redux.js.org/
  [2]: https://github.com/jasonslyvia/a-cartoon-intro-to-redux-cn