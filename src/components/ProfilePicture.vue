<template>
  <div class="jumbotron">
    <div class="large-12 medium-12 small-12 cell">
      <label for="upload"> Upload Your Profile Picture</label>
      <input
        type="file"
        accept="image/x-png,image/jpg,image/jpeg"
        id="file2"
        ref="file"
        v-on:change="handleFileUpload()"
        name="upload"
      />
      <!-- attach this submitfile function to the next step button function in the Signupdiv component -->
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      ProfilePicture: {
        file: ""
      }
    };
  },

  methods: {
    submitFile() {
      let formData = new FormData();
      formData.append("file", this.file);
      axios
        .post("anyapi joe gives me ", formData, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        })
        .then(function() {
          console.log("SUCCESS!!");
        })
        .catch(function() {
          console.log("FAILURE!!");
        });
    },

    handleFileUpload() {
      this.file = this.$refs.file.files[0];
    }
  }
};
</script>

<style></style>
