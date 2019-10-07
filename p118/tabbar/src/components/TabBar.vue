<!--
 * @Author: ChaiHongJun
 * @Date: 2019-10-07 10:02:04
 * @LastEditTime: 2019-10-07 17:00:15
 * @LastEditors: ChaiHongJun
 * @Description: 头部文件注释
 -->
<template>
  <div id="tabBar" class="tabBar">
    <slot name="index"></slot>
    <slot name="category"></slot>
    <slot name="cart"></slot>
    <slot name="profile"></slot>
  </div>
</template>


<script>
export default {
  name: "TabBar",
  data() {}
};
</script>