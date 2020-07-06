<template>
  <div>
    <van-nav-bar
      title="我的书架"
      right-text="刷新"
      fixed
      left-arrow
      @click-left="$router.back(1)"
      @click-right="refresh"
    />
    <van-tabs
      v-model="active"
      @click='Onclick'
    >
      <van-tab title="已发布"></van-tab>
      <van-tab title="草稿箱"></van-tab>
      <van-tab title="已收藏"></van-tab>
    </van-tabs>
    <div class='s-list'>
      <div
        class='s-list-item'
        v-for='s in list'
        :key='s.id'
      >
        <div
          class='s-list-cover'
          :style="{backgroundImage: 'url('+s.cover+')'}"
        ></div>
        <div class='s-list-info'>
          <h1 class='ellipsis-more'>{{s.title}}</h1>
          <p class='description ellipsis-more'>{{s.description}}</p>
          <p class='count'>共<span>{{s.count}}</span>本</p>
        </div>
      </div>
    </div>
    <van-icon name="add-o" size='28px' class='add' @click="$router.push('/addbook')"/>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: 0,
      list: [
        {
          id: 1,
          cover: "../../../static/img/1.jpg",
          title: "玲家有女初长成",
          description: "写的非常不错的小说",
          count: 8
        },
        {
          id: 2,
          cover: "../../../static/img/2.jpg",
          title: "玲家有女初长成",
          description: "写的非常不错的小说",
          count: 8
        }
      ]
    };
  },
  created() {
    this.$store.commit("isTabSet", false);
  },
  methods: {
    refresh() {
      this.$toast("刷新成功");
    },
    Onclick(index, title) {
      this.$toast(title);
      //TODO切换数据
    }
  }
};
</script>
<style lang="less" scoped>
@import "../../styles/van-default.less";
.add {
    position: fixed;
    bottom: 40px;
    right: 14px;
    color: @common;
}
.s-list {
  .s-list-item {
    display: flex;
    align-items: center;
    padding: 20px 20px 0;
    box-sizing: border-box;
    .s-list-cover {
      width: 80px;
      height: 100px;
      border-radius: 2px;
      background: #dee2ed no-repeat center/cover;
    }
    .s-list-info {
      width: 210px;
      margin-left: 8px;
      color: #000000;
      font-size: 14px;
      .description {
        color: #8a8a8a;
        margin: 10px 0;
      }
      .count {
        color: #ef7a7a;
        display: flex;
        align-items: center;
        span {
          display: inline-block;
          padding: 2px 6px;
          margin: 0 4px;
          border: 1px solid #ef7a7a;
          border-radius: 4px;
        }
      }
    }
  }
}
</style>