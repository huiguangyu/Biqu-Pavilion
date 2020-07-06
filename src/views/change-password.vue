<template>
  <div class='user-bg'>
    <nav class='user-nav'>
      <van-icon
        name='arrow-left'
        size='16px'
         @click="$router.back(1)"
      ></van-icon>
      <span>修改密码</span>
      <span></span>
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
      <div class='from-item password'>
        <i class='iconfont icon-31mima'></i>
        <input
          type="password"
          placeholder="请再次输入密码"
        >
      </div>
    </div>
    <div class='submit-btn'>确定</div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>
<style lang='less'>
@import "../styles/login.less";
</style>
