<template>
  <div id="index">
    <!-- 头部 -->
    <!-- 组件间的通讯 父向子传值：1.自定义属性 2.header子组件中用props3.子组件相应地方用HeadrChannelmMenucount -->
    <!-- 子给父传值通过触发自定义事件v-on:fromHeaderVal-->
    <indexHeader :HeadrChannelmMenucount="ChannelmMenucount" @fromHeaderVal="fromHeaderValfn" />
    <!-- 内容区域 -->
    <indexContainer />
    <!-- 底部 -->
    <indexFooter />{{ChannelmMenucount2}}
    <!-- 子页面视图 -->
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>
<script>
import indexHeader from "./components/index_header";
import indexContainer from "./components/index_container";
import indexFooter from "./components/index_footer";
import { mapActions } from "vuex";
export default {
  components: { indexHeader, indexContainer, indexFooter },
  data() {
    return {
      ChannelmMenucount:"26+",
      ChannelmMenucount2:"2"
      // screenWidth: document.body.clientWidth, // 网页可见区域宽
      // screenHW: window.orientation, // 判断横竖屏
      // isScreen: true // 横竖屏
    };
  },
  methods: {
    ...mapActions("index", [
      // 'get_indexColumn_data'
    ]),

    fromHeaderValfn(val){
      this.ChannelmMenucount2 = val
    }
  },
  created() {
    // this.get_indexColumn_data()
  }
};
</script>
<style lang='less'>
// #index {
//   position: relative;
//   width: 100%;
//   height: 100%;
//   overflow: hidden;
// }
</style>
