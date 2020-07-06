<template>
  <div id='box'>
    <van-nav-bar
      title="书籍详情"
      fixed
      left-arrow
      @click-left="$router.back(1)"
    />
    <section class='section cleartop'>
      <div class='header '>
        <div
          class='cover'
          :style="{backgroundImage: 'url('+cover+')'}"
        ></div>
        <div class='info'>
          <h1>名称</h1>
          <p class='margin-top-10'>作者：天窗土豆</p>
          <p class='margin-top-10'>类型：武侠小说</p>
          <p class='margin-top-10'>状态：连载</p>
          <div class='score'>8.0分</div>

        </div>
      </div>
      <div class='catalog'>
        <h1>目录</h1>
        <p class='time'>最近更新：</p>
        <p class='current'>第一百一十二章 <em>爆裂</em></p>
      </div>
      <div class='description'>
        <h1>简介</h1>
        <p :style="{height: h + 'px'}">是一个汉语词汇，拼音为wén zì，基本意思是记录思想、交流思想或承载语言的图像或符号。 该词出自《史记·秦始皇本纪》：“一法度衡石丈尺，车同轨，书同文字</p>
        <div
          class='up'
          @click='open'
        >
          <van-icon :name='name'></van-icon>
        </div>
      </div>
      <div class='comment'>
        <div class='comment-title'>
          <h1>书友评论</h1>
          <van-icon
            name="chat"
            class='chat'
            size='20px'
          />
        </div>
        <div
          class='comment-list'
          v-for='item in 4'
        >
          <div class='comment-user'>
            <div class='left'>
              <div
                class='avatar'
                :style="{backgroundImage: 'url('+cover+')'}"
              ></div>
              <div>
                <div class='username'>找零</div>
                <div class='comment-time'>2019-10-10</div>
              </div>
            </div>
            <van-icon
              class='right'
              name='youzan-shield'
              size='24px'
            ></van-icon>
          </div>
          <div class='comment-info'>
            敖德萨撒多撒多多撒大大
          </div>
        </div>
        <div class='more-comment'>更多评论</div>
      </div>
      <div class='other'>
        <h1>作者还写过</h1>
        <div class='other-list'>
          <div
            class='other-list-cover'
            :style="{backgroundImage: 'url('+cover+')'}"
          ></div>
          <div class='other-info'>
            <h1>阿萨达sad撒</h1>
            <p class='auth'>作者：天窗土豆</p>
            <p>最新：撒大声地撒</p>
          </div>
        </div>
      </div>
      <div class='recommend'>
        <div class='title'>
          <h1>同类作品</h1>
          <span>
            <i class='iconfont icon-huanyipi'></i>
            换一批
          </span>
        </div>
        <div class='recommend-list'>
          <div v-for='item in 4'>
            <div
              class='recommend-list-cover'
              :style="{backgroundImage: 'url('+cover+')'}"
            ></div>
            <div class='recommend-list-name ellipsis-more'>丽莎的撒多拉屎的卡拉斯科</div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      h: 70,
      name: "arrow-down",
      cover: "../../static/img/1.jpg"
    };
  },
  created() {
    this.$store.commit("isTabSet", false);
  },
  methods: {
    open() {
      if (this.name === "arrow-down") {
        this.name = "arrow-up";
        this.h = 140;
      } else {
        this.name = "arrow-down";
        this.h = 70;
      }
    }
  }
};
</script>
<style lang="less">
#box {
  h1 {
    font-weight: bold;
    color: #222222;
    font-size: 14px;
  }
  height: 100%;
  background-color: #f9f9f9;
  .section {
    .header {
      display: flex;
      padding: 14px 12px;
      box-sizing: border-box;
      background-color: #ffffff;
      .cover {
        width: 80px;
        height: 100px;
        border-radius: 2px;
        background: #dee2ed no-repeat center/cover;
      }
      .info {
        position: relative;
        margin-left: 10px;
        color: #a4a4a4;
        width: calc(~"100% - 100px");
        .score {
          position: absolute;
          top: 0;
          right: 0;
          color: #ff9500;
        }
        .margin-top-10 {
          margin-top: 10px;
        }
      }
    }
    .catalog {
      margin: 14px 0;
      padding: 14px;
      box-sizing: border-box;
      background-color: #ffffff;
      h1 {
        font-weight: bold;
        color: #222222;
        font-size: 14px;
      }
      .time {
        margin: 10px;
        color: #a4a4a4;
      }
      .current {
        margin: 0 10px;
        color: #1e93c1;
      }
    }
    .description {
      margin: 10px 0;
      padding: 14px;
      box-sizing: border-box;
      color: #a4a4a4;
      background-color: #ffffff;
      p {
        text-indent: 28px;
        text-align: justify;
        overflow: hidden;
      }
      .up {
        text-align: center;
      }
    }
    .comment {
      background-color: #ffffff;
      padding: 14px;
      box-sizing: border-box;
      .comment-title {
        display: flex;
        justify-content: space-between;
      }
      .chat {
        color: #ff9500;
      }
      .comment-list {
        margin: 14px 0;
        border-bottom: 1px solid #eeeeee;
        .comment-user {
          display: flex;
          justify-content: space-between;
          align-items: center;
          .right {
            color: #1e93c1;
          }
          .left {
            display: flex;
            .avatar {
              display: inline-block;
              width: 40px;
              height: 40px;
              border-radius: 4px;
              margin-right: 10px;
              background: no-repeat center/cover;
            }
            .username {
              color: #50729e;
            }
            .comment-time {
              margin-top: 6px;
              font-size: 12px;
              color: #a4a4a4;
            }
          }
        }
        .comment-info {
          margin: 10px;
          color: #a4a4a4;
        }
      }
      .more-comment {
        text-align: center;
        color: #1e93c1;
        line-height: 20px;
      }
    }
    .other {
      margin: 10px 0;
      background-color: #ffffff;
      padding: 14px;
      box-sizing: border-box;
      .other-list {
        display: flex;
        margin: 10px 0;
        .other-list-cover {
          display: inline-block;
          width: 60px;
          height: 80px;
          border-radius: 4px;
          margin-right: 10px;
          background: no-repeat center/cover;
        }
        .other-info {
          .auth {
            margin: 10px 0;
          }
        }
      }
    }
    .recommend {
      margin: 4px 0;
      background-color: #ffffff;
      padding: 14px;
      box-sizing: border-box;
      .title {
        display: flex;
        justify-content: space-between;
        h1 {
          color: #000;
        }
      }
      .recommend-list {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        margin: 10px 0 0 0;
        .recommend-list-cover {
          width: 60px;
          height: 80px;
          background: no-repeat center/cover;
        }
        .recommend-list-name {
            width: 60px;
          color: #a4a4a4;
          font-size: 12px;
        }
      }
    }
  }
}
</style>