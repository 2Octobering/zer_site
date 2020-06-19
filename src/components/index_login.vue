<template>
  <div>
    <!--  <div class="welcome">
      <p>欢迎来到登录界面！</p>
    </div>
    <label class="username" for>
      用户名：
      <input type="text" name="username" id />
    </label>
    <label class="password" for>
      密码:
      <input type="password" :password="password" name="password" id />
    </label>
    <input class="btn-login" @login="login" type="button" value="登录" />
    -->
    <el-row class="login-style">
      <h1>欢迎来到登录界面！</h1>
      <el-form :model="ruleForm" ref="ruleForm">
        <el-form-item label="用户名" prop="username" :rules="rules.logName">
          <el-input placeholder="用户名" v-model="ruleForm.username"></el-input>
        </el-form-item>

        <el-form-item label="密码" prop="password" :rules="rules.logPwd">
          <el-input type="password" placeholder="密码" v-model="ruleForm.password"></el-input>
        </el-form-item>

        <el-form-item
          label="确认密码"
          v-if="type === 'register'"
          prop="re_password"
          :rules="rules2.re_password"
        >
          <el-input type="password" placeholder="确认密码" v-model="ruleForm.re_password"></el-input>
        </el-form-item>
      </el-form>

      <el-button type="primary" v-if="type === 'register'" @click="signup()">注册</el-button>
      <el-button type="primary" v-else @click="login('ruleForm')">登录</el-button>
      <router-link to="/login" v-show="type === 'register'" tag="p">已有账号，去登录</router-link>
      <router-link to="/register" v-show="type === 'login'" tag="p">没有账号，去注册</router-link>
    </el-row>
  </div>
</template>
<script>
import rules from "@/assets/js/filter_rules"; //引入全局正则
export default {
  data() {
    var logPwd2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };

    return {
      ruleForm: {
        username: "",
        password: "",
        re_password: ""
      },
      sayhub_token: "",
      rules,
      rules2: {
        re_password: [{ required: true, validator: logPwd2, trigger: "blur" }]
      }
    };
  },
  methods: {
    login(ruleForm) {
      this.$router.push({ path: "/home" });
    }

    // //登录方法
    // handleSubmit() {
    //   var that = this;
    //   let loginParams = {
    //     username: this.ruleForm.mobile, //获取账号
    //     password: this.ruleForm.password //获取密码
    //   };
    //   //登录请求
    //   that.$axios.post(`${api}/auth/login`, loginParams).then(res => {
    //     if (res.data.errCode == 0) {
    //       console.log("登录成功");
    //       if (that.checked == true) {
    //         //传入账号，密码，保存天数
    //         that.setCookie(that.ruleForm.mobile, that.ruleForm.password, 7);
    //       } else {
    //         //清空Cookie
    //         that.clearCookie();
    //       }
    //       //跳转路由
    //       that.$router.push({ path: "/index" });
    //     } else {
    //       console.log("登录失败");
    //     }
    //   });
    // }
  }
};
</script>
<style lang="less">
.welcome {
  margin-bottom: 30px;
}
input {
  // display: block;
  border: 1px solid #000;
}
.btn-login {
  // display:inline-block;
  margin-left: 6px;
}
</style>