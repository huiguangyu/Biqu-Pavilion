<template>
  <div class='b-list'>
    <div
      class='b-list-item'
      v-for='(d,i) in bookList'
      :key='d.id'
      @click="changeCover(i)"
    >
      <div class='b-list-book'>
        <div
          class='book-cover'
          :style="{backgroundImage: 'url('+d.cover+')'}"
        ></div>
        <div class='book-info'>
          <h1 class='book-info-name'>{{d.name}}</h1>
          <div class='book-info-auth'>作者：{{d.auth}}</div>
          <div class='book-info-new'>最新：{{d.new}}</div>
        </div>
      </div>
      <div class='close' @click="removeBook(i)">
        <van-icon name='cross' />
      </div>
      <div class='tips' v-show='i===index'></div>
      <input
        class='reason'
        type="text"
        placeholder="说说推荐这本书的原因吧"
      >
    </div>
  </div>
</template>
<script>
export default {
  name: "bookList",
  props: {
    bookList: Array
  },
  data() {
    return {
      index: 0
    };
  },
  methods: {
    changeCover (i) {
      this.index = i
    },
    removeBook(i) {
     this.bookList =  this.bookList.splice(i,1)
    }
  }
};
</script>
<style lang="less" scoped>
.b-list {
  padding-bottom: 54px;
  .b-list-item {
    position: relative;
    padding: 14px;
    box-sizing: border-box;
    border-bottom: 1px solid #eeeeee;
    .b-list-book {
      display: flex;
      align-items: center;
      .book-cover {
        width: 80px;
        height: 100px;
        border-radius: 2px;
        background: #dee2ed no-repeat center/cover;
      }
      .book-info {
        margin-left: 10px;
        .book-info-name {
          font-size: 15px;
          color: #222222;
        }
        .book-info-auth {
          margin: 10px 0;
          color: #666666;
        }
        .book-info-new {
          color: #bfbfbf;
        }
      }
    }
    .reason {
      margin: 14px 14px 0;
      padding: 0 10px;
      height: 36px;
      line-height: 36px;
      width: calc(~"100% - 20px");
      box-sizing: border-box;
      background-color: #e7e7e7;
      border: none;
      outline: none;
      border-radius: 4px;
    }
    .close {
      position: absolute;
      top: 24px;
      right: 24px;
      color: #c9c9c9;
    }
    .tips {
      position: absolute;
      bottom: 88px;
      right: 0;
      width: 20px;
      height: 0;
      border-left: 14px solid transparent;
      border-right: 14px solid transparent;
      border-bottom: 16px solid #00ABF9;
      transform: rotate(-235deg);
      &::before {
        position: absolute;
        content: "封面";
        font-size: 8px;
        line-height: 14px;
        color: #ffffff;
           transform: rotate(180deg);
        
      }
    }
  }
  .b-list-item:last-child {
    border-bottom: none;
  }
}
</style>