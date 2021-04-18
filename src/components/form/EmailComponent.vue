<template>
  <form-group :validator="v" label="Email">
    <div class="form-group icon_form comments_form">
      <input
        id="email"
        type="email"
        class="form-control require"
        required
        autocomplete="email"
        autofocus
        placeholder="user@yahoo.com"
        v-model="email"
        @input="v.$touch()"
      />
      <i class="fas fa-envelope"></i>
      <!-- <span>{{ errors[0] }}</span> -->
    </div>
    <!-- <input
      type="email"
      class="input"
      v-model="email"
      placeholder="user@yahoo.com"
      @input="v.$touch();"
    /> -->
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
    email: {
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
