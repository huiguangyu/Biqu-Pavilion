<template>
  <div class='nav-footer' v-show='$store.state.isTabs'>
    <div
    @click="tabs(0)"
      class='nav-footer-item'
      :class="{'nav-footer-item-active': index === 0}"
    >
      <i class='iconfont icon-read'></i>
      <span>书架</span>
    </div>
    <div
    @click="tabs(1)"
      class='nav-footer-item'
      :class="{'nav-footer-item-active': index === 1}"
    >
      <i class='iconfont icon-home'></i>
      <span>书城</span>
    </div>
    <div
    @click="tabs(2)"
      class='nav-footer-item'
      :class="{'nav-footer-item-active': index === 2}"
    >
      <i class='iconfont icon-stock'></i>
      <span>排行榜</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "NavTabs",
  props: {
    title: String
  },
  data() {
    return {
      index: 0
    };
  },
  methods: {
    tabs(i) {
      this.index = i;
      if (i === 0) {
        this.$router.push("/");
      } else if (i === 1) {
        this.$router.push("/bookshop");
      } else {
        this.$router.push("/rank");
      }
    }
  }
};
</script>
<style lang="less">
@commonColor: rgba(0, 172, 249);

.nav-footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 54px;
  padding: 0 13px;
  border-top: 1px solid #eeeeee;
  box-sizing: border-box;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #f9f9f9;
  color: rgb(94, 94, 94);
  .iconfont {
    font-size: 20px;
  }
  .nav-footer-item {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .nav-footer-item-active {
    color: @commonColor;
  }
}
</style>