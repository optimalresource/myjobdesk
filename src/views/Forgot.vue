<template>
  <div>
    <div class="d-flex text-center justify-content-center mt-5">
      <div class="card osas" style="width: 40rem;">
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
            <button v-if="pass" @click.prevent="recovery">submit</button>
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
export default {
  name: "LoginDiv",
  data() {
    return {
      email: "",
      password: "",
      pass: true,
      notPass: false
    };
  },
  methods: {
    recovery: function() {
      this.pass = false;
      this.notPass = true;
    }
  }
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
