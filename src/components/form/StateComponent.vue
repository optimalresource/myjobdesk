<template>
  <form-group :validator="v" label="Email">
    <div class="form-group icon_form comments_form">
      <select
        id="selectedState"
        class="form-control"
        v-model="selectedState"
        @change="changeState"
      >
        <option value="0">Select State</option>
        <option v-for="state in states" :key="state" :value="state">
          {{ state }}
        </option>
      </select>
    </div>
  </form-group>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: ""
    },

    v: {
      type: Object,
      required: true
    }
  },

  computed: {
    selectedState: {
      get() {
        return this.value;
      },

      set(value) {
        this.$emit("input", value);
      }
    }
  }
};
</script>
