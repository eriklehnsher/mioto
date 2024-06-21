<template>
  <div>
    <div>
      <Carousel :items-to-show="1">
        <!-- Slide 1 -->
        <Slide key="slide1">
          <div class="carousel__item">
            <h2>Slide 1</h2>
            <p>Description for Slide 1</p>
            <button @click="openModal(1)" class="slide-button">
              Open Modal 1
            </button>
          </div>
        </Slide>

        <!-- Slide 2 -->
        <Slide key="slide2">
          <div class="carousel__item">
            <h2>Slide 2</h2>
            <p>Description for Slide 2</p>
            <button @click="openModal(2)" class="slide-button">
              Open Modal 2
            </button>
          </div>
        </Slide>

        <!-- Slide 3 -->
        <Slide key="slide3">
          <div class="carousel__item">
            <h2>Slide 3</h2>
            <p>Description for Slide 3</p>
            <button @click="openModal(3)" class="slide-button">
              Open Modal 3
            </button>
          </div>
        </Slide>

        <!-- Addons -->
        <template #addons>
          <Navigation />
        </template>
      </Carousel>

      <!-- Modal component -->
      <div class="modal" :class="{ 'is-active': modalOpen }">
        <div class="modal-background"></div>
        <div class="modal-content">
          <div class="box">
            <p>{{ modalContent }}</p>
            <button @click="closeModal" class="modal-close">Close</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Button trigger modal -->
  <button
    type="button"
    class="btn btn-primary"
    data-bs-toggle="modal"
    data-bs-target="#exampleModal"
  >
    Launch demo modal
  </button>

  <!-- Modal -->
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">...</div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>
</template>