<template>
  <div class="statistics-container">
    <div class="card-box">
      <Card v-for="title in cardTitle" :key="title" :title="title">
        card content
      </Card>
    </div>
    <div class="statistics-box">
      <ve-line :data="chartData" :settings="chartSettings"></ve-line>
    </div>
  </div>
</template>

<script>
import Card from "@/components/Card";
export default {
  data() {
    this.chartSettings = {
      stack: { 用户: ["访问用户", "下单用户"] },
      area: true,
    };
    return {
      cardTitle: ["商品总览", "用户总览", "销售总览"],
      chartData: {
        columns: ["日期", "访问用户", "下单用户", "下单率"],
        rows: [
          { 日期: "1/1", 访问用户: 1393, 下单用户: 1093, 下单率: 0.32 },
          { 日期: "1/2", 访问用户: 3530, 下单用户: 3230, 下单率: 0.26 },
          { 日期: "1/3", 访问用户: 2923, 下单用户: 2623, 下单率: 0.76 },
          { 日期: "1/4", 访问用户: 1723, 下单用户: 1423, 下单率: 0.49 },
          { 日期: "1/5", 访问用户: 3792, 下单用户: 3492, 下单率: 0.323 },
          { 日期: "1/6", 访问用户: 4593, 下单用户: 4293, 下单率: 0.78 },
        ],
      },
    };
  },
  components: {
    Card,
  },
};
</script>

<style lang="less" scoped>
.card-box {
  display: flex;
  justify-content: space-evenly;
  background-color: rgb(236, 236, 236);
  padding: 20px;
}
</style>