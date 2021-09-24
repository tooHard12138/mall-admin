<template>
  <div class="main-container">
    <div class="breadcrumb">
      <Breadcrumb />
    </div>
    <div class="Page">
      <ViewPage />
    </div>
  </div>
</template>

<script>
import Breadcrumb from "./Breadcrumb";
import ViewPage from "./ViewPage";

export default {
  components: {
    ViewPage,
    Breadcrumb,
  },
};
</script>

<style lang="less" scoped>
.breadcrumb{
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid #eee;
    padding: 0 10px;
}
</style>