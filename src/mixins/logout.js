export default {
    methods: {
        async logout() {
            this.$toasted.info("You're being been logged out");
            this.$store
                .dispatch("LogOut")
                .then(() => this.$router.push("/login"))
                .catch(() => this.$router.push("/login"));
        },
    },
};