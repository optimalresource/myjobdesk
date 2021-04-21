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
// import axios from "axios";

import FroalaEditor from "froala-editor";

FroalaEditor.DefineIcon("alert", { NAME: "info", SVG_KEY: "help" });
FroalaEditor.RegisterCommand("alert", {
  title: "Hello",
  focus: false,
  undo: false,
  refreshAfterCallback: false,
  callback: function() {
    alert("Hello!");
  }
});

FroalaEditor.DefineIcon("clear", { NAME: "remove", SVG_KEY: "remove" });
FroalaEditor.RegisterCommand("clear", {
  title: "Clear HTML",
  focus: false,
  undo: true,
  refreshAfterCallback: true,
  callback: function() {
    this.html.set("");
    this.events.focus();
  }
});

FroalaEditor.DefineIcon("insert", { NAME: "plus", SVG_KEY: "add" });
FroalaEditor.RegisterCommand("insert", {
  title: "Insert HTML",
  focus: true,
  undo: true,
  refreshAfterCallback: true,
  callback: function() {
    this.html.insert("My New HTML");
  }
});

Vue.use(LoadScript);
export default {
  components: {
    VueToastr,
    Avatar
  },
  beforeCreate() {
    // if (localStorage.getItem("token")) {
    //   var step = 0;
    //   var accessToken = localStorage.getItem("token") || "";
    //   const headers = {
    //     Authorization: "Bearer " + accessToken,
    //     "My-Custom-Header": "Register step 2"
    //   };
    //   var request = {};
    //   var session;
    //   axios
    //     .get("https://api.myjobdesk.com/api/user", {
    //       data: request,
    //       headers: headers
    //     }) // use instance here
    //     .then(response => {
    //       session = response.data;
    //       step = response.data.step;
    //       console.log(session);
    //       console.log(step);
    //       if (step == 0) {
    //         step = 1;
    //         localStorage.setItem("showDiv", false);
    //         console.log("I got here 2");
    //       } else if (step == 1) {
    //         step = 2;
    //         localStorage.setItem("showDiv", true);
    //       } else if (step == 5) {
    //         step = 1;
    //         localStorage.setItem("showDiv", false);
    //       }
    //       localStorage.setItem("step", step);
    //       console.log("The current step is " + localStorage.getItem("step"));
    //     })
    //     .catch(error => {
    //       session = error.message;
    //     });
    // } else {
    //   localStorage.setItem("step", 1);
    //   localStorage.setItem("showDiv", false);
    // }
  },
  mounted() {
    // document.getElementById("scripts").innerHTML = "";
    // Vue.loadScript("/js/jquery-3.3.1.min.js");
    // Vue.loadScript("/js/bootstrap.min.js");
    // Vue.loadScript("/js/modernizr.js");
    // Vue.loadScript("/js/jquery.menu-aim.js");
    Vue.loadScript("/js/plugin.js");
    // Vue.loadScript("/js/owl.carousel.js");
    Vue.loadScript("/js/jquery-ui.js");
    Vue.loadScript("/js/jquery.countTo.js");
    Vue.loadScript("/js/jquery.magnific-popup.js");
    Vue.loadScript("/js/dropify.min.js");
    Vue.loadScript("/js/jquery.inview.min.js");
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
  }
};
</script>

<style lang="scss">
/* @import "./css/custom.css";
 @import "./assets/css/bootstrap.min.css";*/
</style>
