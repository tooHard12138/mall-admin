<template>
  <div class="product-list-container">
    <div class="search-box">
      <Search @submitSearch="submitSearch" />
    </div>
    <div class="list-box">
      <List :tableData="tableData" />
    </div>
    <div class="pagination">
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
import { productList } from "@/api/products";

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
        if (it.status) {
          it.status = "上架";
        } else {
          it.status = "下架";
        }
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
  },
  created() {
    this.fetchData();
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
