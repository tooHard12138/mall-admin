<template>
  <div class="product-add-container">
    <EditAdd
      :formData="formData"
      @basicSubmit="basicSubmit"
      @saleSubmit="saleSubmit"
      @previous="previous"
    />
  </div>
</template>

<script>
import EditAdd from "../components/EditAdd/index";
import { productAdd } from "@/api/products";
import useEditAdd from "../mixin/useEditAdd";

export default {
  mixins: [useEditAdd],
  components: {
    EditAdd,
  },
  methods: {
    fetchData() {
      // 发送请求，添加商品
      productAdd(this.formData).then((resp) => {
        this.$router.push({ name: "ProductList" });
        this.$message({
          message: "添加成功",
          type: "success",
        });
      });
    },
  },
};
</script>

<style lang="less" scoped>
</style>