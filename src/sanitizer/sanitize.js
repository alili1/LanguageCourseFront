import Vue from "vue";
import App from "./App.vue";

import VueSanitize from "vue-sanitize";

//console.log(VueSanitize.defaults);
let defaults = VueSanitize.defaults;
/*
defaults.allowedTags = defaults.allowedTags.filter(t => {
  return t !== 'strong';
});
*/
console.log(defaults);
Vue.use(VueSanitize,defaults);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
