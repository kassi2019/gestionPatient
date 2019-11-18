import Vue from "vue";

import axios from "axios";
axios.defaults.baseURL = "http://localhost:8000/api";
axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";

import Default from "../src/layouts/Default.vue";
import NoSidebar from "../src/layouts/NoSidebar.vue";

import "./../node_modules/jquery/dist/jquery.min.js";
import "./../node_modules/bootstrap/dist/js/bootstrap.min.js";
import App from "./App.vue";
import router from "./routes";
import store from "./vuex/store";


var Jquery = require("jquery");

Vue.config.productionTip = false;
Vue.prototype.$axios = axios;
Vue.prototype.$ = Jquery;

Vue.component("default-layout", Default);
Vue.component("no-sidebar-layout", NoSidebar);

import VuejsDialog from "vuejs-dialog";
// include the default style
import "vuejs-dialog/dist/vuejs-dialog.min.css";
import VueLoading from "vuejs-loading-plugin";

// using default options
//Vue.use(VueLoading)

Vue.use(VueLoading, {
    dark: true, // default false
    text: "Patientez ..." // default 'Loading'
    //loading: true, // default false
    // background: 'rgb(255,255,255)', // set custom background
});
// Tell Vue to install the plugin.
// Vue.use(VuejsDialog);
Vue.use(VuejsDialog, {
    html: true,
    loader: true,
    okText: "Continuer",
    cancelText: "Annuler",
    animation: "bounce"
});

Vue.use(require("vue-shortkey"));
//jfj

import Notifications from "vue-notification";
Vue.use(Notifications);

import fab from "vue-fab";
Vue.component("fab", fab);

import JwPagination from "jw-vue-pagination";
Vue.component("jw-pagination", JwPagination);

// new Vue({
//   router,
//   store,
//   render: h => h(App)
// }).$mount("#app");

const app = new Vue({
    // el: '#app',
    router,
    store,
    render: h => h(App)
}).$mount("#app");
store.$app = app;
