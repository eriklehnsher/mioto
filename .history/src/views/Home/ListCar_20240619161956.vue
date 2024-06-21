<template>
  <div class="container">
    <h1>XE DÀNH CHO BẠN!</h1>
    <div class="listcar">
      <div class="car" v-for="car in cars" :key="car.id">
        <div class="car-image">
          <img :src="car.image" :alt="car.name" />
        </div>
        <div class="car-details">
          <h3>{{ car.name }}</h3>
          <p>{{ car.description }}</p>
          <p class="price">Price: ${{ car.price }}</p>
          <button class="btn">View Details</button>
        </div>
      </div>
    </div>
  </div>
</template>
  
  <script>
export default {
  data() {
    return {
      cars: [
        {
          id: 1,
          name: "Car 1",
          description: "Description of car 1",
          price: "100,000",
          image: "./images/cars/car1.jpg",
        },
        {
          id: 2,
          name: "Car 2",
          description: "Description of car 2",
          price: "120,000",
          image: "./images/cars/car2.jpg",
        },
        {
          id: 3,
          name: "Car 3",
          description: "Description of car 3",
          price: "90,000",
          image: "./images/cars/car3.jpg",
        },
        {
          id: 4,
          name: "Car 4",
          description: "Description of car 4",
          price: "110,000",
          image: "./images/cars/car4.jpg",
        },
        {
          id: 5,
          name: "Car 5",
          description: "Description of car 5",
          price: "130,000",
          image: "./images/cars/car5.jpg",
        },
        {
          id: 6,
          name: "Car 6",
          description: "Description of car 6",
          price: "140,000",
          image: "./images/cars/car6.jpg",
        },
      ],
    };
  },
};
</script>
  
  <style scoped>
.listcar {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 20px;
  padding: 20px;
  background-color: #f4f4f4;
}

.car {
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;
  width: calc(33% - 40px);
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
}

.car:hover {
  transform: translateY(-10px);
}

.car-image img {
  width: 100%;
  height: auto;
  border-bottom: 1px solid #eaeaea;
}

.car-details {
  padding: 20px;
  text-align: center;
}

.car-details h3 {
  margin: 10px 0;
  font-size: 1.5em;
  color: #333;
}

.car-details p {
  color: #777;
  margin-bottom: 10px;
}

.car-details .price {
  font-weight: bold;
  color: #333;
}

.btn {
  display: inline-block;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn:hover {
  background-color: #0056b3;
}
</style>
  