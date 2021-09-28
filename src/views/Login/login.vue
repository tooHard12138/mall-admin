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
        <el-button @click="register">注册</el-button>
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
            // 密码正确，登录
            const user = await userLogin(this.loginForm);
            this.$store.dispatch("user/userLogin", user);
            this.$router.push("/");
          } catch (error) {
            this.$message({
              message: error,
              type: "error",
            });
          }
        }
      });
    },
    register() {
      // 注册按钮
      this.$emit("register");
    },
  },
};
</script>

<style lang="less" scoped>
</style>