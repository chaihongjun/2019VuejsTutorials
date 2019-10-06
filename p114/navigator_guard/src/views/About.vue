<!--
 * @Author: ChaiHongJun
 * @Date: 2019-10-05 23:02:47
 * @LastEditTime: 2019-10-06 00:11:49
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
  }
};
</script>