/*
ajax请求函数模块:封装axios，返回promise对象，直接得到data数据
 */
import axios from 'axios'

export default function ajax(url = '', data = {}, type = 'GET') {
  return new Promise(function (resolve, reject) {

    let promise
     // 发送get请求
    if (type === 'GET') {
      // 将data中所有数据转换成query参数字符串接到url中
      // Object.keys(obj): 得到obj对象自身所有属性的属性名组成的数组
      let dataStr = '' //数据拼接字符串
      Object.keys(data).forEach(key => {
        dataStr += key + '=' + data[key] + '&'
      })
      if (dataStr !== '') {
        dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'))
        url = url + '?' + dataStr
      }
      promise = axios.get(url)
    } else {
      // 发送post请求
      promise = axios.post(url, data)
    }

    promise.then(response => {
      resolve(response.data)
    })
      .catch(error => {
        reject(error)
      })
  })
}