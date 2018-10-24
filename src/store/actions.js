/*包含n个用于间接更新状态数据方法的对象:发送ajax请求从后台获取数据*/
import {reqHomeData} from '../api'
import {
  RECEIVE_HOMEDATA
} from './mutation-types.js'

export default {

  //1.异步获取首页数据列表（数据来自mock数据）
  async getHomeData({commit}, cb) {
    const result = await reqHomeData()
    if(result.code===0) {
      const homeData = result.data
      commit(RECEIVE_HOMEDATA, {homeData})
      // 如果组件中传递了接收消息的回调函数, 数据更新后, 调用回调通知调用的组件
      typeof cb ==='function' && cb()
    }
  },      

}