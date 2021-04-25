import axios from "axios";

const state = {
  skills: [],
  seeker_skills: []
};

const getters = {
  isHaveSkills: state => {
    if (state.skills.length > 0) return true;
    else return false;
  },
  isHaveSeekerSkills: state => {
    if (state.skills.length > 0) return true;
    else return false;
  },
  StateSkills: state => state.skills,
  StateSeekerSkills: state => state.seeker_skills
};

const actions = {
  async AddSkill({ commit }, credentials) {
    let response = await axios.post("skill", credentials);
    await commit("setSkills", response.data.skills);
    return response;
  },

  async UpdateSkill({ commit }, credentials) {
    let response = await axios.post("skill/update", credentials);
    await commit("addOneSkill", response.data);
    return response;
  },

  FetchSkills({ commit }) {
    return new Promise((resolve, reject) => {
      axios
        .get("skill")
        .then(response => {
          const details = response.data;
          commit("setSkills", details);
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

  FetchSkillDetails() {
    return new Promise((resolve, reject) => {
      axios
        .get("skills/all")
        .then(response => {
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

  DeleteSkill({ commit }, credentials) {
    return new Promise((resolve, reject) => {
      axios
        .delete("skill", {
          data: {
            id: credentials.id
          }
        })
        .then(response => {
          commit("setSeekerSkills", response.data);
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

  AddSeekerSkill({ commit }, credentials) {
    return new Promise((resolve, reject) => {
      axios
        .post("seeker/skills", credentials)
        .then(response => {
          commit("setSeekerSkills", response.data.skills);
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

  async ClearSkills({ commit }) {
    await commit("clearSkills");
  }
};

const mutations = {
  addOneSkill(state, details) {
    state.skills.push(details);
  },

  setSkills(state, details) {
    state.skills = details;
  },

  setSeekerSkills(state, details) {
    state.seeker_skills = details;
  },

  clearSkills(state) {
    state.skills = [];
  }
};

export default {
  // namespaced: true,
  state,
  getters,
  actions,
  mutations
};
