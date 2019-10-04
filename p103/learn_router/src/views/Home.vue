<!--
 * @Author: ChaiHongJun
 * @Date: 2019-10-04 08:50:22
 * @LastEditTime: 2019-10-04 09:27:09
 * @LastEditors: ChaiHongJun
 * @Description: 头部文件注释
 -->
<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HowToUseRouter msg="如何使用vue-router" />
  </div>
</template>

<script>
// @ is an alias to /src
import HowToUseRouter from "@/components/HowtoUseRouter";

export default {
  name: "home",
  components: {
    HowToUseRouter
  }
};
</script>
