<template>
  <div class="carousel">
    <div class="carousel-track" ref="track">
      <div
        v-for="(img, index) in displayImages"
        :key="`img-${index}`"
        class="carousel-item"
      >
        <img
          :src="img"
          :alt="`Gallery ${(index % images.gallery.length) + 1}`"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { images } from "../assets/images.js";
import { computed } from "vue";

// Triple the images for seamless infinite scroll
const displayImages = computed(() => {
  return [...images.gallery, ...images.gallery, ...images.gallery];
});
</script>

<style scoped>
.carousel {
  width: 100%;
  overflow: hidden;
  background: transparent;
}

.carousel-track {
  display: flex;
animation: scroll 10s linear infinite;
  will-change: transform;
}

.carousel-item {
  flex-shrink: 0;
  width: 240px;
  height: 160px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 1ms ease;
}

.carousel-item:hover {
  transform: scale(1.05);
}

.carousel-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    /* Move by exactly one-third (since we have 3 sets) */
    transform: translateX(calc(-33.333%));
  }
}

.carousel-track:hover {
  animation-play-state: paused;
}

@media (max-width: 768px) {
  .carousel-item {
    width: 160px;
    height: 106px;
  }

  .carousel-track {
    animation: scroll 25s linear infinite;
  }
}

@media (max-width: 480px) {
  .carousel-item {
    width: 140px;
    height: 93px;
  }
}
</style>
