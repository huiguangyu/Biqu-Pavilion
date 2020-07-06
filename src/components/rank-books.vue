<template>
  <div>
    <div
      class='s-list-item'
      v-for='(s,i) in list'
      :key='s.id'
    >
      <div class='comment'>{{s.count}}分</div>
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
  </div>
</template>
<script>
export default {
  name: "RankBooks",
  props: {
    list: Array
  },
  methods: {}
};
</script>
<style lang="less" scoped>
@commonColor: rgba(0, 172, 249);
@red: #f36b6f;
@green: #3a95d8;

.s-list-item {
  position: relative;
  display: flex;
  padding: 10px 0;
  box-sizing: border-box;
  .comment {
    position: absolute;
    top: 10px;
    right: 14px;
    width: 24px;
    height: 24px;
    line-height: 24px;
    text-align: center;
    color: #eeb436;
    border-radius: 50%;
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
      em:nth-child(1),
      em:nth-child(3) {
        padding: 4px 6px;
        border-radius: 6px;
        background-color: @red;
        color: #ffffff;
      }
      em:nth-child(3) {
        background-color: @green;
      }
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
</style>