<template>
  <div id='addbook'>
    <van-nav-bar
      title="创建书单"
      right-text="发布"
      fixed
      left-arrow
      @click-left="back"
      @click-right="publish"
    />
    <main>
      <div class='book-name'>
        <input
          type="text"
          placeholder="填写书单名"
          v-model='bookName'
        >
      </div>
      <div>
        <textarea
          v-model='bookDescription'
          class='book-content'
          placeholder="填写书单介绍(最少10字不超过200字)"
        ></textarea>
      </div>
      <div class='choose'>
        <div class='choose-left'>
          <div class='add-btn'>书架添加</div>
          <div class='add-btn'>书库添加</div>
        </div>
        <van-radio-group
          v-model="radio"
          class='choose-right'
        >
          <van-radio
            name="1"
            class='margin-right-8'
          >男频</van-radio>
          <van-radio name="2">女频</van-radio>
        </van-radio-group>
      </div>
      <p class='tips'>(温馨提示：亲，您发布的书单将会经过我们的严格审核,杜绝垃圾书单，请您合理编辑)</p>
      <book-list :bookList='bookList' v-if='bookList.length>0'></book-list>
    </main>
    <div class='save-btn' @click='publish'>保存</div>
  </div>
</template>
<script>
import BookList from '@/views/mybook/book-list.vue'
export default {
  name: "addBook",
  components: {
     BookList
  },
  data() {
    return {
      radio: "1",
      bookName: '',
      bookDescription: '',
      bookList: [
        {
          id: 1,
          cover: "../../../static/img/1.jpg",
          name: "玲家有女初长成",
          new: "写的非常不错的小说",
          auth: 'yeager'
        },
        {
          id: 2,
          cover: "../../../static/img/2.jpg",
          name: "斗破苍穹",
          new: "写的非常不错的小说",
          auth: '天航'
        }
      ]
    };
  },
  created() {
    this.$store.commit("isTabSet", false);
  },
  methods: {
    back() {
      this.$router.back(1);
    },
    publish() {
        if (!this.bookName) {this.$toast("请填写书单名称");return}
        if (!this.bookDescription) {this.$toast("请填写书单介绍");return}
        if (this.bookDescription.length < 10) {this.$toast("介绍不小于10字");return}
        if (this.bookDescription.length > 200) {this.$toast("介绍不多于200字");return}
        if (this.bookList.lenght < 1) {this.$toast("请选择书籍");return}
      
    }
  }
};
</script>
<style lang="less" scoped>
@import "../../styles/van-default.less";
@font-color: #bfbfbf;
::-webkit-input-placeholder {
  color: @font-color;
  font-size: 12px;
}

#addbook {
  background-color: #f9f9f9;
}
.book-name {
  width: 100%;
  height: 44px;
  margin: 44px 0 10px;
  border-radius: 4px;
  box-sizing: border-box;
  background-color: #ffffff;
  input {
    width: 100%;
    height: 34px;
    margin: 5px 10px;
    border: none;
    outline: none;
  }
}
.book-content {
  width: 100%;
  padding: 10px;
  height: 100px;
  box-sizing: border-box;
  background-color: #ffffff;
  border: 0px solid #ffffff;
  border-radius: 4px;
  outline: none;
}

.choose {
  margin: 10px 0;
  padding: 0 10px;
  box-sizing: border;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .choose-left {
    .add-btn {
      display: inline-block;
      width: 88px;
      height: 32px;
      line-height: 32px;
      text-align: center;
      border: 1px solid @common;
      color: @common;
      border-radius: 20px;
    }
  }
  .choose-right {
    display: flex;
    .margin-right-8 {
      margin-right: 8px;
    }
  }
}
.tips {
  margin: 0 10px;
  color: #666666;
}
.save-btn {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 44px;
  line-height: 44px;
  font-size: 14px;
  text-align: center;
  color: #ffffff;
  background-color: @common;
}
</style>