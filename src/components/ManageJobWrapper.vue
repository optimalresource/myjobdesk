<template>
  <div class="candidate_dashboard_wrapper jb_cover">
    <div class="container">
      <div class="row">
        <DashboardSideBar />
        <DashboardRightSideBar />
      </div>
    </div>
  </div>
</template>

<script>
import DashboardSideBar from "@/components/DashboardSideBar.vue";
import DashboardRightSideBar from "@/components/DashboardRightSideBar.vue";
export default {
  components: {
    DashboardSideBar,
    DashboardRightSideBar,
  },
  name: "ManageJobWrapper",
};
</script>

<style></style>
