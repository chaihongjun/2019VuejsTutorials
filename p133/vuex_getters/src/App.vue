<!--
 * @Author: ChaiHongJun
 * @Date: 2019-10-11 16:39:30
 * @LastEditTime: 2019-10-11 17:52:53
 * @LastEditors: ChaiHongJun
 * @Description: 头部文件注释
 -->
<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
    </div>

    <p>获取年龄小于20岁的学生信息：</p>
    <p>{{getLessThan20}}</p>

    <router-view />
  </div>
</template>


<script>
export default {
  name: "App",
  computed: {
    getLessThan20() {
      return this.$store.state.students.filter(obj => {
        return obj.age < 20;
      });
    }
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
