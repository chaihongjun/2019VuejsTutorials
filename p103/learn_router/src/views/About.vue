<!--
 * @Author: ChaiHongJun
 * @Date: 2019-10-04 08:50:22
 * @LastEditTime: 2019-10-04 10:02:36
 * @LastEditors: ChaiHongJun
 * @Description: 头部文件注释
 -->
<template>
  <div class="about">
    <h1>项目打包注意事项</h1>

    <p>打包之后资源文件404解决方法步骤：</p>
    <ul>
      <li v-for="(procedure,index) in procedures" :key="index">{{index+1}}.{{procedure}}</li>
    </ul>
  </div>
</template>



<script>
export default {
  name: "about",
  data() {
    return {
      procedures: [
        "在项目根目录创建文件 vue.config.js",
        "创建对象 module.exports",
        "配置属性和值  publicPath: './'"
      ]
    };
  }
};
</script>


<style scoped>
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
</style>