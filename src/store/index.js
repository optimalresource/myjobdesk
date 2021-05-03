import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import PersonalDetails from "./modules/personal-details";
import CompanyDetails from "./modules/company-details";
import Countries from "./modules/countries";
import States from "./modules/states";
import Cities from "./modules/cities";
import LGAs from "./modules/lgas";
import Disciplines from "./modules/disciplines";
import Degrees from "./modules/degrees";
import Skills from "./modules/skills";
import CV from "./modules/cv";
import JobCategories from "./modules/job-categories";
import createMutationsSharer from "vuex-shared-mutations";
import axios from "axios";
const token = localStorage.getItem("token");
if (token) {
  axios.defaults.headers.common["Authorization"] = "Bearer " + token;
}

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    PersonalDetails,
    CompanyDetails,
    Countries,
    States,
    Cities,
    LGAs,
    Disciplines,
    Degrees,
    Skills,
    CV,
    JobCategories
  },
  state: {
    token: null,
    user: null,
    newUser: 0,
    updated: false,
    role: null,
    error: null,
    step: 1,
    current_job: 0,
    steppers: []
  },
  plugins: [
    createMutationsSharer({
      predicate: [
        "logout",
        "setUser",
        "setToken",
        "setRole",
        "setPersonalDetails",
        "CompanyDetails/setCompanyDetails",
        "setStep"
      ]
    }),
    createPersistedState()
  ],
  mutations: {
    setUser(state, user) {
      state.user = user;
    },

    setStep(state, step) {
      state.step = step;
      state.steppers.push(step);
    },

    SetError(state, error) {
      state.error = error;
    },

    SetCurrentJob(state, current_job) {
      state.current_job = current_job;
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
      state.step = 1;
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
            user_type: credentials.details.user_type
          })
          .then(response => {
            const token = response.data.accessToken;
            const user = response.data.user;
            const role = response.data.role;
            localStorage.setItem("token", token);
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

    AddSeekerCategories({ commit }, credentials) {
      return new Promise((resolve, reject) => {
        axios
          .post("add_seeker_categories", credentials)
          .then(response => {
            commit("SetError", null);
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

    AddReferree({ commit }, credentials) {
      return new Promise((resolve, reject) => {
        axios
          .post("referrees", credentials)
          .then(response => {
            commit("SetError", null);
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

    AddExperience({ commit }, credentials) {
      return new Promise((resolve, reject) => {
        axios
          .post("experiences", credentials)
          .then(response => {
            console.log(response);
            var current_job = response.data.current_job;
            commit("SetCurrentJob", current_job);
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

    DeleteCertificate({ commit }, credentials) {
      return new Promise((resolve, reject) => {
        axios
          .delete("certificates", {
            data: {
              id: credentials.id
            }
          })
          .then(response => {
            commit("SetError", null);
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

    DeleteReferree({ commit }, credentials) {
      return new Promise((resolve, reject) => {
        axios
          .delete("referrees", {
            data: {
              id: credentials.id
            }
          })
          .then(response => {
            commit("SetError", null);
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

    DeleteExperience({ commit }, credentials) {
      return new Promise((resolve, reject) => {
        axios
          .delete("experiences", {
            data: {
              id: credentials.id
            }
          })
          .then(response => {
            commit("SetCurrentJob", response.data.current_status);
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

    RegisterCandidate({ commit }, credentials) {
      return new Promise((resolve, reject) => {
        axios
          .post("register", credentials)
          .then(response => {
            const token = response.data.accessToken;
            const user = response.data.user;
            const role = response.data.role;
            localStorage.setItem("token", token);
            localStorage.setItem("step", 2);
            commit("setUser", user);
            commit("setToken", token);
            commit("setRole", role);
            commit("setStep", 2);
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

    NextStep({ commit }, credentials) {
      return new Promise((resolve, reject) => {
        axios
          .post("step", credentials)
          .then(response => {
            if (credentials.step == 5) {
              localStorage.setItem("step", 1);
            } else {
              localStorage.setItem("step", credentials.step);
            }
            commit("setStep", credentials.step);
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

    SavePersonalDetails({ commit }, credentials) {
      return new Promise((resolve, reject) => {
        axios
          .post("personal_details", credentials)
          .then(response => {
            commit("SetError", null);
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
    UpdateUserPrivileges({ commit }, credentials) {
      return new Promise((resolve, reject) => {
        axios
          .post("", credentials)
          .then(response => {
            commit("SetError", null);
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

    FetchEducationDetails() {
      return new Promise((resolve, reject) => {
        axios
          .get("educational_details/all")
          .then(response => {
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

    SaveEducationDetails({ commit }, credentials) {
      return new Promise((resolve, reject) => {
        axios
          .post("educational_details", credentials)
          .then(response => {
            commit("SetError", null);
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

    DeleteEducationDetail({ commit }, credentials) {
      return new Promise((resolve, reject) => {
        axios
          .delete("educational_details", credentials)
          .then(response => {
            commit("SetError", null);
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

    FetchCertificateDetails() {
      return new Promise((resolve, reject) => {
        axios
          .get("certificates/all")
          .then(response => {
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

    SaveCertificate({ commit }, credentials) {
      return new Promise((resolve, reject) => {
        axios
          .post("certificates", credentials)
          .then(response => {
            commit("SetError", null);
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

    FetchReferreeDetails() {
      return new Promise((resolve, reject) => {
        axios
          .get("referrees/all")
          .then(response => {
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

    FetchExperienceDetails() {
      return new Promise((resolve, reject) => {
        axios
          .get("experiences/all")
          .then(response => {
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

    ValidateToken(context) {
      return new Promise((resolve, reject) => {
        var token = localStorage.getItem("token");
        axios.defaults.headers.common["Authorization"] = "Bearer " + token;
        axios
          .post("user")
          .then(response => {
            const user = response.data.user;
            const role = response.data.role;
            // if (role == "user") {
            //   var step = parseInt(response.data.user.step);
            //   localStorage.setItem("step", step);
            //   context.commit("setStep", step);
            // }
            context.commit("setUser", user);
            context.commit("setRole", role);
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
          .post("login", {
            email: credentials.email,
            password: credentials.password
          })
          .then(response => {
            const token = response.data.accessToken;
            const user = response.data.user;
            const role = response.data.role;
            if (role == "user") {
              var step = parseInt(response.data.user.step);
              if (step < 4) {
                localStorage.setItem("step", step + 1);
                commit("setStep", step + 1);
              } else if (step == 4) {
                localStorage.setItem("step", step);
                commit("setStep", step);
              } else {
                localStorage.setItem("step", 1);
                commit("setStep", step);
              }
            }
            localStorage.setItem("token", token);
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

    async LogOut({ commit, dispatch }) {
      return new Promise((resolve, reject) => {
        var accessToken = localStorage.getItem("token");
        axios.defaults.headers.common["Authorization"] =
          "Bearer " + accessToken;
        axios
          .post("logout")
          .then(response => {
            localStorage.removeItem("token");
            localStorage.removeItem("step");
            commit("logout");
            dispatch("ClearCompanyDetails");
            resolve(response);
          })
          .catch(error => {
            localStorage.removeItem("token");
            localStorage.removeItem("step");
            commit("logout");
            dispatch("ClearCompanyDetails");
            if (error.response) {
              reject(error.response.data);
            } else {
              reject(error);
            }
          });
      });
    },

    RefreshStep(context, step) {
      localStorage.setItem("step", step);
      context.commit("setStep", step);
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
    StateError: state => state.error,
    StateStep: state => state.step,
    StateSteppers: state => state.steppers,
    StateCurrentJob: state => state.current_job
  }
});
