<!--
 * @Author: ChaiHongJun
 * @Date: 2019-10-04 10:54:18
 * @LastEditTime: 2019-10-04 13:43:56
 * @LastEditors: ChaiHongJun
 * @Description: 头部文件注释
 -->
<template>
  <div id="app">
    <div id="nav">
      <!--router-link 的属性 exact-active-class 和 active-class 可设置路由匹配路径时的class
        默认值是  .router-link-exact-active 和 .router-link-active
      一般不修改这两个class的名称，只是修改其中的CSS规则-->
      <router-link to="/" active-class="active" exact-active-class="exactActive">Home</router-link>|
      <router-link to="/about">About</router-link>|
      <router-link to="/contact">Contact</router-link>

      <!--
          tag属性可以用其他元素来渲染router-link替代默认的a标签 
          而且可以添加class
      -->
      <router-link to="/" tag="button" class="btn">Home</router-link>|
      <router-link to="/about" tag="button">About</router-link>|
      <!-- replace属性不会留下history -->
      <router-link to="/contact" tag="button" replace>Contact</router-link>
    </div>
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

#nav .active {
  color: lightcoral;
}

#nav .exactActive {
  color: crimson;
}
</style>
