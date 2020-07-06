<template>
  <div class='label-list'>
    <div
      class='label-list-item'
      v-for='d in dataList'
      :key='d.id'
    >
      <div class='item-left'>
        <div
          class='cover'
          :style="{backgroundImage: 'url('+d.cover+')'}"
        ></div>
        <div class='info'>
          <h1 class='book-name'>{{d.type}}</h1>
          <p class='book-count'>{{d.count}}</p>
        </div>
      </div>
      <div class='item-right'>
        <i class='iconfont icon-right'></i>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    // dataList: Array
  },
  data() {
    return {
      dataList: [
        {
          id: 0,
          type: "武侠",
          cover: "../../static/img/5.jpg",
          count: 22001
        },
        {
          id: 1,
          type: "仙侠",
          cover: "../../static/img/2.jpg",
          count: 22001
        },
        {
          id: 2,
          type: "魔幻",
          cover: "../../static/img/3.jpg",
          count: 22001
        }
      ]
    };
  }
};
</script>
<style lang="less" scoped>
.label-list {
  font-size: 14px;
  color: #000000;
  padding: 0 10px;
  box-sizing: border-box;
  .label-list-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 10px 10px;
    box-sizing: border-box;
    border-bottom: 1px solid #e6e6e6;
    .item-left {
      display: flex;
      align-items: flex-start;
      .cover {
        width: 140px;
        height: 70px;
        border-radius: 1px;
        box-shadow: 0 0 3px #f9f9f9;
        background: #eeeeee no-repeat center/cover;
      }
      .info {
        margin-left: 8px;
        .book-name {
          font-size: 15px;
          font-weight: bold;
        }
        .book-count {
          margin-top: 10px;
          color: #444444;
        }
      }
    }
    .item-right {
      color: #999999;
    }
  }
  .label-list-item:last-child{
      border: none;
  }
}
</style>