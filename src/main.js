import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/css/fonts.css'

// import $ from 'jquery'
// Vue.prototype.$ = $;

// import style
// swiper 轮播图
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
Vue.use(VueAwesomeSwiper, /* { default options with global component } */)

// 自适应 px转rem
import 'lib-flexible'
// import './utils/flexible'

// 兼容ie与低版本浏览器es6
import 'babel-polyfill'

// *2.对接后端
import axios from 'axios';
Vue.prototype.$axios=axios;

Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
