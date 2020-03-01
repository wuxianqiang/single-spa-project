import router from './router'
import store from './store'

function registerApp () {
  return {
    router, // 子项目的router
    store // 子项目的store
  }
}
// console.log(registerApp, '源文件')

// if (module.hot) {
//   module.hot.accept('./router/index', () => {
//     window.wmadSubapp(registerApp, true); // 支持子工程热加载的信息传递
//   })
// }

export default registerApp
