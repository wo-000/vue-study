import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    shop:[
      {
        id:1,
        name:'aa',
        price:12,
        count:1
      },
      {
        id:2,
        name:'bb',
        price:20,
        count:1
      },
      {
        id:3,
        name:'cc',
        price:18,
        count:1
      },
      {
        id:4,
        name:'dd',
        price:8,
        count:1
      }
    ]
  },
  mutations: {
    add(state,id){
      let good=state.shop.find((data)=>{return data.id==id})
      if(good){
        good.count++;
      }
    },
    cut(state,id){
      let good=state.shop.find((data)=>{return data.id==id})
      if(good){
        if(good.count<=1){
          return;
        }
        good.count--;
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
