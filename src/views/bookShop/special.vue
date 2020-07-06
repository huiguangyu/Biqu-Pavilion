<template>
  <div>
    <aside>
      <ul class='s-nav'>
        <li
          class='s-nav-item'
          :class="{'nav-item-active': i=== index}"
          @click="changeNav(n,i)"
          v-for='(n,i) in navList'
          :key='n.title'
        >
          <van-icon
            :name="n.iconName"
            size='24px'
            :color='n.color'
          />
          <span>{{n.title}}</span>
        </li>
      </ul>
    </aside>
    <section class='aside-right'>
      <div class='sex-btn-group'>
        <div
          class='man-btn'
          :class="{'man-btn-active': label===1}"
          @click="changeSex(1)"
        >男生</div>
        <div
          class='man-btn'
          :class="{'man-btn-active': label===2}"
          @click="changeSex(2)"
        >女生</div>
      </div>
      <van-list
        class='s-list'
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
      <pen-loading :loading='refrsh'></pen-loading>
        <div
          class='s-list-item'
          v-for='s in list'
          :key='s.id'
        >
          <div
            class='s-list-cover'
            :style="{backgroundImage: 'url('+s.cover+')'}"
          ></div>
          <div class='s-list-info'>
            <h1 class='ellipsis-more'>{{s.title}}</h1>
            <p class='description ellipsis-more'>{{s.description}}</p>
            <p class='count'>共<span>{{s.count}}</span>本</p>
          </div>
        </div>
      </van-list>
    </section>
  </div>
</template>
<script>
import PenLoading from '@/components/pen-loading.vue'
export default {
  name: "Special",
  components: {
     PenLoading 
  },
  data() {
    return {
      index: 0,
      label: 1,
      refrsh: false,
      loading: false,
      finished: true,
      navList: [
        {
          iconName: "new",
          title: "最新发布",
          color: "#14A8F6"
        },
        {
          iconName: "fire",
          title: "本周最热",
          color: "#E94F3B"
        },
        {
          iconName: "like",
          title: "最多收藏",
          color: "#EEB436"
        },
        {
          iconName: "invition",
          title: "小编推荐",
          color: "#36AA5F"
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
    onLoad() {},
    changeNav(type, i) {
      this.index = i;
      //TODO更新数据
    },
    changeSex(i) {
      this.label = i;
    }
  },
  created() {
      this.refrsh = true
      setTimeout(() => {
        this.refrsh = false
      }, 2000);
  }
};
</script>
<style lang="less">
@blue: #14a8f6;
@line: #dee2ed;
.s-nav {
  position: fixed;
  top: 44px;
  width: 90px;
  bottom: 54px;
  text-align: center;
  background: #f5f5f5;
  z-index: 99;
  .s-nav-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 14px;
    box-sizing: border-box;
    font-weight: bold;
    span {
      margin-top: 6px;
    }
  }
  .nav-item-active {
    background-color: #d2def8;
  }
}
.aside-right {
  float: left;
  margin-left: 90px;
  padding-bottom: 64px;
  width: calc(~"100% - 90px");
  background-color: #ffffff;
  .sex-btn-group {
    position: fixed;
    top: 44px;
    left: 0;
    width: 100%;
    background: #ffffff;
    padding: 20px 0;
    display: flex;
    .man-btn {
      width: 100px;
      height: 40px;
      line-height: 40px;
      text-align: center;
      border: 1px solid @line;
      border-radius: 3px;
    }
    .man-btn:first-child {
      margin-left: 130px;
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }
    .man-btn:last-child {
      border-left: 0;
    }
    .man-btn-active {
      background-color: #d2def8;
    }
  }
  .s-list {
    margin-top: 54px;
    .s-list-item {
      display: flex;
      align-items: center;
      padding: 20px 20px 0;
      box-sizing: border-box;
      .s-list-cover {
        width: 80px;
        height: 100px;
        border-radius: 2px;
        background: #dee2ed no-repeat center/cover;
      }
      .s-list-info {
        width: 210px;
        margin-left: 8px;
        color: #000000;
        font-size: 14px;
        .description {
          color: #8a8a8a;
          margin: 10px 0;
        }
        .count {
          color: #ef7a7a;
          display: flex;
          align-items: center;
          span {
            display: inline-block;
            padding: 2px 6px;
            margin: 0 4px;
            border: 1px solid #ef7a7a;
            border-radius: 4px;
          }
        }
      }
    }
  }
}
</style>