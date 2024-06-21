<template>
  <div class="register">
    <div class="register-container">
      <h1>ĐĂNG KÝ NGAY!</h1>

      <form @submit.prevent="handleSubmit" class="register-form">
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
          <label for="email">Email</label>
          <input
            type="email"
            id="email"
            v-model="formData.email"
            class="form-control"
            required
          />
        </div>
        <div class="form-group">
          <label for="phone">Số Điện thoại</label>
          <input
            type="number"
            id="phone"
            v-model="formData.phone"
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

        <button type="submit" class="button">Đăng ký</button>
      </form>

      <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
      <p v-if="successMessage" class="success-message">{{ successMessage }}</p>
    </div>
  </div>
</template>
  
  <script>
import "@/assets/css/button.css";
import { mapActions } from "vuex";

export default {
  name: "RegisterForm",
  data() {
    return {
      formData: {
        username: "",
        email: "",
        phone: "",
        password: "",
      },
      errorMessage: "",
      successMessage: "",
    };
  },
  methods: {
    ...mapActions(["registerUser"]),
    handleSubmit() {
      const user = {
        username: this.formData.username,
        email: this.formData.email,
        password: this.formData.password,
      };
      this.registerUser(user);

      //   try {
      //     const response = await fetch("http://your-api-endpoint/register", {
      //       method: "POST",
      //       headers: {
      //         "Content-Type": "application/json",
      //       },
      //       body: JSON.stringify(this.formData),
      //     });

      //     if (!response.ok) {
      //       const errorData = await response.json();
      //       throw new Error(errorData.message || "Đã có lỗi xảy ra.");
      //     }

      //     this.successMessage = "Đăng ký thành công!";
      //     this.errorMessage = "";
      //     this.formData.username = "";
      //     this.formData.email = "";
      //     this.formData.password = "";
      //   } catch (error) {
      //     console.error("Đăng ký không thành công:", error.message);
      //     this.errorMessage = "Đăng ký không thành công. Vui lòng thử lại sau.";
      //     this.successMessage = "";
      //   }
      console.log("Form đăng ký:", this.formData);
    },
  },
};
</script>
  
  <style scoped>
.register {
  margin-top: 100px;
  min-height: 100vh;
}
.register-container {
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

.register-form {
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

.error-message,
.success-message {
  text-align: center;
  margin-top: 10px;
}

.error-message {
  color: red;
}

.success-message {
  color: green;
}
button {
  width: 100%;
}
</style>
  