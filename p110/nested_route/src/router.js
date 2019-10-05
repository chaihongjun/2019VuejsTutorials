/*
 * @Author: ChaiHongJun
 * @Date: 2019-10-05 09:12:38
 * @LastEditTime: 2019-10-05 09:46:10
 * @LastEditors: ChaiHongJun
 * @Description: 头部文件注释
 */
import Vue from "vue";
import Router from "vue-router";

//import Home from './views/Home.vue'
const Home = () => import("./views/Home.vue");

const News = () => import("@/components/News.vue");

const Message = () => import("@/components/Message.vue");

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue"),
      //嵌套路由映射关系
      children: [
        //添加默认路径，当进入到/about的时候是直接显示/about/news

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
    }
  ]
});
