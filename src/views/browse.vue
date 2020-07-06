<template>
  <div>
    <van-nav-bar
      title="最近浏览"
      right-text="清空"
      fixed
      left-arrow
      @click-left="$router.back(1)"
      @click-right="clear"
    />
    <div class='main'>
      <rank-books :list='list'></rank-books>
    </div>
  </div>
</template>
<script>
import RankBooks from "@/components/rank-books.vue";
export default {
  name: "Browse",
  components: {
    RankBooks
  },
  data() {
    return {
      list: [
        {
          id: 1,
          cover: "../../static/img/1.jpg",
          title: "玲家有女初长成",
          description: "写的非常不错的小说",
          count: 8
        },
        {
          id: 2,
          cover: "../../static/img/2.jpg",
          title: "玲家有女初长成",
          description: "写的非常不错的小说",
          count: 8
        }
      ]
    };
  },
  methods: {
    clear() {}
  }
};
</script>
<style lang='less'>
@import "../styles/van-default.less";
.main {
    padding: 0 14px;
    box-sizing: border-box;
}
</style>
