<template>
  <div>
    <MainNavigation />
    <JobFilterComponent />
  </div>
</template>

<script>
import MainNavigation from "@/components/MainNavigation.vue";
import JobFilterComponent from "@/components/JobFilterComponent.vue";
export default {
  name: "JobFilter",
  components: { MainNavigation, JobFilterComponent }
};
</script>

<style></style>
