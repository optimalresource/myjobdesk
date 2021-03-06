import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store";
import Home from "../views/Home.vue";
import LoadScript from "vue-plugin-load-script";
Vue.use(LoadScript);

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
    component: () => import("../views/Login.vue"),
    meta: { guest: true }
  },
  {
    path: "/logout",
    name: "Logout",
    component: () => import("../views/Logout.vue")
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("../views/Register.vue"),
    meta: { guest: true }
  },
  {
    path: "/applied",
    name: "Apllied",
    component: () => import("../views/Applied.vue"),
    // beforeEnter: (to, from, next) => {
    //     var role = localStorage.getItem("role");
    //     if (role != "user") {
    //         if (role) next(roleNavigation(role));
    //         else next("/login");
    //     }
    //     next();
    // },
    meta: { isApplicant: true }
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: () => import("../views/Dashboard.vue"),
    // beforeEnter: (to, from, next) => {
    //   var role = localStorage.getItem("role");
    //   if (role != "user") {
    //     if (role) next(roleNavigation(role));
    //     else next("/login");
    //   }
    //   next();
    // },
    meta: { isApplicant: true }
  },
  {
    path: "/resume",
    name: "Resume",
    component: () => import("../views/Resume.vue"),
    meta: { isApplicant: true }
  },
  {
    path: "/moreCategories",
    name: "MoreCategories",
    component: () => import("../views/MoreCategories.vue")
  },
  {
    path: "/favorite",
    name: "Favorite",
    component: () => import("../views/Favorite.vue"),
    meta: { isApplicant: true }
  },
  {
    path: "/endInterview",
    name: "EndInterview",
    component: () => import("../components/EndInterview.vue"),
    meta: { isApplicant: true }
  },
  {
    path: "/jobList",
    name: "JobList",
    component: () => import("../views/JobList.vue")
  },
  {
    path: "/adminDashboard",
    name: "AdminDashboard",
    component: () => import("../views/Admin/AdminDashboard.vue")
  },
  {
    path: "/adminEditProfile",
    name: "AdminEditProfile",
    component: () => import("../views/Admin/AdminEditProfile.vue")
  },
  // {
  //   path: "/adminManage",
  //   name: "adminManage",
  //   component: () => import("../views/Admin/AdminManage.vue")
  // },
  {
    path: "/adminPost",
    name: "AdminPost",
    component: () => import("../views/Admin/PostQuestions.vue")
  },
  // {
  //   path: "/adminMessages",
  //   name: "AdminMessages",
  //   component: () => import("../views/Admin/Messages.vue")
  // },
  {
    path: "/companyApplications",
    name: "CompanyApplications",
    component: () => import("../views/Company/CompanyApplications.vue"),
    meta: { isCompany: true }
  },
  {
    path: "/employerManageJobs",
    name: "CompanyManageJobs",
    component: () => import("../views/Company/CompanyManageJobs.vue"),
    meta: { isCompany: true }
  },

  {
    path: "/companyPost",
    name: "CompanyPost",
    component: () => import("../views/Company/CompanyPost.vue"),
    meta: { isCompany: true }
  },
  {
    path: "/manageAccounts",
    name: "ManageAccounts",
    component: () => import("../views/Company/EmployerPageComponent.vue"),
    meta: { isCompany: true }
  },
  {
    path: "/companyRegistration",
    name: "CompanyRegistration",
    component: () => import("../views/Company/CompanyRegistration.vue"),
    meta: { guest: true }
  },
  {
    path: "*",
    name: "NotFound",
    component: () => import("../views/NotFound.vue")
  },
  {
    path: "/employerDashboard",
    name: "EmployerDashboard",
    component: () => import("../views/Company/EmployerDashboard.vue"),
    meta: { isCompany: true }
  },
  {
    path: "/companyEditProfile",
    name: "CompanyEditProfile",
    component: () => import("../views/Company/CompanyEditProfile.vue"),
    meta: { isCompany: true }
  },
  {
    path: "/companyMessage",
    name: "CompanyMessage",
    component: () => import("../views/Company/CompanyMessage.vue"),
    meta: { isCompany: true }
  },
  {
    path: "/interview",
    name: "InterviewQuestions",
    component: () => import("../views/Company/InterviewQuestions.vue"),
    meta: { isApplicant: true }
  },
  {
    path: "/manageJobs",
    name: "ManageJobs",
    component: () => import("../views/Company/CompanyManageJobs.vue"),
    meta: { isCompany: true }
  },
  {
    path: "/preview",
    name: "PostJobsPreview",
    component: () => import("../views/Company/PostJobsPreview.vue"),
    meta: { isCompany: true }
  },
  {
    path: "/applicant",
    name: "Applicant",
    component: () => import("../views/Applicant.vue"),
    beforeEnter: (to, from, next) => {
      var role = store.getters.StateRole;

      var step = 0;
      var token = localStorage.getItem("token")
        ? localStorage.getItem("token")
        : store.getters.StateToken;

      if (token) {
        if (role == "user") {
          store
            .dispatch("ValidateToken")
            .then(response => {
              step = response.data.user.step;
              console.log(step);
              if (step >= 0 && step < 4) {
                store.dispatch("RefreshStep", parseInt(step) + 1);
                localStorage.setItem("step", parseInt(step) + 1);
                localStorage.setItem("showDiv", true);
                next();
              } else if (step == 4) {
                store.dispatch("RefreshStep", parseInt(step));
                localStorage.setItem("step", parseInt(step));
                localStorage.setItem("showDiv", true);
              } else if (step == 5) {
                step = 1;
                store.dispatch("RefreshStep", step);
                localStorage.setItem("showDiv", false);
                localStorage.setItem("step", step);
                next("/dashboard");
              }
            })
            .catch(() => {
              store.dispatch("LogOut");
              next("/login");
            });
        }

        if (role != "user") {
          next("/");
        }
      }

      if (token == "") {
        store.dispatch("RefreshStep", 1);
        localStorage.setItem("step", 1);
        localStorage.setItem("showDiv", true);
        next();
      }

      console.log(step);
      next();
    }
  },
  {
    path: "/forgot",
    name: "Forgot",
    component: () => import("../views/Forgot.vue"),
    meta: { guest: true }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

function roleNavigation(role) {
  if (
    role == "super_admin" ||
    role == "admin" ||
    role == "editor" ||
    role == "reviewer"
  )
    return "/employerDashboard";
  else if (role == "user") return "/dashboard";
  else return "/";
}

function routeToRegistration() {
  const step = localStorage.getItem("step");
  if (step > 1 && step < 5) {
    return true;
  } else {
    return false;
  }
}

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.isCompany)) {
    if (to.name != "Applicant") {
      Vue.loadScript("/js/jquery.nice-select.min.js");
    }
    // if (localStorage.getItem("step") > 1 && !store.getters.isAuthenticated) {
    //   next("/login");
    //   return;
    // }

    // if (
    //   to.name != "Applicant" &&
    //   routeToRegistration() &&
    //   store.getters.isAuthenticated
    // ) {
    //   next("/applicant");
    //   return;
    // }

    if (store.getters.isHaveRole) {
      if (
        store.getters.StateRole != "super_admin" &&
        store.getters.StateRole != "admin" &&
        store.getters.StateRole != "editor" &&
        store.getters.StateRole != "reviewer"
      ) {
        next(roleNavigation(store.getters.StateRole));
        return;
      }
      next();
      return;
    } else {
      store.dispatch("LogOut");
      next("/login");
      return;
    }
  } else {
    next();
    return;
  }
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.isApplicant)) {
    if (to.name != "Applicant") {
      Vue.loadScript("/js/jquery.nice-select.min.js");
    }
    if (
      store.getters.StateRole == "user" &&
      localStorage.getItem("step") > 1 &&
      !store.getters.isAuthenticated
    ) {
      next("/login");
      return;
    }

    if (
      store.getters.StateRole == "user" &&
      to.name != "Applicant" &&
      routeToRegistration() &&
      store.getters.isAuthenticated
    ) {
      next("/applicant");
      return;
    }

    if (store.getters.StateRole != "user") {
      next(roleNavigation(store.getters.StateRole));
      return;
    }
    next();
    return;
  } else {
    next();
    return;
  }
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (to.name != "Applicant") {
      Vue.loadScript("/js/jquery.nice-select.min.js");
    }
    if (
      store.getters.StateRole == "user" &&
      localStorage.getItem("step") > 1 &&
      !store.getters.isAuthenticated
    ) {
      next("/login");
      return;
    }

    if (
      store.getters.StateRole == "user" &&
      to.name != "Applicant" &&
      routeToRegistration() &&
      store.getters.isAuthenticated
    ) {
      next("/applicant");
      return;
    }

    if (store.getters.isAuthenticated) {
      next();
      return;
    } else {
      store.dispatch("LogOut");
      next("/login");
      return;
    }
  } else {
    next();
    return;
  }
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.guest)) {
    if (to.name != "Applicant") {
      Vue.loadScript("/js/jquery.nice-select.min.js");
    }
    if (
      to.name != "Applicant" &&
      routeToRegistration() &&
      store.getters.isAuthenticated
    ) {
      next("/applicant");
      return;
    }

    if (store.getters.isAuthenticated) {
      next(roleNavigation(store.getters.StateRole));
    }
    next();
    return;
  } else {
    next();
    return;
  }
});

export default router;
