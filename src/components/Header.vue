<template>
  <header class="header">
    <div class="header-wrapper">
      <div class="header-container">
        <div class="logo-section">
          <span class="logo-text">Thai Sea Bass Export</span>
          <div class="divider"></div>
        </div>
        
        <nav class="nav-menu">
          <a href="#home" class="nav-link">Home</a>
          <a href="#product" class="nav-link">Product</a>
          <a href="#quality" class="nav-link">Quality</a>
          <a href="#contact" class="nav-link">Contact us</a>
        </nav>
        
        <div class="cta-section">
          <img :src="images.icons.phone" alt="Phone" class="phone-icon" />
          <button class="cta-button desktop-cta">
            Get in Touch
          </button>
          <button class="hamburger-button mobile-menu" @click="toggleMenu">
            <span class="hamburger-line"></span>
            <span class="hamburger-line"></span>
            <span class="hamburger-line"></span>
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { images } from '../assets/images.js'

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 24px 60px;
}

.header-wrapper {
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
}

.header-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 32px;
  background: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 12px;
  border: 1px solid rgba(248, 249, 249, 0.4);
}

.logo-section {
  display: flex;
  align-items: center;
  gap: 32px;
}

.logo-text {
  font-size: 20px;
  font-weight: 700;
  line-height: 32px;
  color: #F8F9F9;
  white-space: nowrap;
}

.divider {
  width: 1px;
  height: 40px;
  background: rgba(248, 249, 249, 0.4);
}

.nav-menu {
  display: flex;
  align-items: center;
  gap: 40px;
}

.nav-link {
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  color: #F8F9F9;
  text-decoration: none;
  transition: opacity 0.3s;
  white-space: nowrap;
}

.nav-link:hover {
  opacity: 0.8;
}

.cta-section {
  display: flex;
  align-items: center;
  gap: 24px;
}

.phone-icon {
  width: 21px;
  height: 24px;
  flex-shrink: 0;
  display: block;
}

.cta-button {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 24px;
  background: #D50C2B;
  color: #F8F9F9;
  border: none;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  cursor: pointer;
  transition: all 0.3s;
  white-space: nowrap;
}

.cta-button:hover {
  background: #b81030;
  transform: translateY(-1px);
}

.hamburger-button {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 24px;
  height: 18px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
}

.hamburger-line {
  width: 100%;
  height: 2px;
  /* background: #F8F9F9; */
    background: #17255C;

  border-radius: 2px;
  transition: all 0.3s;
}

.mobile-menu {
  display: none;
}

.desktop-cta {
  display: flex;
}

@media (max-width: 1200px) {
  .header {
    padding: 20px 40px;
  }
  
  .nav-menu {
    gap: 24px;
  }
  
  .nav-link {
    font-size: 14px;
  }
}

@media (max-width: 968px) {
  .header {
    padding: 12px 16px;
  }
  
  .header-container {
    padding: 10px 16px;
    background-color: white;
  }
  
  .logo-section {
    gap: 12px;
  }
  
  .divider {
    display: none;
  }
  
  .nav-menu {
    display: none;
  }
  
  .logo-text {
    font-size: 14px;
    line-height: 1.4;
    color: #17255C;

  }
  
  .cta-section {
    gap: 12px;
  }
  
  .desktop-cta {
    display: none;
  }
  
  .mobile-menu {
    display: flex;
  }
}

@media (max-width: 480px) {
  .header {
    padding: 10px 12px;
  }
  
  .header-container {
    padding: 8px 12px;
  }
  
  .phone-icon {
    display: none;
  }
  
  .hamburger-button {
    width: 22px;
    height: 16px;
  }
  
  .logo-text {
    font-size: 13px;
  }
}
</style>
