import axios from "axios";

const state = {
  degrees: []
};

const getters = {
  isHaveDegrees: state => {
    if (state.degrees.length > 0) return true;
    else return false;
  },
  StateDegrees: state => state.degrees
};

const actions = {
  async AddDegree({ commit }, credentials) {
    let response = await axios.post("degree", credentials);
    await commit("setDegrees", response.data.degrees);
    return response;
  },

  async UpdateDegree({ commit }, credentials) {
    let response = await axios.post("degree/update", credentials);
    await commit("addOneDegree", response.data);
    return response;
  },

  FetchDegrees({ commit }) {
    return new Promise((resolve, reject) => {
      axios
        .get("degrees")
        .then(response => {
          const details = response.data;
          commit("setDegrees", details);
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

  async ClearDegrees({ commit }) {
    await commit("clearDegrees");
  }
};

const mutations = {
  addOneDegree(state, details) {
    state.degrees.push(details);
  },

  setDegrees(state, details) {
    state.degrees = details;
  },

  clearDegrees(state) {
    state.degrees = [];
  }
};

export default {
  // namespaced: true,
  state,
  getters,
  actions,
  mutations
};
