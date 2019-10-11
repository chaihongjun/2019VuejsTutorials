<!--
 * @Author: ChaiHongJun
 * @Date: 2019-10-11 16:39:30
 * @LastEditTime: 2019-10-11 17:20:04
 * @LastEditors: ChaiHongJun
 * @Description: 头部文件注释
 -->
<template>
  <div class="about">
    <h1>This is an about page</h1>

    <p>counter的值是:{{$store.state.counter}}</p>
    <p>自动计算counter的平方数(getters)：{{$store.getters.power}}</p>

    <button @click="add">+1</button>
    <button @click="sub">-1</button>
  </div>
</template>


<script>
export default {
  name: "About",
  methods: {
    add() {
      //让store维护数据
      this.$store.commit("increment");
    },
    sub() {
      this.$store.commit("decrement");
    }
  }
};
</script>