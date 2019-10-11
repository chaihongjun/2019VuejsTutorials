<!--
 * @Author: ChaiHongJun
 * @Date: 2019-10-11 09:12:13
 * @LastEditTime: 2019-10-11 11:00:22
 * @LastEditors: ChaiHongJun
 * @Description: 头部文件注释
 -->
<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->

    <p>{{$store.state.info}}</p>
    <p>共享数据{{$store.state.counter}}</p>

    <button @click="add">+1</button>
    <button @click="sub">-1</button>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: "home",
  // components: {
  //   HelloWorld
  // },
  methods: {
    //提交对应的mutatiions
    add() {
      //提交一个mutatiions变动
      this.$store.commit("increment");
    },
    sub() {
      this.$store.commit("decrement");
    }
  }
};
</script>
