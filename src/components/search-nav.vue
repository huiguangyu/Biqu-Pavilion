<template>
  <div class='label-nav'>
    <ul class='label-type'>
      <li
        v-for='(l,i) in label'
        class='item'
        :class="{active: i === index}"
        :key='l'
        @click="halderClick(i,l)"
      >{{l}}</li>
    </ul>
    <i class='iconfont icon-search'  @click="$router.push('/search')"></i>
  </div>
</template>
<script>
export default {
  data() {
    return {
      label: ["男生", "女生", "分类", "专题", "榜单"],
      index: 0
    };
  },
  methods: {
      halderClick(i,type) {
          this.index= i
          let data = {
              index: i,
              type: name
          }
          this.$emit('choose-type', data)
      }
  }
};
</script>
<style lang="less">
@commonColor: rgba(0, 172, 249);

.label-nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 43px;
  padding: 0 13px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: @commonColor;
  border-bottom: 1px solid @commonColor;
  color: #ffffff;
  z-index: 10;
  .label-type {
    display: flex;
    align-items: center;
    .item {
      position: relative;
      padding: 0 3px;
      margin: 0 12px;
    }
    .active {
      font-size: 15px;
      &::before {
        position: absolute;
        content: "";
        background-color: #ffffff;
        width: 100%;
        height: 2px;
        bottom: -10px;
        left: 0;
      }
    }
  }
  .iconfont {
    font-size: 20px;
    margin-right: 14px;
  }
}
</style>