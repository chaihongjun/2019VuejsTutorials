<!--
 * @Author: ChaiHongJun
 * @Date: 2019-10-05 23:02:47
 * @LastEditTime: 2019-10-06 16:55:15
 * @LastEditors: ChaiHongJun
 * @Description: 头部文件注释
 -->
<template>
  <div class="hello">hello world!</div>
</template>

<script>
export default {
  name: "HelloWorld",
  /* 组件内守卫 */
  //进入组件前
  beforeRouteEnter(to, from, next) {
    console.log("进入组件Helloworld前");
    next();
  },

  //进入后更新
  beforeRouteUpdate(to, from, next) {
    consolelog("进入Helloworld后更新");
    next();
  },
  //离开组件前
  beforeRouteLeave(to, from, next) {
    console.log("离开组件Helloworld前");
    next();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
