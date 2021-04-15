import axios from "axios";

const state = {
  company_details: null
};

const getters = {
  isHaveCompanyDetails: state => !!state.company_details,
  StateCompanyDetails: state => state.company_details
};

const actions = {
  async AddCompanyDetails({ commit }, credentials) {
    var request = {
      email: credentials.details.email,
      password: credentials.details.password,
      name: credentials.details.name,
      reg_number: credentials.details.reg_number,
      contact_number: credentials.details.contact_number,
      website: credentials.details.website,
      address: credentials.details.address,
      category: credentials.details.category,
      user_type: credentials.details.user_type
    };
    let response = await axios.post("company_details", request);
    localStorage.setItem("company_details", response.data);
    await commit("setCompanyDetails", response.data);
    return response;
  },

  async UpdateCompanyDetails({ commit }, credentials) {
    var request = {
      email: credentials.email,
      name: credentials.name,
      reg_number: credentials.reg_number,
      contact_number: credentials.contact_number,
      website: credentials.website,
      address: credentials.address,
      category: credentials.category
    };
    let response = await axios.post("company_details", request);
    await commit("setCompanyDetails", response.data);
    return response;
  },

  FetchCompanyDetails({ commit }) {
    return new Promise((resolve, reject) => {
      var token = localStorage.getItem("token");
      axios.defaults.headers.common["Authorization"] = "Bearer " + token;
      axios
        .get("company_details")
        .then(response => {
          const details = response.data;
          localStorage.setItem("company_details", details);
          commit("setCompanyDetails", details);
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

  async ClearCompanyDetails({ commit }) {
    localStorage.removeItem("company_details");
    await commit("clearCompanyDetails");
  }
};

const mutations = {
  setCompanyDetails(state, details) {
    state.company_details = details;
  },

  clearCompanyDetails(state) {
    state.company_details = null;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
