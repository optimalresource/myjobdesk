import axios from "axios";

const state = {
  disciplines: []
};

const getters = {
  isHaveDisciplines: state => {
    if (state.disciplines.length > 0) return true;
    else return false;
  },
  StateDisciplines: state => state.disciplines
};

const actions = {
  async AddDiscipline({ commit }, credentials) {
    let response = await axios.post("discipline", credentials);
    await commit("setDisciplines", response.data.disciplines);
    return response;
  },

  async UpdateDiscipline({ commit }, credentials) {
    let response = await axios.post("discipline/update", credentials);
    await commit("addOneDiscipline", response.data);
    return response;
  },

  FetchDisciplines({ commit }) {
    return new Promise((resolve, reject) => {
      axios
        .get("disciplines")
        .then(response => {
          const details = response.data;
          commit("setDisciplines", details);
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

  async ClearDisciplines({ commit }) {
    await commit("clearDisciplines");
  }
};

const mutations = {
  addOneDiscipline(state, details) {
    state.disciplines.push(details);
  },

  setDisciplines(state, details) {
    state.disciplines = details;
  },

  clearDisciplines(state) {
    state.disciplines = [];
  }
};

export default {
  // namespaced: true,
  state,
  getters,
  actions,
  mutations
};
