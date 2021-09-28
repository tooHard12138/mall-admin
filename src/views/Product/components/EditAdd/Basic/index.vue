<template>
  <div class="basic-container">
    <el-form ref="form" :model="form" label-width="auto">
      <el-form-item
        label="商品标题"
        prop="title"
        :rules="[{ required: true, message: '请输入标题', trigger: 'change' }]"
      >
        <el-input v-model="form.title"></el-input>
      </el-form-item>

      <el-form-item label="商品描述" prop="desc">
        <el-input v-model="form.desc"></el-input>
      </el-form-item>

      <el-form-item
        class="cate"
        label="商品类目"
        prop="category"
        :rules="[{ required: true, message: '请输入类名', trigger: 'change' }]"
      >
        <el-select
          placeholder=""
          class="select"
          @change="selectChange"
          v-model="form.category"
        >
          <el-option
            v-for="cate in category"
            :key="cate.id"
            :label="cate.name"
            :value="cate.id"
          ></el-option>
        </el-select>
      </el-form-item>

      <el-form-item
        prop="c_items"
        :rules="[
          { required: true, message: '请输入子类名', trigger: 'change' },
        ]"
      >
        <el-select
          placeholder="请添加子类名"
          class="select"
          v-model="form.c_items"
        >
          <el-option
            v-for="title in c_items"
            :key="title"
            :label="title"
            :value="title"
          ></el-option>
        </el-select>
      </el-form-item>

      <el-form-item
        label="商品标签"
        prop="tags"
        :rules="[{ required: true, message: '请添加标签', trigger: 'change' }]"
      >
        <el-select
          class="select"
          placeholder="请添加标签"
          v-model="form.tags"
          multiple
          filterable
          allow-create
          default-first-option
        >
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </el-form-item>

      <el-form-item>
        <el-button style="margin-top: 12px" @click="submitForm('form')"
          >下一步</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  props: ["active"],
  data() {
    return {
      form: {
        title: "",
        desc: "",
        category: "",
        c_items: "",
        tags: [],
      },
      c_items: [],
      options: [{ value: "包邮，最晚次日达", label: "包邮，最晚次日达" }],
    };
  },
  computed: {
    ...mapState("user", ["category"]),
  },
  methods: {
    submitForm(formName) {
      // 提交表单
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // 表单验证成功，提交
          this.$emit("basicSubmit", {
            active: this.active + 1,
            basicData: this.form,
          });
        }
      });
    },
    selectChange(id) {
      this.c_items = this.category.find((it) => it.id === id).c_items;
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
</style>