<!--
 * @Author: ChaiHongJun
 * @Date: 2019-10-05 10:26:38
 * @LastEditTime: 2019-10-05 15:44:48
 * @LastEditors: ChaiHongJun
 * @Description: 头部文件注释
 -->
<template>
  <div class="profile">
    <h2>我是 profile</h2>


<p>{{$route.query}}</p>



   <button @click="btn">看console</button>
     


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
        <li>传递方式：对象中使用query的key作为传递方式,动态绑定to属性</li>
        <li>传递后的路径：e.g. /routerpath?id=123</li>
      </ul>
    </p>
  </div>
</template>
<script>
export default {
  name: "Profile",

  methods: {
     btn(){
        console.log(this.$route.query)
      //{name:"chj",gender:"male"}


     }
  }


};
</script>
<style  scoped>
</style>