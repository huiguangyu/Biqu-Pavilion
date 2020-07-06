<template>
  <div>
    <header class='list-header'>
      <slot></slot>
    </header>
    <main class='s-list'>
      <div
        class='s-list-item'
        v-for='(s,i) in data'
        :key='s.id'
      >
      <div class='rank' :class="[{'rank-one': i===0},{'rank-two': i===1},{'rank-three': i===2}]">{{i+1}}</div>
        <div
          class='s-list-cover'
          :style="{backgroundImage: 'url('+s.cover+')'}"
        ></div>
        <div class='s-list-info'>
          <h1 class='ellipsis-more'>{{s.title}}</h1>
          <p class='info'>
            <em>玄幻魔幻</em>
            <em>|</em>
            <em>作者</em>
          </p>
          <p class='description ellipsis-more2'>{{s.description}}</p>
        </div>
      </div>
    </main>
    <div
      class='more-btn'
      @click='halderClick'
    >
      更多
    </div>
  </div>
</template>
<script>
export default {
  name: "RankList",
  props: {
    data: Array
  },
  data() {
    return {};
  },
  methods: {
    halderClick() {
      this.$emit("click-more");
    }
  }
};
</script>
<style lang="less" scoped>
.list-header {
  width: 100%;
  height: 44px;
  line-height: 44px;
  padding-left: 14px;
  box-sizing: border-box;
  font-weight: bold;
  color: #000000;
  background-color: #f1f1f1;
}
.s-list {
  .s-list-item {
    position: relative;
    display: flex;
    padding: 10px 14px 0;
    box-sizing: border-box;
    .rank{
        position: absolute;
        top: 10px;
        right: 14px;
        width: 24px;
        height: 24px;
        line-height: 24px;
        text-align: center;
        color: #ffffff;
        border-radius: 50%;
    }
    .rank-one {
        background-color: #61B466;
    }
    .rank-two {
        background-color: #AE8BCC;
    }
    .rank-three {
        background-color: #E3D943;
    }
    .s-list-cover {
      width: 80px;
      height: 100px;
      border-radius: 2px;
      background: #dee2ed no-repeat center/cover;
    }
    .s-list-info {
      width: calc(~"100%-88px");
      margin-left: 8px;
      color: #000000;
      font-size: 14px;
      .info {
        margin: 14px 0;
        color: #444444;
        font-size: 12px;
        em:nth-child(2) {
          margin: 0 4px;
        }
      }
      .description {
        font-size: 12px;
        color: #8a8a8a;
        margin: 10px 0;
      }
    }
  }
}
.more-btn {
  margin: 10px 0;
  height: 44px;
  line-height: 44px;
  text-align: center;
  background-color: #f1f1f1;
  letter-spacing: 1px;
  color: #666666;
}
</style>