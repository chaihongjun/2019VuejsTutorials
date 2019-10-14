<!--
 * @Author: ChaiHongJun
 * @Date: 2019-10-12 15:39:06
 * @LastEditTime: 2019-10-12 18:00:44
 * @LastEditors: ChaiHongJun
 * @Description: 头部文件注释
 -->
<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
    </div>

    <p>异步操作的状态维护需要在actions里面操作，而一般同步的操作在mutations</p>

    <p>$store.state.counter:{{$store.state.counter}}</p>

    <button @click="add">+1</button>

    <button @click="sub">-1</button>

    <button @click="mul">x2</button>

    <button @click="div">/2</button>

    <router-view />
  </div>
</template>


<script>
export default {
  name: "App",
  methods: {
    add() {
      this.$store.commit("add");
    },
    sub() {
      this.$store.commit("sub");
    },
    mul() {
      this.$store.commit("mul");
    },
    div() {
      //呼叫 actions
      this.$store.dispatch("div");
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
