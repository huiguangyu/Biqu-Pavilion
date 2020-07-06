<template>
  <div id="app">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive" />
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive" />
    <nav-tabs v-show='isTabs'></nav-tabs>
  </div>
</template>

<script>
import NavTabs from "@/components/nav-tabs.vue";

export default {
  name: "App",
  components: {
    NavTabs
  },
  data() {
    return {
      isTabs: this.$store.state.title
    }
  }
};
</script>

<style lang='less'>
@import "./styles/common.less";
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-size: 14px;
  margin-top: 44px;
}
.van-nav-bar__title {
    font-size: 14px;
}

</style>
