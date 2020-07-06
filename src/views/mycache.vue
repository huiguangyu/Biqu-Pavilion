<template>
  <div>
    <van-nav-bar
      title="站内缓存"
      right-text="站外缓存"
      fixed
      left-arrow
      @click-left="$router.back(1)"
      @click-right="site"
    />
    <div class='upload-list'>
      <div class='upload-list-item' v-for='item in 8'>
        <div class='upload-book-name'>赘婿</div>
        <div class='upload-progress'>
          <van-progress
            :percentage="50"
            class='progress'
          />
          <van-icon
            v-if='false'
            name='pause-circle-o'
            class='circle'
            size='24px'
          ></van-icon>
           <van-icon
           v-else
            name='play-circle-o'
            class='circle'
            size='24px'
          ></van-icon>
        </div>
      </div>
    </div>
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
    site() {
      this.$toast("跳转到站外");
    },
    onLoad() {}
  }
};
</script>
<style lang="less" scoped>
@import "../styles/van-default.less";
.upload-list {
  padding: 10px 14px;
  box-sizing: border-box;
  .upload-book-name {
    font-size: 14px;
  }
  .upload-progress {
    display: flex;
    align-items: center;
    margin: 10px 0 20px;
    .progress {
      width: 300px;
    }
    .circle {
      margin-left: 10px;
      color: #00acf9;
    }
  }
}
</style>