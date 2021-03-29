<template>
  <div class="page_title_section">
    <div class="page_header">
      <div class="container">
        <div class="row">
          <div class="col-lg-9 col-md-8 col-12 col-sm-7">
            <h1>{{ mainTitle }}</h1>
          </div>
          <div class="col-lg-3 col-md-4 col-12 col-sm-5">
            <div class="sub_title_section">
              <ul class="sub_title">
                <li><a href="/"> Home </a> <span class="space">/</span></li>
                <li>
                  <!-- <a v-if="!loggedIn" @click="logout"> Logout </a> -->
                </li>
                <li>{{ mainTitle }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainNavLogin",
  props: {
    mainTitle: String,
  },
  computed: {
    // loggedIn: function() {
    //   return this.$store.getters.loggedIn;
    // }
  },
  methods: {
    // logout: function() {
    //   this.$store.dispatch("logout");
    // }
  },
};
</script>

<style scoped>
.space {
  padding: 0 7px;
}
</style>
