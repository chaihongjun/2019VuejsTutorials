<!--
 * @Author: ChaiHongJun
 * @Date: 2019-10-14 11:30:54
 * @LastEditTime: 2019-10-14 11:40:07
 * @LastEditors: ChaiHongJun
 * @Description: 头部文件注释
 -->
<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
    </div>

    <p>axios并发请求 demo</p>

    <router-view />
  </div>
</template>

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
