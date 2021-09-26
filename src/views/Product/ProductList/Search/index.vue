<template>
  <div class="search-container">
    <div>
      <el-form :inline="true" :model="formSearch" class="demo-form-inline">
        <el-form-item class="input" label="检索关键字 :">
          <el-input
            v-model="formSearch.searchWord"
            placeholder="请输入关键字"
          ></el-input>
        </el-form-item>

        <el-form-item label="商品类目 :">
          <el-select
            v-model="formSearch.category"
            clearable
            placeholder="请选择商品类目"
          >
            <el-option
              v-for="item in categoryList"
              :key="item.id"
              :label="item.name"
              :value="item.id"
            ></el-option>
          </el-select>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="onSubmit">搜索</el-button>
        </el-form-item>
      </el-form>
    </div>

    <router-link :to="{ name: 'ProductAdd' }">
      <el-button plain> 添加商品 </el-button>
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formSearch: {
        searchWord: "",
        category: "",
      },
    };
  },
  methods: {
    onSubmit() {
      this.$emit("submitSearch", this.formSearch);
    },
  },
  computed: {
    categoryList() {
      return this.$store.state.user.category;
    },
  },
};
</script>

<style lang="less" scoped>
.search-container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
}
.input {
  margin-right: 20px;
}
</style>