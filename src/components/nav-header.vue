<template>
  <div class='nav-box'>
    <i
      class='iconfont icon-user'
      @click="$router.push('/user')"
    ></i>
    <div>{{title}}</div>
    <i
      class='iconfont icon-setting'
      @click="handClick"
    ></i>
  </div>
</template>
<script>
export default {
  name: "navHeader",
  props: {
    title: String
  },
  methods: {
    handClick() {
      this.$emit("open");
    }
  }
};
</script>
<style lang="less">
@commonColor: rgba(0, 172, 249);

.nav-box {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 44px;
  padding: 0 13px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: @commonColor;
  color: #ffffff;
  .iconfont {
    font-size: 20px;
  }
}
</style>