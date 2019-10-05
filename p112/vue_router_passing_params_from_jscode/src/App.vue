<!--
 * @Author: ChaiHongJun
 * @Date: 2019-10-05 15:57:33
 * @LastEditTime: 2019-10-05 16:51:18
 * @LastEditors: ChaiHongJun
 * @Description: 头部文件注释
 -->
<template>
  <div id="app">
    <p>不使用 router-link 做路由导航</p>
    <div id="nav">
      <!-- <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>-->
      <button @click="home">Home</button>
      <button @click="about">About</button>
      <button @click="user">User</button>
      <button @click="profile">Profile</button>
    </div>
    <router-view />
  </div>
</template>
<script>
export default {
  name: "App",
  data() {
    return {
      id: "admin"
    };
  },
  methods: {
    home() {
      this.$router.push("/");
    },
    about() {
      this.$router.push("/about");
    },
    user() {
      this.$router.push("/user/" + this.id);
    },
    profile() {
      this.$router.push({
        path: "/profile",
        query: { name: "chj", gender: "male" }
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
