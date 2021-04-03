<template>
  <div class="login_wrapper jb_cover">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <ValidationObserver>
            <form id="registration-form" enctype="multipart/form-data">
              <div v-if="page == 'login'">
                <LoginDiv />
              </div>

              <div v-if="page == 'register'">
                {{ showme() }}
                <SignUpDiv />
              </div>
            </form>
          </ValidationObserver>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LoginDiv from "@/components/LoginDiv.vue";
import SignUpDiv from "@/components/SignUpDiv.vue";
// import { EventBus } from "@/components/eventBus.js";

// import Vue from "vue";

export default {
  name: "ContentTemplate",
  props: {
    // register: Boolean,
    // login: Boolean,
    page: String,
  },
  components: {
    LoginDiv,
    SignUpDiv,
  },
  methods: {
    showme() {
      console.log("Am here");
    },
    onSubmit() {
      // EventBus.$emit("onSubmit");
      console.log("I can see you");
    },
  },
};
// @submit.prevent="handleSubmit(onSubmit)"
//  <ValidationObserver v-slot="{ handleSubmit }">
</script>

<style scoped></style>
