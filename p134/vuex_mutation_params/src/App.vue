<!--
 * @Author: ChaiHongJun
 * @Date: 2019-10-12 09:23:23
 * @LastEditTime: 2019-10-12 11:25:47
 * @LastEditors: ChaiHongJun
 * @Description: 头部文件注释
 -->
<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
    </div>

    <p>Vuex的store唯一更新方式就是commit mutation</p>
    <p>mutation 包含量事件类型和回调函数handler</p>

    <p>mutation(eventType,handler) handler的第一个参数是state</p>

    <button @click="add">+1</button>
    <button @click="sub">-1</button>

    <button @click="plus(10)">加10</button>

    <button @click="show=!show">显示球员</button>

    <button @click="addPlayerOne(player)">增加球员方式1</button>
    <button @click="addPlayerTwo(player)">增加球员方式2</button>

    <ul v-show="show">
      <li v-for="(player,index) in $store.state.players" :key="index">{{player}}</li>
    </ul>

    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      show: false,
      player: { id: 114, name: "Carmelo", age: 32 }
    };
  },
  methods: {
    /*  mutation 多种提交方式 */

    //1. this.$store.commit(事件类型);
    add() {
      this.$store.commit("add");
    },
    sub() {
      this.$store.commit("sub");
    },
    plus(count) {
      //2. this.$store.commit(事件类型, 普通参数);
      this.$store.commit("plus", count);
    },
    addPlayerOne(player) {
      //3. this.$store.commit(事件类型, 对象);
      this.$store.commit("addPlayerOne", player);
    },
    addPlayerTwo(player) {
      //4. this.$store.commit({事件类型，数据对象});
      // payload == { type: "addPlayerTwo", player }
      this.$store.commit({ type: "addPlayerTwo", player });
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
</style>
