<!--
 * @Author: ChaiHongJun
 * @Date: 2019-10-11 16:39:30
 * @LastEditTime: 2019-10-11 17:20:11
 * @LastEditors: ChaiHongJun
 * @Description: 头部文件注释
 -->
<template>
  <div class="home">
    Vuex的getters相当于组件里面的computed属性
    <p>counter的值是:{{$store.state.counter}}</p>
    <p>自动计算counter的平方数(getters)：{{$store.getters.power}}</p>

    <button @click="add">+1</button>
    <button @click="sub">-1</button>
  </div>
</template>

<script>
export default {
  name: "home",
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
