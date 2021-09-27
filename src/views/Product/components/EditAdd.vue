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
      <el-form class="form" ref="form" :model="form" label-width="auto">

        <el-form-item
          label="标题"
          prop="title"
          :rules="[{ required: true, message: '请输入标题', trigger: 'blur' }]"
        >
          <el-input v-model="form.title"></el-input>
        </el-form-item>

        <el-form-item label="商品描述" prop="desc">
          <el-input v-model="form.desc"></el-input>
        </el-form-item>

        <el-form-item
          label="商品类目"
          prop="category"
          :rules="[{ required: true, message: '请输入类名', trigger: 'blur' }]"
        >
          <el-select placeholder="" class="select" v-model="form.category">
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item
          prop="c_items"
          :rules="[{ required: true, message: '请输入子类名', trigger: 'blur' }]"
        >
          <el-select placeholder="请添加子类名" class="select" v-model="form.c_items">
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item
          label="商品标签"
          prop="tags"
          :rules="[{ required: true, message: '请添加标签', trigger: 'blur' }]"
        >
          <el-autocomplete
            class="inline-input"
            v-model="form.tags"
            :fetch-suggestions="querySearch"
            placeholder="请添加标签"
            @select="handleSelect"
          >
          </el-autocomplete>
        </el-form-item>

        <el-form-item>
          <el-button style="margin-top: 12px" @click="submitForm('form')"
            >下一步</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      form: {
        title: "",
        desc: "",
        category: "",
        c_items: "",
        tags: "",
      },
      restaurants: [],
    };
  },
  methods: {
    submitForm(formName) {
      // 提交表单
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // 表单验证成功，提交
          alert("submit!");
          this.active++
        } else {
          // 表单验证失败
          console.log("error submit!!");
          return false;
        }
      });
    },
    querySearch(queryString, cb) {
      var restaurants = this.restaurants;
      var results = queryString
        ? restaurants.filter(this.createFilter(queryString))
        : restaurants;
      // 调用 callback 返回建议列表的数据
      cb(results);
    },
    createFilter(queryString) {
      return (restaurant) => {
        return (
          restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) ===
          0
        );
      };
    },
    loadAll() {
      return [
        { value: "阳阳麻辣烫", address: "天山西路389号" },
        {
          value: "南拳妈妈龙虾盖浇饭",
          address: "普陀区金沙江路1699号鑫乐惠美食广场A13",
        },
      ];
    },
    handleSelect(item) {
      // 商品标签选中后
      console.log(item);
    },
  },
  mounted() {
    this.restaurants = this.loadAll();
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
.form {
  margin: 0 auto;
  width: 50%;
}
.select,
.inline-input {
  width: 100%;
}
</style>