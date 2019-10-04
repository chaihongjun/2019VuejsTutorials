<!--
 * @Author: ChaiHongJun
 * @Date: 2019-10-04 16:16:51
 * @LastEditTime: 2019-10-04 16:57:08
 * @LastEditors: ChaiHongJun
 * @Description: 头部文件注释
 -->
<template>
  <!-- this.$route 当前激活的路由 -->
  <!-- 接收来自父组件的数据 -->
  <div class="user">我是用户{{$route.params.id}}</div>
</template>



<script>
export default {
  name: "User"
};
</script>