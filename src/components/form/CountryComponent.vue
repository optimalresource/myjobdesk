<template>
  <form-group :validator="v" label="Email">
    <div class="form-group icon_form comments_form">
      <select
        class="form-control"
        v-model="nationality"
        autocomplete="dob"
        autofocus
        placeholder="Nationality."
        @input="v.$touch()"
      >
        <option value="Nigeria">Nigeria</option>
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
    nationality: {
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
