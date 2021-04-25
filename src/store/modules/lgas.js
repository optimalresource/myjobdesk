import axios from "axios";

const state = {
  LGAs: [],
  refreshedLGAs: 0
};

const getters = {
  isHaveLGAs: state => {
    if (state.LGAs.length > 0) return true;
    else return false;
  },
  StateLGAs: state => state.LGAs
};

const actions = {
  async AddLGA({ commit }, credentials) {
    let response = await axios.post("state/lga", credentials);
    await commit("refreshLGAs");
    return response;
  },

  async UpdateLGA({ commit }, credentials) {
    let response = await axios.post("state/lga/update", credentials);
    await commit("addOneLGA", response.data);
    return response;
  },

  FetchLGAs({ commit }, credentials) {
    return new Promise((resolve, reject) => {
      axios
        .post("state/lgas", { state: credentials.id })
        .then(response => {
          const details = response.data;
          commit("setLGAs", details);
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

  async ClearLGA({ commit }) {
    await commit("clearLGAs");
  }
};

const mutations = {
  addOneLGA(state, details) {
    state.LGAs.push(details);
  },

  setLGAs(state, details) {
    state.LGAs = details;
  },

  clearLGA(state) {
    state.LGAs = [];
  },

  refreshLGAs(state) {
    state.refreshedLGAs = 1;
  }
};

export default {
  // namespaced: true,
  state,
  getters,
  actions,
  mutations
};
