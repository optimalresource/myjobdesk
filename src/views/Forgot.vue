<template>
  <div>
    <div class="d-flex text-center justify-content-center mt-5">
      <div class="card osas" style="width: 40rem">
        <div class="card-body ego">
          <h5 v-if="pass" class="card-title mt-3">Get Recovery Password</h5>
          <div v-if="pass" class="form-group icon_form comments_form">
            <input
              id="email"
              type="email"
              class="form-control"
              name="email"
              value=""
              required
              autocomplete="email"
              autofocus
              placeholder="Email Address*"
              v-model="email"
              v-if="pass"
            />
            <i class="fas fa-envelope"></i>
          </div>
          <div
            v-if="pass"
            class="header_btn search_btn login_btn jb_cover margin"
          >
            <button v-if="pass" @click.prevent="recovery" :disabled="spin">
              <span v-if="notSpin">submit</span
              ><i v-if="spin" class="fa fa-spinner fa-spin"></i>
            </button>
          </div>
          <div v-if="notPass" class="alert alert-success p-5" role="alert">
            <strong
              >A Temporary password has been sent to your email. Please enter
              access your mail-box and login with the password!</strong
            >
          </div>
          <a v-if="notPass" href="/login"
            ><strong> <strong> Login</strong></strong>
          </a>
          <div v-if="pass" class="dont_have_account jb_cover mt-5">
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
import axios from "axios";
export default {
  name: "LoginDiv",
  data() {
    return {
      onLine: navigator.onLine,
      showBackOnline: false,
      email: "",
      pass: true,
      notPass: false,
      spin: false,
      notSpin: true,
    };
  },
  methods: {
    recovery: function () {
      if (!this.onLine) {
        this.$toasted.error("Please check your internet connection");
        return false;
      }
      if (this.email == "") {
        this.$toasted.error("Please fill your email");
        return false;
      }
      if (!this.validateEmail(this.email)) {
        this.$toasted.info("This is not a valid email");
        return false;
      }
      this.spin = true;
      this.notSpin = false;

      var accessToken = localStorage.getItem("token") || "";
      const headers = {
        Authorization: "Bearer " + accessToken,
        "My-Custom-Header": "Temporary Password",
        "Content-Type": "application/json",
      };

      axios
        .post("", this.email, {
          headers,
        })
        .then((response) => {
          console.log(response);
          if (response.status == "200") {
            setTimeout(() => {
              this.pass = false;
              this.notPass = true;
            }, 2000);
            return true;
          } else {
            this.$toasted.error(
              "Oops, something went wrong, please try again later"
            );
            return false;
          }
        })
        .catch((error) => {
          this.errorMessage = error.message;
          console.log(error.message);
        });
    },
    validateEmail(email) {
      const re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))*$/;
      return re.test(email);
    },
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
  },
};
</script>

<style>
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
.margin {
  margin-top: -7px;
}
</style>
