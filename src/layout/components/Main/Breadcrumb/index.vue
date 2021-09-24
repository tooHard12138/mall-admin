<template>
  <div class="bread-crumb-container clearfix">
    <div class="btn">
      <el-button @click="handleBtn" class="button" size="mini" type="primary" icon="el-icon-s-fold"></el-button>
    </div>
    <div class="breadcrumb">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
        <el-breadcrumb-item>活动列表</el-breadcrumb-item>
        <el-breadcrumb-item>活动详情</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <ul class="user">
      <li>
        xxxxxxx
        <i class="el-icon-arrow-down"></i>
      </li>
      <li>退出</li>
    </ul>
  </div>
</template>

<script>
export default {
  methods: {
    handleBtn() {
      const isCollapse = this.$store.state.sidebar.isCollapse;
      this.$store.commit("sidebar/collapse", !isCollapse);
    }
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/mixin.less";
.bread-crumb-container{
  .size();
  .btn, .breadcrumb{
    display: inline-block;
  }
  .btn{
    margin-right: 10px;
  }
  .breadcrumb{
    transform: translateY(3px);
  }
  .user{
    text-align: center;
    cursor: pointer;
    float: right;
    margin-right: 20px;
    width: 150px;
    li:not(:first-child){
      display: none;
      &:hover{
        background: #eee;
        color: #999;
      }
    }
    &:hover li{
      display: block;
    }
  }
}
</style>