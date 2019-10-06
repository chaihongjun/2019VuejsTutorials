<!--
 * @Author: ChaiHongJun
 * @Date: 2019-10-05 23:02:47
 * @LastEditTime: 2019-10-06 16:55:02
 * @LastEditors: ChaiHongJun
 * @Description: 头部文件注释
 -->
<template>
  <div class="about">
    <h1>This is an about page</h1>

    <HelloWorld></HelloWorld>
  </div>
</template>


<script>
const HelloWorld = () => import("@/components/HelloWorld");

export default {
  name: "About",
  components: {
    HelloWorld
  },
  /* 组件内守卫 */
  //进入组件前
  beforeRouteEnter(to, from, next) {
    console.log("进入组件About前");
    next();
  },

  //进入后更新
  beforeRouteUpdate(to, from, next) {
    consolelog("进入About后更新");
    next();
  },
  //离开组件前
  beforeRouteLeave(to, from, next) {
    console.log("离开组件About前");
    next();
  }
};
</script>