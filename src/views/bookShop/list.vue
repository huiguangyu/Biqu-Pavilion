<template>
  <div>
    <rank-list :data='list'>热门榜单</rank-list>
    <rank-list :data='list'>热门榜单</rank-list>
  </div>
</template>
<script>
import RankList from "@/components/book/rank-list.vue";

export default {
  name: "List",
  components: {
    RankList
  },
  data() {
    return {
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
  }
};
</script>