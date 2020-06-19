import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

 /* vuex 通过store选项提供了一种机制，把我们想要管理的状态，
     从根组件注入到每一个组件中，并且store实例注册到根组件下所有子组件，所有子组件都能
     通过this.$store访问 
  */

export default new Vuex.Store({
  // 存储状态 值
  state: {
    danceVal: "56",
    LifeVal:"22",
    userInfo: {
      name:'latte',
      age:22
    }
  },

  // 修改state的唯一方法，只允许同步函数
  mutations: {
    // 第一个参state值，第二个接收触发方法时传来的值
    changeDanceVal(state,num) {
      state.LifeVal = num;
    }
  },

  // 修改state值类似mutations，可包含任意异步操作，
  // 他他提交的是mutation
  actions: {
    // 异步操作
    asyncchangebuycarCount(top, num) {
      setTimeout(() => {
        // window对象content属性已经不推荐使用，请改用window.top
        top.commit('changebuycarCount',num)
      }, 1000);
    }
    
  },
  // store的计算属性：用来派生一些state值(比如对列表进行过滤并计算)
  getters: {
    userName(state) {
      return state.userinfo.name
      }
  },

  // 当项目越来越复杂，Vuex也会越来越大这时候modules就起作用了
  // state子模块：
  // Vuex允许我们将store分割成模块(module), 除了modules以上属性全部包括
  modules:{}
}) 

