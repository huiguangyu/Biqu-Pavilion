<template>
  <div
    class='share-dialog'
    v-if='isShow'
  >
    <div class='share-dialog-box'>
      <div class='share-container'>
        <div class='share-icon'>
          <i class='iconfont icon-qq bg-qq'></i>
          <span>QQ</span>
        </div>
        <div class='share-icon'>
          <i class='iconfont icon-qq-copy bg-zone'></i>
          <span>QQ空间</span>
        </div>
        <div class='share-icon'>
          <i class='iconfont icon-weixin bg-wx'></i>
          <span>微信</span>
        </div>
        <div class='share-icon'>
          <i class='iconfont icon-pengyouquan bg-pyq'></i>
          <span>朋友圈</span>
        </div>
        <div class='share-icon'>
          <i class='iconfont icon-weibo bg-wb'></i>
          <span>微博</span>
        </div>
      </div>
      <div
        class='cacel-btn'
        @click='halderClick'
      >
        <slot></slot>
      </div>
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
        this.$emit('cacel')
    }
  }
};
</script>
<style lang="less" scoped>
.share-dialog {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
  .share-dialog-box {
    position: absolute;
    bottom: 10px;
    padding: 20px 14px 0 14px;
    width: 96%;
    box-sizing: border-box;
    left: 50%;
    border-radius: 4px;
    transform: translateX(-50%);
    background-color: #ffffff;
    animation: share 0.2s linear;

    .share-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      .share-icon {
        width: 33%;
        margin-bottom: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        .iconfont {
          font-size: 40px;
        }
        .bg-qq {
          color: #5eaade;
        }
        .bg-zone {
          color: #fb5d3c;
        }
        .bg-wx {
          color: #04c862;
        }
        .bg-pyq {
          color: #51ad55;
        }
        .bg-wb {
          color: #fb103f;
        }
        .bg-dd {
          color: #259afc;
        }
      }
    }
    .cacel-btn {
      height: 44px;
      text-align: center;
      line-height: 44px;
      border-top: 1px solid #eeeeee;
    }
  }
}
@keyframes share {
    to {
        height: 200px;
    }
    from {
        height: 0px;
    }
}

</style>