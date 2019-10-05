<!--
 * @Author: ChaiHongJun
 * @Date: 2019-10-05 09:12:38
 * @LastEditTime: 2019-10-05 09:51:23
 * @LastEditors: ChaiHongJun
 * @Description: 头部文件注释
 -->
<template>
  <div class="about">
    <h1>This is an about page</h1>

    <!-- to属性需要写绝对路径 -->
    <router-link to="/about/news">news</router-link>|
    <router-link to="/about/message">message</router-link>

    <router-view />
  </div>
</template>



<style>
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
