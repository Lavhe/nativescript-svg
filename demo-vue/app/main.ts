import Vue from 'nativescript-vue'
import App from './components/App.vue'
import Svg from 'nativescript-svg/vue';
Vue.use(Svg)

// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = (TNS_ENV === 'production')


Vue.registerElement("circle", () => require('nativescript-svg').Circle);
new Vue({

  render: h => h('frame', [h(App)])
}).$start()
