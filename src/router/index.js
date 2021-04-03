import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [{
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/login",
        name: "Login",
        component: () =>
            import ("../views/Login.vue"),
        meta: { guest: true },
    },
    {
        path: "/logout",
        name: "Logout",
        component: () =>
            import ("../views/Logout.vue"),
    },
    {
        path: "/register",
        name: "Register",
        component: () =>
            import ("../views/Register.vue"),
        meta: { guest: true },
    },
    {
        path: "/applied",
        name: "Apllied",
        component: () =>
            import ("../views/Applied.vue"),
        beforeEnter: (to, from, next) => {
            var role = localStorage.getItem("role");
            if (role != "user") {
                if (role) next(roleNavigation(role));
                else next("/login");
            }
            next();
        },
        meta: { isApplicant: true },
    },
    {
        path: "/dashboard",
        name: "Dashboard",
        component: () =>
            import ("../views/Dashboard.vue"),
        // beforeEnter: (to, from, next) => {
        //   var role = localStorage.getItem("role");
        //   if (role != "user") {
        //     if (role) next(roleNavigation(role));
        //     else next("/login");
        //   }
        //   next();
        // },
        meta: { isApplicant: true },
    },
    {
        path: "/resume",
        name: "Resume",
        component: () =>
            import ("../views/Resume.vue"),
        meta: { isApplicant: true },
    },
    {
        path: "/favorite",
        name: "Favorite",
        component: () =>
            import ("../views/Favorite.vue"),
        meta: { isApplicant: true },
    },
    {
        path: "/endInterview",
        name: "EndInterview",
        component: () =>
            import ("../components/EndInterview.vue"),
        meta: { isApplicant: true },
    },
    {
        path: "/pricing",
        name: "Pricing",
        component: () =>
            import ("../views/Pricing.vue"),
    },
    {
        path: "/companyApplications",
        name: "CompanyApplications",
        component: () =>
            import ("../views/Company/CompanyApplications.vue"),
        meta: { isCompany: true },
    },
    {
        path: "/employerManageJobs",
        name: "CompanyManageJobs",
        component: () =>
            import ("../views/Company/CompanyManageJobs.vue"),
        meta: { isCompany: true },
    },

    {
        path: "/companyPost",
        name: "CompanyPost",
        component: () =>
            import ("../views/Company/CompanyPost.vue"),
        meta: { isCompany: true },
    },
    {
        path: "/manageAccounts",
        name: "ManageAccounts",
        component: () =>
            import ("../views/Company/EmployerPageComponent.vue"),
        meta: { isCompany: true },
    },
    {
        path: "/companyRegistration",
        name: "CompanyRegistration",
        component: () =>
            import ("../views/Company/CompanyRegistration.vue"),
        meta: { guest: true },
    },
    {
        path: "*",
        name: "NotFound",
        component: () =>
            import ("../views/NotFound.vue"),
    },
    {
        path: "/employerDashboard",
        name: "EmployerDashboard",
        component: () =>
            import ("../views/Company/EmployerDashboard.vue"),
        meta: { isCompany: true },
    },
    {
        path: "/companyEditProfile",
        name: "CompanyEditProfile",
        component: () =>
            import ("../views/Company/CompanyEditProfile.vue"),
        meta: { isCompany: true },
    },
    {
        path: "/companyMessage",
        name: "CompanyMessage",
        component: () =>
            import ("../views/Company/CompanyMessage.vue"),
        meta: { isCompany: true },
    },
    {
        path: "/interview",
        name: "InterviewQuestions",
        component: () =>
            import ("../views/Company/InterviewQuestions.vue"),
        meta: { isApplicant: true },
    },
    {
        path: "/manageJobs",
        name: "ManageJobs",
        component: () =>
            import ("../views/Company/CompanyManageJobs.vue"),
        meta: { isCompany: true },
    },
    {
        path: "/preview",
        name: "PostJobsPreview",
        component: () =>
            import ("../views/Company/PostJobsPreview.vue"),
        meta: { isCompany: true },
    },
    {
        path: "/applicant",
        name: "Applicant",
        component: () =>
            import ("../views/Applicant.vue"),
        meta: { isApplicant: true },
    },
    {
        path: "/forgot",
        name: "Forgot",
        component: () =>
            import ("../views/Forgot.vue"),
        meta: { guest: true },
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
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

router.beforeEach((to, from, next) => {
    if (to.matched.some((record) => record.meta.isCompany)) {
        if (store.getters.isHaveRole) {
            if (
                store.getters.StateRole != "super_admin" &&
                store.getters.StateRole != "admin" &&
                store.getters.StateRole != "editor" &&
                store.getters.StateRole != "reviewer"
            ) {
                if (store.getters.StateRole)
                    next(roleNavigation(store.getters.StateRole));
                else {
                    if (to.name != "Login") next("/login");
                    else next();
                }
            }
            next();
        }
        if (to.name != "Login") next("/login");
        else next();
    } else {
        next();
    }
});

router.beforeEach((to, from, next) => {
    if (to.matched.some((record) => record.meta.isApplicant)) {
        if (store.getters.isHaveRole) {
            if (store.getters.StateRole != "user") {
                if (store.getters.StateRole)
                    next(roleNavigation(store.getters.StateRole));
                else {
                    if (to.name != "Login") next("/login");
                    else next();
                }
            }
            next();
        }
        if (to.name != "Login") next("/login");
        else next();
    } else {
        next();
    }
});

router.beforeEach((to, from, next) => {
    if (to.matched.some((record) => record.meta.requiresAuth)) {
        if (store.getters.isAuthenticated) {
            next();
        }
        if (to.name != "Login") next("/login");
        else next();
    } else {
        next();
    }
});

router.beforeEach((to, from, next) => {
    if (to.matched.some((record) => record.meta.guest)) {
        if (store.getters.isAuthenticated) {
            if (store.getters.isHaveRole)
                next(roleNavigation(store.getters.StateRole));
            else {
                if (to.name != "Login") next("/login");
                else next();
            }
        }
        next();
    } else {
        next();
    }
});

// router.beforeEach((to, from, next) => {
//     if (localStorage.getItem("token")) {
//         var step = 0;
//         var role = "";
//         store
//             .dispatch("validateToken")
//             .then((response) => {
//                 console.log(response);
//                 role = response.data.role;
//                 // localStorage.setItem("newTempRow", role);

//                 if (to.name == "Register" || to.name == "Applicant") {
//                     step = response.data.user.step;
//                     if (step == 0) {
//                         step = 1;
//                         localStorage.setItem("step", step);
//                         localStorage.setItem("showDiv", false);
//                         console.log("I got here 2");
//                     } else if (step == 1) {
//                         step = 2;
//                         localStorage.setItem("step", step);
//                         localStorage.setItem("showDiv", true);
//                     } else if (step == 5) {
//                         step = 1;
//                         localStorage.setItem("showDiv", false);
//                         localStorage.setItem("step", step);
//                         next(roleNavigation(role));
//                     }
//                 }

//                 if (response.status != "200") {
//                     if (authRoutes(to)) {
//                         next("/login");
//                     }
//                     next();
//                 }
//             })
//             .catch(() => {
//                 // if (typeof error === "object" && error !== null) {
//                 //     for (const property in error) {
//                 //         this.$toasted.error(error[property]);
//                 //     }
//                 // } else {
//                 //     this.$toasted.error(error);
//                 // }
//                 if (authRoutes(to)) {
//                     next("/login");
//                 }
//                 next();
//             });

//         if (
//             to.name == "Register" ||
//             to.name == "Login" ||
//             to.name == "CompanyRegistration" ||
//             to.name == "Applicant"
//         ) {
//             next(roleNavigation(role));
//         }

//         // if (authRoutes(to)) {
//         //     next(roleGuard(role, to));
//         // }
//         const tok = localStorage.getItem("role");
//         // const val = roleNavigation(tok);
//         localStorage.setItem("newmad", roleNavigation(tok));
//         next();
//     } else {
//         localStorage.setItem("step", 1);
//         localStorage.setItem("showDiv", false);
//         if (authRoutes(to)) {
//             next("/login");
//         }
//         next();
//     }
// });

export default router;