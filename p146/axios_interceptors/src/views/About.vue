<!--
 * @Author: ChaiHongJun
 * @Date: 2019-10-17 15:23:10
 * @LastEditTime: 2019-10-18 08:55:47
 * @LastEditors: ChaiHongJun
 * @Description: 头部文件注释
 -->
<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script>
import { request } from "@/network/request.js";

export default {
  name: "About",
  created() {
    request({
      url: "/example/mock",
      method: "get"
    })
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>