<template>
  <div>
    <div id="myNav" class="overlay">
      <!-- <a href="#" class="closebtn"><i class="fas fa-times"></i></a> -->
      <div class="overlay-content text-white">
        <h3 class="text-center pt-5">Pick A Category</h3>
        <div class="Wrap text-center">
          <typeahead
            source="https://api.myjobdesk.com/api"
            placeholder="Tell us the category you would want us to place you &#128512;"
            filter-key="title"
            :start-at="2"
          >
          </typeahead>
        </div>
        <button @click="closeNav()" type="button" class="m-3 btn bttn">
          Lets Go
        </button>
        <Ripple />
      </div>
    </div>
    <p>
      <a href="/dashboard">
        <span style="cursor: pointer" class="text-light" @click="openNav()"
          ><u>Click here if you were not automatically redirected </u></span
        ></a
      >
    </p>
  </div>
</template>

<script>
import Ripple from "@/components/Ripple.vue";
import Typeahead from "@/components/Typeahead.vue";
export default {
  data() {},
  name: "StepFour",
  components: {
    Ripple,
    Typeahead,
  },
  methods: {
    openNav: function () {
      document.getElementById("myNav").style.width = "100%";
    },
    closeNav: function () {
      document.getElementById("myNav").style.width = "0%";
    },
  },
};
</script>

<style>
.Wrap {
  max-width: 60vw;
  margin: 15vh auto;
}
.overlay {
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.9);
  overflow-x: hidden;
  color: #ffffff;
  transition: 0.5s;
}

.overlay-content {
  position: relative;
  top: 25%;
  width: 100%;
  text-align: center;
  margin-top: 30px;
}

.overlay a {
  padding: 8px;
  text-decoration: none;
  font-size: 36px;
  color: #ffffff;
  display: block;
  transition: 0.3s;
}

.overlay a:hover,
.overlay a:focus {
  color: #f1f1f1;
}

.overlay .closebtn {
  position: absolute;
  top: 20px;
  right: 45px;
}

@media screen and (max-height: 450px) {
  .overlay a {
    font-size: 20px;
  }
  .overlay .closebtn {
    font-size: 40px;
    top: 15px;
    right: 35px;
  }
}
h6 {
  color: #ffffff;
}
h3 {
  color: #ffffff;
}
.search {
  margin: 0 auto;
  color: white;
}
input:hover {
  background: #ffffff;
}
.bttn {
  color: white;
  background: linear-gradient(to right, #990066, #af0066, #c90075);
}
.search input[type="text"] {
  padding: 10px;
  width: 70%;
  text-align: center;
  display: block;
}
.search input[type="text"]:hover {
  border: #990066 3px solid;
}
</style>
