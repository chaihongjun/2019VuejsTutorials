<!--
 * @Author: ChaiHongJun
 * @Date: 2019-10-05 09:12:38
 * @LastEditTime: 2019-10-05 10:02:39
 * @LastEditors: ChaiHongJun
 * @Description: 头部文件注释
 -->
<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>路由嵌套的步骤</p>
    <ul>
      <li>
        在映射配置文件router.js内，在对应的子目录项添加children选项:
        <pre>
                  children: [
        {
          path: "",
          // 重定向到name = news
          redirect: "news"
        },
        {
          path: "news",
          name: "news",
          component: News
        },
        {
          path: "message",
          name: "message",
          component: Message
        }
      ]
        </pre>
      </li>
      <li>在父组件模板内添加 router-link 和 router-view 标签</li>
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
  margin: 10px 10px;
}
a {
  color: #42b983;
}
</style>
