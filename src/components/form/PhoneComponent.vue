<template>
  <form-group :validator="v" label="Email">
    <div class="form-group icon_form comments_form">
      <input
        id="phone"
        type="text"
        class="form-control require"
        required
        autocomplete="phone"
        autofocus
        placeholder="Phone Number*.... )0701.."
        v-model="phone"
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
    phone: {
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
