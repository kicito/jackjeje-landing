<template>
  <section class="why-choose-details">
    <div class="container">
      <div class="content-header">
        <div class="left-content">
          <div class="badge">Direct from Thailand's</div>
          <h2 class="section-title">Why Choose Our Fry?</h2>
          <button class="read-more-button">Read More</button>
        </div>
        <div class="image-placeholder">
          <img :src="images.whyChoose.farm" alt="Aquaculture Farm" class="farm-image" />
        </div>
      </div>
      
      <div class="features-grid">
        <div class="feature-card">
          <div class="icon-wrapper">
            <img :src="images.icons.cup" alt="Certified Quality" class="icon" />
          </div>
          <div class="feature-content">
            <h3 class="feature-title">Certified Quality</h3>
            <p class="feature-description">
              DOF certified hatcery with HACCP standards. All shipments include health 
              certificates and origin documents.
            </p>
          </div>
        </div>
        
        <div class="feature-card">
          <div class="icon-wrapper">
            <img :src="images.icons.genetic" alt="Superior Genetics" class="icon" />
          </div>
          <div class="feature-content">
            <h3 class="feature-title">Superior Genetics</h3>
            <p class="feature-description">
              Selectively bred broodstock for fast growth, disease resistance, 
              and high meat yield potential.
            </p>
          </div>
        </div>
        
        <div class="feature-card">
          <div class="icon-wrapper">
            <img :src="images.icons.cold" alt="Cold Chain Logistics" class="icon" />
          </div>
          <div class="feature-content">
            <h3 class="feature-title">Cold Chain Logistics</h3>
            <p class="feature-description">
              Professional oxygen packaging with temperature control. 24-hour delivery 
              guarantee across Southeast Asia.
            </p>
          </div>
        </div>
        
        <div class="feature-card">
          <div class="icon-wrapper">
            <img :src="images.icons.tech" alt="Technical Support" class="icon" />
          </div>
          <div class="feature-content">
            <h3 class="feature-title">Technical Support</h3>
            <p class="feature-description">
              Complete farimimg guidelines. feeding protocols, and ongoing technical 
              consultation for optimal growth.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { images } from '../assets/images.js'
</script>

<style scoped>
.why-choose-details {
  background: white;
  padding: 60px 0;
}

.container {
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 120px;
}

.content-header {
  display: flex;
  gap: 80px;
  margin-bottom: 60px;
}

.left-content {
  flex: 1;
  max-width: 527px;
}

.badge {
  display: inline-block;
  padding: 4px 12px;
  color: #17255C;
  border-radius: 19px;
  border: 1px solid #17255C;
  font-size: 14px;
  margin-bottom: 24px;
}

.section-title {
  font-size: 60px;
  font-weight: 700;
  line-height: 1.2;
  color: #17255C;
  margin: 0 0 32px;
}

.read-more-button {
  padding: 12px 24px;
  background: #dc143c;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.3s;
}

.read-more-button:hover {
  background: #b81030;
}

.image-placeholder {
  flex: 1;
  background: #e0e0e0;
  border-radius: 12px;
  min-height: 360px;
  overflow: hidden;
  position: relative;
}

.farm-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 60px;
}

.feature-card {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.icon-wrapper {
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon {
  width: 100%;
  height: 100%;
  display: block;
}

.feature-content {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.feature-title {
  font-size: 20px;
  font-weight: 600;
  color: #17255C;
  margin: 0;
}

.feature-description {
  font-size: 14px;
  line-height: 1.6;
  color: #666;
  margin: 0;
}

@media (max-width: 1024px) {
  .features-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 40px;
  }
}

@media (max-width: 768px) {
  .why-choose-details {
    padding: 40px 0;
  }
  
  .container {
    padding: 0 16px;
  }
  
  .content-header {
    flex-direction: column;
    gap: 24px;
    margin-bottom: 32px;
  }
  
  .section-title {
    font-size: 28px;
  }
  
  .badge {
    font-size: 12px;
    padding: 3px 10px;
  }
  
  .read-more-button {
    padding: 10px 20px;
    font-size: 14px;
  }
  
  .image-placeholder {
    min-height: 200px;
  }
  
  .features-grid {
    grid-template-columns: 1fr;
    gap: 28px;
  }
  
  .feature-card {
    gap: 16px;
  }
  
  .icon-wrapper {
    width: 48px;
    height: 48px;
  }
  
  .feature-title {
    font-size: 18px;
  }
  
  .feature-description {
    font-size: 13px;
  }
}

@media (max-width: 480px) {
  .section-title {
    font-size: 24px;
  }
  
  .icon-wrapper {
    width: 40px;
    height: 40px;
  }
  
  .feature-title {
    font-size: 16px;
  }
}
</style>
