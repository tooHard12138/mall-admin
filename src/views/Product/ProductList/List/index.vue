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
  props: {
    tableData: {
      type: Array,
      required: true,
    },
  },
  methods: {
    handleEdit(row) {
      // 处理编辑
      this.$emit("edit", row);
    },
    handleDelete(row) {
      // 处理删除
      const id = row.id;
      this.$confirm(
        `<span style="color: red;"">确认删除标题为: <strong>${row.title}</strong> 的商品吗？</span>`,
        "确认删除",
        {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning",
          showClose: false,
          iconClass: "el-icon-question",
          customClass: "confirmBox",
          dangerouslyUseHTMLString: true,
        }
      )
        .then(() => {
          // 确认删除
          this.$emit("delete", id);
        })
        .catch(() => {
          // 取消删除
          this.$emit("cancelDelete");
        });
    },
  },
};
</script>

<style lang="less" scoped>
.confirmBox {
  transform: translateY(-200px);
}
</style>