export default {
  data() {
    return {
      formData: {
        title: "",
        desc: "",
        category: "",
        c_items: "",
        tags: [],
        price: 0,
        price_off: 0,
        inventory: 0,
        unit: "",
        images: [],
      },
    };
  },
  methods: {
    previous(saleData) {
      // 返回上一步 (基本信息)
      this.formData = {
        ...this.formData,
        ...saleData,
      };
    },
    basicSubmit(basicData) {
      // 基本信息提交，进入下一步
      this.formData = {
        ...this.formData,
        ...basicData,
      };
    },
    saleSubmit(saleData) {
      // 销售信息提交，提交数据
      this.formData = {
        ...this.formData,
        ...saleData,
      };

      this.fetchData();
    },
  },
};
