<template>
  <div id="app">
    <VueToastr ref="toastr" />
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <avatar></avatar>
    <router-view />
  </div>
</template>

<script>
import Vue from "vue";
import VueToastr from "vue-toastr";
import Avatar from "vue-avatar";
import LoadScript from "vue-plugin-load-script";
import $ from "jquery";
Vue.use(LoadScript);
export default {
  components: {
    VueToastr,
    Avatar
  },
  mounted() {
    // document.getElementById("scripts").innerHTML = "";
    Vue.loadScript("/js/jquery-3.3.1.min.js");
    Vue.loadScript("/js/bootstrap.min.js");
    Vue.loadScript("/js/modernizr.js");
    Vue.loadScript("/js/jquery.menu-aim.js");
    Vue.loadScript("/js/plugin.js");
    Vue.loadScript("/js/owl.carousel.js");
    Vue.loadScript("/js/jquery-ui.js");
    Vue.loadScript("/js/jquery.countTo.js");
    Vue.loadScript("/js/jquery.magnific-popup.js");
    Vue.loadScript("/js/dropify.min.js");
    Vue.loadScript("/js/jquery.inview.min.js");
    Vue.loadScript("/js/jquery.nice-select.min.js");
    Vue.loadScript("/js/imagesloaded.pkgd.min.js");
    Vue.loadScript("/js/isotope.pkgd.min.js");
    Vue.loadScript("/js/custom.js");
    Vue.loadScript("/js/better.js");
    $(document).ready(function() {
      $(window).scroll(function() {
        if ($(this).scrollTop() >= 100) {
          $("#return-to-top").fadeIn(200);
        } else {
          $("#return-to-top").fadeOut(200);
        }
      });
      $("#return-to-top").on("click", function() {
        $("body,html").animate(
          {
            scrollTop: 0
          },
          500
        );
      });
    });
  },
  created() {
    // this.$toastr.e("Hello world we coming home");
  }
};
</script>

<style lang="scss">
@import "./css/custom.css";
// @import "./assets/css/bootstrap.min.css";
// @import "./assets/css/fonts.css";
// @import "./assets/css/flaticon.css";
// @import "./assets/css/font-awesome.css";
// @import "./assets/css/owl.carousel.css";
// @import "./assets/css/owl.theme.default.css";
// @import "./assets/css/dropify.min.css";
// @import "./assets/css/jquery-ui.min.css";
// @import "./assets/css/magnific-popup.css";
// @import "./assets/css/nice-select.css";
// @import "./assets/css/reset.css";
// @import "./assets/css/style.css";
// @import "./assets/css/responsive.css";
// @import "./assets/assets/css/style.css";
</style>
