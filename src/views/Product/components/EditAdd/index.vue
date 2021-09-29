<template>
  <div class="edit-add-container">
    <div class="steps-box">
      <el-steps
        class="steps"
        :active="active"
        process-status="finish"
        finish-status="success"
        align-center
      >
        <el-step title="填写商品基本信息"></el-step>
        <el-step title="填写商品销售信息"></el-step>
      </el-steps>
    </div>

    <div class="form-box">
      <div class="content">
        <Basic
          :formData="formData"
          v-if="active === 0"
          :active="active"
          @basicSubmit="basicSubmit"
        />
        <Sale
          :formData="formData"
          v-if="active === 1"
          :active="active"
          @saleSubmit="saleSubmit"
          @previous="previous"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Basic from "./Basic";
import Sale from "./Sale";

export default {
  props: ["formData"],
  data() {
    return {
      active: 0,
    };
  },
  components: {
    Basic,
    Sale,
  },
  methods: {
    previous(e) {
      // 返回上一步 (基本信息)
      this.$emit("previous", e.saleData);
      this.active = e.active;
    },
    basicSubmit(e) {
      // 基本信息提交，进入下一步
      this.$emit("basicSubmit", e.basicData);
      this.active = e.active;
    },
    saleSubmit(saleData) {
      // 销售信息提交，提交数据
      this.$emit("saleSubmit", saleData);
    },
  },
};
</script>

<style lang="less" scoped>
.steps-box {
  box-sizing: border-box;
  padding: 10px 0;
}
.steps {
  width: 50%;
  margin: 0 auto;
}
.form-box {
  border-top: 1px dashed #e9e9e9;
  border-bottom: 1px dashed #e9e9e9;
  text-align: center;
  padding-top: 80px;
  background: #fafafa;
}
.content {
  margin: 0 auto;
  width: 40%;
  transform: translateX(-30px);
}
</style>
