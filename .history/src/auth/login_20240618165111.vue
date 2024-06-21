<template>
  <div class="login">
    <div class="login-container">
      <h1>ĐĂNG NHẬP</h1>

      <form @submit.prevent="handleSubmit" class="login-form">
        <div class="form-group">
          <label for="username">Tên đăng nhập</label>
          <input
            type="text"
            id="username"
            v-model="formData.username"
            class="form-control"
            required
          />
        </div>

        <div class="form-group">
          <label for="password">Mật khẩu</label>
          <input
            type="password"
            id="password"
            v-model="formData.password"
            class="form-control"
            required
          />
        </div>

        <button type="submit" class="btn btn-primary btn-block">
          Đăng nhập
        </button>
      </form>

      <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
    </div>
  </div>
</template>
  
  <script>
export default {
  name: "LoginForm",
  data() {
    return {
      formData: {
        username: "",
        password: "",
      },
      errorMessage: "",
    };
  },
  methods: {
    handleSubmit() {
      console.log("Form đăng nhập:", this.formData);
      // Đây là nơi để xử lý logic đăng nhập, ví dụ gửi request đăng nhập tới server và xử lý kết quả
    },
  },
};
</script>
  
  <style scoped>
  .login {
    min-height: 100vh;
  }
.login-container {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

h1 {
  text-align: center;
  color: #007bff;
}

.login-form {
  margin-top: 20px;
}

.form-group {
  margin-bottom: 15px;
}

label {
  font-weight: bold;
}

.form-control {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.btn-primary {
  background-color: #007bff;
  color: white;
  padding: 10px;
  font-size: 16px;
  border: none;
  cursor: pointer;
}

.btn-primary:hover {
  background-color: #0056b3;
}

.error-message {
  text-align: center;
  margin-top: 10px;
  color: red;
}
</style>
  