<template>
  <div>
    <CandidateDashboard />
  </div>
</template>

<script>
import CandidateDashboard from "@/components/CandidateDashboard.vue";
export default {
  name: "Dashboard",
  components: {
    CandidateDashboard
  }
};
</script>

<style scoped>
@import "../assets/css/Dashboard/style.css";
</style>
