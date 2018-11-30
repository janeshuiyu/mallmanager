// 开发vue插件
import axios from 'axios'

const MyHttpServer = {}
// 配置Vue插件
MyHttpServer.install = function fn (Vue) {
  axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1'
  Vue.prototype.$http = axios
}

export default MyHttpServer
