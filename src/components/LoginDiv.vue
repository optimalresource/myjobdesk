<template>
  <!-- <div class="login_top_box jb_cover box-row"> -->
  <!-- <div class="login_banner_wrapper">
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
    </div> -->
  <!-- <div class="d-flex justify-content-center" ">
  
</div> -->
  <div class="d-flex text-center justify-content-center">
    <div class="card osas" style="width: 40rem;">
      <div class="card-body ego">
        <h2 class="card-title mt-3">login</h2>
        <div class="mb-3">
          <h5><i class="fas fa-user-lock"></i></h5>
        </div>
        <div class="p-2">
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
              v-on:keyup.enter="login"
            />
            <i class="fas fa-lock"></i>
          </div>
          <div class="header_btn search_btn login_btn jb_cover">
            <button @click.prevent="login">login</button>
          </div>
          <div class="dont_have_account jb_cover mb-4">
            <a href="/forgot"><span>Forgot Password?? &#128532;</span></a>
            <p class="text-dark">
              <span><strong>Don’t have an acount?</strong></span>
              <a href="/register"> Join us!</a>
              <br />
            </p>
            <a href="/"
              ><span
                ><strong><i class="fas fa-home"></i> Home</strong></span
              ></a
            >
            <br />
          </div>
        </div>
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
      console.log("I got here");
      this.$store
        .dispatch("retrieveToken", {
          email: this.email,
          password: this.password
        })
        .then(response => {
          console.log(response);
          // const token = response.data.accessToken;
          // localStorage.setItem("token", token);
          if (response.status == "200") {
            this.$toasted.success("You've been logged in successfully");
            this.$router.push({ name: "Dashboard" });
          } else {
            this.$toasted.error(response.data.message);
            return false;
          }
        })
        .catch(error => {
          console.log(error);
          this.$toasted.error("Invalid credentials");
        });
    }
  },
  mounted() {
    EventBus.$on("onSubmit", this.login);
  }
};
</script>
<style scoped>
h2 {
  color: #990066;
}
.ego {
  mask-repeat: no-repeat;
  background-color: #ffffff;
  background-size: cover;
  background-position: center;
}
@media (max-width: 992px) {
  .login_banner_wrapper {
    display: block;
    width: 100%;
    margin-bottom: -200px;
    border-radius: 10px;
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
h5 {
  color: rgb(148, 0, 64);
}
</style>
