<template>
  <div>
    <ManageAccounts />
  </div>
</template>

<script>
import ManageAccounts from "@/components/CompanyFolder/ManageAccounts.vue";
export default {
  name: "EmployerPageComponent",
  components: {
    ManageAccounts
  }
};
</script>

<style>
@import "../../assets/css/Dashboard/style.css";
</style>
