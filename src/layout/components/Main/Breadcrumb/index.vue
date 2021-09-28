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
    <div class="user">
      <el-dropdown @command="handleCommand">
        <span class="el-dropdown-link">
          {{ $store.state.user.user.username }}
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="out">退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    handleBtn() {
      this.$store.dispatch("sidebar/asyncSetIsCollapse");
    },
    handleCommand(command) {
      if (command === "out") {
        this.out();
      }
    },
    out() {
      // 登出
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
    margin-right: 20px;
    position: absolute;
    top: 0;
    right: 0;
  }
}
.el-dropdown-link {
  cursor: pointer;
  color: #409eff;
  font-size: 15px;
  font-weight: bold;
}
.el-icon-arrow-down {
  font-size: 15px;
}
</style>