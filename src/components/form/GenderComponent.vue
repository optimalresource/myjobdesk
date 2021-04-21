<template>
  <form-group :validator="v" label="Gender">
    <select
      class="form-control"
      v-model="gender"
      placeholder="male or female.."
      @input="v.$touch()"
    >
      <option value="male">Male</option>
      <option value="female">Female</option>
      <option value="others">Others</option>
    </select>
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
    gender: {
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
