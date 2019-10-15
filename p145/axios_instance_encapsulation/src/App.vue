<!--
 * @Author: ChaiHongJun
 * @Date: 2019-10-14 17:20:43
 * @LastEditTime: 2019-10-14 17:20:43
 * @LastEditors: ChaiHongJun
 * @Description: 头部文件注释
 -->
<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
    </div>
    <router-view />

    <p>将项目的网络请求封装在一个模块内，针对每个请求，单独实例化axios</p>
  </div>
</template>

  <script>
import request from "@/network/request.js";
export default {
  name: "App",

  created() {}
};
</script>




<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
