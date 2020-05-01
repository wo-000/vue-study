import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

//更改浏览器title
router.beforeEach((to,from,next)=>{
  window.document.title=to.meta.title==undefined?"首页":to.meta.title;
  next();
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
