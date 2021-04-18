<template>
  <form-group :validator="v" label="Address">
    <div class="form-group icon_form comments_form">
      <input
        id="address"
        type="text"
        class="form-control require"
        required
        autocomplete="address"
        autofocus
        placeholder="Address.."
        v-model="address"
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
    address: {
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
