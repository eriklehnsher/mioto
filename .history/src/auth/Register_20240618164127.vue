<template>
    <div class="register container">
      <h1>ĐĂNG KÝ NGAY!</h1>
  
      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <label for="username">Tên đăng nhập:</label>
          <input type="text" id="username" v-model="formData.username" required>
        </div>
  
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="formData.email" required>
        </div>
  
        <div class="form-group">
          <label for="password">Mật khẩu:</label>
          <input type="password" id="password" v-model="formData.password" required>
        </div>
  
        <button type="submit" class="btn btn-primary">Đăng ký</button>
      </form>
  
      <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
      <p v-if="successMessage" class="success-message">{{ successMessage }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'RegisterForm',
    data() {
      return {
        formData: {
          username: '',
          email: '',
          password: ''
        },
        errorMessage: '',
        successMessage: ''
      };
    },
    methods: {
      async handleSubmit() {
        try {
          // Gửi request đăng ký qua API FastAPI
          const response = await fetch('http://your-api-endpoint/register', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(this.formData),
          });
  
          if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || 'Đã có lỗi xảy ra.');
          }
  
          this.successMessage = 'Đăng ký thành công!';
          this.errorMessage = '';
          this.formData.username = '';
          this.formData.email = '';
          this.formData.password = '';
        } catch (error) {
          console.error('Đăng ký không thành công:', error.message);
          this.errorMessage = 'Đăng ký không thành công. Vui lòng thử lại sau.';
          this.successMessage = '';
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  .btn-primary {
    background-color: #007bff;
    color: white;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
  }
  
  .btn-primary:hover {
    background-color: #0056b3;
  }
  
  .error-message {
    color: red;
    margin-top: 10px;
  }
  
  .success-message {
    color: green;
    margin-top: 10px;
  }
  </style>
  