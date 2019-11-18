import Vue from "vue";
import Vuex from "vuex";
import monnaiegeneral from "./modules/monnaie/index";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        monnaiegeneral: monnaiegeneral
    }
});
