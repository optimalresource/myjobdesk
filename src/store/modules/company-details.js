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
      country: credentials.country,
      state: credentials.state,
      local_government: credentials.local_government,
      facebook: credentials.facebook,
      twitter: credentials.twitter,
      linkedin: credentials.linkedin,
      instagram: credentials.instagram,
      category: credentials.category
    };
    let response = await axios.post("company_details", request);
    await commit("setCompanyDetails", response.data);
    return response;
  },

  async FetchCompanyDetails({ commit }) {
    return new Promise((resolve, reject) => {
      axios
        .get("company_details")
        .then(response => {
          const details = response.data;
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
  }
};

const mutations = {
  setCompanyDetails(state, details) {
    state.company_details = details;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
