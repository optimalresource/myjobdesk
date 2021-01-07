<template>
  <div class="home">
    <LoginComponent title="Myjobdesk Registration Page" page="register" />
  </div>
</template>

<script>
// @ is an alias to /src
import LoginComponent from "@/components/LoginComponent.vue";

export default {
  name: "Login",
  components: {
    LoginComponent
  }
};
</script>
