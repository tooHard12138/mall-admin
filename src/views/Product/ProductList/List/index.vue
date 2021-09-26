<template>
  <div class="list-container">
    <el-table stripe :data="tableData" style="width: 100%">
      <el-table-column
        show-overflow-tooltip
        fixed
        prop="id"
        label="ID"
        width="auto"
      ></el-table-column>
      <el-table-column
        show-overflow-tooltip
        prop="title"
        label="标题"
        width="auto"
      >
      </el-table-column>
      <el-table-column
        show-overflow-tooltip
        prop="desc"
        label="描述"
        width="auto"
      ></el-table-column>
      <el-table-column
        show-overflow-tooltip
        prop="category"
        label="类目"
        width="auto"
      ></el-table-column>
      <el-table-column
        show-overflow-tooltip
        prop="price"
        label="预售价格"
        width="auto"
      >
      </el-table-column>
      <el-table-column
        show-overflow-tooltip
        prop="price_off"
        label="折扣价格"
        width="auto"
      >
      </el-table-column>
      <el-table-column
        show-overflow-tooltip
        prop="tags"
        label="标签"
        width="auto"
      >
      </el-table-column>
      <el-table-column
        show-overflow-tooltip
        prop="inventory"
        label="限制购买数量"
        width="auto"
      >
      </el-table-column>
      <el-table-column
        show-overflow-tooltip
        prop="status"
        label="上架状态"
        width="auto"
      >
      </el-table-column>

      <el-table-column
        show-overflow-tooltip
        fixed="right"
        label="操作"
        width="170"
      >
        <template slot-scope="scope">
          <el-button plain @click="handleEdit(scope.row)" size="small">
            编辑
          </el-button>
          <el-button plain @click="handleDelete(scope.row)" size="small">
            删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  props: ["tableData"],
  methods: {
    handleEdit(row) {
      console.log("编辑", row);
    },
    handleDelete(row) {
      console.log("删除", row);
    },
  },
};
</script>

<style lang="less" scoped>
</style>