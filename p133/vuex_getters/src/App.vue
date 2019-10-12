<!--
 * @Author: ChaiHongJun
 * @Date: 2019-10-11 16:39:30
 * @LastEditTime: 2019-10-12 08:54:01
 * @LastEditors: ChaiHongJun
 * @Description: 头部文件注释
 -->
<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
    </div>

    <p>获取年龄小于20岁的学生信息：</p>
    <p>{{getLessThan20}}</p>

    <div class="infos">
      <p>store共享 state里面的数据给全部组件,组件模板内的访问方式是插值访问$store.state.变量名</p>

      <p>而在任意一个组件内改变state内数据变化的方法是 this.$store.commit(mutations里面的一个事件名称)</p>
      <p>在mutation里面则是通过 state.变量名 的方式访问</p>
    </div>
    <router-view />
  </div>
</template>


<script>
export default {
  name: "App",
  computed: {
    getLessThan20() {
      return this.$store.state.students.filter(obj => {
        return obj.age < 20;
      });
    }
  }
};
</script>



<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.infos {
  border: 1px solid #cccccc;
  text-align: left;
}
</style>
