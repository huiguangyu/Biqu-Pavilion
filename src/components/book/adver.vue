<template>
  <div class='adver'>
    <h1>{{adver.title}}</h1>
    <p>{{adver.description}}</p>
    <div
      class='adver-cover'
      :style="{backgroundImage: 'url('+adver.cover+')'}"
    ></div>
  </div>
</template>
<script>
export default {
  name: "Adver",
  props: {
    adver: Object
  }
};
</script>
<style lang="less">
.adver {
  width: 100%;
  padding: 10px;
  margin: -10px 0 10px;
  box-sizing: border-box;
  background-color: #ffffff;
  border-top: 1px solid #e6e6e6;
  h1 {
    color: #000000;
    font-size: 14px;
  }
  p {
    margin: 10px 0;
    color: #999999;
    font-size: 12px;
  }
  .adver-cover {
    width: 100%;
    height: 140px !important;
    border-radius: 2px;
    background: #eeeeee no-repeat center/cover;
  }
}
</style>