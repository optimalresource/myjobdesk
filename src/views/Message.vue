<template>
  <div>
    <DashboardMessage />
  </div>
</template>

<script>
import DashboardMessage from "@/components/DashboardMessage.vue";
export default {
  name: "Message",
  components: {
    DashboardMessage,
  },
};
</script>

<style>
@import "../assets/css/Dashboard/style.css";
</style>
