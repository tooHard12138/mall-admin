<template>
  <div class="container">
    <h1 class="title">{{ isRegister ? "注册" : "登录" }}</h1>
    <Login v-if="!isRegister" @register="handleRegister" />
    <Register v-else @toLogin="handleToLogin" />
  </div>
</template>

<script>
import Login from "./login";
import Register from "./register";

export default {
  components: {
    Login,
    Register,
  },
  data() {
    return {
      isRegister: false,
    };
  },
  methods: {
    handleRegister() {
      this.isRegister = true;
    },
    handleToLogin() {
      this.isRegister = false;
    },
  },
};
</script>

<style lang="less" scoped>
.container {
  width: 400px;
  height: 300px;
  position: fixed;
  top: 100px;
  left: 50%;
  transform: translate(-60%);
  .title {
    transform: translateX(30px);
    text-align: center;
    margin-bottom: 50px;
  }
}
</style>