<template>
  <div>
    <div class="top-wrap">
      <div class="menu-content">
        <div class="title">
          <ul class="title-ul">
            <li class="title-li">全部</li>
            <li class="title-li">连载动画</li>
            <li class="title-li">完结动画</li>
            <li class="title-li">资讯</li>
            <li class="title-li">官方延伸</li>
            <li class="title-li">新番时间表</li>
            <li class="title-li">番剧索引</li>
          </ul>
        </div>
        <div class="menu-logo">
          <a href="#">
            <img src="@/assets/images/newCarton-logo.jpg" alt="图没啦" />
          </a>
        </div>
      </div>
      <!-- 轮播图 -->
      <div class="swiper-box">
        <!-- swiper1 -->
        <swiper :options="swiperOptionTop" class="gallery-top" ref="swiperTop">
          <swiper-slide class="slide-1"></swiper-slide>
          <swiper-slide class="slide-2"></swiper-slide>
          <swiper-slide class="slide-3"></swiper-slide>
          <swiper-slide class="slide-4"></swiper-slide>
          <swiper-slide class="slide-5"></swiper-slide>
          <!--<div class="swiper-button-next swiper-button-white" slot="button-next"></div>
            <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
          -->
        </swiper>
        <!-- swiper2 Thumbs -->
        <swiper :options="swiperOptionThumbs" class="gallery-thumbs" ref="swiperThumbs">
          <swiper-slide class="slide-1"></swiper-slide>
          <swiper-slide class="slide-2"></swiper-slide>
          <swiper-slide class="slide-3"></swiper-slide>
          <swiper-slide class="slide-4"></swiper-slide>
          <swiper-slide class="slide-5"></swiper-slide>
        </swiper>
        <!-- <swiper
          class="swiper-container gallery-top"
          style="width:1200px;height:352px"
          ref="mySwiper"
          :options="swiperOptions"
        >
          <swiper-slide>
            <div class="carton-item">
              <a href="#">
                <img src="../../assets/images/carou1.jpg" alt="图没啦" id="pic" />
                <p class="carou-title">B站热报:大周女皇来袭！</p>
              </a>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="carton-item">
              <a href="#">
                <img src="../../assets/images/carou2.jpg" alt />
                <p class="carou-title">B站热报:大周女皇来袭！</p>
              </a>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="carton-item">
              <a href="#">
                <img src="../../assets/images/carou3.png" alt />
                <p class="carou-title">B站热报:大周女皇来袭！</p>
              </a>
            </div>
          </swiper-slide>
          <div class="carton-item">
            <a href="#">
              <img src="../../assets/images/carou4.jpg" alt />
              <p class="carou-title">B站热报:大周女皇来袭！</p>
            </a>
          </div>
          <swiper-slide>
            <div class="carton-item">
              <a href="#">
                <img src="../../assets/images/carou5.png" alt />
                <p class="carou-title">B站热报:大周女皇来袭！</p>
              </a>
            </div>
          </swiper-slide>
        </swiper>
        -->
      </div>
      <!-- 动漫主要内容 -->
      <div class="carton-listBox">
        <div class="carton-leftBox">
          <div class="new-title">
            <p>最近更新</p>
            <div class="left-box">
              <a href="#">
                新番时间
                <i class="iconfont">&#xe605;</i>
              </a>
            </div>
          </div>
          <div class="new-list">
            <div class="carton-listBox">
              <ul>
                <li class="carton-item">
                  <div>
                    <a href="#">
                      <div>
                        <img src="@/assets/images/carton-llist-img5.png" alt="图没啦" />
                      </div>
                    </a>
                  </div>
                  <div class="name-num">
                    <a href="#" target="_blank">
                      <span>影之狮</span>
                    </a>
                    <p class="cartonNum">
                      更新至
                      <a href="#">10话</a>
                    </p>
                  </div>
                </li>
                <li class="carton-item">
                  <div>
                    <a href="#">
                      <div>
                        <img src="@/assets/images/carton-llist-img5.png" alt="图没啦" />
                      </div>
                    </a>
                  </div>
                  <div class="name-num">
                    <a href="#" target="_blank">
                      <span>影之狮</span>
                    </a>
                    <p class="cartonNum">
                      更新至
                      <a href="#">10话</a>
                    </p>
                  </div>
                </li>
                <li class="carton-item">
                  <div>
                    <a href="#">
                      <div>
                        <img src="@/assets/images/carton-llist-img5.png" alt="图没啦" />
                      </div>
                    </a>
                  </div>
                  <div class="name-num">
                    <a href="#" target="_blank">
                      <span>影之狮</span>
                    </a>
                    <p class="cartonNum">
                      更新至
                      <a href="#">10话</a>
                    </p>
                  </div>
                </li>
                <li class="carton-item">
                  <div>
                    <a href="#">
                      <div>
                        <img src="@/assets/images/carton-llist-img5.png" alt="图没啦" />
                      </div>
                    </a>
                  </div>
                  <div class="name-num">
                    <a href="#" target="_blank">
                      <span>影之狮</span>
                    </a>
                    <p class="cartonNum">
                      更新至
                      <a href="#">10话</a>
                    </p>
                  </div>
                </li>
                <li class="carton-item">
                  <div>
                    <a href="#">
                      <div>
                        <img src="@/assets/images/carton-llist-img5.png" alt="图没啦" />
                      </div>
                    </a>
                  </div>
                  <div class="name-num">
                    <a href="#" target="_blank">
                      <span>影之狮</span>
                    </a>
                    <p class="cartonNum">
                      更新至
                      <a href="#">10话</a>
                    </p>
                  </div>
                </li>
                <li class="carton-item">
                  <div>
                    <a href="#">
                      <div>
                        <img src="@/assets/images/carton-llist-img5.png" alt="图没啦" />
                      </div>
                    </a>
                  </div>
                  <div class="name-num">
                    <a href="#" target="_blank">
                      <span>影之狮</span>
                    </a>
                    <p class="cartonNum">
                      更新至
                      <a href="#">10话</a>
                    </p>
                  </div>
                </li>
                <li class="carton-item">
                  <div>
                    <a href="#">
                      <div>
                        <img src="@/assets/images/carton-llist-img5.png" alt="图没啦" />
                      </div>
                    </a>
                  </div>
                  <div class="name-num">
                    <a href="#" target="_blank">
                      <span>影之狮</span>
                    </a>
                    <p class="cartonNum">
                      更新至
                      <a href="#">10话</a>
                    </p>
                  </div>
                </li>
                <li class="carton-item">
                  <div>
                    <a href="#">
                      <div>
                        <img src="@/assets/images/carton-llist-img5.png" alt="图没啦" />
                      </div>
                    </a>
                  </div>
                  <div class="name-num">
                    <a href="#" target="_blank">
                      <span>影之狮</span>
                    </a>
                    <p class="cartonNum">
                      更新至
                      <a href="#">10话</a>
                    </p>
                  </div>
                </li>
                <li class="carton-item">
                  <div>
                    <a href="#">
                      <div>
                        <img src="@/assets/images/carton-llist-img5.png" alt="图没啦" />
                      </div>
                    </a>
                  </div>
                  <div class="name-num">
                    <a href="#" target="_blank">
                      <span>影之狮</span>
                    </a>
                    <p class="cartonNum">
                      更新至
                      <a href="#">10话</a>
                    </p>
                  </div>
                </li>
                <li class="carton-item">
                  <div>
                    <a href="#">
                      <div>
                        <img src="@/assets/images/carton-llist-img5.png" alt="图没啦" />
                      </div>
                    </a>
                  </div>
                  <div class="name-num">
                    <a href="#" target="_blank">
                      <span>影之狮</span>
                    </a>
                    <p class="cartonNum">
                      更新至
                      <a href="#">10话</a>
                    </p>
                  </div>
                </li>
                <li class="carton-item">
                  <div>
                    <a href="#">
                      <div>
                        <img src="@/assets/images/carton-llist-img5.png" alt="图没啦" />
                      </div>
                    </a>
                  </div>
                  <div class="name-num">
                    <a href="#" target="_blank">
                      <span>影之狮</span>
                    </a>
                    <p class="cartonNum">
                      更新至
                      <a href="#">10话</a>
                    </p>
                  </div>
                </li>
                <li class="carton-item">
                  <div>
                    <a href="#">
                      <div>
                        <img src="@/assets/images/carton-llist-img5.png" alt="图没啦" />
                      </div>
                    </a>
                  </div>
                  <div class="name-num">
                    <a href="#" target="_blank">
                      <span>影之狮</span>
                    </a>
                    <p class="cartonNum">
                      更新至
                      <a href="#">10话</a>
                    </p>
                  </div>
                </li>
                <li class="carton-item">
                  <div>
                    <a href="#">
                      <div>
                        <img src="@/assets/images/carton-llist-img2.jpg" alt="图没啦" />
                      </div>
                    </a>
                  </div>
                  <div class="name-num">
                    <a href="#" target="_blank">
                      <span>影之狮</span>
                    </a>
                    <p class="cartonNum">
                      更新至
                      <a href="#">10话</a>
                    </p>
                  </div>
                </li>
                <li class="carton-item">
                  <div>
                    <a href="#">
                      <div>
                        <img src="@/assets/images/carton-llist-img2.jpg" alt="图没啦" />
                      </div>
                    </a>
                  </div>
                  <div class="name-num">
                    <a href="#" target="_blank">
                      <span>影之狮</span>
                    </a>
                    <p class="cartonNum">
                      更新至
                      <a href="#">10话</a>
                    </p>
                  </div>
                </li>
                <li class="carton-item">
                  <div>
                    <a href="#">
                      <div>
                        <img src="@/assets/images/carton-llist-img2.jpg" alt="图没啦" />
                      </div>
                    </a>
                  </div>
                  <div class="name-num">
                    <a href="#" target="_blank">
                      <span>影之狮</span>
                    </a>
                    <p class="cartonNum">
                      更新至
                      <a href="#">10话</a>
                    </p>
                  </div>
                </li>
                <li class="carton-item">
                  <div>
                    <a href="#">
                      <div>
                        <img src="@/assets/images/carton-llist-img2.jpg" alt="图没啦" />
                      </div>
                    </a>
                  </div>
                  <div class="name-num">
                    <a href="#" target="_blank">
                      <span>影之狮</span>
                    </a>
                    <p class="cartonNum">
                      更新至
                      <a href="#">10话</a>
                    </p>
                  </div>
                </li>
                <li class="carton-item">
                  <div>
                    <a href="#">
                      <div>
                        <img src="@/assets/images/carton-llist-img2.jpg" alt="图没啦" />
                      </div>
                    </a>
                  </div>
                  <div class="name-num">
                    <a href="#" target="_blank">
                      <span>影之狮</span>
                    </a>
                    <p class="cartonNum">
                      更新至
                      <a href="#">10话</a>
                    </p>
                  </div>
                </li>
                <li class="carton-item">
                  <div>
                    <a href="#">
                      <div>
                        <img src="@/assets/images/carton-llist-img2.jpg" alt="图没啦" />
                      </div>
                    </a>
                  </div>
                  <div class="name-num">
                    <a href="#" target="_blank">
                      <span>公主连接</span>
                    </a>
                    <p class="cartonNum">
                      更新至
                      <a href="#">2话</a>
                    </p>
                  </div>
                </li>
                <li class="carton-item">
                  <div>
                    <a href="#">
                      <div>
                        <img src="@/assets/images/carton-llist-img2.jpg" alt="图没啦" />
                      </div>
                    </a>
                  </div>
                  <div class="name-num">
                    <a href="#" target="_blank">
                      <span>公主连接</span>
                    </a>
                    <p class="cartonNum">
                      更新至
                      <a href="#">2话</a>
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div class="timeline-toggle-block">
              <div class="toggle-btn">
                <span class="all">全部</span>
                <svg
                  t="1591793336701"
                  class="icon"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="3252"
                  width="16"
                  height="16"
                >
                  <path
                    d="M1011.2 544c0-12.8-6.4-25.6-19.2-38.4-19.2-19.2-57.6-19.2-76.8 0L512 908.8c-6.4 6.4-6.4 6.4-12.8 6.4 0 0-6.4 0-12.8-6.4L108.8 505.6c-19.2-19.2-57.6-25.6-76.8 0-19.2 19.2-25.6 57.6 0 76.8l377.6 403.2c19.2 25.6 51.2 38.4 89.6 38.4 32 0 64-12.8 89.6-38.4l403.2-403.2c12.8-12.8 19.2-25.6 19.2-38.4z m0 0"
                    p-id="3253"
                  />
                  <path
                    d="M1011.2 57.6c0-12.8-6.4-25.6-19.2-38.4-19.2-19.2-57.6-19.2-76.8 0L512 422.4c-6.4 6.4-12.8 6.4-12.8 6.4s-6.4 0-12.8-6.4L108.8 19.2C89.6 0 51.2-6.4 32 19.2c-19.2 19.2-25.6 57.6 0 76.8l377.6 403.2c25.6 25.6 57.6 38.4 89.6 38.4 32 0 64-12.8 89.6-38.4l403.2-403.2c12.8-12.8 19.2-25.6 19.2-38.4z m0 0"
                    p-id="3254"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div class="carton-rightBox">
          <div class="myfavorite">
            <p>我追的番</p>
            <div>
              <a href="#">
                更多
                <i class="iconfont">&#xe605;</i>
              </a>
            </div>
          </div>
          <div>
            <div class="myfavorate-item">
              <div class="myfavorate-itemImg">
                <a href="#" target="_blank">
                  <div class="cartonImg">
                    <img src="@/assets/images/carton-rlist-img3.jpg" alt="图没啦" />
                  </div>
                </a>
              </div>
              <div class="myfavorate-itemTit">
                <div>
                  <a href="#">
                    <span class="title">公主焊接Re:Dive</span>
                  </a>
                </div>
                <div>更新至第2话</div>
                <div>
                  <a href="#">
                    <span>已看完第1话</span>
                  </a>
                </div>
              </div>
            </div>
            <div class="myfavorate-item">
              <div class="myfavorate-itemImg">
                <a href="#" target="_blank">
                  <div class="cartonImg">
                    <img src="@/assets/images/carton-rlist-img3.jpg" alt="图没啦" />
                  </div>
                </a>
              </div>
              <div class="myfavorate-itemTit">
                <div>
                  <a href="#">
                    <span class="title">公主焊接Re:Dive</span>
                  </a>
                </div>
                <div>更新至第2话</div>
                <div>
                  <a href="#">
                    <span>已看完第1话</span>
                  </a>
                </div>
              </div>
            </div>
            <div class="myfavorate-item">
              <div class="myfavorate-itemImg">
                <a href="#" target="_blank">
                  <div class="cartonImg">
                    <img src="@/assets/images/carton-rlist-img3.jpg" alt="图没啦" />
                  </div>
                </a>
              </div>
              <div class="myfavorate-itemTit">
                <div>
                  <a href="#">
                    <span class="title">公主焊接Re:Dive</span>
                  </a>
                </div>
                <div>更新至第2话</div>
                <div>
                  <a href="#">
                    <span>已看完第1话</span>
                  </a>
                </div>
              </div>
            </div>
            <div class="myfavorate-item">
              <div class="myfavorate-itemImg">
                <a href="#" target="_blank">
                  <div class="cartonImg">
                    <img src="@/assets/images/carton-rlist-img3.jpg" alt="图没啦" />
                  </div>
                </a>
              </div>
              <div class="myfavorate-itemTit">
                <div>
                  <a href="#">
                    <span class="title">公主焊接Re:Dive</span>
                  </a>
                </div>
                <div>更新至第2话</div>
                <div>
                  <a href="#">
                    <span>已看完第1话</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="advertisement">
        <a href="#">
          <img src="@/assets/images/adv2.jpg" alt="广告啦" />
        </a>
      </div>
      <cartonPart></cartonPart>
    </div>
  </div>
</template>
<script>
import $ from "jquery";
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
import cartonPart from "@/views/children/cartonPart.vue";

$(document).ready(function() {
  $(".title-ul li").on("click", function() {
    var _index = $(this).index();
    $(".title-ul li")
      .eq(_index)
      .addClass("on-li")
      .siblings()
      .removeClass("on-li");
  });

  $(".myfavorite>div").on("mouseover", function() {
    $(".myfavorite div>a i")
      .css({ "margin-left": "-1xp" })
      .transition("all", 200, "linear");
  });

  // carton-listBox扩展收缩内容
  $(".toggle-btn").click(function() {
    if ($("span").hasClass("all")) {
      $(".carton-listBox").css({ height: "666px" });
      $(".timeline-toggle-block").css({ transform: "translateY(1px)" });
      $(".carton-listBox .toggle-btn").html(`<span class="pack-up">收起</span>
                                       <svg t="1591801983990" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="11870" width="200" height="200"><path d="M519.23968 424.91392a38.55872 38.55872 0 0 0-54.54336-0.18944l-0.19968 0.18944-372.79744 372.8128a38.67136 38.67136 0 0 0 0 54.70208 38.66624 38.66624 0 0 0 54.69696 0l345.45664-345.4464 355.66592 355.63008a38.69696 38.69696 0 0 0 54.71232 0 38.69696 38.69696 0 0 0 0-54.71232l-382.99136-382.98624z m-372.84864 117.9648L491.8528 197.4272l355.62496 355.62496a38.68672 38.68672 0 0 0 54.71232-54.70208l-382.98624-382.976a38.57408 38.57408 0 0 0-54.54848-0.2048l-0.19456 0.2048L91.648 488.17664a38.69696 38.69696 0 0 0 54.74304 54.70208z" p-id="11871"></path></svg>`);
    } else if ($("span").hasClass("pack-up")) {
      $(".carton-listBox").css({ height: "356px" });
      $(".timeline-toggle-block").css({ transform: "translateY(0)" });
      $(".carton-listBox .toggle-btn").html(`<span class="all">全部</span>
                                        <svg
                    t="1591793336701"
                    class="icon"
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    p-id="3252"
                    width="16"
                    height="16"
                  >
                    <path
                      d="M1011.2 544c0-12.8-6.4-25.6-19.2-38.4-19.2-19.2-57.6-19.2-76.8 0L512 908.8c-6.4 6.4-6.4 6.4-12.8 6.4 0 0-6.4 0-12.8-6.4L108.8 505.6c-19.2-19.2-57.6-25.6-76.8 0-19.2 19.2-25.6 57.6 0 76.8l377.6 403.2c19.2 25.6 51.2 38.4 89.6 38.4 32 0 64-12.8 89.6-38.4l403.2-403.2c12.8-12.8 19.2-25.6 19.2-38.4z m0 0"
                      p-id="3253"
                    />
                    <path
                      d="M1011.2 57.6c0-12.8-6.4-25.6-19.2-38.4-19.2-19.2-57.6-19.2-76.8 0L512 422.4c-6.4 6.4-12.8 6.4-12.8 6.4s-6.4 0-12.8-6.4L108.8 19.2C89.6 0 51.2-6.4 32 19.2c-19.2 19.2-25.6 57.6 0 76.8l377.6 403.2c25.6 25.6 57.6 38.4 89.6 38.4 32 0 64-12.8 89.6-38.4l403.2-403.2c12.8-12.8 19.2-25.6 19.2-38.4z m0 0"
                      p-id="3254"
                    />
                  </svg>`);
    }
  });
});

export default {
  name: "carrousel",
  data() {
    return {
      swiperOptionThumbs: {
        spaceBetween: 10,
        slidesPerView: 5,
        loop: true,
        // freeMode: true,
        // loopedSlides:5, //looped slides should be the same

        centeredSlides: true,
        // slidesPerView: "auto",
        touchRatio: 0.2,
        slideToClickedSlide: true,
        watchSlidesVisibility: true /*避免出现bug*/
      },
      swiperOptionTop: {
        spaceBetween: 10,
        // loop: true,
        autoplay: {
          disableOnInteraction: false
        }
        // pagination: {
        //   el: ".swiper-pagination"
        // },
        // Some Swiper option/callback...
        // speed: 5000, // 轮播速度
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

  methods: {
    backTop() {
      $("html,body").animate({ scrollTop: 0 }, 500);
    }
  },
  computed: {
    // 计算属性，获得可以操作的swiper对象
    swiperTop() {
      return this.$refs.swiperTop.$swiper;
    }
  },
  watch: {},
  mounted() {
    // $nextTick()获得更新后数据进行同步轮播
    this.$nextTick(() => {
      const swiperTop = this.$refs.swiperTop.$swiper;
      const swiperThumbs = this.$refs.swiperThumbs.$swiper;
      // swiperThumbs.controller.control = swiperTop;
      swiperTop.controller.control = swiperThumbs;
    });
    // console.log('Current Swiper instance object', this.swiper)
    // this.swiper.slideTo(1, 1000, false)
  },

  components: {
    Swiper,
    SwiperSlide,
    cartonPart
  },
  directives: {
    swiper: directive
  }
};
</script>
<style lang="less">
// menu start
.menu-content {
  display: flex;
  // flex-wrap: nowrap;
  justify-content: space-between;
  padding-bottom: 5px;
  overflow: hidden;
  border-top: 1px solid rgba(0, 0, 0, 0.08);
}
.title {
  margin-top: 10px;
}
.menu-logo {
  margin-top: 5px;
}
.title-ul {
  display: flex;
  height: 27px;
  font-size: 14px;
}
.title-ul li {
  cursor: pointer;
  margin-right: 30px;
}
.title-ul li:hover {
  color: deepskyblue;
}
.on-li {
  color: deepskyblue;
}
// menu end
// 轮播图 start

// .carton-item {
//   display: inline-block;
//   height: 352px;
//   position: relative;
//   border-radius: 6px;
// }
// .carton-item a img {
//   width: 1200px;
//   height: 352px;
//   border-radius: 6px;
// }
// .carton-item .carou-title {
//   font-size: 14px;
//   color: #fff;
//   text-shadow: 2px 2px 2px #6d757a;
//   position: absolute;
//   bottom: 4px;
//   left: 11px;
// }
// // 小圆点
// .swiper-container {
//   position: relative;
// }
// .swiper-pagination {
//   position: absolute;
//   width: 1897px !important;
//   top: 326px;
// }

// .swiper-containerr /deep/ .swiper-pagination {
//   background: #ffffff;
//   position: absolute;
//   bottom: 0;
//   right: 0;
// }
// // 用less的穿透方式写上修改的样式
// .change /deep/ .swiper-pagination-bullet {
//         background-color: red;
//     }

//
.swiper-container {
  background-color: #000;
}
.swiper-slide {
  background-size: cover;
  background-position: center;
  &.slide-1 {
    background-image: url("../../assets/images/carou1.jpg");
  }
  &.slide-2 {
    background-image: url("../../assets/images/carou2.jpg");
  }
  &.slide-3 {
    background-image: url("../../assets/images/carou3.png");
  }
  &.slide-4 {
    background-image: url("../../assets/images/carou4.jpg");
  }
  &.slide-5 {
    background-image: url("../../assets/images/carou5.png");
  }
}
.gallery-top {
  width: 100%;
  height: 352px !important;
}
.gallery-thumbs {
  height: 70.4px !important;
  box-sizing: border-box;
  padding: 10px 0;
}
.gallery-thumbs .swiper-slide {
  width: 25%;
  height: 100%;
  opacity: 0.4;
}
.gallery-thumbs .swiper-slide-active {
  opacity: 1;
  border: 1px solid #fff;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.6);
}

.swiper-box {
  margin-bottom: 30px;
  z-index: 0;
  position: relative;
}
// 轮播图 end
// 动漫主要内容start

// 左边start
.carton-listBox {
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
  height: 356px;
  overflow: hidden;
}
.new-list {
  position: relative;
}
.carton-leftBox {
  width: 880px;
  height: 96px;
}
.carton-leftBox ul {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
}
.carton-leftBox ul li {
  height: 96px;
  width: 188px;
  margin-right: 32px;
  margin-bottom: 15px;
}
.carton-leftBox .new-title {
  display: flex;
  justify-content: space-between;
  position: relative;
}
.carton-leftBox .new-title p {
  display: inline-block;
  font-size: 22px;
  font-weight: 500;
}
.carton-leftBox .new-title div {
  width: 94px;
  height: 24.8px;
  line-height: 24.8px;
  font-size: 14px;
  border: 1px solid deeppink;
  border-radius: 8px;
  right: 58px;
  position: absolute;
}
.carton-leftBox .new-title div a {
  display: inline-block;
  width: 94px;
  height: 24.8px;
  color: deeppink;
}
.carton-leftBox .new-title div i {
  vertical-align: -1px;
}
.carton-leftBox .new-title div a:hover {
  color: #fff;
  background-color: deeppink;
}

.carton-leftBox .new-list .carton-item {
  display: flex;
  // float: left;
}
.carton-leftBox .new-list .carton-item div > img {
  width: 72px;
  height: 72px;
  border-radius: 6px;
}

.carton-leftBox .new-list .carton-item .name-num {
  text-align: left;
  padding-left: 12px;
}
.carton-item .name-num {
  position: relative;
}
.carton-item .name-num a > span {
  color: #000;
  display: inline-block;
  width: 60px;
}
.carton-item .name-num .cartonNum {
  position: absolute;
  white-space: nowrap;
  bottom: 22px;
  color: #aaa;
}

.carton-item .name-num .cartonNum a {
  color: #fff;
  background-color: pink;
  display: inline-block;
  width: 30px;
  text-align: center;
  border-radius: 5px;
  margin-left: 6px;
}

.timeline-toggle-block {
  width: 880px;
  height: 40px;
  position: absolute;
  bottom: 31px;
  left: 0px;
  border-top: 1px solid #aaa;
  cursor: pointer;
}
.timeline-toggle-block .toggle-btn {
  text-align: center;
  width: 50px;
  height: 20px;
  margin: 0 auto;
  border-left: 1px solid #aaa;
  border-bottom: 1px solid #aaa;
  border-right: 1px solid #aaa;
  border-radius: 18%;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.08);
}

.timeline-toggle-block svg {
  width: 10px;
  height: 10px;
  margin-left: 5px;
  vertical-align: -0.98px;
}
// 左边end
// 右边start
.carton-rightBox {
  width: 320px;
}
.myfavorite {
  display: flex;
  justify-content: space-between;
  margin-left: 30px;
}

.myfavorite p {
  font-size: 22px;
}
.myfavorite div {
  border: 1px solid #aaa;
  height: 22px;
  line-height: 22px;
  width: 50px;
  text-align: center;
  border-radius: 3px;
}
.myfavorite div > a {
  font-size: 12px;
  padding-left: 4px;
  color: #000;
  display: inline-block;
  width: 47.6px;
  height: 23.6px;
  border-radius: 3px;
}
.myfavorite > div a:hover {
  background-color: #aaa;
  color: #fff;
}
.i-change {
  margin-left: -1px;
}

.myfavorite div > a i {
  vertical-align: -1px;
  margin-left: -3px;
  transition: all 0.2s linear;
}
.myfavorate-item {
  display: flex;
  margin-left: 30px;
  margin-top: 18px;
}
.myfavorate-item > .myfavorate-itemImg a img {
  width: 96px;
  height: 60px;
  border-radius: 4px;
}
.myfavorate-item .myfavorate-itemTit {
  text-align: left;
  margin-left: 10px;
}
.myfavorate-item .myfavorate-itemTit .title {
  color: #000;
}
.myfavorate-item .myfavorate-itemTit > div a span:hover {
  color: deepskyblue;
}
.myfavorate-item .myfavorate-itemTit div {
  color: #aaa;
}
.myfavorate-item .myfavorate-itemTit a span {
  color: #aaa;
}
.myfavorate-item .myfavorate-itemTit div {
  margin-bottom: 5px;
}
// 右边end
// 广告位start
.advertisement {
  width: 1200px;
  height: 164px;
  margin-top: 26px;
  margin-bottom: -26px;
}
.advertisement a img {
  width: 1200px;
  height: 164px;
}
// 广告位end
// 动漫主要内容end
</style>