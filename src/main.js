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
import VueCountdownTimer from "vuejs-countdown-timer";
Vue.use(VueCountdownTimer);
import VueToastr from "vue-toastr";
import Dropd from "vue-dropd";
import VueGraph from "vue-graph";
import GraphLine3D from "vue-graph/src/components/line3d.js";
import NoteWidget from "vue-graph/src/widgets/note.js";
import LegendWidget from "vue-graph/src/widgets/legends.js";
import Pagination from "vue-pagination-2";
import FroalaEditor from "froala-editor";
import "froala-editor/js/plugins/align.min.js";
import "vue-select/dist/vue-select.css";
new FroalaEditor("#edit");
import vSelect from "vue-select";

Vue.component("v-select", vSelect);
import VueApexCharts from "vue-apexcharts";
Vue.use(VueApexCharts);
Vue.component("apexchart", VueApexCharts);
import "froala-editor/js/plugins.pkgd.min.js";
import "froala-editor/js/third_party/embedly.min";
import "froala-editor/js/third_party/font_awesome.min";
import "froala-editor/js/third_party/spell_checker.min";
import "froala-editor/js/third_party/image_tui.min";
import "froala-editor/css/froala_editor.pkgd.min.css";
import VueFroala from "vue-froala-wysiwyg";
import { Chat } from "vue-quick-chat";
import Select2 from "v-select2-component";
import Toasted from "vue-toasted";
Vue.use(Toasted, {
    duration: 5000,
    position: "top-center",
});
Vue.use(VueToastr, {
    defaultTimeout: 10000,
    defaultProgressBar: false,
    defaultProgressBarValue: 0,
    defaultPosition: "toast-top-center",
    defaultCloseOnHover: false,
    defaultClassNames: ["animated", "zoomInDown"],
});
import axios from "axios";

// store.dispatch("LogOut");

axios.defaults.withCredentials = false;
axios.defaults.baseURL = "https://api.myjobdesk.com/api/";
axios.defaults.headers.common["Authorization"] =
    "Bearer " + store.getters.StateToken;
axios.defaults.headers.post["Content-Type"] = "application/json";

axios.interceptors.response.use(undefined, function(error) {
    if (error) {
        // const originalRequest = error.config;
        // if (error.response.status === 401 && !originalRequest._retry) {
        //     originalRequest._retry = true;
        //     store.dispatch("LogOut");
        //     return router.push("/login");
        // }

        return Promise.reject(error);
    }
});

Vue.component("Select2", Select2);
Vue.use(VueFroala);

Vue.component(GraphLine3D.name, GraphLine3D);
Vue.component(NoteWidget.name, NoteWidget);
Vue.component(LegendWidget.name, LegendWidget);

Vue.use(VueGraph);
Vue.component("dropd", Dropd);

import VueMoment from "vue-moment";
import moment from "moment-timezone";
Vue.use(VueMoment, {
    moment,
});
import { VueEditor } from "vue2-editor";
import Multiselect from "vue-multiselect";
import VueUploadMultipleImage from "vue-upload-multiple-image";
import handleAxiosErrors from "./mixins/handle-axios-errors";
import logout from "./mixins/logout";
Vue.mixin(handleAxiosErrors);
Vue.mixin(logout);
Vue.component("pagination", Pagination);

export default {
    components: {
        VueUploadMultipleImage,
        Multiselect,
        Pagination,
        VueEditor,
        Chat,
    },
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
    render: (h) => h(App),
    mounted() {
        // this.$toastr.e("Hello World");
    },
}).$mount("#app");