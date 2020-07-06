<template>
  <div class='book-box'>
    <div class='book-list-title'>
      <h1>
        <slot></slot>
      </h1>
      <span
        class='book-list-title-more'
        @click="more"
      >更多<i class='iconfont icon-right'></i></span>
    </div>
    <div class='book-label'>
      <div
        class='book-list'
        v-for='t in bookList'
        :key='t.id'
      >
        <div
          class='book-cover'
          :style="{backgroundImage: 'url('+t.cover+')'}"
        ></div>
        <p class='book-name'>{{t.name}}</p>
        <p class='auth-name'>{{t.auth}}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "BookList",
  props: {
    bookList: Array
  },
  methods: {
    more() {
      this.$emit("click-more");
    }
  }
};
</script>
<style lang="less" scoped>
.book-box {
  background-color: #ffffff;
  margin-bottom: 10px;
  .book-list-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 14px 14px 0;
    box-sizing: border-box;
    color: #000000;
    font-size: 13px;
    h1 {
      font-size: 14px;
      font-weight: bold;
    }
    .book-list-title-more {
      color: #999999;
    }
  }
  .book-label {
    padding: 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    box-sizing: border-box;
    .book-list {
      width: 92px;
      margin: 0 12px 0;
      text-align: center;
      .book-cover {
        width: 100%;
        height: 120px;
        background: #eeeeee no-repeat center/cover;
        box-shadow: 0 0 2px #eeeeee;
        border-radius: 2px;
      }
      .book-name {
        margin-top: 6px;
        font-size: 12px;
        display: -webkit-box;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        color: #000000;
      }
      .auth-name {
        font-size: 12px;
        color: #999999;
      }
    }
  }
}
</style>