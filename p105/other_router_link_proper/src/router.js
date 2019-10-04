/*
 * @Author: ChaiHongJun
 * @Date: 2019-10-04 10:54:18
 * @LastEditTime: 2019-10-04 13:51:38
 * @LastEditors: ChaiHongJun
 * @Description: 头部文件注释
 */
import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  /* 全局方式设置路由匹配之后的class */
  // linkActiveClass:'className',
  // linkExactActiveClass:'className',
  /* URL模式 */
  // mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      component: () => import("./views/About.vue")
    },
    {
      path: "/contact",
      name: "contact",
      redirect: "/about", //重定向到 about页面
      alias: "/about", // 别名的作用是保证URL不随重定向改变
      component: () => import("./views/Contact.vue")
    }
  ]
});
