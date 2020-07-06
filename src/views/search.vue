<template>
  <div>
    <van-nav-bar
      title="搜索"
      fixed
      left-arrow
      @click-left="$router.back(1)"
    />
    <div class='search'>
      <div>
        <span @click='isShowType= true'>{{type}} <van-icon name='arrow-down'></van-icon></span>
        <div
          class='search-type-list'
          v-show='isShowType'
        >
          <div class='list-box'>
            <div class='top'></div>

            <div
              class='list-item'
              v-for='(s,i) in search'
              :key='s'
              @click='chooseType(i,s)'
            >
              <van-icon
                name='search'
                class='icom-search'
              ></van-icon>
              <em :class="[{'color-2': i===1}, {'color-3': i===2}]">{{s}}</em>
              <van-icon
                name='success'
                v-if='searchIndex===i'
              ></van-icon>
            </div>
          </div>
        </div>
      </div>
      <div class='search-input'>
        <input
          type="text"
          placeholder="搜索书名或作者"
        >
      </div>
      <span>搜索</span>
    </div>
    <main class='search-main'>
      <div class='title'>
        <h1>热门搜索</h1>
        <span>
          <i class='iconfont icon-huanyipi'></i>
          换一批
        </span>
      </div>
      <div class='s-tags'>
        <div
          class='s-tag'
          v-for='d in 12'
          :key='d'
        >校花的贴身高手</div>
      </div>
      <div class='title'>
        <h1>搜索历史</h1>
        <span>
          清空历史
        </span>
      </div>
      <div class='s-tags'>
        <div
          class='s-history-item'
          v-for='s in 7'
          :key='s'
        >直面声望</div>
      </div>
    </main>
    <div class='search-bottom'>
      <div class='btn' :class='{active: site===1}'>
        <i class='iconfont icon-search1'></i>
        站内搜索
      </div>
      <div class='btn'>
        <i class='iconfont icon-search1'></i>
        站外搜索
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      searchIndex: 0,
      site: 1,
      isShowType: false,
      type: "站内",
      search: ["站内", "追书", "宜搜"]
    };
  },
  methods: {
    chooseType(i, s) {
      this.searchIndex = i;
      this.type = s;
      this.isShowType = false;
    }
  },
  created() {
    this.$store.commit("isTabSet", false);
  }
};
</script> 
<style lang="less" scoped>
@import "../styles/van-default.less";
.search-type-list {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 999;
  .list-box {
    position: absolute;
    background-color: #ffffff;
    top: 90px;
    left: 10px;
    border-radius: 4px;
    .top {
      position: absolute;
      top: -7px;
      right: 50%;
      width: 0;
      height: 0;
      border-left: 7px solid transparent;
      border-right: 7px solid transparent;
      border-bottom: 10px solid #ffffff;
    }
    .list-item {
      width: 80px;
      height: 36px;
      box-sizing: border-box;
      padding: 4px 6px;
      display: flex;
      align-items: center;
      em {
        margin: 0 6px;
      }
      .icom-search {
        color: #666666;
      }
      .color-2 {
        color: #fb3958;
      }
      .color-3 {
        color: #ff9500;
      }
    }
  }
}
.search {
  width: 100%;
  padding: 10px 15px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f5f5f5;
  color: @common;
  .search-input {
    position: relative;
    input {
      width: 240px;
      padding: 10px;
      box-sizing: border-box;
      height: 32px;
      border-radius: 10px;
      outline: none;
      border: 1px solid #ffffff;
      box-shadow: 0 0 2px #ffffff;
      color: #222222;
    }
  }
}

.search-main {
  .title {
    display: flex;
    justify-content: space-between;
    padding: 15px;
    box-sizing: border-box;
    h1 {
      color: #000;
      font-size: 15px;
    }
  }
  .s-tags {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    padding: 10px 15px;
    box-sizing: border-box;
    .s-tag {
      width: 30%;
      height: 36px;
      line-height: 36px;
      margin: 0 4px 10px;
      border: 1px solid #ff9500;
      text-align: center;
      color: #444444;
      font-size: 12px;
      border-radius: 10px;
    }
    .s-history-item {
      padding: 6px 8px;
      border-radius: 4px;
      margin: 0 4px 10px;
      background-color: #f5f5f5;
    }
  }
}

::-webkit-input-placeholder {
  color: #999999;
}

.search-bottom {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 44px;
  line-height: 44px;
  border-top: 1px solid #eeeeee;
  display: flex;

  .btn {
    display: inline-block;
    width: 50%;
    text-align: center;
    border-right: 1px solid #eeeeee;
    .iconfont {
        font-size: 16px;
    }
   
  }
   .active {
        color: @common;
    }
}
</style>