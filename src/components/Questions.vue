<template>
  <div></div>
</template>

<script>
export default {
  data: function () {
    return {
      totalstep: 20,
      step: 1,
    };
  },
  methods: {
    nextQuestion() {
      this.step++;
    },
  },
};
</script>

<style></style>
