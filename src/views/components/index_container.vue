<template>
  <div class="middle-container top-wrap">
    <!--轮播图 热门视频部分 -->
    <div class="first-screen">
      <div class="reportScreen1">
        <div class="home-slide">
          <div class="van-slide">
            <swiper ref="mySwiper" :options="swiperOptions">
              <swiper-slide>
                <div class="item">
                  <a href="#">
                    <img src="../../assets/images/slider1.png" alt="图没啦" id="pic" />
                    <p class="slide-title">B站热报:大周女皇来袭！</p>
                  </a>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="item">
                  <a href="#">
                    <img src="../../assets/images/slider2.png" alt />
                    <p class="slide-title">B站热报:大周女皇来袭！</p>
                  </a>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="item">
                  <a href="#">
                    <img src="../../assets/images/slider3.png" alt />
                    <p class="slide-title">B站热报:大周女皇来袭！</p>
                  </a>
                </div>
              </swiper-slide>

              <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
          </div>
          <!-- <div class="dot">
            <span class="on"></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          -->
          <a href="#" class="more" style="display:none">更多《</a>
        </div>

        <div class="hot-video-box">
          <div class="video-card">
            <div class="info-box">
              <a href="//www.bilibili.com/video/BV1VE411s76B" target="_blank">
                <img src="../../assets/images/66.jpg" alt="女流 - 回到80年代 - 不止蒸汽 / 凝望我眼眸" />
                <div class="info">
                  <p title="女流 - 回到80年代 - 不止蒸汽 / 凝望我眼眸？！" class="title">女流 - 回到80年代 - 不止蒸汽 / 凝望我眼眸！</p>
                  <p class="up">
                    <i class="bilifont bili-icon_xinxi_UPzhu"></i>此中门
                  </p>
                  <p class="play">2.2万播放</p>
                </div>
              </a>
            </div>
            <div class="watch-later-video van-watchlater black">
              <span class="wl-tips" style="display:none;"></span>
            </div>
          </div>
          <div class="video-card">
            <div class="info-box">
              <a href="//www.bilibili.com/video/BV1VE411s76B" target="_blank">
                <img src="../../assets/images/66.jpg" alt="女流 - 回到80年代 - 不止蒸汽 / 凝望我眼眸" />
                <div class="info">
                  <p title="女流 - 回到80年代 - 不止蒸汽 / 凝望我眼眸？！" class="title">女流 - 回到80年代 - 不止蒸汽 / 凝望我眼眸！</p>
                  <p class="up">
                    <i class="bilifont bili-icon_xinxi_UPzhu"></i>此中门
                  </p>
                  <p class="play">2.2万播放</p>
                </div>
              </a>
            </div>
            <div class="watch-later-video van-watchlater black">
              <span class="wl-tips" style="display:none;"></span>
            </div>
          </div>
          <div class="video-card">
            <div class="info-box">
              <a href="//www.bilibili.com/video/BV1VE411s76B" target="_blank">
                <img src="../../assets/images/66.jpg" alt="女流 - 回到80年代 - 不止蒸汽 / 凝望我眼眸" />
                <div class="info">
                  <p title="女流 - 回到80年代 - 不止蒸汽 / 凝望我眼眸？！" class="title">女流 - 回到80年代 - 不止蒸汽 / 凝望我眼眸！</p>
                  <p class="up">
                    <i class="bilifont bili-icon_xinxi_UPzhu"></i>此中门
                  </p>
                  <p class="play">2.2万播放</p>
                </div>
              </a>
            </div>
            <div class="watch-later-video van-watchlater black">
              <span class="wl-tips" style="display:none;"></span>
            </div>
          </div>
          <div class="video-card">
            <div class="info-box">
              <a href="//www.bilibili.com/video/BV1VE411s76B" target="_blank">
                <img src="../../assets/images/66.jpg" alt="女流 - 回到80年代 - 不止蒸汽 / 凝望我眼眸" />
                <div class="info">
                  <p title="女流 - 回到80年代 - 不止蒸汽 / 凝望我眼眸？！" class="title">女流 - 回到80年代 - 不止蒸汽 / 凝望我眼眸！</p>
                  <p class="up">
                    <i class="bilifont bili-icon_xinxi_UPzhu"></i>此中门
                  </p>
                  <p class="play">2.2万播放</p>
                </div>
              </a>
            </div>
            <div class="watch-later-video van-watchlater black">
              <span class="wl-tips" style="display:none;"></span>
            </div>
          </div>
          <div class="video-card">
            <div class="info-box">
              <a href="//www.bilibili.com/video/BV1VE411s76B" target="_blank">
                <img src="../../assets/images/66.jpg" alt="女流 - 回到80年代 - 不止蒸汽 / 凝望我眼眸" />
                <div class="info">
                  <p title="女流 - 回到80年代 - 不止蒸汽 / 凝望我眼眸？！" class="title">女流 - 回到80年代 - 不止蒸汽 / 凝望我眼眸！</p>
                  <p class="up">UP!此中门</p>
                  <p class="play">2.2万播放</p>
                </div>
              </a>
            </div>
            <div class="watch-later-video van-watchlater black">
              <span class="wl-tips" style="display:none;"></span>
            </div>
          </div>
          <div class="video-card">
            <div class="info-box">
              <a href="//www.bilibili.com/video/BV1VE411s76B" target="_blank">
                <img src="../../assets/images/66.jpg" alt="女流 - 回到80年代 - 不止蒸汽 / 凝望我眼眸" />
                <div class="info">
                  <p title="女流 - 回到80年代 - 不止蒸汽 / 凝望我眼眸？！" class="title">女流 - 回到80年代 - 不止蒸汽 / 凝望我眼眸！</p>
                  <p class="up">
                    <i class="bilifont bili-icon_xinxi_UPzhu"></i>此中门
                  </p>
                  <p class="play">2.2万播放</p>
                </div>
              </a>
            </div>
            <div class="watch-later-video van-watchlater black">
              <span class="wl-tips" style="display:none;"></span>
            </div>
          </div>
        </div>
      </div>
      <div class="reportScreen2">
        <div class="screen2leftbox">
          <header class="storey-title">
            <div class="l-con">
              <svg
                t="1591184585167"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="13135"
                width="200"
                height="200"
              >
                <path
                  d="M69.818182 349.090909h46.545454c13.963636 0 23.272727 9.309091 23.272728 23.272727v209.454546c0 13.963636-9.309091 23.272727-23.272728 23.272727H69.818182c-13.963636 0-23.272727-9.309091-23.272727-23.272727v-209.454546c0-13.963636 9.309091-23.272727 23.272727-23.272727zM186.181818 372.363636c0-11.636364 9.309091-27.927273 20.945455-32.581818l377.018182-167.563636c11.636364-4.654545 20.945455 0 20.945454 13.963636v581.818182c0 11.636364-9.309091 18.618182-20.945454 13.963636L207.127273 614.4c-11.636364-4.654545-20.945455-18.618182-20.945455-32.581818v-209.454546zM744.727273 465.454545h232.727272v69.818182H744.727273zM675.025455 350.743273l164.561454-164.538182 49.361455 49.338182-164.538182 164.561454zM675.025455 654.452364l49.361454-49.338182 164.561455 164.538182-49.361455 49.361454z"
                  fill="#FACE53"
                  p-id="13136"
                />
              </svg>
              <span class="name">推广</span>

              <a href="#" class="l-con-r">
                <svg
                  t="1591184821469"
                  class="icon2"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="13929"
                  width="200"
                  height="200"
                >
                  <path
                    d="M421.4 960S34.1 872.6 207.2 438.8c0 0 39.3 48.2 33.9 71.4 0 0 30.8-109.5 97.3-174.9C395.5 279.1 453.5 121.1 400 64c0 0 265 57.1 294.5 342.7 0 0 33.9-91 103.5-100 0 0-21.4 50 0 125 0 0 219.5 385.5-158.8 515.8 0 0 113.4-132.1-127.1-358.8 0 0-56.7 121.4-90.6 164.2-0.1 0.1-94.7 108.9-0.1 207.1z"
                    fill="#D81E06"
                    p-id="13930"
                  />
                </svg>
                <span>DY NO.1声优寅子光临</span>
              </a>
            </div>
          </header>
          <div class="leftcontent">
            <div class="leftbox">
              <div>
                <a
                  href="https://www.bilibili.com/video/BV14i4y1s7cB?from=search&seid=5439001192624032044"
                  target="_blank"
                >
                  <img src="../../assets/images/left6.png" alt />
                </a>
                <div class="count1">
                  <span>2:66</span>
                </div>
                <p class="leftbox-title">女流：高中的时候有同学追我，我觉着那是真爱（莫名被锁，加字幕重发）</p>
                <a href="#">
                  <div class="up-icon">up</div>
                  <p class="up-title">大周编外考古师</p>
                </a>
              </div>
              <div>
                <a
                  href="https://www.bilibili.com/video/BV14i4y1s7cB?from=search&seid=5439001192624032044"
                  target="_blank"
                >
                  <img src="../../assets/images/left6.png" alt />
                </a>
                <div class="count2">
                  <span>2:66</span>
                </div>
                <p class="leftbox-title">女流：高中的时候有同学追我，我觉着那是真爱（莫名被锁，加字幕重发）</p>
                <a href="#">
                  <div class="up-icon">up</div>
                  <p class="up-title">大周编外考古师</p>
                </a>
              </div>
              <div>
                <a
                  href="https://www.bilibili.com/video/BV14i4y1s7cB?from=search&seid=5439001192624032044"
                  target="_blank"
                >
                  <img src="../../assets/images/left6.png" alt />
                </a>
                <div class="count3">
                  <span>2:66</span>
                </div>
                <p class="leftbox-title">女流：高中的时候有同学追我，我觉着那是真爱（莫名被锁，加字幕重发）</p>
                <a href="#">
                  <div class="up-icon">up</div>
                  <p class="up-title">大周编外考古师</p>
                </a>
              </div>
              <div>
                <a
                  href="https://www.bilibili.com/video/BV14i4y1s7cB?from=search&seid=5439001192624032044"
                  target="_blank"
                >
                  <img src="../../assets/images/left6.png" alt />
                </a>
                <div class="count3">
                  <span>2:66</span>
                </div>
                <p class="leftbox-title">女流：高中的时候有同学追我，我觉着那是真爱（莫名被锁，加字幕重发）</p>
                <a href="#">
                  <div class="up-icon">up</div>
                  <p class="up-title">大周编外考古师</p>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="screen2rightbox">
          <div class="online">
            <a href="#">在线列表</a>
          </div>
          <a
            href="https://www.bilibili.com/video/BV1BE411k7Kr?from=search&seid=11988774506111178317"
          >
            <img src="../../assets/images/bobo.png" alt="菠萝赛猪" />
          </a>
        </div>
      </div>
    </div>
    <!-- 右侧边栏 -->
    <div class="right-listBox">
      <listBoxt></listBoxt>
    </div>
    <div class="adv1">
      <a
        href="https://lp.sunlands.com/14183/CN/pc/afnuHg/index.html?plan_id=1161967&creative_id=qzpc00033"
        target="_blank"
      >
        <img src="../../assets/images/adv1.jpeg" alt />
      </a>
    </div>
    <div class="proxy-box">
      <!--直播部分 -->
      <div class="part-live">
        <livePart></livePart>
      </div>
      <!--动漫部分 -->
      <div class="part-live">
        <cartonPart></cartonPart>
      </div>
      <!--番剧部分 -->
      <div class="part-live"></div>
    </div>
  </div>
</template>
<script>
import $ from "jquery";
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
import livePart from "../children/livePart";
import listBoxt from "../children/listBox";
import cartonPart from "../children/cartonPart";
export default {
  name: "carrousel",

  // loop: true,
  data() {
    return {
      swiperOptions: {
        loop: true,
        autoplay: true,
        pagination: {
          el: ".swiper-pagination"
        }
        // Some Swiper option/callback...
      }
    };
  },
  methods: {
    // backTop(){
    //     $('html,body').animate({scrollTop:0},500);
    // }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    }
  },
  mounted() {
    console.log("Current Swiper instance object", this.swiper);
    this.swiper.slideTo(1, 1000, false);
  },
  components: {
    Swiper,
    SwiperSlide,
    livePart,
    listBoxt,
    cartonPart
  },
  directives: {
    swiper: directive
  }
};

$(function() {
  var nav = $(".rightList-box"); //得到导航对象

  var win = $(window); //得到窗口对象

  var sc = $(document); //得到document文档对象。

  win.scroll(function() {
    if (sc.scrollTop() >= 600) {
      nav.addClass(".rightList-box");
    } else {
      nav.removeClass(".rightList-box");
    }
  });
});

// 置顶
//  $(".back-top").on("click",function(){
//         $('html,body').animate({scrollTop:0},500);
//    })
</script>
<style lang="less">
// 轮播图start
.reportScreen1 {
  display: flex;
  justify-content: space-between;
  position: relative;
}
.van-slide {
  width: 520px;
  height: 216px;
  z-index: 0;
}
.van-slide .item p {
  z-index: 2;
  position: absolute;
  bottom: 9px;
  left: 28px;
  color: #fff;
  text-shadow: 0 2px 2px rgba(0, 0, 0, 0.6);
}
.van-slide .item img {
  width: 520px;
  height: 216px;
  border-radius: 3px;
}

.home-slide .dot span {
  display: inline-block;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  z-index: 1;
  border: 1px solid gray;
  background-color: #fff;
  margin-left: 6px;
}
.swiper-pagination {
  bottom: 10px;
  left: 148px !important;
}
.swiper-pagination-bullet {
  background-color: #fff;
}
// .home-slide .dot {
//   position: absolute;
//   bottom: 7px;
//   left: 350px;
// }

// 热门视频
.hot-video-box {
  display: flex;
  flex-wrap: wrap;
  font-size: 12px;
  width: 680px;
  height: 216px;
  border-radius: 3px;
}
.hot-video-box .video-card {
  margin-left: 13px;
  margin-bottom: 8px;
}

.hot-video-box .video-card .info-box {
  overflow: hidden;
}
.info-box {
  position: relative;
}
.info-box .info {
  position: absolute;
  top: 83px;
  right: -67px;
}
.info-box .info .title {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-weight: 500;
  color: #fff;
  font-size: 14px;
  z-index: 2;
}
.hot-video-box .video-card img {
  width: 213px;
  height: 102px;
  border-radius: 3px;
}
// end

// 推广start
.reportScreen2 {
  display: flex;
  justify-content: space-between;
  padding-top: 35px;
}
.screen2leftbox {
  // display: flex;
}
.screen2leftbox .storey-title {
  display: flex;
  padding-bottom: 15px;
  line-height: 35px;
}
.storey-title .l-con {
  position: relative;
}
.storey-title .l-con > svg {
  width: 31px;
  height: 35px;
  vertical-align: -10px;
  //  position: absolute;
  //  top: 0;
  //  left: 0;
}
.storey-title .l-con .name {
  font-size: 22px;
  font-weight: 500;
  padding-left: 5px;
  padding-right: 10px;
  // position: absolute;
  //  top: 0;
  //  left: 0;
}
.storey-title .l-con svg.icon2 {
  width: 26px;
  height: 20px;
}
.l-con .l-con-r {
  // vertical-align: -2px;
  line-height: 35px;
  // position: absolute;
  //  top: 0;
  //  right: 0;
}
.l-con .l-con-r span {
  vertical-align: 4px;
}
.leftcontent .leftbox {
  display: flex;
  position: relative;
}
.leftcontent .leftbox div {
  width: 206px;
  margin-right: 14px;
}
.leftcontent .leftbox .leftbox-title {
  color: #000;
  font-size: 14px;
}
.leftcontent .leftbox div .up-icon {
  border: 1px solid gray;
  width: 20px;
  height: 13px;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.6);
  line-height: 13px;
  color: gray;
  margin-top: 10px;
  margin-left: 8px;
}
.leftcontent .leftbox div a {
  position: relative;
  display: flex;
}
.leftcontent .leftbox div .up-title {
  color: gray;
  font-size: 14px;
  width: 120px;
  padding-top: 9px;
}

.leftcontent .leftbox img {
  width: 206px;
  height: 116px;
}
.leftcontent .leftbox .count1 {
  position: absolute;
  top: 99px;
  left: 186px;
  color: #fff;
  text-shadow: 0 2px 2px rgba(0, 0, 0, 0.6);
}
.leftcontent .leftbox .count2 {
  position: absolute;
  top: 99px;
  left: 420px;
  color: #fff;
  text-shadow: 0 2px 2px rgba(0, 0, 0, 0.6);
}
.leftcontent .leftbox .count3 {
  position: absolute;
  top: 99px;
  right: 25px;
  color: #fff;
  text-shadow: 0 2px 2px rgba(0, 0, 0, 0.6);
}
// 推广end
// 右边在线列表start
.screen2rightbox a img {
  width: 318px;
  height: 208px;
}
.screen2rightbox .online {
  width: 318px;
  height: 35px;
  background-color: rgba(0, 0, 0, 0.1);
  margin-bottom: 16px;
  line-height: 35px;
}
.screen2rightbox .online a {
  color: #000;
  font-size: 15px;
}
// 右边在线列表end
// 广告1 start
.adv1 img {
  padding: 40px 0;
  width: 1200px;
}
// 广告1 end
// 侧边栏start
.right-listBox {
  position: fixed;
  left: calc(50%);
  top: 0px;
  margin-left: 620px;
}
// 侧边栏end
</style>