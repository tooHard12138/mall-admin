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
          v-show="active === 0"
          :active="active"
          @basicSubmit="basicSubmit"
        />
        <Sale
          v-show="active === 1"
          :active="active"
          @saleSubmit="saleSubmit"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Basic from "./Basic";
import Sale from "./Sale";

export default {
  data() {
    return {
      active: 0,
      basicData: {},
    };
  },
  components: {
    Basic,
    Sale,
  },
  methods: {
    basicSubmit(e) {
      this.active = e.active;
      this.basicData = e.basicData;
    },
    saleSubmit(e) {
      this.active = e;
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
  width: 50%;
}
</style>
