import Vue from "vue";
import VueRouter from "vue-router";
import LoginPage from '../components/LoginPage'
import RegisterPage from '../components/RegisterPage'
import loading from '../components/loading'

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: () => import("../layout/main.vue"),
    children: [
      {
        path: "/",
        name: "home",
        component: () => import("../views/home.vue"),
        meta: {
          pageTitle: "home",
          enterClass:'animate__animated animate__fadeInLeft',
          leaveClass:'animate__animated animate__fadeInRight'
        },
      },
      {
        path: "/television",
        name: "television",
        // route level code-splitting
        // this generates a separate chunk (television.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "television" */ "../views/television.vue"),
        meta:{
          enterClass:'animate__animated animate__fadeInRight',
          leaveClass:'animate__animated animate__fadeInLeft',
          middleware:[
            loading
          ]
        }
      },
      {
        path: "/component",
        name: "component",
        component: () => import("../views/component.vue"),
        meta:{
          enterClass:'animate__animated animate__fadeInLeft',
          leaveClass:'animate__animated animate__fadeInRight',
          middleware:[
            loading
          ]
        }
      },
      {
        path: "/computer",
        name: "computer",
        component: () => import("../views/computer.vue"),
        meta:{
          enterClass:'animate__animated animate__fadeInRight',
          leaveClass:'animate__animated animate__fadeInLeft',
          middleware:[
            loading
          ]
        }
      },
      {
        path: '/*',
        component: () => import(/* webpackChunkName: "television" */ "../views/404.vue"),
        name: '404',
      }
    ],
  },
  { path: '/login', component: LoginPage },
  { path: '/register', component: RegisterPage },
  // n???u kh??ng s??? chuy???n ?????n trang home
  { path: '*', redirect: '/' }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

// router.beforeEach((to, from, next) => {
//   // chuy???n ?????n trang login n???u ch??a ???????c login
//   const publicPages = ['/login', '/register'];
//   const authRequired = !publicPages.includes(to.path);
//   const loggedIn = localStorage.getItem('user');

//   if (authRequired && !loggedIn) {
//     return next('/login');
//   }

//   next();
// })

export default router;
