<template>
  <div>
    <!--头部 -->
     <indexHeader :HeadrChannelmMenucount="ChannelmMenucount" @fromHeaderVal="fromHeaderValfn" />
    <!--中部内容 -->
    <cartonContainer></cartonContainer>
    <!--尾部 -->
    <indexFooter></indexFooter>
    <!-- 右侧边栏 -->
    <!--
    <div class="right-listBox">
      <listBox></listBox>
    </div>
    -->
  </div>
</template>
<script>
import indexHeader from "./components/index_header";
import cartonContainer from "./components/carton_container";
import indexFooter from "./components/index_footer";
// import listBox from "./children/listBox.vue";

export default {
  components: {
    indexHeader,
    indexFooter,
    cartonContainer,
    // listBox
  },
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
  
    fromHeaderValfn(val){
      this.ChannelmMenucount2 = val
    }
  },
};
</script>
<style lang="less">
</style>