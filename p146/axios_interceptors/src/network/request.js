/*
 * @Author: ChaiHongJun
 * @Date: 2019-10-17 15:24:48
 * @LastEditTime: 2019-10-18 09:04:48
 * @LastEditors: ChaiHongJun
 * @Description: 头部文件注释
 */

import axios from "axios";

export function request(config) {
  const instance = axios.create({
    baseURL: "http://192.168.0.222:7300/mock/5d98362bb601f70efc7c1d7b",
    timeout: 3000
  });

  //拦截发送请求
  instance.interceptors.request.use(
    config => {
      // Do something before request is sent
      console.log("interceptors");
      console.log("config:" + config);
      return config;
    },
    error => {
      // Do something with request error
      return Promise.reject(error);
    }
  );

  //返回 promise 对象
  return instance(config);
}
