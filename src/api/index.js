/*
接口请求函数模块(获取mock数据) 接口与mock数据接口对应
 */
import ajax from './ajax'

export const reqHomeData = () => ajax('/homedata')

export const reqTopicData = () => ajax('/topicdata')

export const reqNavData = () => ajax('/navdata')