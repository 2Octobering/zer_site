<template>
  <div class="top-header">
    <div class="top-mini-header">
      <div class="top-mini-header_content">
        <div class="top-nav">
          <el-breadcrumb class="top-nav-items" color:white>
            <el-breadcrumb-item>
              <a href="/">主站</a>
            </el-breadcrumb-item>
            <el-breadcrumb-item>
              <a href="/cartonPage" target="_blank">番剧</a>
            </el-breadcrumb-item>
            <el-breadcrumb-item>
              <a href="/">游戏中心</a>
            </el-breadcrumb-item>
            <el-breadcrumb-item>
              <a href="/">直播</a>
            </el-breadcrumb-item>
            <el-breadcrumb-item>
              <a href="/">漫画</a>
            </el-breadcrumb-item>
            <el-breadcrumb-item>
              <a href="/">反馈中心</a>
            </el-breadcrumb-item>
            <el-breadcrumb-item>
              <a href="/">下载APP</a>
            </el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <div class="top-search">
          <el-input placeholder="请输入内容" v-model="input" clearable class="top-searchBox" ref="txt-search"></el-input>
          <div class="search">
            <a href="#">
              <span class="iconfont">&#xe60b;</span>
            </a>
          </div>
        </div>
        <div class="top-loginbox">
          <ul class="login-ul">
            <div
              class="mini-login"
              onmouseover="document.all.Layer1.style.visibility=''"
              onmouseout="document.all.Layer1.style.visibility='hidden'"
            >
              <li class="login-li">
                <a href>
                  <img src="@/assets/images/akari.jpg" alt="2233" />
                </a>
              </li>
              <li class="login-li">
                <a href="/login" target="_blank">登录</a>
              </li>
            </div>
            <li class="regist-li">
              <a href>注册</a>
            </li>
          </ul>
          <div class="topSub">
            <a href>投稿</a>
          </div>

          <!-- 隐藏层 -->
          <div class="mini-loginBox" id="Layer1" style="visibility:hidden">
            <svg
              t="1592233047660"
              class="icon3"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="2646"
              width="200"
              height="200"
            >
              <path
                d="M1007.35040929 733.69123246l-499.89751812-499.89751811-498.38273574 498.38273573z"
                fill="#ffffff"
                p-id="2647"
              />
            </svg>
            <p>登录后可了解:</p>
            <div class="swiperBox">
              <swiper :options="mySwiperOption" class="my-gallery" ref="mySwiper">
                <swiper-slide class="slide1">
                  <img src="../../assets/images/mini-loginImg1.gif" alt />
                </swiper-slide>
                <swiper-slide class="slide2">
                  <img src="../../assets/images/mini-loginImg1.gif" alt />
                </swiper-slide>
              </swiper>
            </div>
            <div class="btn-switch">
              <el-button type="primary">
                <a href="/login" target="_blank">登录</a>
              </el-button>
              <el-button type="success">
                <a href="#">注册</a>
              </el-button>
            </div>
          </div>
        </div>
        <div class="top-userinfo" style="display:none">
          <el-breadcrumb class="top-userinfo-items">
            <el-breadcrumb-item>
              <a href>
                <img src="@/assets/images/carton-llist-img2.jpg" alt="23" />
              </a>
            </el-breadcrumb-item>

            <el-breadcrumb-item>
              <a href>大会员</a>
            </el-breadcrumb-item>

            <el-breadcrumb-item>
              <a href>消息</a>
            </el-breadcrumb-item>

            <el-breadcrumb-item>
              <a href>动态</a>
            </el-breadcrumb-item>

            <el-breadcrumb-item>
              <a href>收藏</a>
            </el-breadcrumb-item>
          </el-breadcrumb>
          <div class="topSub">
            <a href>投稿</a>
          </div>
        </div>
      </div>
    </div>
    <div class="top-banner">
      <img src="../../assets/images/banner.png" alt="banner" style="opacity:0.96" />
      <div class="b-logo">
        <a href="head-logo">
          <img src="../../assets/images/logo.png" alt />
        </a>
      </div>
      <a href="http://www.bilibili.com" class="banner-link" target="_blank"></a>
    </div>

    <div class="top-wrap">
      <div class="top-primary-menu">
        <div class="primaryPageTab">
          <ul class="menu-ul">
            <li>
              <a href="/">
                <div class="round">
                  <span class="iconfont">&#xe60b;</span>
                </div>
                <span>首页</span>
              </a>
            </li>
            <li>
              <a href="#">
                <div class="round">
                  <span class="iconfont">&#xe60b;</span>
                </div>
                <span>动态</span>
              </a>
            </li>
            <li>
              <a href="#">
                <div class="round">
                  <span class="iconfont">&#xe60b;</span>
                </div>
                <span>排行榜</span>
              </a>
            </li>
            <li>
              <a href="#">
                <div class="round">
                  <span class="iconfont">&#xe60b;</span>
                </div>
                <span>频道</span>
              </a>
            </li>
          </ul>
        </div>
        <span class="tab-line"></span>
        <div class="primaryChannelmMenu">
          <span
            @click="click"
            onmouseover="document.all.Layer2.style.visibility=''"
            onmouseout="document.all.Layer2.style.visibility='hidden'"
          >
            <div class="item">
              <a href="#" class="name">
                <span>
                  动画
                  <em>{{ChannelmMenucount2}}</em>
                </span>
              </a>
            </div>
          </span>
          <span>
            <div class="item">
              <a href="#" class="name">
                <span>
                  音乐
                  <em>{{HeadrChannelmMenucount}}</em>
                </span>
              </a>
            </div>
          </span>
          <span>
            <div class="item">
              <a href="#" class="name">
                <span>
                  舞蹈
                  <em class="dance-em">
                    <!--{{this.$store.state.danceVal}}-->
                    {{danceVal}}
                    <span @click="addCount()">+</span>
                  </em>
                </span>
              </a>
            </div>
          </span>
          <span>
            <div class="item">
              <a href="#" class="name">
                <span>
                  科技
                  <em>{{ChannelmMenucount}}</em>
                </span>
              </a>
            </div>
          </span>
          <span>
            <div class="item">
              <a href="#" class="name">
                <span>
                  生活
                  <em class="life-em">
                    {{LifeVal}}+
                  </em>
                </span>
              </a>
            </div>
          </span>
          <span>
            <div class="item">
              <a href="#" class="name">
                <span>
                  时尚
                  <em>{{ChannelmMenucount}}</em>
                </span>
              </a>
            </div>
          </span>
          <span>
            <div class="item">
              <a href="#" class="name">
                <span>
                  娱乐
                  <em>{{ChannelmMenucount}}</em>
                </span>
              </a>
            </div>
          </span>
          <span>
            <div class="item">
              <a href="#" class="name">
                <span>
                  番剧
                  <em>{{ChannelmMenucount}}</em>
                </span>
              </a>
            </div>
          </span>
          <span>
            <div class="item">
              <a href="#" class="name">
                <span>
                  鬼畜
                  <em>{{ChannelmMenucount}}</em>
                </span>
              </a>
            </div>
          </span>
          <span>
            <div class="item">
              <a href="#" class="name">
                <span>
                  鬼畜
                  <em>{{ChannelmMenucount}}</em>
                </span>
              </a>
            </div>
          </span>
          <span>
            <div class="item">
              <a href="#" class="name">
                <span>
                  鬼畜
                  <em>{{ChannelmMenucount}}</em>
                </span>
              </a>
            </div>
          </span>
          <span>
            <div class="item">
              <a href="#" class="name">
                <span>
                  鬼畜
                  <em>{{ChannelmMenucount}}</em>
                </span>
              </a>
            </div>
          </span>
          <span>
            <div class="item">
              <a href="#" class="name">
                <span>
                  鬼畜
                  <em>{{ChannelmMenucount}}</em>
                </span>
              </a>
            </div>
          </span>
          <span>
            <div class="item">
              <a href="#" class="name">
                <span>
                  鬼畜
                  <em>{{ChannelmMenucount}}</em>
                </span>
              </a>
            </div>
          </span>
          <span>
            <div class="item">
              <a href="#" class="name">
                <span>
                  鬼畜
                  <em>{{ChannelmMenucount}}</em>
                </span>
              </a>
            </div>
          </span>
          <span>
            <div class="item">
              <a href="#" class="name">
                <span>
                  更多
                  <em style="display:none">--</em>
                </span>
                <svg
                  t="1591090302134"
                  class="icon"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="4669"
                  width="200"
                  height="200"
                >
                  <path
                    d="M508.70272 612.21888l-378.78784-382.19776a33.51552 33.51552 0 0 0-47.49312-0.13824001l-11.91424001 11.86816001a33.792 33.792 0 0 0-0.14335999 47.64672l414.3104 418.06848a33.57696 33.57696 0 0 0 47.5136 0.14336L948.97152 291.99872c13.14304-13.12256 13.2096-34.47296 0.13824-47.64672l-11.84256-11.93984001a33.54624 33.54624 0 0 0-47.51872-0.14335999l-381.04576 379.95008z"
                    p-id="4670"
                  />
                </svg>
              </a>
            </div>
          </span>
        </div>
        <!--primaryChannelmMenu的隐藏层 -->
        <div class="hidden-layer">
          <div class="item-layer2" id="Layer2" style="visibility:hidden">
            <ul>
              <li>
                <a href="#">MAD·AMV</a>
              </li>
              <li>
                <a href="#">MMD·3D</a>
              </li>
              <li>
                <a href="#">短片·手书·配音</a>
              </li>
              <li>
                <a href="#">手办·模玩</a>
              </li>
              <li>
                <a href="#">特摄</a>
              </li>
              <li>
                <a href="#">综合</a>
              </li>
            </ul>
            <svg
              t="1592236637322"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="3020"
              width="16"
              height="16"
            >
              <path
                d="M234.88884163 377.47806845l279.65492248 279.65492248 278.8075161-278.8075161z"
                p-id="3021"
                fill="#ffffff"
              />
            </svg>
          </div>
        </div>
        <span class="tab-line"></span>
        <div class="primaryFriendshipLink">
          <span>
            <div class="contentBox">
              <a href="#">
                <img src="../../assets/images/66.jpg" alt="图片没啦" />
                <span class="link-title">专栏</span>
              </a>
            </div>
          </span>
          <span>
            <div class="contentBox">
              <a href="#">
                <img src="../../assets/images/66.jpg" alt="图片没啦" />
                <span class="link-title">活动</span>
              </a>
            </div>
          </span>
          <span>
            <div class="contentBox">
              <a href="#">
                <img src="../../assets/images/66.jpg" alt="图片没啦" />
                <span class="link-title">小黑屋</span>
              </a>
            </div>
          </span>
          <span>
            <div class="contentBox">
              <a href="#">
                <img src="../../assets/images/66.jpg" alt="图片没啦" />
                <span class="link-title">直播Live</span>
              </a>
            </div>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import $ from "jquery";
// mouseover鼠标在div上仍显示隐藏的div
// timer for hiding the div
$(document).ready(function() {
  var hideTimer;
  // show the DIV on mouse over
  $(".mini-loginBox").mouseover(function() {
    // forget any hiding events in timer
    clearTimeout(hideTimer);
    $(".mini-loginBox").css("visibility", "");
  });
  // set a timer to hide the DIV
  $(".mini-loginBox").mouseout(function() {
    hideTimer = setTimeout(hideHello, 333);
  });
  // hides the DIV
  function hideHello() {
    $(".mini-loginBox").css("visibility", "hidden");
  }

  // primaryChannelmMenu的隐藏层item-layer2
  $(".item-layer2").mouseover(function() {
    // forget any hiding events in timer
    clearTimeout(hideTimer);
    $(".item-layer2").css("visibility", "");
  });
  // set a timer to hide the DIV
  $(".item-layer2").mouseout(function() {
    hideTimer = setTimeout(hideprimaryChannelmMenu, 333);
  });

  function hideprimaryChannelmMenu() {
    $(".item-layer2").css("visibility", "hidden");
  }
});

// *3.对接后端
// import axios from "axios";
// // 从后台获取请求
// axios
//   .get(url, params)
//   .then(res => {
//     res.send('hello!')
//     console.log(res);
//   })
//   .catch(err => {
//     console.error(err);
//   })
//   .then(res => {
//     console.log(res);
//   });

// // 前端发送请求给后端
//   axios.post(url,params)
//   .then(res => {
//     console.log(res)
//   })
//   .catch(err => {
//     console.error(err);
//   })

import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
// vuex的映射函数简化this.$store.state.danceVal
// mapState 该值是映射在计算属性里
import { mapState, mapMutations } from "vuex";
export default {
  name: "header",
  // props可数组 可对象
  props: {
    HeadrChannelmMenucount: String
  },
  data() {
    return {
      input: "",
      ChannelmMenucount: "99+",
      ChannelmMenucount2: "66+",

      mySwiperOption: {
        // spaceBetween: 10,
        loop: true,
        autoplay: {
          disableOnInteraction: false
        },
        // pagination: {
        //   el: ".swiper-pagination"
        // },
        // Some Swiper option/callback...
        speed: 5000 // 轮播速度
        // delay: 3000,
        // navigation: {
        //   nextEl: ".swiper-button-next",
        //   prevEl: ".swiper-button-prev"
        // }
        // thumbs:{
        //   swiper:swiperThumbs
        // }
      }
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    },
    LifeVal() {
      return this.$store.state.LifeVal;
    },
    danceVal() {
      return this.$store.state.danceVal;
      // return danceVal
    },
    // ...展开运算符，展开于计算属性中，同名属性可...mapState(['danceVal'])直接传字符串这下
    // 插值表达式中 {{this.$store.state.danceVal}} 可直接写成{{danceVal}}了
    ...mapState({ danceVal: "danceVal" }, ["LifeVal"])
  },
  mounted() {
    console.log("Current Swiper instance object", this.swiper);
    this.swiper.slideTo(1, 1000, false);
    this.$refs.txt-search.onfocus()
  },
  methods: {
    click() {
      // 参数1：事件名，参数2：子传父的参数
      this.$emit("fromHeaderVal", this.ChannelmMenucount2);
    },
    addCount() {
    
         this.$store.state.danceVal++;
    
    },
    ...mapMutations(["changeDanceVal"])
  },
  watch: {
    danceVal: function() {
      let LifeVal = this.$store.state.danceVal;

      // this.$store.commit("changeDanceVal", LifeVal);
      this.changeDanceVal(LifeVal);
    }
  },

  // $nextTick()获得更新后数据进行同步轮播
  // this.$nextTick(() => {
  //   const swiperTop = this.$refs.swiperTop.$swiper;
  //   // const swiperThumbs = this.$refs.swiperThumbs.$swiper;
  //   // swiperThumbs.controller.control = swiperTop;
  //   // swiperTop.controller.control = swiperThumbs;
  // });
  // console.log('Current Swiper instance object', this.swiper)
  // this.swiper.slideTo(1, 1000, false)

  components: {
    Swiper,
    SwiperSlide
  }
};
</script>
<style lang="less">
// header start
.top-header {
  position: relative;
}
.top-mini-header {
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 56px;
}
.top-mini-header_content {
  height: 56px;
  // line-height: 56px;
  box-sizing: border-box;
  padding: 10px 24px;
  position: relative;
  margin: 0 auto;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: start;
  align-items: flex-start;
  -ms-flex-pack: justify;
  justify-content: space-between;
}

.top-nav .top-nav-items a {
  color: rgb(255, 255, 82556) !important;
  text-shadow: 0 3px 3px rgba(0, 0, 0, 0.6);
}
// 登录成功前start
.top-loginbox {
  display: flex;
  height: 40px;
  position: relative;
  white-space: nowrap;
}
.top-loginbox .login-ul {
  display: flex;
  line-height: 40px;
}
.top-loginbox .login-li {
  margin-left: 10px;
}
.top-loginbox .login-li a {
  color: #fff;
  font-size: 14px;
}
.top-loginbox .regist-li {
  margin-left: 10px;
}
.top-loginbox .regist-li a {
  color: #fff;
  font-size: 14px;
}

.top-loginbox .login-li a img {
  width: 36px;
  height: 36px;
  border-radius: 50%;
}

.top-loginbox .topSub {
  line-height: 40px;
  margin-left: 20px;
  width: 92px;
  // height: 30px;
  background-color: deeppink;
  border: 1px solid gray;
  border-radius: 6px;
}
.top-loginbox .topSub a {
  font-size: 14px;
  color: #fff;
}

.mini-login {
  display: flex;
}

// 登录的隐藏层start
.mini-loginBox {
  display: flex;
  flex-wrap: wrap;
  width: 380px;
  height: 365px;
  background-color: #fff;
  position: absolute;
  top: 47px;
  right: 0;
  padding: 20px;
  z-index: 10;
}
.mini-loginBox svg {
  width: 16px;
  height: 16px;
  // background-color: #000;
  position: absolute;
  top: -10px;
  left: 50%;
}
.mini-loginBox p {
  height: 20px;
  width: 100%;
  font-size: 14px;
  color: #000;
  text-align: left;
  border-bottom: 1px solid #aaa;
}
.swiperBox {
  width: 100%;
  height: 265px;
  border-bottom: 1px solid #aaa;
}
.swiperBox img {
  width: 100%;
  height: 265px;
}
.btn-switch {
  margin: 0 auto;
}
.btn-switch a {
  color: #fff;
}
.el-button {
  padding: 12px 46px !important;
}
.el-button:nth-child(2) {
  margin-left: 36px !important;
}
// 登录的隐藏层end
// 登录成功前end
// 登录成功后start
.top-userinfo .top-userinfo-items {
  font-size: 12px;
}
.top-userinfo .top-userinfo-items a {
  margin-left: 5px !important;
}
.top-userinfo .top-userinfo-items a img {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  transform-origin: top;
  transition: all 0.2s;
}
.top-userinfo .top-userinfo-items a img:hover {
  transform: scale(2);
}
.top-userinfo .top-userinfo-items a {
  color: rgb(255, 255, 255) !important;
  text-shadow: 0 3px 3px rgba(0, 0, 0, 0.6);
}

.top-userinfo .topSub {
  width: 92px;
  background-color: deeppink;
  border: 1px solid gray;
  position: absolute;
  top: 14px;
  right: 14px;
  border-radius: 6px;
}

.top-userinfo .topSub a {
  color: #fff;
  font-size: 14px;
  line-height: 30px;
}
// 登录成功后end
.top-banner {
  margin: 0 auto;
  position: relative;
  z-index: 0;
  min-height: 155px;
  height: 9.375vw;
  min-width: 1200px;
  background-color: #f9f9f9;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: center;
  justify-content: center;
  // background: no-repeat cover center 0;
  background-repeat: no-repeat;
  background-position: center 0;
  background-size: cover;
}
.top-banner img {
  width: 100%;
}
.banner-link {
  z-index: 0;
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
}
.b-logo > a {
  position: absolute;
  bottom: 6px;
  left: 233px;
  min-height: 60px;
  z-index: 1;
}

.b-logo > a img {
  width: 90px;
  height: 60px;
}
.top-nav {
  flex: 1;
}

.top-nav .top-nav-items {
  font-size: 12px;
  height: 40px;
  display: flex;
  align-items: center;
  white-space: nowrap;
}
.top-nav .top-nav-items a {
  margin-left: 5px;
}

.top-search {
  flex: 1;
  position: relative;
}
.top-search {
  display: flex;
  // position: relative;
  align-items: center;
  height: 36px;
}
.top-search .top-searchBox {
  margin: 0 10px;
  width: 382px;
}
.top-search .iconfont {
  font-size: 20px;
  position: absolute;
  top: 8px;
  left: 10.9px;
  color: #fff;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.3);
  // color: darkgray;
  // top: 0;
}
.top-search .search {
  position: relative;
  border: 1px solid darkgray;
  width: 40px;
  margin-left: -10px;
  border-radius: 4px;
  height: 38px;
}

.top-userinfo {
  flex: 1;
}

.top-userinfo .top-userinfo-items {
  display: flex;
  height: 40px;
  align-items: center;
  position: absolute;
  right: 124px;
}
.top-userinfo .top-userinfo-items a {
  margin-left: 12px;
}

// menu

.top-wrap {
  width: 1200px;
  margin: 0 auto;
}

.top-primary-menu {
  //  position: absolute;
  display: flex;
  align-items: center;

  justify-content: flex-start;
  width: 100%;
  padding: 20px 0;
  position: relative;
}

.primaryPageTab ul {
  display: flex;
  align-content: flex-start;
  // align-items: center;
}
.primaryPageTab .menu-ul li {
  cursor: pointer;
  width: 46px;
  height: 68px;
  text-align: center;
  font-size: 14px;
  white-space: nowrap;
  border: 1px solid #fff;
  border-radius: 16px;
}
.primaryPageTab .menu-ul li a {
  color: #000;
}

.round {
  margin: 0 auto;
  width: 30px;
  height: 30px;
  border: 1px solid #fff;
  background-color: pink;
  border-radius: 50%;
  margin-top: 8px;
}
.round .iconfont {
  font-size: 25px;
}

.tab-line {
  display: inline-block;
  height: 46px;
  border-left: 1px solid #e7e7e7;
}
// primaryChannelmMenu的隐藏层start
.item-layer2 svg {
  height: 20px;
  width: 18px;
  position: absolute;
  bottom: -12px;
  left: 18px;

  text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.6);
}
.hidden-layer .item-layer2 {
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  position: absolute;
  height: 170px;
  width: 186px;
  top: -139px;
  left: 192px;
  z-index: 2;
  border-radius: 4px;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.6);
}
.hidden-layer .item-layer2 ul li {
  float: left;
  margin: 14.4px;
}
.hidden-layer .item-layer2 ul li a {
  color: #000;
}
.hidden-layer .item-layer2 ul li a:hover {
  color: deepskyblue;
}
// primaryChannelmMenu的隐藏层end

.primaryChannelmMenu {
  padding-left: 5px;
  display: flex;
  align-content: flex-start;
  width: 695.8px;
  flex-wrap: wrap;
}

.primaryChannelmMenu .item {
  padding: 8px 1px;
  font-size: 14px;
}
.item .name em {
  //  display:inline;
  background-color: deepskyblue;
  padding-right:2px;
}
.item .name .dance-em{
  padding-right: 6.5px;
  background-color: pink;
}
.item .name .dance-em>span:hover{
   color: white;
}
.item .name .life-em{
  background-color: pink;
}
.item .name em>span{
  margin: 0 -4px;
}
.item .name span {
  padding: 10px 0px;
  margin-right: 13px;
  color: #000;
}
.item .name span:hover {
  color: #ff6700;
  opacity: 0.9;
}
.item .name {
  position: relative;
}
.item .name svg {
  width: 23.75px;
  height: 15.3333px;
  position: absolute;
  top: 1px;
  right: -14px;
}
// 友情链接
.primaryFriendshipLink {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}

.primaryFriendshipLink > span {
  font-size: 14px;
  white-space: nowrap;
  text-align: center;
  margin-left: 19px;
  margin-bottom: 6px;
}
.primaryFriendshipLink > span a {
  color: #000;
}
.primaryFriendshipLink > span:nth-child(1),
.primaryFriendshipLink > span:nth-child(4) {
  // padding-left: 8px;
}
.primaryFriendshipLink .contentBox img {
  width: 35px;
  height: 35px;
  border-radius: 50%;
  // display: inline-block;
}
.contentBox .link-title {
  text-align: center;
  vertical-align: 12px;
  padding: 0 3px;
}

.el-breadcrumb {
  font-size: 14px !important;
}
</style>