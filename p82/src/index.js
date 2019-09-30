/*
 * @Author: ChaiHongJun
 * @Date: 2019-09-29 17:19:38
 * @LastEditTime: 2019-09-30 08:51:23
 * @LastEditors: ChaiHongJun
 * @Description: 头部文件注释
 */
console.log("Hello World from your main file!");
import infos from "./js/data.js";
import Vue from "vue";

const msg = {
  template: `     
    <div><ul><li v-for="(info,index) in infos">{{ index }}-{{ info }}</li></ul>
  <h2>webpack集成Vue的注意事项</h2>
<blockquote>指令 npm i vue</blockquote>
  安装的只是runtime Only,无法渲染template，需要在
  webpack.config.js里面添加代码:
  <pre>
            resolve: {
              alias: {
                vue: "vue/dist/vue.js"
              }
            },
          </pre>
  引入完整版本的内容<p>
   用第一个子组件完全“填充”ROOT实例
  </p>
</div>`,
  data() {
    return {
      infos
    };
  }
};

const app = new Vue({
  el: "#app",
  template: "<msg></msg>",
  components: {
    msg
  }
});
