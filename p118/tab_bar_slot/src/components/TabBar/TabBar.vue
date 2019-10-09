<!--
 * @Author: ChaiHongJun
 * @Date: 2019-10-08 15:20:18
 * @LastEditTime: 2019-10-09 10:45:22
 * @LastEditors: ChaiHongJun
 * @Description: 头部文件注释
 -->
<!-- 封装一个 tabBar 组件 
结构:
  tabBar
    slot
      tabBarItem
        slot -- 文字 对应菜单文字
        slot -- 图片 对应菜单图标  
-->
<template>
  <div id="tabBar">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "TabBar"
};
</script>
<style>
#tabBar {
  display: flex;
  justify-content: space-around;
  text-align: center;
  align-items: center;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  background: #d8d7da;
  box-shadow: 0 -1px 1px rgba(100, 100, 100, 0.2);
}
</style>