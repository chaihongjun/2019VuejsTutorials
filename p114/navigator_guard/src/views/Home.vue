<!--
 * @Author: ChaiHongJun
 * @Date: 2019-10-05 23:02:47
 * @LastEditTime: 2019-10-06 17:00:50
 * @LastEditors: ChaiHongJun
 * @Description: 头部文件注释
 -->
<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
  </div>
</template>

<script>
export default {
  name: "home",
  /* 组件内守卫 */
  //进入组件前
  beforeRouteEnter(to, from, next) {
    console.log("进入组件HOME前");
    next();
  },

  //进入后更新
  beforeRouteUpdate(to, from, next) {
    consolelog("进入HOME后更新了东西");
    next();
  },
  //离开组件前
  beforeRouteLeave(to, from, next) {
    console.log("离开组件HOMe前");
    next();
  }
};
</script>
