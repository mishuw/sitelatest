import Vue from "vue";
import VueRouter from 'vue-router';
import App from "./App.vue";
import Bot from "./Mishuwbot.vue";

Vue.config.productionTip = false;

const routers = [
  { path: '/', component: App },
  { path: '/r/mishu', component: Bot }
];

const router = new VueRouter({
  routes: routers,
  mode: 'history'
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
