<template>
  <div class='book'>
    <search-nav @choose-type='chooseType'></search-nav>
    <component :is="componentName"></component>
  </div>
</template>
<script>
import SearchNav from "@/components/search-nav.vue";
import ManBook from "@/views/bookShop/man-book.vue";
import WomenBook from "@/views/bookShop/women-book.vue";
import Lable from "@/views/bookShop/label.vue";
import Special from "@/views/bookShop/special.vue";
import List from "@/views/bookShop/list.vue";

export default {
  components: {
    SearchNav,
    ManBook,
    WomenBook,
    Lable,
    Special,
    List
  },
  data() {
    return {
      componentName: "ManBook",
      title: this.$store.state.title,
      current: 0
    };
  },
  created() {
    this.$store.commit("isTabSet", true);
  },
  methods: {
    chooseType(data) {
      switch (data.index) {
        case 0:
          this.componentName = "ManBook";
          break;
        case 1:
          this.componentName = "WomenBook";
          break;
        case 2:
          this.componentName = "Lable";
          break;
        case 3:
          this.componentName = "Special";
          break;
        case 4:
          this.componentName = "List";
          break;
      }
    }
  }
};
</script>
<style lang="less" scoped>
.book {
  background-color: #f5f5f5;
  min-height: 569px;
  padding: 0 0 54px;
}
</style>