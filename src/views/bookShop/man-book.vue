<template>
  <div>
    <div class='bs-header'>
      <van-swipe @change="onChange">
        <van-swipe-item
          v-for='r in readList'
          :key='r.id'
          class='bs-swiper-item'
          :style="{backgroundImage: 'url('+r.cover+')'}"
        ></van-swipe-item>
        <div
          class="indicator"
          slot="indicator"
        >
          {{ current + 1 }}/4
        </div>
      </van-swipe>
    </div>
    <div>
        <book-list :bookList='readList' @click-more='more'>
            重磅推荐
        </book-list>
        <book-list :bookList='readList' @click-more='more'>
            火热新书
        </book-list>
        <Adver :adver='adver'></Adver>
        <book-list :bookList='readList' @click-more='more'>
            完本经典
        </book-list>
    </div>
  </div>
</template>
<script>
import BookList from "@/components/book/book-list.vue";
import Adver from "@/components/book/adver.vue";

export default {
  components: {
    BookList,
    Adver
  },
  data() {
    return {
      readList: [
        {
          id: 1,
          cover: "../../static/img/1.jpg",
          name: "玲家有女初长成"
        },
        {
          id: 2,
          cover: "../../static/img/2.jpg",
          name: "黑暗血时代"
        },
        {
          id: 3,
          cover: "../../static/img/3.jpg",
          name: "图是星空"
        },
        {
          id: 4,
          cover: "../../static/img/4.jpg",
          name: "仙剑奇侠传"
        },
        {
          id: 5,
          cover: "../../static/img/5.jpg",
          name: "末日升级"
        }
      ],
      title: this.$store.state.title,
      current: 0,
      adver: {
          cover: "../../static/img/2.jpg",
          title: "黑暗血时代",
          description: '末日求生,谁与争锋'
      }
    };
  },
  methods: {
    chooseType(data) {
      //TODO根据分类来实现不同操作
    },
    onChange(i) {
      this.current = i;
    },
    //更多
    more() {

    }
  }
};
</script>
<style lang="less" scoped>
.bs-header {
  margin-top: 44px;
  .bs-swiper-item {
    width: 100%;
    height: 140px !important;
    background: #eeeeee no-repeat center/cover;
  }
  .indicator {
      position: absolute;
      width: 32px;
      height: 32px;
      line-height: 32px;
      text-align: center;
      border-radius: 50%;
      background-color: rgba(0,0,0,0.3);
      right: 10px;
      bottom: 20px;
      color: #ffffff;
      z-index: 999;
  }
}
</style>