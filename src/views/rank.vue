<template>
  <div>
    <div class='rank-nav'>
      排行榜
      <i class='iconfont icon-search' @click="$router.push('/search')"></i>
    </div>
    <main class='main'>
      <div class='search-type'>
        <div class='type'>
          <span
            class='item'
            :class="{'item-active': i===sIndex}"
            v-for='(s,i) in sexList'
            :key='s.id'
            @click="choose('s',i)"
          >{{s.sex}}</span>
        </div>
        <div class='type'>
          <span
            class='item'
            :class="{'item-active': i===tIndex}"
            v-for='(t,i) in tags'
            :key='t.tag'
            @click="choose('t',i)"
          >{{t.tag}}</span>
        </div>
        <div class='type'>
          <span
            class='item'
            :class="{'item-active': i===mIndex}"
            v-for='(m,i) in times'
            :key='m.time'
            @click="choose('m',i)"
          >{{m.time}}</span>
        </div>
      </div>
      <van-list
        class='s-list'
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <rank-books :list='list'></rank-books>
      </van-list>
    </main>
  </div>
</template>
<script>
import RankList from "@/components/book/rank-list.vue";
import RankBooks from "@/components/rank-books.vue";
export default {
  components: {
    RankList,
    RankBooks
  },
  data() {
    return {
      sIndex: 0,
      tIndex: 0,
      mIndex: 0,
      loading: false,
      finished: false,
      sexList: [
        {
          id: 0,
          sex: "男生"
        },
        {
          id: 1,
          sex: "女生"
        }
      ],
      tags: [
        {
          id: 0,
          tag: "最热"
        },
        {
          id: 1,
          tag: "推荐"
        },
        {
          id: 2,
          tag: "完结"
        },
        {
          id: 2,
          tag: "收藏"
        },
        {
          id: 2,
          tag: "新书"
        },
        {
          id: 2,
          tag: "评分"
        }
      ],
      times: [
        {
          id: 0,
          time: "周榜"
        },
        {
          id: 1,
          time: "月榜"
        },
        {
          id: 2,
          time: "总榜"
        }
      ],
      list: [
        {
          id: 1,
          cover: "../../static/img/1.jpg",
          title: "玲家有女初长成",
          description: "写的非常不错的小说",
          count: 8
        },
        {
          id: 2,
          cover: "../../static/img/2.jpg",
          title: "玲家有女初长成",
          description: "写的非常不错的小说",
          count: 8
        }
      ]
    };
  },
  methods: {
    choose(type, i) {
      if (type === "s") {
        this.sIndex = i;
      } else if (type === "t") {
        this.tIndex = i;
      } else {
        this.mIndex = i;
      }
    },
    onLoad() {}
  },
    created() {
     this.$store.commit('isTabSet', true)
  },
};
</script>
<style lang="less" scoped>
@commonColor: rgba(0, 172, 249);
@red: #f36b6f;
@green: #3a95d8;

.rank-nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 43px;
  line-height: 43px;
  padding: 0 13px;
  box-sizing: border-box;
  text-align: center;
  background-color: @commonColor;
  border-bottom: 1px solid @commonColor;
  color: #ffffff;
  z-index: 10;
  .iconfont {
    position: absolute;
    right: 34px;
    font-size: 20px;
    z-index: 2;
  }
}

.main {
  color: #000000;
  padding: 14px;
  box-sizing: border-box;
  .search-type {
    .type {
      margin-bottom: 14px;
      .item {
        margin-right: 24px;
        padding-bottom: 6px;
      }
      .item-active {
        color: @commonColor;
        border-bottom: 1px solid @commonColor;
      }
    }
  }
  .s-list {
    padding-bottom: 54px;
  }
}
</style>