import axios from "axios";

const state = {
  job_categories: [],
  seeker_job_categories: [],
  new_tag: null
};

const getters = {
  isHaveJobCategories: state => {
    if (state.job_categories.length > 0) return true;
    else return false;
  },
  isHaveSeekerJobCategories: state => {
    if (state.job_categories.length > 0) return true;
    else return false;
  },
  StateJobCategories: state => state.job_categories,
  StateSeekerJobCategories: state => state.seeker_job_categories
};

const actions = {
  async AddJobCategory({ commit }, credentials) {
    let response = await axios.post("job_category", credentials);
    await commit("setJobCategories", response.data.job_categories);
    return response;
  },

  FetchJobCategories({ commit }) {
    return new Promise((resolve, reject) => {
      axios
        .get("job_category")
        .then(response => {
          const details = response.data;
          commit("setJobCategories", details);
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

  FetchJobCategoryDetails() {
    return new Promise((resolve, reject) => {
      axios
        .get("job_categories/all")
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

  DeleteJobCategory({ commit }, credentials) {
    return new Promise((resolve, reject) => {
      axios
        .delete("skill", {
          data: {
            id: credentials.id
          }
        })
        .then(response => {
          commit("setSeekerJobCategories", response.data);
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

  AddSeekerJobCategories({ commit }, credentials) {
    return new Promise((resolve, reject) => {
      axios
        .post("add_seeker_category", credentials)
        .then(response => {
          commit("setSeekerJobCategories", response.data.job_categories);
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

  async ClearJobCategories({ commit }) {
    await commit("clearJobCategories");
  }
};

const mutations = {
  addOneJobCategory(state, details) {
    state.job_categories.push(details);
  },

  setJobCategories(state, details) {
    state.job_categories = details;
  },

  setSeekerJobCategories(state, details) {
    state.seeker_job_categories = details;
  },

  clearJobCategories(state) {
    state.job_categories = [];
  },

  setNewTag(state, details) {
    state.new_tag = details;
  }
};

export default {
  // namespaced: true,
  state,
  getters,
  actions,
  mutations
};
