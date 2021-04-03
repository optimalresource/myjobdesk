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
    <div class="card osas" style="width: 40rem">
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
              class="form-control require"
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
              class="form-control require"
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
            <button @click.prevent="login" :disabled="spin">
              <span v-if="notSpin">login</span
              ><i v-if="spin" class="fa fa-spinner fa-spin"></i>
            </button>
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
// import { mapActions } from "vuex";

export default {
  name: "LoginDiv",
  data() {
    return {
      spin: false,
      notSpin: true,
      email: "",
      password: "",
      isHidden: true,
      successResponse: false,
      beforeResponse: false,
      onLine: navigator.onLine,
      showBackOnline: false,
    };
  },
  computed: {
    loggedIn: function () {
      return this.$store.getters.loggedIn;
    },
  },
  methods: {
    // ...mapActions(["LogIn"]),
    validateEmail(email) {
      const re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))*$/;
      return re.test(email);
    },
    async login() {
      this.spin = true;
      this.notSpin = false;

      if (!this.validateEmail(this.email)) {
        this.$toastr.e("Please enter a valid email");
        this.spin = false;
        this.notSpin = true;
        return false;
      }

      if (this.email == "") {
        this.$toastr.e("Please enter your email");
        this.spin = false;
        this.notSpin = true;
        return false;
      }

      if (this.password == "") {
        this.$toastr.e("Please enter your password");
        this.spin = false;
        this.notSpin = true;
        return false;
      }

      this.beforeResponse = true;

      var details = {
        email: this.email,
        password: this.password,
      };

      await this.$store
        .dispatch("LogIn", details)
        .then((response) => {
          this.$toasted.success("You have logged in successful");
          if (
            response.data.role == "super_admin" ||
            response.data.role == "admin" ||
            response.data.role == "editor" ||
            response.data.role == "reviewer"
          )
            this.$router.push({ name: "EmployerDashboard" });
          else if (response.data.role == "user")
            this.$router.push({ name: "Dashboard" });
          else this.$router.push({ name: "Home" });
        })
        .catch((error) => {
          this.spin = false;
          this.notSpin = true;
          this.handleAxiosErrors(error);
        });
    },
  },
  mounted() {
    EventBus.$on("onSubmit", this.login);
    console.log(this.$store.getters.StateUser);
    console.log(this.$store.getters.StateToken);
    console.log(this.$store.getters.StateRole);
  },
  watch: {
    onLine(v) {
      if (v) {
        this.showBackOnline = true;
        setTimeout(() => {
          this.showBackOnline = false;
        }, 1000);
      }
    },

    beforeResponse() {
      if (this.beforeResponse) {
        this.$toasted.info("Your are now being logged in, please wait");
      }
    },

    successResponse() {
      if (this.successResponse == 200) {
        this.$toasted.success("You have logged in successfull");
        this.step++;
        this.successResponse = false;
        this.beforeResponse = false;
      }
    },
  },
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
