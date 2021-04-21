import axios from "axios";

const state = {
  states: []
};

const getters = {
  isHaveStates: state => {
    if (state.states.length > 0) return true;
    else return false;
  },
  StateStates: state => state.states
};

const actions = {
  async AddState({ commit }, credentials) {
    let response = await axios.post("country/state", credentials);
    await commit("setStates", response.data.states);
    return response;
  },

  async UpdateState({ commit }, credentials) {
    let response = await axios.post("state/update", credentials);
    await commit("addOneState", response.data);
    return response;
  },

  FetchStates({ commit }, credentials) {
    return new Promise((resolve, reject) => {
      axios
        .post("country/states", { country: credentials.id })
        .then(response => {
          const details = response.data;
          commit("setStates", details);
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

  async ClearStates({ commit }) {
    await commit("clearStates");
  }
};

const mutations = {
  addOneState(state, details) {
    state.states.push(details);
  },

  setStates(state, details) {
    state.states = details;
  },

  clearStates(state) {
    state.states = [];
  }
};

export default {
  // namespaced: true,
  state,
  getters,
  actions,
  mutations
};
