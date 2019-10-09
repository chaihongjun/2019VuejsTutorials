<!--
 * @Author: ChaiHongJun
 * @Date: 2019-10-07 18:05:57
 * @LastEditTime: 2019-10-09 13:59:38
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
  <div id="app">
    <router-view></router-view>

    <!-- 菜单栏框架组件 -->
    <TabBar>
      <!-- 菜单选项组件 -->
      <!-- <TabBarItem>
        <span class="iconfont icon icon-shouye-" slot="icon"></span>
        <p slot="text">首页</p>
      </TabBarItem>
      <TabBarItem>
        <span class="iconfont icon icon-shouye-" slot="icon"></span>
        <p slot="text">首页</p>
      </TabBarItem>
      <TabBarItem>
        <span class="iconfont icon icon-shouye-" slot="icon"></span>
        <p slot="text">首页</p>
      </TabBarItem>
      <TabBarItem>
        <span class="iconfont icon icon-shouye-" slot="icon"></span>
        <p slot="text">首页</p>
      </TabBarItem>-->

      <TabBarItem v-for="(menu,index) in menus" :key="index" :path="menu.path">
        <span class="iconfont icon" :class="menu.iconClass" slot="icon"></span>
        <p slot="text">{{menu.name}}</p>
      </TabBarItem>
    </TabBar>
  </div>
</template>

<script>
const TabBar = () => import("@/components/TabBar/TabBar.vue");
const TabBarItem = () => import("@/components/TabBar/TabBarItem.vue");

export default {
  name: "App",
  components: {
    TabBar,
    TabBarItem
  },
  data() {
    return {
      menus: [
        { name: "首页", iconClass: "icon-shouye-", path: "/" },
        { name: "分类", iconClass: "icon-fenlei-", path: "/category" },
        { name: "购物车", iconClass: "icon-gouwuche-", path: "/cart" },
        { name: "我的", iconClass: "icon-wode-", path: "/profile" }
      ]
    };
  }
};
</script>




<style>
/* 这里需要使用@ */

@import "./assets/css/base.css";
</style>
