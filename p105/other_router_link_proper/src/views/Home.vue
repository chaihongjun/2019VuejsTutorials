<!--
 * @Author: ChaiHongJun
 * @Date: 2019-10-04 10:54:18
 * @LastEditTime: 2019-10-04 13:47:16
 * @LastEditors: ChaiHongJun
 * @Description: 头部文件注释
 -->
<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />

    <p>
      router-link 的属性 exact-active-class 和 active-class 可设置路由匹配路径时的class,
      默认值是 .router-link-exact-active 和 .router-link-active
      ,一般不修改这两个class的名称，只是修改其中的CSS规则
    </p>

    <p>
      当然，也可以在router.js里面的路由构造函数内做全局设置
      linkActiveClass 和 linkExactActiveClass
    </p>

    <p>
      exact-active-class 和 active-class 的区别在于，前者
      精确匹配路由，后者只是模糊匹配。e.g
      如果是模糊匹配 则 /article/1 和 /article 都会激活。
    </p>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld
  }
};
</script>

<style scoped>
p {
  text-align: left !important;
}
</style>