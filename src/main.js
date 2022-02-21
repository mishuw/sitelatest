import Vue from "vue";
import App from "./App.vue";
import Bot from "./Mishuwbot.vue";

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  components: {
    App,
    Bot
  },
  template: '<App/>',
  render: h => h(App)
});
