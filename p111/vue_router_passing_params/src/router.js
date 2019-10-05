/*
 * @Author: ChaiHongJun
 * @Date: 2019-10-05 10:26:38
 * @LastEditTime: 2019-10-05 15:45:15
 * @LastEditors: ChaiHongJun
 * @Description: 头部文件注释
 */
import Vue from "vue";
import Router from "vue-router";

// import Home from "./views/Home.vue";

// 懒加载
const Home = () => import("./views/Home.vue");
const Profile = () => import("@/components/Profile.vue");
const User = () => import("@/components/User.vue");

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
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      // query 方式传递参数 路由path不需要修改
      name: "profile",
      path: "/profile",
      component: Profile
    },
    {
      //params 方式传递参数
      name: "user",
      path: "/user/:id",
      component: User
    }
  ]
});
