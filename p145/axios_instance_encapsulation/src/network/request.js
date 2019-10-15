/*
 * @Author: ChaiHongJun
 * @Date: 2019-10-14 17:28:52
 * @LastEditTime: 2019-10-15 15:13:37
 * @LastEditors: ChaiHongJun
 * @Description: 将网络请求封装到一个文件
 */
import axios from "axios";

/* 封装方式一 */
/*
config：   对象，axios的配置选项
success    函数，用于返回响应的对象 
failure    函数，用于返回响应失败对象
*/

// export function request(config, success, failure) {
//   // 创建axios 实例
//   const instance = axios.create({
//     methods: "get",
//     baseURL: "http://192.168.0.222:7300",
//     headers: {
//       "X-Requested-With": "CHJ"
//     },
//     timeout: "3000"
//   });
//   // 实例请求,正在发送请求
//   instance(config)
//     .then(res => {
//       /* success() 用来返回响应的数据 */
//       success(res);
//     })
//     .catch(err => {
//       /*  failure() 用来响应返回的错误  */
//       failure(err);
//     });
// }

/* 封装方式 二 */
/*
config  对象，包含axios的基础配置项和响应函数

config.baseConfig 对象
config.success()    处理响应函数
config.failure(err);  处理错误函数

*/
// export function request(config) {
//   const axiosRootConfig = {
//     methods: "get",
//     baseURL: "http://192.168.0.222:7300",
//     headers: {
//       "X-Requested-With": "CHJ"
//     },
//     timeout: "3000"
//   };

//   const instance = axios.create(axiosRootConfig);

//   instance(config.baseConfig)
//     .then(res => {
//       config.success(res);
//     })
//     .catch(err => {
//       config.failure(err);
//     });
// }

/* 封装方式 三 */
// Promise

export function request(config) {
  return new Promise((resolve, reject) => {
    const axiosRootConfig = {
      methods: "get",
      baseURL: "http://192.168.0.222:7300",
      headers: {
        "X-Requested-With": "CHJ"
      },
      timeout: "3000"
    };
    const instance = axios.create(axiosRootConfig);

    instance(config)
      .then(res => {
        resolve(res.data.data);
      })
      .catch(err => {
        reject(err);
      });
  });
}
