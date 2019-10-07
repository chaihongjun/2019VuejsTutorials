/*
 * @Author: ChaiHongJun
 * @Date: 2019-10-07 09:40:20
 * @LastEditTime: 2019-10-07 15:36:20
 * @LastEditors: ChaiHongJun
 * @Description: 头部文件注释
 */
import Vue from "vue";
import Router from "vue-router";
import Index from "./views/Index.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "",
      name: "index",
      component: Index
    },
    // {
    //   path: "/",
    //   name: "index",
    //   component: Index
    // },
    {
      path: "/category",
      name: "category",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Category.vue")
    },
    {
      path: "/cart",
      name: "cart",
      component: () => import("./views/Cart.vue")
    },
    {
      path: "/profile",
      name: "profile",
      component: () => import("./views/Profile.vue")
    }
  ]
});
