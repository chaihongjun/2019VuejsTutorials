<!--
 * @Author: ChaiHongJun
 * @Date: 2019-10-04 16:06:38
 * @LastEditTime: 2019-10-04 16:53:27
 * @LastEditors: ChaiHongJun
 * @Description: 头部文件注释
 -->


<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>|
      <router-link to="/user">User</router-link>|
      <!-- <router-link to="/user/admin">admin</router-link>|
      <router-link to="/user/guest">guest</router-link>-->

      <!-- <router-link v-bind:to="这里应该是一个变量">admin</router-link>| -->
      <!-- '/user' 是字符串 用 加号(+) 和组件变量连接起来 -->
      <router-link :to="'/user/'+id">点击登录</router-link>|
    </div>
    <router-view />
  </div>
</template>
  

  <script>
export default {
  name: "App",
  data() {
    return {
       //当前设置一个ID，传值到用户组件页面
      id: "guest111"
    };
  }
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
