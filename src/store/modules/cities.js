import axios from "axios";

const state = {
  cities: [],
  refreshedCities: 0
};

const getters = {
  isHaveCities: state => {
    if (state.cities.length > 0) return true;
    else return false;
  },
  StateCities: state => state.cities
};

const actions = {
  async AddCity({ commit }, credentials) {
    let response = await axios.post("state/city", credentials);
    await commit("refreshCities");
    return response;
  },

  async UpdateCity({ commit }, credentials) {
    let response = await axios.post("state/city/update", credentials);
    await commit("addOneCity", response.data);
    return response;
  },

  FetchCities({ commit }, credentials) {
    return new Promise((resolve, reject) => {
      console.log(credentials);
      axios
        .post("state/cities", { state: credentials.id })
        .then(response => {
          const details = response.data;
          commit("setCities", details);
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

  async ClearCities({ commit }) {
    await commit("clearCities");
  }
};

const mutations = {
  addOneCity(state, details) {
    state.cities.push(details);
  },

  setCities(state, details) {
    state.cities = details;
  },

  clearCities(state) {
    state.cities = [];
  },

  refreshCities(state) {
    state.refreshedCities = 1;
  }
};

export default {
  // namespaced: true,
  state,
  getters,
  actions,
  mutations
};
