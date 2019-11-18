import Vue from "vue";
import VueRouter from "vue-router";
// import accueilcomptageneral from "./components/comptabilitegeneral/accueilcomptageneral.vue";
import pagecodification from "./components/codification/pagecodification.vue";
// import monnaie from "./components/codification/monnaie.vue";
import Milieu from "./Layouts/Milieu.vue";
// import accueilcomptaanalityque from "./components/comptaanalytique/accueilcomptaanalityque.vue";
// import Article from "./components/Article.vue";
// import Matiere from "./components/Matiere.vue";
// import Commentaire from "./components/Commentaire.vue";
Vue.use(VueRouter);
const routes = [
    // {
    //     path: "/monnaie",
    //     name: "monnaie",
    //     component: monnaie
    // },
    // {
    //     path: "/accueilcomptageneral",
    //     name: "accueilcomptageneral",
    //     component: accueilcomptageneral
    // },
    {
        path: "/pagecodification",
        name: "pagecodification",
        component: pagecodification
    },
    {
        path: "/",
        name: "Milieu",
        component: Milieu
    },
    // {
    //     path: "/accueilcomptaanalityque",
    //     name: "accueilcomptaanalityque",
    //     component: accueilcomptaanalityque
    // },
    // {
    //     path: "/article",
    //     name: "Article",
    //     component: Article
    // },
    // {
    //     path: "/commentaire",
    //     name: "Commentaire",
    //     component: Commentaire
    // },
    // {
    //     path: "/matiere",
    //     name: "Matiere",
    //     component: Matiere
    // }
];
const router = new VueRouter({
    routes,
    mode: "history"
});
export default router;
