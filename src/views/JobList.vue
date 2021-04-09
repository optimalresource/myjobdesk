<template>
  <div>
    <JobListComponent />
  </div>
</template>

<script>
// @ is an alias to /src
import JobListComponent from "@/components/JobListComponent.vue";

export default {
  name: "JobList",
  components: {
    JobListComponent,
  },
};
</script>
