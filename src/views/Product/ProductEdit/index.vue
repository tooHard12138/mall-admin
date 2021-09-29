<template>
  <div class="product-edit-container">
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
import { productDetails, productEdit } from "@/api/products";
import useEditAdd from "../mixin/useEditAdd";

import axios from "axios";

export default {
  mixins: [useEditAdd],
  components: {
    EditAdd,
  },
  methods: {
    fetchData() {
      // 发送请求，修改商品
      productEdit(this.formData).then((resp) => {
        this.$router.push({ name: "ProductList" });
        this.$message({
          message: "修改成功",
          type: "success",
        });
      });
    },
  },
  async created() {
    // 接口返回的对象里没有子类目，所以子类目哪一项是空的 undefined
    const resp = await productDetails(this.$route.params.id);
    for (const key in this.formData) {
      this.formData[key] = resp[key];
    }
  },
};
</script>

<style lang="less" scoped>
</style>