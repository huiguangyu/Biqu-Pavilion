<template>
  <div class='user-bg'>
    <nav class='user-nav'>
      <van-icon
        name='arrow-left'
        size='16px'
        @click="$router.back(1)"
      ></van-icon>
      <span></span>
      <span @click="$router.push('/register')">注册</span>
    </nav>
    <div class='from'>
      <div class='from-item'>
        <i class='iconfont icon-shumashouji'></i>
        <input
          type="text"
          placeholder="请输入用户名"
        >
      </div>
      <div class='from-item password'>
        <i class='iconfont icon-31mima'></i>
        <input
          type="password"
          placeholder="请输入密码"
        >
      </div>
    </div>
    <p class='addPasword' @click="$router.push('/change-password')">忘记密码?</p>
    <div class='submit-btn'>登录</div>
  </div>
</template>
<script>
export default {
  name: "Login",
  data() {
    return {
        phone: '',
        password: ''
    };
  },
  methods: {
      login() {
          let reg = /1[345789]\d{9}/
          if(!this.phone) {this.$toast('请输入用户');return}
          if(!reg.test(this.phone)) {this.$toast('手机号格式不正确');return}
          if(!this.password) {this.$toast('请输入密码');return}
          
      }
  }
};
</script>
<style lang='less'>
@import '../styles/login.less';
.addPasword {
    margin: 10px 20px 20px;
}

</style>
