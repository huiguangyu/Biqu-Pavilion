<template>
  <div>
    <van-nav-bar
      title="消息通知"
      right-text="清空消息"
      fixed
      left-arrow
      @click-left="$router.back(1)"
      @click-right="clear"
    />
    <van-list
      class='message-list'
      v-model='loading'
      :finished="finished"
      @load='onLoad'
      finished-text="没有更多了"
    >
      <div class='message-list-item' v-for='item in 6' @click="$router.push('/message-detail')">
        <div class='message-title'>
          <h1 class='title'>系统通知</h1>
          <span class='date'>2019-04-26</span>
        </div>
        <p class='message-info'>
          欢迎您注册笔趣阁，在这里你将能免费阅读各类热门小说
        </p>
      </div>
    </van-list>
  </div>
</template>
<script>
export default {
  data() {
    return {
      loading: false,
      finished: false
    };
  },
  created() {
    this.$store.commit("isTabSet", false);
  },
  methods: {
    clear() {
      this.$toast("清除成功");
    },
    onLoad() {}
  }
};
</script>
<style lang="less" scoped>
@import "../../styles/van-default.less";
.message-list {
  margin-top: 54px;
  .message-list-item {
    margin: 14px;
    padding: 10px;
    border-radius: 3px;
    background-color: #f5f5f5;
    .message-title {
      display: flex;
      justify-content: space-between;
      h1 {
        color: #000000;
      }
      .date {
        font-size: 12px;
        color: #999999;
      }
    }
    .message-info {
      font-size: 13px;
      color: #999999;
      display: -webkit-box;
      overflow: hidden;
      text-overflow: ellipsis;
      -webkit-box-orient: vertical;
       -webkit-line-clamp: 3;
    }
  }
}
</style>