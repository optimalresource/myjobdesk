<template>
  <div class="login_top_box jb_cover box-row">
    <div class="login_banner_wrapper">
      <img src="images/logo.png" alt="logo" />
      <div class="header_btn search_btn facebook_wrap jb_cover">
        <a href="#">login with facebook <i class="fab fa-facebook-f"></i></a>
      </div>
      <div class="header_btn search_btn google_wrap jb_cover">
        <a href="#">login with pinterest <i class="fab fa-pinterest-p"></i></a>
      </div>
      <div class="jp_regis_center_tag_wrapper jb_register_red_or">
        <h1>OR</h1>
      </div>
    </div>

    <div class="login_form_wrapper">
      <h2>login</h2>
      <div class="form-group icon_form comments_form">
        <input
          id="email"
          type="email"
          class="form-control  require"
          name="email"
          value=""
          required
          autocomplete="email"
          autofocus
          placeholder="Email Address*"
          v-model="email"
        />
        <i class="fas fa-envelope"></i>
      </div>
      <div class="form-group icon_form comments_form">
        <input
          id="password"
          type="password"
          class="form-control  require"
          name="password"
          required
          autocomplete="current-password"
          placeholder="Password *"
          v-model="password"
        />
        <i class="fas fa-lock"></i>
      </div>
      <div class="login_remember_box">
        <label class="control control--checkbox"
          >Remember me
          <input type="checkbox" />
          <span class="control__indicator"></span>
        </label>
        <a href="#" class="forget_password">
          Forgot Password
        </a>
      </div>
      <div class="header_btn search_btn login_btn jb_cover">
        <button @submit.prevent="loggedIn" type="submit">login</button>
      </div>
      <div class="dont_have_account jb_cover">
        <p>
          Don’t have an acount?
          <a href="/register">Sign up</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { EventBus } from "@/components/eventBus.js";
export default {
  name: "LoginDiv",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  computed: {
    loggedIn: function() {
      return this.$store.getters.loggedIn;
    }
  },
  methods: {
    login() {
      this.$store
        .dispatch("retrieveToken", {
          email: this.email,
          password: this.password
        })
        .then(response => {
          console.log(response);
          const token = response.data.accessToken;
          localStorage.setItem("token", token);
          this.$router.push({ name: "Dashboard" });
        });
    }
  },
  mounted() {
    EventBus.$on("onSubmit", this.login);
  }
};
</script>

<style scoped>
@media (max-width: 992px) {
  .login_banner_wrapper {
    display: block;
    width: 100%;
    margin-bottom: -200px;
  }
  .login_form_wrapper {
    display: block;
    width: 100%;
    padding: 0 20px 30%;
  }
  .jp_regis_center_tag_wrapper {
    display: none;
  }
}
</style>
