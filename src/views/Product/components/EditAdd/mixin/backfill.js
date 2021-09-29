export default {
  props: ["active", "formData"],
  data() {
    return {
      form: {},
    };
  },
  watch: {
    formData: {
      handler() {
        this.form = this.setForm();
        if(this.selectChange) {
          this.selectChange(this.form.category)
        }
      },
      deep: true,
    },
  },
  created() {
    this.form = this.setForm();
  },
};
