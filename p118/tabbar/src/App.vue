<!--
 * @Author: ChaiHongJun
 * @Date: 2019-10-07 09:40:20
 * @LastEditTime: 2019-10-07 17:12:06
 * @LastEditors: ChaiHongJun
 * @Description: TabBar 方案一
 -->
<template>
  <div id="app">
    <TabBar>
      <template slot="index">
        <div class="tabBarItem" @click="goToIndex">
          <span class="icon iconfont icon-shouye-"></span>
          <p>首页</p>
        </div>
      </template>
      <template slot="category">
        <div class="tabBarItem" @click="goToCategory">
          <span class="icon iconfont icon-fenlei-"></span>
          <p>分类</p>
        </div>
      </template>
      <template slot="cart">
        <div class="tabBarItem" @click="goToCart">
          <span class="icon iconfont icon-gouwuche-"></span>
          <p>购物车</p>
        </div>
      </template>

      <template slot="profile">
        <div class="tabBarItem" @click="goToProfile">
          <span class="icon iconfont icon-wode-"></span>
          <p>我的</p>
        </div>
      </template>
    </TabBar>
    <router-view />
  </div>
</template>
  <script>
const TabBar = () => import("@/components/TabBar.vue");
export default {
  name: "App",
  components: {
    TabBar
  },

  methods: {
    goToIndex() {
      this.$router.push("/");
    },
    goToCategory() {
      this.$router.push("/category");
    },
    goToCart() {
      this.$router.push("/cart");
    },
    goToProfile() {
      this.$router.push("/profile");
    }
  }
};
</script>
