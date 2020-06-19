<template>
  <div>
    <div class="rightList-box" style="top:282px">
      <div class="rightList-Menu">
        <div class="item">直播</div>
        <div class="item">动画</div>
        <div class="item">番剧</div>
        <div class="item">舞蹈</div>
        <div class="item">科技</div>
        <div class="item">生活</div>
        <div class="item">鬼畜</div>
        <div class="item">影视</div>
        <div class="back-top" @click="backTop">
          <svg
            t="1591202464286"
            class="icon"
            viewBox="0 0 2048 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="14802"
            width="200"
            height="200"
          >
            <path
              d="M2007.058212 784.887573 1096.838553 26.371193C1054.644643-8.790398 993.355357-8.790398 951.161447 26.371193L40.941791 784.887573C-7.331356 825.115194-13.853542 896.859243 26.37408 945.132393 66.601703 993.405531 138.34575 999.927719 186.618897 959.700098L1096.838553 201.18372 951.161447 201.18372 1861.381097 959.700098C1909.654247 999.927719 1981.398296 993.405531 2021.625917 945.132393 2061.853538 896.859243 2055.33135 825.115194 2007.058212 784.887573L2007.058212 784.887573Z"
              p-id="14803"
            />
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import $ from 'jquery';
// import '../../assets/js/jquery.scroll.floor'
// 置顶
// $(".back-top").on("click", function() {
//   $("html,body").animate({ scrollTop: 0 }, 500);
// });

// 侧边栏高亮
$(document).ready(function() {
  

});


export default {
  methods: {
    backTop() {
      $("html,body").animate({ scrollTop: 0 }, 100);
    }
  }
};
</script>
<style lang="less">
// 右列表盒子start
.rightList-box {
  width: 60px;
  height: 220px;
  padding: 20px 0;
  position: relative;
  // top: 284px;
  // right: 78px;
  border: 1px solid gray;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.6);
  // z-index: 5;
}
.rightList-box div {
  margin: 8px 0;
  cursor: pointer;
}
.rightList-box .item:hover {
  background-color: deepskyblue;
}

.rightList-box svg {
  width: 20px;
  height: 16px;
}
.Scrollon {
  background-color: deepskyblue;
}
// 右列表盒子end
</style>