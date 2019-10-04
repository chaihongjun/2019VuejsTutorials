<!--
 * @Author: ChaiHongJun
 * @Date: 2019-10-04 16:06:38
 * @LastEditTime: 2019-10-04 17:10:47
 * @LastEditors: ChaiHongJun
 * @Description: 头部文件注释
 -->
<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>由来：页面的path路径不太确定，比如/user/1和/user/2，但是都会进入的都是相同的用户界面。造成path和Component某种匹配关系。</p>

    <p>动态路由使用步骤</p>
    <ul class="ul">
      <li>首先在路由配置router.js配置好规则，比如 path: "/user/:id"</li>
      <li>然后在 router-link 使用v-bind绑定好to属性值 :to="'/user/'+id" ，id是父组件的数据</li>
      <li>在动态路由指向的组件内 可以使用插值法$route.params.id访问</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
p {
  margin: 40px 0 0;
  max-width: 800px;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: block;
  margin: 0 10px;
  text-align: left;
}
a {
  color: #42b983;
}
</style>
