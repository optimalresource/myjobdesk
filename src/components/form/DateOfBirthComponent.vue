<template>
  <form-group :validator="v" label="Date of Birth">
    <div class="form-group icon_form comments_form">
      <input
        id="dob"
        type="date"
        class="form-control require"
        required
        placeholder="Date of bith.."
        v-model="dob"
        @input="v.$touch()"
      />
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
    dob: {
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
