<template>
  <div class="sale-container">
    <button @click="test">上一步</button>
  </div>
</template>

<script>
export default {
  props: ["active"],
  methods: {
    test() {
      this.$emit("saleSubmit", this.active - 1);
    },
  },
};
</script>

<style lang="less" scoped>
</style>