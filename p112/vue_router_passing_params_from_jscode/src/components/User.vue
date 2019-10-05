<!--
 * @Author: ChaiHongJun
 * @Date: 2019-10-05 15:57:33
 * @LastEditTime: 2019-10-05 16:47:26
 * @LastEditors: ChaiHongJun
 * @Description: 头部文件注释
 -->
<template>
  <div class="user">我是用户：{{$route.params.id}}</div>
</template>

<script>
export default {
  name: "User"
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
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
