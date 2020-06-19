<template>
  <div class="footer-box">
    <div class="bottom-footer top-wrap">
      <div class="top-content">
        <div class="item-link">
          <span class="bili">bilibili</span>
          <ul class="item-ul">
            <li>
              <a href="#">关于我们</a>
            </li>
            <li>
              <a href="#">联系我们</a>
            </li>
            <li>
              <a href="#">用户协议</a>
            </li>
            <li>
              <a href="#">加入我们</a>
            </li>
            <li>
              <a href="#">友情链接</a>
            </li>
            <li>
              <a href="#">隐私政策</a>
            </li>
            <li>
              <a href="#">bilibili认证</a>
            </li>
            <li>
              <a href="#">Investor Relations</a>
            </li>
          </ul>
        </div>
        <div class="item-link">
          <span class="bili">传送门</span>
          <ul class="item-ul">
            <li>
              <a href="#">帮助中心</a>
            </li>
            <li>
              <a href="#">高级弹幕</a>
            </li>
            <li>
              <a href="#">活动专题页</a>
            </li>
            <li>
              <a href="#">侵权投诉</a>
            </li>
            <li>
              <a href="#">活动中心</a>
            </li>
            <li>
              <a href="#">用户反馈论坛</a>
            </li>
            <li>
              <a href="#">壁纸站</a>
            </li>
            <li>
              <a href="#">专车号服务中心</a>
            </li>
            <li>
              <a href="#">名人堂</a>
            </li>
          </ul>
        </div>
        <div class="item-link">
          <a href="#">图a</a>
          <a href="#">图b</a>
          <a href="#">图c</a>
        </div>
      </div>
      <div class="bottom-content"></div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="less">
.footer-box {
  background-color: #f6f9fa;
}

.bottom-footer {
  margin-top: 60px;
  padding-bottom: 60px;
  background-color: #f6f9fa;
}

.top-content {
  padding-top: 30px;
  display: flex;
  justify-content: space-between;
}
.top-content .item-link > span {
  font-size: 16px;
  color: #999;
  display: block;
  height: 20px;
  margin-bottom: 20px;
  text-align: left;
}
.item-ul {
  height: 96px;
  display: flex;
  text-align: left;
  flex-direction: column;
  flex-wrap: wrap;
}
.item-ul li {
  margin-top: 10px;
  margin-right: 20px;
}
.item-ul li a {
  color: #000;
  font-size: 16px;
}
.item-ul li a:hover {
  color: deepskyblue;
}

.item-link:nth-child(1) {
  width: 40%;
  border-right: 1px solid rgba(0, 0, 0, 0.1);
}
.item-link:nth-child(2) {
  width: 40%;
  border-right: 1px solid rgba(0, 0, 0, 0.1);
}
</style>