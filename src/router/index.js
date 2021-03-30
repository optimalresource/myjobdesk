import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import axios from "axios";
// import NProgress  from 'vue-nprogress-loading-bar'
// import store from "../store/index.js";

// const options = {
//   latencyThreshold: 200, // Number of ms before progressbar starts showing
//   router: true, // Show progressbar when navigating routes
//   http: true // Show progressbar when doing Axios.http or Vue.http
// };
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
  // {
  //   path: "/message",
  //   name: "Message",
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/Message.vue")
  // },
  {
    path: "/endInterview",
    name: "EndInterview",
    component: () =>
      import(/* webpackChunkName: "about" */ "../components/EndInterview.vue")
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
    path: "/employerManageJobs",
    name: "CompanyApplications",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/Company/CompanyManageJobs.vue"
      )
  },

  {
    path: "/companyPost",
    name: "CompanyPost",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Company/CompanyPost.vue")
  },
  {
    path: "/manageAccounts",
    name: "ManageAccounts",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/Company/EmployerPageComponent.vue"
      )
  },
  {
    path: "/companyRegistration",
    name: "CompanyRegistration",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/Company/CompanyRegistration.vue"
      )
  },
  {
    path: "*",
    name: "NotFound",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/NotFound.vue")
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
    path: "/interview",
    name: "InterviewQuestions",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/Company/InterviewQuestions.vue"
      )
  },
  {
    path: "/manageJobs",
    name: "CompanyManageJobs",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/Company/CompanyManageJobs.vue"
      )
  },
  {
    path: "/preview",
    name: "PostJobsPreview",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/Company/PostJobsPreview.vue"
      )
  },
  {
    path: "/applicant",
    name: "Applicant",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Applicant.vue")
  },
  {
    path: "/forgot",
    name: "Forgot",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Forgot.vue")
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

// router.beforeEach((to, from, next) => {
// var accessToken;
// var step = 0;
// var status;

// if (to.name == "Register" || to.name == "Dashboard") {
//   if (localStorage.getItem("token")) {
// accessToken = localStorage.getItem("token");

// const requestOptions = {
//   method: "GET",
//   Authorization: "Bearer " + accessToken,
//   "My-Custom-Header": "Check Token Status"
// };
// fetch("https://api.myjobdesk.com/api/user", requestOptions)
//   .then(res => {
//     if (!res.ok) {
//       // create error instance with HTTP status text
//       const error = new Error(res.statusText);
//       error.json = res.json();
//       throw error;
//     }
//     console.log("A success");
//     return res.json();
//   })
//   .then(json => {
//     // set the response data
//     step = json.data.step;
//     console.log("I got here 2");
//   })
//   .catch(err => {
//     console.log(err);
//     // In case a custom JSON error response was provided
//     if (err.json) {
//       return err.json.then(json => {
//         // set the JSON response message
//         console.log(json.message);
//       });
//     }
//   })
//   .then(() => {
//     console.log("I got here");
//   });
//       var stepper = getSession();
//       if (stepper) {
//         step = stepper;
//         console.log("I got here");
//       }

//       if (step == 0) {
//         step = 1;
//         localStorage.setItem("showDiv", false);
//       } else if (step == 1) {
//         step = 2;
//         localStorage.setItem("showDiv", true);
//       }

//       console.log("I see this " + step);

//       localStorage.setItem("step", step);
//       next();
//     } else {
//       if (to.name == "Dashboard") {
//         next("/login");
//       } else {
//         localStorage.setItem("step", 1);
//         localStorage.setItem("showDiv", false);
//         next();
//       }
//     }
//   } else {
//     next();
//   }
// });

// function getSession() {
//   var accessToken = localStorage.getItem("token") || "";
//   const headers = {
//     Authorization: "Bearer " + accessToken,
//     "My-Custom-Header": "Register step 2"
//   };
//   var request = {};
//   var session;
//   axios
//     .get("https://api.myjobdesk.com/api/user", request, {
//       headers
//     }) // use instance here
//     .then(response => {
//       session = response.data;
//     })
//     .catch(error => {
//       session = error.message;
//     });
//   console.log("here");
//   return session;
// }

router.beforeEach((to, from, next) => {
  if (to.name == "Register" || to.name == "Applicant") {
    if (localStorage.getItem("token")) {
      var step = 0;

      var accessToken = localStorage.getItem("token") || "";
      const headers = {
        Authorization: "Bearer " + accessToken,
        "My-Custom-Header": "Register step 2"
      };
      var request = {};
      var session;
      axios
        .get("https://api.myjobdesk.com/api/user", {
          data: request,
          headers: headers
        }) // use instance here
        .then(response => {
          session = response.data;
          step = response.data.step;
          console.log(session);
          console.log(step);
          if (step == 0) {
            step = 1;
            localStorage.setItem("step", step);
            localStorage.setItem("showDiv", false);
            console.log("I got here 2");
          } else if (step == 1) {
            step = 2;
            localStorage.setItem("step", step);
            localStorage.setItem("showDiv", true);
          } else if (step == 5) {
            step = 1;
            localStorage.setItem("showDiv", false);
            localStorage.setItem("step", step);
            next("/dashboard");
          }

          console.log("The current step is " + localStorage.getItem("step"));
        })
        .catch(error => {
          session = error.message;
        });
    } else {
      localStorage.setItem("step", 1);
      localStorage.setItem("showDiv", false);
    }
    //   var step = 0;

    //   var accessToken = localStorage.getItem("token") || "";
    //   const headers = {
    //     Authorization: "Bearer " + accessToken,
    //     "My-Custom-Header": "Register step 2"
    //   };
    //   var request = {};
    //   var session;
    //   axios
    //     .get("https://api.myjobdesk.com/api/user", {
    //       data: request,
    //       headers: headers
    //     }) // use instance here
    //     .then(response => {
    //       session = response.data;
    //       step = response.data.step;
    //       console.log(session);
    //       console.log(step);
    //       if (step == 0) {
    //         step = 1;
    //         localStorage.setItem("showDiv", false);
    //         console.log("I got here 2");
    //       } else if (step == 1) {
    //         step = 2;
    //         localStorage.setItem("showDiv", true);
    //       }
    //       localStorage.setItem("step", 3);
    //       console.log("The current step is " + localStorage.getItem("step"));
    //     })
    //     .catch(error => {
    //       session = error.message;
    //     });
    // } else {
    //   localStorage.setItem("step", 1);
    //   localStorage.setItem("showDiv", false);
    // }
    next();
  } else {
    next();
  }
});

export default router;
