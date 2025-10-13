<template>
  <section class="why-choose">
    <div class="container">
      <div class="content-wrapper">
        <div class="left-content">
          <div class="badge">Direct from Thailand's</div>
          <h2 class="section-title">Why Choose Our Fry?</h2>
        </div>
        <div class="right-content">
          <p class="description">
            International standards, proven genetics, and reliable logistics With deep roots in tradition 
            and a focus on innovation, our company provides high-quality agricultural products and solutions 
            that support farmers, enhance food security, and promote sustainable practices. From soil to harvest, 
            we offer expertise in crop production, agri-technology, supply chain logistics, and eco-conscious farming.
          </p>
          <button class="cta-button">Get in Touch</button>
        </div>
      </div>
    </div>
    <div class="banner">
      <div class="banner-text">THAI SEA BASS EXPORT</div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
.why-choose {
background: linear-gradient(180deg, #172459 0%, #092184 100%);    color: white;
  padding: 60px 0 40px;
}

.container {
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 120px;
}

.content-wrapper {
  display: flex;
  gap: 80px;
  margin-bottom: 80px;
}

.left-content {
  flex: 1;
  max-width: 527px;
}

.badge {
  display: inline-block;
  padding: 4px 12px;
  border-radius: 19px;
  border: 1px solid white;
  font-size: 14px;
  margin-bottom: 24px;
}

.section-title {
  font-size: 60px;
  font-weight: 700;
  line-height: 1.2;
  margin: 0;
}

.right-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.description {
  font-size: 16px;
  line-height: 1.6;
  margin: 0;
}

.cta-button {
  align-self: flex-start;
  padding: 12px 24px;
  background: white;
  color: #172459;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.3s;
}

.cta-button:hover {
  background: #b81030;
}

.banner {
  padding: 40px 0;
  overflow: hidden;
}
.banner-text {
  font-size: 96px;
  font-weight: 700;
color: #001469;
  text-align: center;
  white-space: nowrap;
}

@media (max-width: 768px) {
  .why-choose {
    padding: 40px 0 32px;
  }
  
  .container {
    padding: 0 16px;
  }
  
  .content-wrapper {
    flex-direction: column;
    gap: 24px;
    margin-bottom: 40px;
  }
  
  .section-title {
    font-size: 28px;
  }
  
  .description {
    font-size: 14px;
  }
  
  .cta-button {
    padding: 10px 20px;
    font-size: 14px;
  }
  
  .banner {
    padding: 24px 0;
  }
  
  .banner-text {
    font-size: 32px;
  }
}

@media (max-width: 480px) {
  .section-title {
    font-size: 24px;
  }
  
  .banner-text {
    font-size: 24px;
  }
}
</style>
