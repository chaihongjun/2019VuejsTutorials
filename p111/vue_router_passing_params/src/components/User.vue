<!--
 * @Author: ChaiHongJun
 * @Date: 2019-10-05 11:50:01
 * @LastEditTime: 2019-10-05 14:18:11
 * @LastEditors: ChaiHongJun
 * @Description: 头部文件注释
 -->
<template>
  <div class="user">
    <p>我是 {{$route.params.id}}</p>
    <p>vue-router传递参数有两种类型：params和query</p>
    <p>
      params类型
      <ul>
        <li>路由格式：/routerpath/:id</li>
        <li>传递方式：在path后面跟对应的值 to的值v-bind绑定 </li>
        <li>传递后的路径 e.g： /routerpath/123, /routerpath/abc</li>
      </ul>
      query类型
      <ul>
        <li>路由格式就是普通格式：/routerpath</li>
        <li>传递方式：对象中使用query的key作为传递方式</li>
        <li>传递后的路径：e.g. /routerpath?id=123</li>
      </ul>
    </p>
  </div>
</template>
<script>
export default {
  name: "User"
};
</script>
<style  scoped>
</style>