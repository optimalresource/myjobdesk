<template>
  <form-group :validator="v" label="Email">
    <div class="form-group icon_form comments_form">
      <select
        class="custom-select form-control"
        v-model="marital_status"
        placeholder="single or married."
        @input="v.$touch()"
      >
        <option value="Single">Single</option>
        <option value="Married">Married</option>
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
    marital_status: {
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
