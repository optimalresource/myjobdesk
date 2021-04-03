<template>
  <div class="lookup-box">
    <h1>ZipCode Lookup</h1>
    <input
      type="text"
      placeholder="Enter a US Zipcode (e.g. 90210)"
      v-model="zip"
    />
    <button class="btn btn-primary" @click="lookupZip">click</button>
    <span class="city">{{ city }}</span>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "HereAddressLookup",
  data() {
    return {
      zip: "",
      city: "",
    };
  },
  watch: {
    zip: function () {
      this.city = "";
      if (this.zip.length == 5) {
        //call api method
        this.lookupZip();
      }
    },
  },
  methods: {
    lookupZip: function () {
      var vm = this;
      //debounce(lodash) to delay the function a bit
      //https://ziptasticapi.com/{zipcode}
      vm.city = "Searching...";

      //https://github.com/mzabriskie/axios
      axios
        .get("https://ziptasticapi.com/" + vm.zip)
        .then(function (response) {
          console.log(response);
          vm.city = response.data.city + ", " + response.data.state;
        })
        .catch(function (error) {
          console.log(error);

          vm.city = "Invalid Zipcode";
        });
    },
  },
};
</script>
<style>
.lookup-box {
  text-align: center;
  width: 300px;
  border: 1px solid #ddd;
  padding: 36px;
  margin: 3em auto;
}
input {
  width: 100%;
  padding: 4px 10px;
}
.city {
  display: block;
}
</style>
