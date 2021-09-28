<template>
  <div class="sale-container">
    <!--  -->
    <el-form ref="form" :model="form" label-width="100px">
      <el-form-item
        label="商品售价"
        prop="price"
        :rules="[
          { required: true, message: '请输入商品售价', trigger: 'change' },
        ]"
      >
        <el-input v-model="form.price"></el-input>
      </el-form-item>

      <el-form-item label="折扣价格" prop="price_off">
        <el-input v-model="form.price_off"></el-input>
      </el-form-item>

      <el-form-item
        label="商品库存"
        prop="inventory"
        :rules="[
          { required: true, message: '请输入商品库存', trigger: 'change' },
        ]"
      >
        <el-input v-model.number="form.inventory"></el-input>
      </el-form-item>

      <el-form-item
        label="计量单位"
        prop="unit"
        :rules="[
          { required: true, message: '请输入商品计量单位', trigger: 'change' },
        ]"
      >
        <el-input v-model="form.unit"></el-input>
      </el-form-item>

      <el-form-item label="商品相册" prop="images">
        <div class="upload-box">
          <el-upload
            :action="`http://mallapi.duyiedu.com/upload/images?appkey=${$store.state.user.user.appkey}`"
            list-type="picture-card"
            :on-preview="handlePictureCardPreview"
            :on-remove="handleRemove"
            :on-success="success"
            name="avatar"
          >
            <i class="el-icon-plus"></i>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="" />
          </el-dialog>
        </div>
      </el-form-item>

      <el-form-item>
        <el-button style="margin-top: 12px" @click="previous">上一步</el-button>
        <el-button
          style="margin-top: 12px"
          @click="submitForm('form')"
          type="primary"
          >提交</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  props: ["active"],
  data() {
    return {
      form: {
        price: 0,
        price_off: 0,
        inventory: 0,
        unit: "",
        images: [],
      },
      dialogImageUrl: "",
      dialogVisible: false,
    };
  },
  methods: {
    submitForm(formName) {
      // 提交表单
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // 表单验证成功，提交
          this.$emit("saleSubmit", this.form);
        }
      });
    },
    previous() {
      // 上一步
      this.$emit("previous", this.active - 1);
    },
    handleRemove(file) {
      // 从文件列表删除图片
      this.form.images = this.form.images.filter((it) => it !== file.response.data.url);
    },
    handlePictureCardPreview(file) {
      // 点击查看图片
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    success(response) {
      // 文件上传成功
      this.form.images.push(response.data.url);
    },
  },
};
</script>

<style lang="less" scoped>
.select {
  width: 100%;
}
.cate {
  margin-bottom: 5px;
}
.upload-box {
  display: flex;
}
</style>