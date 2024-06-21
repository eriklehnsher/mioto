<template>
  <div class="portfolio">
    <div class="portfolio__header">
      <img
        class="portfolio__cover-photo"
         src="../Home/images/cover-photo.jpg"
        alt="Ảnh bìa"
      />
      <img
        class="portfolio__profile-photo"
        src="../Home/images/profile-photo.jpg"
        alt="Ảnh đại diện"
      />
    </div>
    <div class="portfolio__info">
      <h1 class="portfolio__name">{{ user.fullName }}</h1>
      <p class="portfolio__username">@{{ user.username }}</p>
      <p class="portfolio__email">Email: {{ user.email }}</p>
      <p class="portfolio__phone">Số điện thoại: {{ user.phone }}</p>
      <p class="portfolio__address">Địa chỉ: {{ user.address }}</p>
      <p class="portfolio__created-at">Ngày tham gia: {{ formattedDate }}</p>
    </div>
  </div>
</template>
  
  <script>
export default {
  data() {
    return {
      user: {
        fullName: "Nguyễn Văn A",
        username: "nguyenvana",
        email: "nguyenvana@example.com",
        phone: "0123-456-789",
        address: "123 Đường Chính, Thành phố, Việt Nam",
        createdAt: "2023-01-01",
      },
    };
  },
  computed: {
    formattedDate() {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(this.user.createdAt).toLocaleDateString("vi-VN", options);
    },
  },
};
</script>
  
  <style scoped>
.portfolio {
  width: 80%;
  margin: 0 auto;
  font-family: "Arial, sans-serif";
  color: #333;
  background-color: #f9f9f9;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.portfolio__header {
  position: relative;
  width: 100%;
  height: 300px;
}

.portfolio__cover-photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.portfolio__profile-photo {
  position: absolute;
  bottom: -50px;
  left: 50%;
  transform: translateX(-50%);
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 5px solid white;
  object-fit: cover;
}

.portfolio__info {
  padding: 60px 20px 20px 20px;
  text-align: center;
}

.portfolio__name {
  margin: 0;
  font-size: 2em;
  color: #444;
}

.portfolio__username {
  color: #888;
  margin-bottom: 20px;
}

.portfolio__email,
.portfolio__phone,
.portfolio__address,
.portfolio__created-at {
  margin: 10px 0;
  color: #555;
}

.portfolio__email:first-of-type {
  margin-top: 20px;
}

@media (max-width: 768px) {
  .portfolio {
    width: 100%;
  }

  .portfolio__header {
    height: 200px;
  }

  .portfolio__profile-photo {
    width: 80px;
    height: 80px;
    bottom: -40px;
  }

  .portfolio__info {
    padding: 50px 20px 20px 20px;
  }

  .portfolio__name {
    font-size: 1.5em;
  }
}
</style>
  