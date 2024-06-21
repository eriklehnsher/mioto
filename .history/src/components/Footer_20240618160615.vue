<template>
  <footer class="footer">
    <div class="separator"></div>
    <div class="container">
      <div class="footer-content">
        <div class="footer-logo">
          <img src="../assets/images/logo-header.png" alt="Logo" />
        </div>
        <div class="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <div class="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <div class="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <div class="footer-social">
          <h4>Follow Us</h4>
          <ul>
            <li>
              <a href="#"><i class="fa-brands fa-facebook"></i></a>
            </li>
            <li>
              <a href="#"><i class="fab fa-twitter"></i></a>
            </li>
            <li>
              <a href="#"><i class="fab fa-instagram"></i></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; 2024 Your Company. All rights reserved.</p>
    </div>
  </footer>
</template>
  
  <script>
export default {
  // Các phương thức và dữ liệu của component
};
</script>
  
  <style scoped>
.footer {
  width: 100%;
  background-color: #fff;
  color: #000000;
  padding: 30px 0;
}
.separator {
  border-top: 1.5px solid #efecec;
  margin-top: 20px;
  margin-bottom: 20px;
  width: 100%;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.footer-content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.footer-logo {
  flex: 1 1 200px; /* Điều chỉnh chiều rộng logo */
  margin-bottom: 20px;
}

.footer-logo img {
  max-width: 100px;
  height: auto;
  margin-bottom: 10px;
}

.footer-links,
.footer-social {
  flex: 1 1 200px; /* Điều chỉnh chiều rộng các phần liên kết và mạng xã hội */
  margin-bottom: 20px;
}

.footer-links h4,
.footer-social h4 {
  font-size: 16px;
  margin-bottom: 10px;
}

.footer-links ul,
.footer-social ul {
  padding: 0;
  margin: 0;
  list-style: none;
}
.footer-social ul {
  display: flex;
  gap: 10px;
  justify-content: center;
}
.footer-links li,
.footer-social li {
  margin-bottom: 8px;
}

.footer-links a,
.footer-social a {
  color: #000000;
  text-decoration: none;
}

.footer-bottom {
  text-align: center;
  padding-top: 20px;
  border-top: 1.5px solid #efecec;
}

.footer-bottom p {
  font-size: 14px;
  margin: 0;
}
</style>
  