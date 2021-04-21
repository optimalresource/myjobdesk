import axios from "axios";

const state = {
  personal_details: null
};

const getters = {
  isHavePersonalDetails: state => !!state.personal_details,
  StatePersonalDetails: state => state.personal_details
};

const actions = {
  async AddPersonalDetails({ commit }, credentials) {
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
    let response = await axios.post("register", request);
    await commit("setPersonalDetails", response.data);
    return response;
  },
  async FetchPersonalDetails({ commit }) {
    return new Promise((resolve, reject) => {
      var accessToken = localStorage.getItem("token") || "";
      const headers = {
        Authorization: "Bearer " + accessToken,
        "My-Custom-Header": "GetUserRecord"
      };
      var request = {};
      axios
        .get("personal_details", request, {
          headers
        })
        .then(response => {
          const details = response.data;
          commit("setPersonalDetails", details);
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
  }
};

const mutations = {
  setPersonalDetails(state, details) {
    state.personal_details = details;
  }
};

export default {
  // namespaced: true,
  state,
  getters,
  actions,
  mutations
};
