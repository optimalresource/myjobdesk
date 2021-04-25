import axios from "axios";

const state = {
  cv: null
};

const getters = {
  StateCV: state => state.cv,
  StateUploadedCV: state => state.cv !== null
};

const actions = {
  async AddCV({ commit }, credentials) {
    let response = await axios.post("cv", credentials);
    await commit("setCV", response.data);
    return response;
  },

  FetchCV({ commit }) {
    return new Promise((resolve, reject) => {
      axios
        .get("cv")
        .then(response => {
          commit("setCV", response.data);
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

  async ClearCV({ commit }) {
    await commit("clearCV");
  }
};

const mutations = {
  setCV(state, details) {
    state.cv = details;
  },

  clearCV(state) {
    state.cv = null;
  }
};

export default {
  // namespaced: true,
  state,
  getters,
  actions,
  mutations
};
