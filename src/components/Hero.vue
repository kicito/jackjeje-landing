<template>
  <section class="hero">
    <div class="hero-background">
      <video autoplay muted loop playsinline class="hero-bg-video">
        <source src="../assets/hero-video.mp4" type="video/mp4" />
      </video>
      <div class="hero-overlay"></div>
      <div class="image-gallery">
        <div class="gallery-row">
          <div 
            v-for="(img, index) in images.gallery.slice(0, 4)" 
            :key="index" 
            class="gallery-image"
            :style="{ backgroundImage: `url(${img})` }"
          ></div>
        </div>
        <div class="gallery-row">
          <div 
            v-for="(img, index) in images.gallery.slice(0, 4)" 
            :key="index + 4" 
            class="gallery-image"
            :style="{ backgroundImage: `url(${img})` }"
          ></div>
        </div>
      </div>
    </div>
    <div class="hero-content">
      <h1 class="hero-title">Premium Sea Bass Fingerlings</h1>
      <p class="hero-description">
        Direct from Thailand's leading hatcheries to your aquaculture farm. 
        High-quality sea bass fry (1 cm. - 2 inch) with superior survival rates and fast growth
      </p>
    </div>
    <!-- <div class="pagination">
      <span class="dot active"></span>
      <span class="dot"></span>
      <span class="dot"></span>
    </div> -->
  </section>
</template>

<script setup>
import { images } from '../assets/images.js'
</script>

<style scoped>
.hero {
  position: relative;
  width: 100%;
  height: 700px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.hero-bg-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6));
  z-index: 1;
}

.image-gallery {
  position: relative;
  z-index: 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 120px;
  opacity: 0.2;
}

.gallery-row {
  display: flex;
  gap: 16px;
}

.gallery-image {
  width: 240px;
  height: 160px;
  background-size: cover;
  background-position: center;
  background-color: #ccc;
  border-radius: 8px;
}

.hero-content {
  position: relative;
  z-index: 1;
  max-width: 872px;
  text-align: center;
  padding: 0 24px;
}

.hero-title {
  font-size: 72px;
  font-weight: 700;
  color: white;
  margin: 0 0 24px;
  line-height: 1.2;
}

.hero-description {
  font-size: 18px;
  color: white;
  line-height: 1.6;
  margin: 0;
}

.pagination {
  position: absolute;
  bottom: 44px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 12px;
  z-index: 2;
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  transition: background 0.3s;
}

.dot.active {
  background: white;
}

@media (max-width: 768px) {
  .hero {
    height: 400px;
  }
  
  .hero-content {
    padding: 0 16px;
  }
  
  .hero-title {
    font-size: 28px;
    margin: 0 0 16px;
  }
  
  .hero-description {
    font-size: 14px;
  }
  
  .image-gallery {
    padding: 20px;
  }
  
  .gallery-image {
    width: 80px;
    height: 60px;
  }
}

@media (max-width: 480px) {
  .hero {
    height: 350px;
  }
  
  .hero-title {
    font-size: 24px;
    line-height: 1.3;
  }
  
  .hero-description {
    font-size: 13px;
    line-height: 1.5;
  }
}
</style>
