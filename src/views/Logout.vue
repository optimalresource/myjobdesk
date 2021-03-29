<template>
  <div></div>
</template>

<script>
export default {
  name: "Logout",
  created() {
    this.$store
      .dispatch("destroyToken")
      .then(response => {
        console.log(response);
        this.$toasted.success("You've been logged out");
        this.$router.push({ name: "Login" });
      })
      .catch(error => {
        console.log(error);
        this.$toasted.error("An error occured, please login again");
        this.$router.push({ name: "Login" });
      });
  }
};
</script>

<style></style>
