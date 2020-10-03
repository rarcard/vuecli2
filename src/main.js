// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  /*  components: { App },
  template: "<App/>" */
  render: h => h(App)
});
//runtime-compiler(v1)
//template->ast->render->vdom->ui

//runtime-only(v2)(1、性能更强，2、代码量更少 )
//render->vdom->ui


//vue-template-compiler
