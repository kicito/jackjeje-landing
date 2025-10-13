<template>
  <section class="products">
    <div class="products-header">
      <div class="ocean-background">
        <img
          :src="images.products.oceanBoats"
          alt="Ocean"
          class="ocean-image"
        />
      </div>
      <div class="overlay"></div>
      <div class="header-content">
        <h2 class="section-title">Our Sea Bass Fingerlings</h2>
        <p class="section-subtitle">
          Premium Quality sea bass fry from certified hatcheries with complete
          health documentation
        </p>
      </div>
    </div>

    <div class="products-content">
      <div class="container">
        <div class="product-cards">
          <div class="product-card">
            <div class="product-image">
              <img
                :src="images.products.standardDrone"
                alt="Standard Grade Fry"
                class="product-img"
              />
            </div>
            <div class="product-details">
              <div class="product-info">
                <h3 class="product-title">Standard Grade Fry</h3>
                <div class="specs-grid">
                  <div class="spec-row">
                    <div class="spec-item">
                      <span class="spec-label">Size</span>
                      <span class="spec-value">1-1.5 cm.</span>
                    </div>
                    <div class="spec-item">
                      <span class="spec-label">Age</span>
                      <span class="spec-value">0-45 Days</span>
                    </div>
                  </div>
                  <div class="spec-row">
                    <div class="spec-item">
                      <span class="spec-label">Survival Rate</span>
                      <span class="spec-value">92-95%</span>
                    </div>
                    <div class="spec-item">
                      <span class="spec-label">MOQ</span>
                      <span class="spec-value">50,000 pcs</span>
                    </div>
                  </div>
                </div>
              </div>
              <button class="request-button">
                <span>Request Price</span>
                <svg
                  class="arrow-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    d="M7 17L17 7M17 7H7M17 7V17"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div class="product-card">
            <div class="product-image premium">
              <img
                :src="images.products.premiumFarmer"
                alt="Premium Grade Fry"
                class="product-img"
              />
            </div>
            <div class="product-details">
              <div class="product-info">
                <h3 class="product-title">Premium Grade Fry</h3>
                <div class="specs-grid">
                  <div class="spec-row">
                    <div class="spec-item">
                      <span class="spec-label">Size</span>
                      <span class="spec-value">1.5-2 inch</span>
                    </div>
                    <div class="spec-item">
                      <span class="spec-label">Age</span>
                      <span class="spec-value">60-75 Days</span>
                    </div>
                  </div>
                  <div class="spec-row">
                    <div class="spec-item">
                      <span class="spec-label">Survival Rate</span>
                      <span class="spec-value">96-98%</span>
                    </div>
                    <div class="spec-item">
                      <span class="spec-label">MOQ</span>
                      <span class="spec-value">30,000 pcs</span>
                    </div>
                  </div>
                </div>
              </div>
              <button class="request-button">
                <span>Request Price</span>
                <svg
                  class="arrow-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    d="M7 17L17 7M17 7H7M17 7V17"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { images } from "../assets/images.js";
</script>

<style scoped>
.products {
  background: #17255C;
}

.products-header {
  position: relative;
  height: 573px;
  overflow: hidden;
}

.products-header::before {
  position: absolute;
  top: 0;
  content: "";
  height: 161px;
  width: 100%;
  flex-shrink: 0;
  background: linear-gradient(180deg, #fff 0%, rgba(255, 255, 255, 0) 100%);
  z-index: 2;
  pointer-events: none;
}

.ocean-background {
  position: absolute;
  inset: 0;
}

.ocean-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    180deg,
    rgba(30, 58, 138, 0.7) 0%,
    rgba(15, 23, 42, 0.8) 100%
  );
  z-index: 1;
}

.header-content {
  position: relative;
  z-index: 1;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 120px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.section-title {
  font-size: 60px;
  font-weight: 700;
  color: white;
  margin: 0 0 24px;
}

.section-subtitle {
  font-size: 18px;
  color: white;
  margin: 0;
}

.products-content {
  padding: 60px 0;
}

.container {
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 120px;
}

.product-cards {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
}

.product-card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
}

.product-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
}

.product-image {
  width: 100%;
  height: 400px;
  position: relative;
  overflow: hidden;
  background: #f0f0f0;
}

.product-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.product-image.premium {
  background: #f0f0f0;
}

.product-details {
  padding: 32px;
}

.product-info {
  margin-bottom: 32px;
}

.product-title {
  font-size: 28px;
  font-weight: 600;
  color: #17255c;
  margin: 0 0 24px;
}

.specs-grid {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.spec-row {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
}

.spec-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 12px;
  border-bottom: 1px solid #e0e0e0;
}

.spec-label {
  font-size: 16px;
  color: #666;
}

.spec-value {
  font-size: 16px;
  font-weight: 600;
  color: #17255c;
}

.request-button {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 20px;
  background: #dc143c;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s;
}

.request-button:hover {
  background: #b81030;
}

.arrow-icon {
  width: 24px;
  height: 24px;
}

@media (max-width: 768px) {
  .products-content {
    padding: 40px 0;
  }
  
  .container {
    padding: 0 16px;
  }

  .header-content {
    padding: 0 16px;
  }

  .section-title {
    font-size: 28px;
  }
  
  .section-subtitle {
    font-size: 14px;
  }
  
  .products-header {
    height: 400px;
  }

  .product-cards {
    grid-template-columns: 1fr;
    gap: 24px;
  }
  
  .product-image {
    height: 240px;
  }
  
  .product-details {
    padding: 20px;
  }
  
  .product-title {
    font-size: 22px;
    margin: 0 0 16px;
  }
  
  .product-info {
    margin-bottom: 20px;
  }
  
  .spec-row {
    gap: 16px;
  }
  
  .spec-label,
  .spec-value {
    font-size: 14px;
  }
  
  .request-button {
    padding: 14px;
    font-size: 16px;
  }
}

@media (max-width: 480px) {
  .products-header {
    height: 300px;
  }
  
  .section-title {
    font-size: 24px;
  }
  
  .section-subtitle {
    font-size: 13px;
  }
  
  .product-image {
    height: 200px;
  }
  
  .product-title {
    font-size: 20px;
  }
}
</style>
