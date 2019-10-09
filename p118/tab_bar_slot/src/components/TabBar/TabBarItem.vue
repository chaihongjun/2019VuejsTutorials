<!--
 * @Author: ChaiHongJun
 * @Date: 2019-10-09 10:19:51
 * @LastEditTime: 2019-10-09 13:58:43
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
  <div class="tabBarItem" @click="click(path)">
    <slot name="icon"></slot>
    <slot name="text"></slot>
  </div>
</template>



<script>
export default {
  name: "TabBarItem",
  props: {
    path: {
      type: String
    }
  },
  methods: {
    click(path) {
      this.$router.push(path);
    }
  }
};
</script>


<style>
@import "../../assets/css/iconfont/iconfont.css";
.tabBarItem {
  flex: 1;
  height: 49px;
  font-size: 18px;
}
.tabBarItem span {
  font-size: 18px;
}
</style>