<template>
  <div class="spaced">
    <h3>
      <i class="fa fa-spinner fa-spin"></i> please wait, you are being logged
      out...
    </h3>
  </div>
</template>

<script>
export default {
  name: "Logout",
  beforeCreate() {
    this.$store
      .dispatch("LogOut")
      .then((response) => {
        console.log(response);
        this.$toasted.success("You've been logged out");
        this.$router.push({ name: "Login" });
      })
      .catch((error) => {
        console.log(error);
        this.$toasted.error("An error occured, please login again");
        this.$router.push({ name: "Login" });
      });
  },
};
</script>

<style>
.spaced {
  padding: 15px;
  min-height: 100px;
}
</style>
