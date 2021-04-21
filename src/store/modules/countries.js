import axios from "axios";

const state = {
  countries: []
};

const getters = {
  isHaveCountries: state => {
    if (state.countries.length > 0) return true;
    else return false;
  },
  StateCountries: state => state.countries
};

const actions = {
  async AddCountry({ commit }, credentials) {
    let response = await axios.post("country", credentials);
    await commit("setCountries", response.data.countries);
    return response;
  },

  async UpdateCountry({ commit }, credentials) {
    let response = await axios.post("country/update", credentials);
    await commit("addOneCountry", response.data);
    return response;
  },

  FetchCountries({ commit }) {
    return new Promise((resolve, reject) => {
      axios
        .get("countries")
        .then(response => {
          const details = response.data;
          commit("setCountries", details);
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

  async ClearCountries({ commit }) {
    await commit("clearCountries");
  }
};

const mutations = {
  addOneCountry(state, details) {
    state.countries.push(details);
  },

  setCountries(state, details) {
    state.countries = details;
  },

  clearCountries(state) {
    state.countries = [];
  }
};

export default {
  // namespaced: true,
  state,
  getters,
  actions,
  mutations
};
