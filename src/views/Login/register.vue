<template>
  <div class="register-container">
    <el-form
      :model="form"
      status-icon
      :rules="rules"
      ref="form"
      label-width="100px"
      class="demo-form"
    >
      <el-form-item label="用户邮箱" prop="email">
        <el-input
          type="text"
          v-model="form.email"
          autocomplete="off"
        ></el-input>
      </el-form-item>

      <el-form-item label="用户密码" prop="password">
        <el-input
          type="password"
          v-model="form.password"
          autocomplete="off"
        ></el-input>
      </el-form-item>

      <el-form-item label="用户名" prop="username">
        <el-input
          type="text"
          v-model="form.username"
          autocomplete="off"
        ></el-input>
      </el-form-item>

      <el-form-item label="验证码" prop="code">
        <el-input type="text" v-model="form.code" autocomplete="off"></el-input>
        <el-button @click="handleCode">获取验证码</el-button>
      </el-form-item>

      <el-form-item label="用户角色" prop="role">
        <el-radio v-model="form.role" label="customer">普通用户</el-radio>
        <el-radio v-model="form.role" label="admin">管理员</el-radio>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm('form')">注册</el-button>
        <el-button @click="toLogin">返回登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>


<script>
import { getCode, logon } from "@/api/user";

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
      form: {
        email: "",
        password: "",
        username: "",
        code: "",
        role: "customer",
      },
      rules: {
        email: [
          { required: true, validator: validateEmail, trigger: "change" },
        ],
        password: [
          { required: true, validator: validatePass, trigger: "change" },
        ],
        username: [
          { required: true, message: "请输入用户名", trigger: "change" },
        ],
        code: [{ required: true, message: "请输验证码", trigger: "change" }],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(async (valid) => {
        if (valid) {
          try {
            // 注册
            logon(this.form).then((resp) => {
              this.$message({
                message: "注册成功",
                type: "success",
              });
              this.toLogin();
            });
          } catch (error) {
            this.$message({
              message: error,
              type: "error",
            });
          }
        }
      });
    },
    async handleCode() {
      // 获取验证码
      const emailReg = /^\w+@[a-z0-9]+\.[a-z]{2,4}$/;
      if (this.form.email === "") {
        this.$message.error("请输入邮箱");
      } else if (!emailReg.test(this.form.email)) {
        this.$message.error("邮箱格式不正确");
      } else {
        await getCode({ email: this.form.email });
        this.$message({
          message: "已发送",
          type: "success",
        });
      }
    },
    toLogin() {
      // 返回登录
      this.$emit("toLogin");
    },
  },
};
</script>

<style lang="less" scoped>
</style>