<template>
  <div class="bread-crumb-container">
    <div class="btn">
      <el-button
        @click="handleBtn"
        class="button"
        size="mini"
        type="primary"
        icon="el-icon-s-fold"
      ></el-button>
    </div>
    <div class="breadcrumb">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item v-for="router in $route.matched" :key="router.name">
          <router-link :to="{ name: router.name }">
            {{ router.meta.title }}
          </router-link>
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <ul class="user">
      <li>
        {{ $store.state.user.user.username }}
        <i class="el-icon-arrow-down"></i>
      </li>
      <li @click="out">退出</li>
    </ul>
  </div>
</template>

<script>
export default {
  methods: {
    handleBtn() {
      this.$store.dispatch("sidebar/asyncSetIsCollapse");
    },
    out() {
      this.$store.dispatch("user/userOut");
      this.$router.push({ name: "Login" });
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/mixin.less";
.bread-crumb-container {
  position: relative;
  .size();
  .btn,
  .breadcrumb {
    display: inline-block;
  }
  .btn {
    margin-right: 10px;
  }
  .breadcrumb {
    transform: translateY(3px);
  }
  .user {
    text-align: center;
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 0;
    width: 150px;
    li:not(:first-child) {
      background: rgb(84, 92, 100);
      color: #fff;
      display: none;
      &:hover {
        color: #409eff;
      }
    }
    &:hover li {
      display: block;
    }
  }
}
</style>