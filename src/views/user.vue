<template>
  <div class='box'>
    <van-nav-bar
      class='nav'
      title="我的"
      :right-text="text"
      fixed
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <div class='user-list'>
      <ul>
        <li @click="$router.push('/message')">
          <div class='user-list-item-left'>
            <div class='icon-box'>
              <i class='iconfont icon-notification'></i>
            </div>
            <span>消息通知</span>
          </div>
          <i class='iconfont icon-right'></i>
        </li>
        <li @click="$router.push('/mybook')">
          <div class='user-list-item-left'>
            <div class='icon-box bg-2'>
              <i class='iconfont icon-read1'></i>
            </div>
            <span>我的书单</span>
          </div>
          <i class='iconfont icon-right'></i>
        </li>
        <li @click="$router.push('/mycache')">
          <div class='user-list-item-left'>
            <div class='icon-box bg-3'>
              <i class='iconfont icon-down'></i>
            </div>
            <span>我的缓存</span>
          </div>
          <i class='iconfont icon-right'></i>
        </li>
        <li @click="$router.push('/browse')">
          <div class='user-list-item-left'>
            <div class='icon-box bg-4'>
              <i class='iconfont icon-footprint'></i>
            </div>
            <span>最近浏览</span>
          </div>
          <i class='iconfont icon-right'></i>
        </li>

        <li
          class='margin-top-20'
          @click="$toast('请前往应用商城')"
        >
          <div class='user-list-item-left'>
            <div class='icon-box bg-5'>
              <i class='iconfont icon-edit_light'></i>
            </div>
            <span>给个好评</span>
          </div>
          <i class='iconfont icon-right'></i>
        </li>
        <li>
          <div class='user-list-item-left'>
            <div class='icon-box bg-6'>
              <i class='iconfont icon-evaluate'></i>
            </div>
            <span>意见反馈</span>
          </div>
          <i class='iconfont icon-right'></i>
        </li>
        <li @click="isShare = true">
          <div class='user-list-item-left'>
            <div class='icon-box bg-8'>
              <i class='iconfont icon-share_light'></i>
            </div>
            <span>分享应用</span>
          </div>
          <i class='iconfont icon-right'></i>
        </li>
        <li class='margin-top-20'>
          <div class='user-list-item-left'>
            <div class='icon-box bg-7'>
              <i class='iconfont icon-settings_light'></i>
            </div>
            <span>设置</span>
          </div>
          <!-- <i class='iconfont icon-right'></i> -->
        </li>
        <li>
          <div class='user-list-item-left'>
            <div class='icon-box-hidden'>
            </div>
            <span>重置密码</span>
          </div>
          <i class='iconfont icon-right'></i>
        </li>
        <li>
          <div class='user-list-item-left'>
            <div class='icon-box-hidden'>
            </div>
            <span>免责声明</span>
          </div>
          <i class='iconfont icon-right'></i>
        </li>
        <li>
          <div class='user-list-item-left'>
            <div class='icon-box-hidden'>
            </div>
            <span>检查更新</span>
          </div>
          <i class='iconfont icon-right'></i>
        </li>
        <li>
          <div class='user-list-item-left'>
            <div class='icon-box-hidden'>
            </div>
            <span>清除小说缓存</span>
          </div>
          <i class='iconfont icon-right'></i>
        </li>
        <li>
          <div class='user-list-item-left'>
            <div class='icon-box-hidden'>
            </div>
            <span>清除其他缓存</span>
          </div>
          <i class='iconfont icon-right'></i>
        </li>
      </ul>
    </div>
    <share
      :isShow='isShare'
      @cacel='isShare = false'
    >取消</share>
  </div>
</template>
<script>
import share from "@/components/share.vue";
export default {
  components: {
    share
  },
  data() {
    return {
      text: "立即登录",
      isShare: false
    };
  },
  created() {
    this.$store.commit("isTabSet", false);
  },
  methods: {
    onClickLeft() {
      this.$router.back(1);
    },
    onClickRight() {
      this.$router.push("/login");
    }
  }
};
</script>
<style lang="less" scoped>
@line: #ebedf0;
@message: #fb5d3c;
@shujia: #4bb5ba;
@cache: #fb103f;
@zuji: #51ad55;
@write: #7ca9dd;
@advise: #47b0da;
@set: #59b7b6;
.box {
  background-color: #f5f5f5;
}
.nav {
  top: 0;
}
.van-nav-bar .van-icon {
  font-size: 18px;
  color: #999999;
}
 .van-nav-bar__title {
    color: #222222;
    font-size: 14px;
  }
.van-nav-bar__text {
  color: #ff9500;
}

.van-nav-bar {
  background-color: #ffffff;
}

.user-list {
  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 15px;
    box-sizing: border-box;
    border-bottom: 1px solid @line;
    color: #000000;
    background-color: #ffffff;
    .iconfont {
      color: #999999;
    }
    .user-list-item-left {
      display: flex;
      align-items: center;
      .icon-box {
        width: 30px;
        height: 30px;
        line-height: 30px;
        margin-right: 6px;
        border-radius: 4px;
        text-align: center;
        background-color: @message;
        i {
          color: #ffffff;
        }
      }
      .icon-box-hidden {
        width: 30px;
        height: 30px;
        line-height: 30px;
        margin-right: 6px;
        border-radius: 4px;
        text-align: center;
        background-color: #ffffff;
      }
      .bg-2 {
        background-color: @shujia;
      }
      .bg-3 {
        background-color: @cache;
      }
      .bg-4 {
        background-color: @zuji;
      }
      .bg-5 {
        background-color: @write;
      }
      .bg-6 {
        background-color: @advise;
      }
      .bg-7 {
        background-color: @set;
      }
      .bg-8 {
        background-color: #ff9500;
      }
    }
  }
}
</style>