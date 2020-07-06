<template>
  <div class="bookshelf">
    <nav-header :title="title" @open="isShow = true"></nav-header>
    <div class="bs-container" v-for="t in readList" :key="t.id">
      <div class="bs-cover" :style="{ backgroundImage: 'url(' + t.cover + ')' }"></div>
      <p class="bs-name">{{ t.name }}</p>
    </div>
    <admin-dialog :isShow="isShow" @cacel="isShow = false">取消</admin-dialog>
  </div>
</template>
<script>
import NavHeader from '@/components/nav-header.vue'
import AdminDialog from '@/components/admin-dialog.vue'

export default {
  components: {
    NavHeader,
    AdminDialog
  },
  data() {
    return {
      isLoading: true,
      isShow: false,
      readList: [
        {
          id: 1,
          cover: '../../static/img/1.jpg',
          name: '玲家有女初长成'
        },
        {
          id: 2,
          cover: '../../static/img/2.jpg',
          name: '黑暗血时代'
        },
        {
          id: 3,
          cover: '../../static/img/3.jpg',
          name: '图是星空'
        },
        {
          id: 4,
          cover: '../../static/img/4.jpg',
          name: '仙剑奇侠传'
        },
        {
          id: 5,
          cover: '../../static/img/5.jpg',
          name: '末日升级'
        }
      ],
      title: this.$store.state.title
    }
  },
  created() {
    this.$store.commit('isTabSet', true)
  },
  methods: {
    onRefresh() {
      Toast('刷新了')
    }
  }
}
</script>
<style lang="less" scoped>
.bookshelf {
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  box-sizing: border-box;
  .bs-container {
    width: 87px;
    margin: 0 12px 20px;
    text-align: center;
    .bs-cover {
      width: 100%;
      height: 120px;
      background: #eeeeee no-repeat center/cover;
      box-shadow: 0 0 2px #eeeeee;
      border-radius: 2px;
    }
    .bs-name {
      margin-top: 6px;
      font-size: 12px;
      display: -webkit-box;
      overflow: hidden;
      text-overflow: ellipsis;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      color: #000000;
    }
  }
}
</style>
