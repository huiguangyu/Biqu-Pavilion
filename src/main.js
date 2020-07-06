// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue"
import App from "./App"
import router from "./router"
import api from "./plugins/api/index"
import store from "./store/store"

import { Toast, Swipe, SwipeItem, Icon, List, Loading, NavBar, Tab, Tabs, RadioGroup, Radio, Progress } from "vant"

Vue.use(Toast)
  .use(Swipe)
  .use(SwipeItem)
  .use(Icon)
  .use(List)
  .use(Loading)
  .use(NavBar)
  .use(Tab)
  .use(Tabs)
  .use(Progress)
  .use(RadioGroup)
  .use(Radio)
Vue.config.productionTip = false
Vue.prototype.$api = api

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  store,
  components: { App },
  template: "<App/>"
})
