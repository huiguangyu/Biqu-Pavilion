<template>
  <div>
    <van-nav-bar
      :title="title"
      fixed
      left-arrow
      @click-left="$router.back(1)"
    />
    <div class='message-content'>
      <div class='time'>2019-04-29</div>
      <div class='content'>使用常量替代 mutation 事件类型在各种 Flux 实现中是很常见的模式。这样可以使 linter 之类的工具发挥作用，同时把这些常量放在单独的文件中可以让你的代码合作者对整个 app 包含的 mutation 一目了然</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "messageDetail",
  data() {
    return {
      title: ""
    };
  },
  created() {
    this.title = "系统消息";
    this.$store.commit("isTabSet", false);
  },
  methods: {}
};
</script>
<style lang="less" scoped>
@import "../../styles/van-default.less";
.message-content {
  margin-top: 54px;
  .time {
    padding: 10px;
    font-size: 13px;
    text-align: left;
    border-bottom: 1px solid #eeeeee;
  }
  .content {
    margin-top: 10px;
    padding: 10px;
    box-sizing: border-box;
    background-color: #f9f9f9;
    color: #333333;
  }
}
</style>