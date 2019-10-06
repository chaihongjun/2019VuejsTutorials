<!--
 * @Author: ChaiHongJun
 * @Date: 2019-10-05 23:02:47
 * @LastEditTime: 2019-10-06 17:00:42
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
  </div>
</template>


<script>
export default {
  name: "App",
  /* 组件内守卫 */
  //进入组件前
  beforeRouteEnter(to, from, next) {
    console.log("进入组件App前");
    next();
  },

  //进入后更新
  beforeRouteUpdate(to, from, next) {
    consolelog("进入App后更新了东西");
    next();
  },
  //离开组件前
  beforeRouteLeave(to, from, next) {
    console.log("离开组件App前");
    next();
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
