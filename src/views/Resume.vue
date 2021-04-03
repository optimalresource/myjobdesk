<template>
  <div>
    <CandidateResume />
  </div>
</template>

<script>
import CandidateResume from "@/components/CandidateResume.vue";
export default {
  name: "Resume",
  components: {
    CandidateResume,
  },
};
</script>

<style scoped>
@import "../assets/css/Dashboard/style.css";
</style>
