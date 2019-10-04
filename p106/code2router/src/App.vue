<!--
 * @Author: ChaiHongJun
 * @Date: 2019-10-04 14:29:00
 * @LastEditTime: 2019-10-04 15:31:26
 * @LastEditors: ChaiHongJun
 * @Description: 头部文件注释
 -->


<template>
  <div id="app">
    <div class="container">
      <nav class="nav justify-content-center">
        <!-- <a @click="clickIndex" href="#" class="btn btn-primary" role="button">首页</a>
        <a @click="clickAbout" href="#" class="btn btn-primary" role="button">关于</a>
        <a @click="clickContact" href="#" class="btn btn-primary" role="button">联系</a>-->

        <button type="button" class="btn btn-primary" @click="clickIndex">首页</button>

        <button type="button" class="btn btn-primary" @click="clickAbout">关于</button>

        <button type="button" class="btn btn-primary" @click="clickContact">联系</button>
      </nav>
    </div>
    <!-- <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>-->

    <router-view />
  </div>
</template>



  <script>
export default {
  name: "App",
  methods: {
    clickIndex() {
      //this 指向当前组件

      // $router:VueRouter 是路由插件实例对象(全局的路由对象，路由器) 通过push() go() 等方法可以改变路由
      // $route ：Object  是当前跳转的一条路由，包含了该路由一系列属性，比如 params  query path 等。

      this.$router.push("/");
      //this.$router.replace("/");
    },

    clickAbout() {
      this.$router.push("/about");
      //this.$router.replace("/about");
    },

    clickContact() {
      this.$router.push("/contact");
      //  this.$router.replace("/contact");
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
