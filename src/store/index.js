import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import PersonalDetails from "./modules/personal-details";
import CompanyDetails from "./modules/company-details";
import createMutationsSharer from "vuex-shared-mutations";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    PersonalDetails,
    CompanyDetails
  },
  state: {
    token: null,
    user: null,
    newUser: 0,
    updated: false,
    role: null,
    error: null
  },
  plugins: [
    createMutationsSharer({
      predicate: [
        "logout",
        "setUser",
        "setToken",
        "setRole",
        "setPersonalDetails",
        "setCompanyDetails"
      ]
    }),
    createPersistedState()
  ],
  mutations: {
    setUser(state, user) {
      state.user = user;
    },

    SetError(state, error) {
      state.error = error;
    },

    setToken(state, token) {
      state.token = token;
    },

    setRole(state, role) {
      state.role = role;
    },

    logout(state) {
      state.user = null;
      state.role = null;
      state.token = null;
    }
  },
  actions: {
    RegisterCompany({ commit }, credentials) {
      return new Promise((resolve, reject) => {
        axios
          .post("register", {
            email: credentials.details.email,
            password: credentials.details.password,
            name: credentials.details.name,
            reg_number: credentials.details.reg_number,
            contact_number: credentials.details.contact_number,
            website: credentials.details.website,
            address: credentials.details.address,
            category: credentials.details.category,
            user_type: credentials.details.user_type
          })
          .then(response => {
            const token = response.data.accessToken;
            const user = response.data.user;
            const role = response.data.role;
            commit("setUser", user);
            commit("setToken", token);
            commit("setRole", role);
            resolve(response);
          })
          .catch(error => {
            if (error.response) {
              reject(error.response.data);
            } else {
              reject(error);
            }
          });
      });
    },
    LogIn({ commit }, credentials) {
      return new Promise((resolve, reject) => {
        axios
          .post("https://api.myjobdesk.com/api/login", {
            email: credentials.email,
            password: credentials.password
          })
          .then(response => {
            const token = response.data.accessToken;
            const user = response.data.user;
            const role = response.data.role;
            commit("setUser", user);
            commit("setToken", token);
            commit("setRole", role);
            resolve(response);
          })
          .catch(error => {
            if (error.response) {
              reject(error.response.data);
            } else {
              reject(error);
            }
          });
      });
    },
    LogOut({ commit }) {
      return new Promise((resolve, reject) => {
        axios
          .post("logout")
          .then(response => {
            commit("logout");
            resolve(response);
          })
          .catch(error => {
            commit("logout");
            if (error.response) {
              reject(error.response.data);
            } else {
              reject(error);
            }
          });
      });
    },
    throwError({ commit }, error) {
      commit("SetError", error);
    }
  },
  getters: {
    isAuthenticated: state => state.user !== null,
    isHaveRole: state => state.role !== null,
    loggedIn: state => state.token !== null,
    isHaveError: state => state.error !== null,
    StateRole: state => state.role,
    StateUser: state => state.user,
    StateToken: state => state.token,
    StateError: state => state.error
  }
});
