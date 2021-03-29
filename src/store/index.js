import Vue from "vue";
import Vuex from "vuex";
// import VuexPersist from "vuex-persist";
import axios from "axios";
// import localForage from "localforage";
import router from "../router";
Vue.use(Vuex);
axios.default.baseURL = "https://api.myjobdesk.com/api";

// const vuexStorage = new VuexPersist({
// key: "sourcelink",
//   storage: window.localStorage
//   You can change this explicitly use
//   either window.localStorage  or window.sessionStorage
//   However we are going to make use of localForage
// });

export default new Vuex.Store({
  //   plugins: [vuexStorage.plugin],
  state: {
    token: localStorage.getItem("token") || null,
    userId: null,
    user: null
  },
  mutations: {
    //     loggedIn(state, userData) {
    //       state.token = userData.token;
    //       state.userId = userData.userId;
    //       state.expirationDate = userData.expirationDate;
    //       state.user = userData.user;
    //     },
    //     logout(state) {
    //       state.token = "";
    //       state.userId = "";
    //       state.expirationDate = "";
    //       state.user = "";
    //     }
    retrieveToken(state, token) {
      state.token = token;
    },
    destroyToken(state) {
      state.token = null;
    }
  },
  actions: {
    //     loggedIn({ commit }, authData) {
    //       axios
    //         .post("https://api.myjobdesk.com/api/login", {
    //           email: authData.email,
    //           password: authData.password,
    //           returnSecureToken: true
    //         })
    //         .then(res => {
    //           const now = new Date();
    //           const expirationDate = new Date(
    //             now.getTime() + res.data.expiresIn * 1000
    //           );
    //           commit("login", {
    //             token: res.data.idToken,
    //             userId: res.data.localId,
    //             expirationDate: expirationDate,
    //             user: res.data.email
    //           });
    //           router.push("/dashboard");
    //         })
    //         .catch(error => console.log(error));
    //     },
    logout({ commit }) {
      commit("logout");
      router.push("/login");
    },
    //     register(context, data) {
    //       return new Promise((resolve, reject) => {
    //         axios
    //           .post("https://api.myjobdesk.com/api/register", {
    //             firstname: data.input.firstname,
    //             lastname: data.input.lastname,
    //             middlename: data.input.middlename,
    //             password: data.input.password,
    //             confirmpassword: data.input.password
    //           })
    //           .then(response => {
    //             resolve(response);
    //           })
    //           .catch(error => {
    //             reject(error);
    //           });
    //       });
    //     },
    destroyToken(context) {
      if (context.getters.loggedIn) {
        return new Promise((resolve, reject) => {
          var accessToken = localStorage.getItem("token") || "";
          const headers = {
            Authorization: "Bearer " + accessToken,
            "My-Custom-Header": "Logout"
          };

          var request = {};

          axios
            .post("https://api.myjobdesk.com/api/logout", request, {
              headers
            })
            .then(response => {
              localStorage.removeItem("token");
              context.commit("destroyToken");
              resolve(response);
            })
            .catch(error => {
              localStorage.removeItem("token");
              context.commit("destroyToken");
              reject(error);
            });
        });
      }
    },
    retrieveToken(context, credentials) {
      return new Promise((resolve, reject) => {
        axios
          .post("https://api.myjobdesk.com/api/login", {
            email: credentials.email,
            password: credentials.password,
            completed: false
          })
          .then(response => {
            const token = response.data.accessToken;
            localStorage.setItem("token", token);
            context.commit("retrieveToken", token);
            resolve(response);
            console.log(response);
            // context.commit("", response.data);
          })
          .catch(error => {
            console.log(error);
            reject(error);
          });
      });
    }
  },
  //   modules: {},
  getters: {
    loggedIn(state) {
      return state.token !== null;
    }
  }
});
