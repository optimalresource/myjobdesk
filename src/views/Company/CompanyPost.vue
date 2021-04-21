<template>
  <div>
    <Post />
  </div>
</template>

<script>
import Post from "@/components/CompanyFolder/Post.vue";
import Vue from "vue";
import LoadScript from "vue-plugin-load-script";
Vue.use(LoadScript);
export default {
  name: "CompanyApplications",
  components: {
    Post
  }
};
</script>

<style>
@import "../../assets/css/Dashboard/style.css";
</style>
