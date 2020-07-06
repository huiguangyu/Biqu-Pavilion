<template>
  <div
    class='dialog'
    @click="halderClick"
    v-if='isShow'
  >
    <div class='dialog-box'>
      <div class='item'>
        编辑管理
      </div>
      <div class='item'>
        WiFi传书
      </div>
      <div class='item'>
        保存阅读进度到云端
      </div>

      <div class='item'>
        从云端下载阅读进度
      </div>
      <div class='item'>
        切换视图
      </div>
      <div class='item'>
        TXT单本小说下载
      </div>
      <div class='item'>
        本地导入
      </div>
    </div>
    <div
      class='cacel-btn'
      @click.stop='halderClick'
    >
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "Share",
  props: {
    isShow: false
  },
  methods: {
    halderClick() {
      this.$emit("cacel");
    }
  }
};
</script>
<style lang="less" scoped>
.dialog {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
  .dialog-box {
    position: absolute;
    bottom: 60px;
    width: 96%;
    box-sizing: border-box;
    left: 50%;
    border-radius: 4px;
    transform: translateX(-50%);
    background-color: #ffffff;
    animation: share 0.1s ease;
    .item {
      height: 44px;
      line-height: 44px;
      text-align: center;
      color: #00acf9;
      border-bottom: 1px solid #eeeeee;
    }
  }
  .cacel-btn {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    width: 96%;
    height: 44px;
    text-align: center;
    line-height: 44px;
    color: #973232;
    background-color: #ffffff;
    border-top: 1px solid #eeeeee;
  }
}
@keyframes share {
  to {
    height: 300px;
  }
  from {
    height: 0px;
  }
}
</style>