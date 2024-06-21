<template>
  <div class="login">
    <div class="login-container">
      <h1>ĐĂNG NHẬP</h1>

      <form @submit.prevent="handleSubmit" class="login-form">
        <div class="form-group">
          <label for="email">Nhập Email</label>
          <input
            type="text"
            id="email"
            v-model="formData.email"
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

        <button type="submit" class="button">Đăng nhập</button>
      </form>

      <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
    </div>
  </div>
</template>

<script>
import "@/assets/css/button.css";
import { mapActions } from "vuex";

export default {
  name: "LoginForm",
  data() {
    return {
      formData: {
        email: "",
        password: "",
      },
      errorMessage: "",
    };
  },
  methods: {
    ...mapActions(["loginUser"]),
    async handleSubmit() {
      const user = {
        username: this.formData.email,
        password: this.formData.password,
      };
      const success = await this.loginUser(user);
      if (!success) {
        this.errorMessage = "Tên đăng nhập hoặc mật khẩu không đúng";
      } else {
        this.$router.push("/"); // Redirect to home page or another page after successful login
      }
    },
  },
};
</script>

<style scoped>
.login {
  margin-top: 100px;
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
  display: flex;
  flex-direction: column;
  align-items: flex-start;
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

button {
  width: 100%;
}
</style>
