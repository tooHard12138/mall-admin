<template>
  <div class="login-container">
    <el-form
      :model="loginForm"
      status-icon
      :rules="rules"
      ref="loginForm"
      label-width="100px"
      class="demo-loginForm"
    >
      <el-form-item label="邮箱" prop="email">
        <el-input
          type="text"
          v-model="loginForm.email"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input
          type="password"
          v-model="loginForm.password"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('loginForm')"
          >登录</el-button
        >
        <el-button @click="resetForm('loginForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { userLogin } from "@/api/user";
export default {
  data() {
    var emailReg = /^\w+@[a-z0-9]+\.[a-z]{2,4}$/;
    var validateEmail = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入邮箱"));
      } else if (!emailReg.test(value)) {
        callback(new Error("邮箱格式不正确"));
      } else {
        callback();
      }
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        callback();
      }
    };
    return {
      loginForm: {
        email: "",
        password: "",
      },
      rules: {
        email: [{ validator: validateEmail, trigger: "change" }],
        password: [{ validator: validatePass, trigger: "change" }],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(async (valid) => {
        if (valid) {
          try {
            const user = await userLogin(this.loginForm);
            this.$store.commit("user/user", user);
            this.$router.push("/");
          } catch (error) {
            this.$message({
              message: error,
              type: "error",
            });
          }
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>

<style lang="less" scoped>
.login-container {
  width: 400px;
  height: 300px;
  position: fixed;
  top: 100px;
  left: 50%;
  transform: translate(-60%);
}
</style>