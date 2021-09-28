<template>
  <div class="product-list-container">
    <div class="search-box">
      <!-- 搜索 -->
      <Search @submitSearch="submitSearch" />
    </div>
    <div class="list-box">
      <!-- 表格 -->
      <List
        :tableData="tableData"
        @cancelDelete="handleCancelDelete"
        @delete="handleDelete"
        @edit="handleEdit"
      />
    </div>
    <div class="pagination">
      <!-- 分页 -->
      <el-pagination
        hide-on-single-page
        background
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="page"
        :page-sizes="[10, 20, 30, 40]"
        :page-size="size"
        layout="sizes, prev, pager, next"
        :total="total"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
import Search from "./Search";
import List from "./List";
import { productList, productDelete } from "@/api/products";

export default {
  components: {
    Search,
    List,
  },
  data() {
    return {
      originTableData: [],
      total: 0,
      page: 1,
      size: 10,
      searchWord: "",
      category: "",
    };
  },
  computed: {
    tableData() {
      const category = this.$store.state.user.category;
      return this.originTableData.map((it) => {
        it.status = it.status ? "上架" : "下架";
        it.category = this.formatCate(it.category, category);
        return it;
      });
    },
  },
  methods: {
    formatCate(id, cateList) {
      const cate = cateList.find((it) => {
        return it.id === id;
      });
      return cate.name;
    },
    submitSearch(formSearch) {
      // 提交搜索
      this.searchWord = formSearch.searchWord;
      this.category = formSearch.category;
      this.page = 1;
      this.fetchData();
    },

    handleSizeChange(val) {
      // 每页多少条变化
      this.size = val;
      this.fetchData();
    },
    handleCurrentChange(val) {
      // 当前页码变化
      this.page = val;
      this.fetchData();
    },
    async fetchData() {
      const resp = await productList({
        page: this.page,
        size: this.size,
        searchWord: this.searchWord,
        category: this.category,
      });
      this.total = resp.total;
      this.originTableData = resp.data;
    },
    handleCancelDelete() {
      // 取消删除
      this.$message({
        type: "info",
        message: "已取消删除",
      });
    },
    handleDelete(id) {
      // 删除
      productDelete(id).then((resp) => {
        if (resp.data.deletedCount) {
          this.fetchData();
          this.$message({
            type: "success",
            message: "删除成功!",
          });
        } else {
          this.$message({
            type: "info",
            message: "删除失败",
          });
        }
      });
    },
    handleEdit(row) {
      // 编辑
      this.$router.push({ name: "ProductEdit", params: { id: row.id } });
    },
  },
  created() {
    this.fetchData();

    productList().then((resp) => {
      console.log(resp);
    });
  },
};
</script>

<style lang="less" scoped>
.search-box {
  padding: 10px 30px;
  height: 60px;
  box-sizing: border-box;
}
.pagination {
  display: flex;
  justify-content: flex-end;
  margin: 30px 30px 100px 0;
}
</style>
