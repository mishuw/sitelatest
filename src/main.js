import Vue from "vue";
import App from "./App.vue";
import Bot from "./Mishuwbot.vue";

Vue.config.productionTip = false;

new Vue({
    el: '#app',
    render: (element => element(navigation)),//this will render only navigation component. How to render pageoptions too in this call?
    components: {App,Bot}
})
