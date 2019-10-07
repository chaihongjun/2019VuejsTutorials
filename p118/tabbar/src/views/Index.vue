<!--
 * @Author: ChaiHongJun
 * @Date: 2019-10-07 09:40:20
 * @LastEditTime: 2019-10-07 11:33:02
 * @LastEditors: ChaiHongJun
 * @Description: 头部文件注释
 -->
<template>
  <div class="index">
    <img alt="Vue logo" src="../assets/logo.png" />

    <p>tabbar 一般是 移动端页面底部的菜单切换条</p>

    <p>实现思路</p>
    <ul>
      <li>自定义tabbar组件，并定位于页面底部</li>
      <li>tabbar显示的内容由外界决定(slot)，布局方式flex</li>
      <li>显示的内容为文字和图片</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "index"
};
</script>
