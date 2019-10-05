<!--
 * @Author: ChaiHongJun
 * @Date: 2019-10-05 09:12:38
 * @LastEditTime: 2019-10-05 09:12:38
 * @LastEditors: ChaiHongJun
 * @Description: 头部文件注释
 -->
<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

//懒加载
const HelloWorld = () => import("@/components/HelloWorld.vue");

export default {
  name: "home",
  components: {
    HelloWorld
  }
};
</script>
