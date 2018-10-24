/*包含n个用于直接更新状态数据方法的对象*/
import {
  RECEIVE_HOMEDATA,
  RECEIVE_TOPICDATA,
  RECEIVE_NAVDATA
} from './mutation-types.js'

export default {
  //1.获取Home数据
  [RECEIVE_HOMEDATA](state,{homeData}){
    state.homeData = homeData
  },

  [RECEIVE_TOPICDATA](state,{topicData}){
    state.topicData = topicData
  },

  [RECEIVE_NAVDATA](state,{navData}){
    state.navData = navData
  },
 
}