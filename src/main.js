import Vue from "vue";
import App from "./App.vue";
import Bot from "./Mishuwbot.vue";
import VueRouter from 'vue-router';

Vue.use(VueRouter);
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
