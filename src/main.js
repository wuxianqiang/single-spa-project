import router from './router'
import store from './store'


function registerApp () {
  return {
    router, // 子项目的router
    store, // 子项目的store
    beforeEach (to, from, next) {
      next()
    }
  }
}
// console.log(registerApp, '源文件')
// if (module.hot) {
//   module.hot.accept('./router/index', () => {
//     console.log('热更新1')
//   })
// }

try {
  // eslint-disable-next-line no-undef
  __jp0(registerApp, '自定义的请求')
} catch (error) {
  console.log(error)
}

// eslint-disable-next-line no-undef
// __jp('返回的数据')
export default registerApp
