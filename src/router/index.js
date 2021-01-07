import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
// import store from "../store/index.js";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/login",
    name: "Login",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Login.vue")
  },
  {
    path: "/logout",
    name: "Logout",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Logout.vue")
  },
  {
    path: "/register",
    name: "Register",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Register.vue")
  },
  {
    path: "/applied",
    name: "Apllied",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Applied.vue")
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Dashboard.vue"),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/editProfile",
    name: "EditProfile",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/EditProfile.vue")
    // meta: {
    //     requiresAuth: true
    //   }
  },
  {
    path: "/resume",
    name: "Resume",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Resume.vue")
  },
  {
    path: "/favorite",
    name: "Favorite",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Favorite.vue")
  },
  {
    path: "/message",
    name: "Message",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Message.vue")
  },
  {
    path: "/pricing",
    name: "Pricing",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Pricing.vue")
  },
  {
    path: "/companyApplications",
    name: "CompanyApplications",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/Company/CompanyApplications.vue"
      )
  },

  {
    path: "/companyPost",
    name: "CompanyPost",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Company/CompanyPost.vue")
  },
  {
    path: "/employerPage",
    name: "EmployerPage",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/Company/EmployerPage.vue"
      )
  },
  {
    path: "/employerDashboard",
    name: "EmployerDashboard",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/Company/EmployerDashboard.vue"
      )
  },
  {
    path: "/companyEditProfile",
    name: "CompanyEditProfile",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/Company/CompanyEditProfile.vue"
      )
  },
  {
    path: "/companyMessage",
    name: "CompanyMessage",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/Company/CompanyMessage.vue"
      )
  },
  {
    path: "/manageJobs",
    name: "CompanyManageJobs",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/Company/CompanyManageJobs.vue"
      )
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

// router.beforeEach((to, from, next) => {
//   if (to.matched.some(record => record.meta.requiresAuth)) {
//     if (!store.getters.loggedIn) {
//       next({
//         path: "/login"
//       });
//       return;
//     }
//     next("/login");
//   } else {
//     next();
//   }
// });

export default router;
