<!--
 * @Author: ChaiHongJun
 * @Date: 2019-10-04 08:50:22
 * @LastEditTime: 2019-10-04 09:39:55
 * @LastEditors: ChaiHongJun
 * @Description: 头部文件注释
 -->
<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ul>
      <li v-for="(procedure,index) in procedures" :key="index">{{index+1}}.{{procedure}}</li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "HowtoUseRouter",
  props: {
    msg: String
  },
  data() {
    return {
      //router.js 编写规则
      procedures: [
        "安装vue-router:npm i vue-router --save (如果通过脚手架安装过的，略过此步骤)",
        "项目入口文件导入 import router from './router' 并实例化Vue对象的时候添加 router选项",
        "导入路由页面需要的组件（页面）",
        "编写router.js路由配置文件(与入口文件main.js同级)",
        "因为要Vue启用router，所以router.js首先要引入Vue和Vue-router :import Vue from 'vue'; import Router from 'vue-router';",
        "然后，启用路由 Vue.use(Router); ",
        "接着实例化Router对象并在其中编写路由映射规则 ：export default new Router({ routes:[] })，routes是一个数组，每个数组项是一个映射规则对象{path:'somepath',name:'somename',component:componentname}",
        "在父组件（一般是App根组件）使用 <router-link to=' /'>标签对编写路由路径，to指向的路径对应router.js内的path",
        "最后使用  <router-view /> 渲染组件视图"
      ]
    };
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
  text-align: left;
}
li {
  display: block;
  margin: 5px 10px;
  line-height: 20px;
}
a {
  color: #42b983;
}
</style>
