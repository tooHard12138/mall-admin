<template>
  <div class="sidebar-container">
    <el-menu
      :router="true"
      background-color="#545c64"
      text-color="#fff"
      :default-active="$route.name"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse"
    >
      <el-submenu
        v-for="router in $router.options.routes"
        :key="router.pash"
        v-if="!router.meta.hide"
        :index="router.path"
      >
        <template slot="title">
          <i :class="router.meta.icon"></i>
          <span slot="title">{{ router.meta.title }}</span>
        </template>
        <el-menu-item
          :route="children"
          v-for="children in router.children"
          v-if="showPage($store.state.user.user.role, children.meta.needAdmin) && !children.meta.hide"
          :key="children.pash"
          :index="children.name"
        >
          <i :class="children.meta.icon"></i>
          <span slot="title">{{ children.meta.title }}</span>
        </el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
import { mapState } from "vuex";
import showPage from "@/utils/showPage";

export default {
  computed: {
    ...mapState("sidebar", ["isCollapse"]),
  },
  methods: {
    showPage,
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/mixin.less";
.sidebar-container {
  .size();
}
.el-menu-vertical-demo {
  .size();
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>