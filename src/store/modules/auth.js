import axios from "axios";

const state = {
  token: null,
  user: null,
  newUser: 0,
  cartUpdate: null,
  updated: false,
  role: null,
};

const getters = {
  isAuthenticated: (state) => !!state.user,
  isHaveRole: (state) => !!state.role,
  loggedIn: (state) => !!state.token,
  StateRole: (state) => state.role,
  StateUser: (state) => state.user,
  StateToken: (state) => state.token,
};

const actions = {
  async Register({ commit }, credentials) {
    var request = {
      email: credentials.details.email,
      password: credentials.details.password,
      name: credentials.details.name,
      reg_number: credentials.details.reg_number,
      contact_number: credentials.details.contact_number,
      website: credentials.details.website,
      address: credentials.details.address,
      category: credentials.details.category,
      user_type: credentials.details.user_type,
    };
    let response = await axios.post("register", request);

    // commit directly
    await commit("setUser", response.data.user);
    await commit("setToken", response.data.accessToken);
    await commit("setRole", response.data.role);
    return response;
  },

  async LogIn({ commit }, credentials) {
    var request = {
      email: credentials.email,
      password: credentials.password,
    };

    return new Promise((resolve, reject) => {
      axios
        .post("login", request)
        .then((response) => {
          if (response) {
            commit("setUser", response.data.user);
            commit("setToken", response.data.accessToken);
            commit("setRole", response.data.role);

            resolve(response);
          } else {
            reject("Invalid email and password");
          }
        })
        .catch((error) => {
          if (error.response) {
            reject(error.response);
          } else {
            reject(error);
          }
        });
    });
  },

  async CreatePost({ dispatch }, post) {
    await axios.post("post", post);
    return await dispatch("GetPosts");
  },

  async GetPosts({ commit }) {
    let response = await axios.get("posts");
    commit("setPosts", response.data);
  },

  async LogOut({ commit }) {
    let user = null;
    commit("logout", user);
  },
};

const mutations = {
  setUser(state, user) {
    state.user = user;
  },

  setToken(state, token) {
    state.token = token;
  },

  setRole(state, role) {
    state.role = role;
  },

  setPosts(state, posts) {
    state.posts = posts;
  },
  logout(state, user) {
    state.user = user;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
