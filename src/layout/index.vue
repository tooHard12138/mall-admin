<template>
  <div class="layout-container">
    <div class="sidebar" :class="{collapse:isCollapse}">
      <Sidebar />
    </div>
    <div class="main">
      <Main />
    </div>
  </div>
</template>

<script>
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import { mapState } from "vuex";

export default {
  components: {
    Sidebar,
    Main,
  },
  computed: {
    ...mapState("sidebar", ["isCollapse"]),
  },
};
</script>

<style lang="less" scoped>
.common {
  overflow: hidden;
  height: 100%;
}
.layout-container {
  position: fixed;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  .sidebar {
    .common();
    width: 200px;
    flex: 0 0 auto;
    transition: all .3s;
    &.collapse{
      width: 64px;
    }
  }
  .main {
    height: 100%;
    overflow-y: auto;
    flex: 1 1 auto;
  }
}
</style>