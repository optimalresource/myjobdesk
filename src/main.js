import Vue from "vue";
import VueLazyload from "vue-lazyload";
Vue.use(VueLazyload);
import VueResource from "vue-resource";
Vue.use(VueResource);
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { ValidationObserver } from "vee-validate";
import { ValidationProvider } from "vee-validate/dist/vee-validate.full.esm";
Vue.component("ValidationProvider", ValidationProvider);
Vue.component("ValidationObserver", ValidationObserver);

import VueToastr from "vue-toastr";
Vue.use(VueToastr, {
  defaultTimeout: 10000,
  defaultProgressBar: false,
  defaultProgressBarValue: 0,
  defaultPosition: "toast-bottom-left",
  defaultCloseOnHover: false,
  defaultClassNames: ["animated", "zoomInDown"]
});
import Multiselect from "vue-multiselect";
import VueUploadMultipleImage from "vue-upload-multiple-image";
export default {
  components: {
    VueUploadMultipleImage,
    Multiselect
  }
};
// import axios from "axios";
// import VueAxios from "vue-axios";
// Vue.use(VueAxios, axios);
// import Vuelidate from "vuelidate";
// Vue.use(Vuelidate);

Vue.config.productionTip = false;
// Vue.use(LoadScript);
// // import "./assets/js/jquery-3.3.1.min.js";
// Vue.loadScript("./assets/js/bootstrap.min.js");

new Vue({
  router,
  store,
  render: h => h(App),
  mounted() {
    // this.$toastr.e("Hello World");
  }
}).$mount("#app");
