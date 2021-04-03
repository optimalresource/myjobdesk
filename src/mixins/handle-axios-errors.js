export default {
  methods: {
    handleAxiosErrors(error) {
      if (typeof error === "object" && error !== null) {
        if (error.message) {
          this.$toasted.error(error.message);
          if (error.errors) {
            for (const property in error.errors) {
              this.$toasted.error(error.errors[property]);
            }
          }
        } else {
          for (const property in error) {
            this.$toasted.error(error[property]);
          }
        }
      } else {
        this.$toasted.error(error);
      }
    },
  },
};
