<!--
 * @Author: ChaiHongJun
 * @Date: 2019-10-11 09:12:13
 * @LastEditTime: 2019-10-11 10:58:26
 * @LastEditors: ChaiHongJun
 * @Description: 头部文件注释
 -->
<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>共享数据{{$store.state.counter}}</p>

    <button @click="add">+1</button>
    <button @click="sub">-1</button>
  </div>
</template>


<script>
export default {
  name: "About",
  methods: {
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