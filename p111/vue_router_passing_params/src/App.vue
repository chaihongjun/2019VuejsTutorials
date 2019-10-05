<!--
 * @Author: ChaiHongJun
 * @Date: 2019-10-05 10:26:38
 * @LastEditTime: 2019-10-05 15:07:13
 * @LastEditors: ChaiHongJun
 * @Description: 头部文件注释
 -->
<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>|
      <!-- params方式传递参数 -->
      <router-link v-bind:to="'/user/' +id">User</router-link>|
      <!-- query传参方式  to属性值应该是query对象-->
      <!-- <router-link to="/profile?name=chj&gender=male">Profile</router-link> -->
      <router-link v-bind:to="{ path:'/profile', query:{name:'chj',gender:'male'}}">Profile</router-link>
    </div>
    <router-view />
  </div>
</template>
<script>
export default {
  name: "App",
  data() {
    return {
      id: "abc"
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
