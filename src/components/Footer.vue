<template>
  <footer class="footer">
    <div class="footer-background"></div>
    <div class="footer-content">
      <div class="container">
        <h1 class="footer-title">Thai Sea Bass Export</h1>
        
        <div class="footer-glass-box">
          <div class="footer-left">
            <p class="tagline">International standards, proven genetics, and reliable logistics</p>
            <div class="contact-info">
              <a href="mailto:export@thaiSeabass.com" class="contact-link">export@thaiSeabass.com</a>
              <a href="tel:+6620xxxxxxx" class="contact-link">+66 (0) 2-xxx-xxxx</a>
            </div>
            <div class="social-links">
              <a href="#" class="social-badge">facebook</a>
              <a href="#" class="social-badge">Line</a>
            </div>
          </div>
          
          <div class="divider"></div>
          
          <div class="footer-right">
            <div class="footer-columns">
              <div class="footer-column">
                <h3 class="footer-heading">Menu</h3>
                <ul class="footer-menu">
                  <li><a href="#home">Home</a></li>
                  <li><a href="#product">Product</a></li>
                  <li><a href="#quality">Quality</a></li>
                  <li><a href="#contact">Contact us</a></li>
                </ul>
              </div>
              
              <div class="footer-column">
                <h3 class="footer-heading">Support</h3>
                <ul class="footer-menu">
                  <li><a href="#privacy">Privacy Policy</a></li>
                  <li><a href="#terms">Terms and conditions</a></li>
                </ul>
              </div>
            </div>
            
            <p class="copyright">Copyright © 2025 Thai Sea Bass Export Co.,Ltd. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { images } from '../assets/images.js'
</script>

<style scoped>
.footer {
  position: relative;
  min-height: 600px;
  display: flex;
  align-items: flex-end;
  overflow: hidden;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.footer-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url('../assets/bg_footer.jpg');
  background-size: cover;
  background-position: center;
  z-index: 0;
}

.footer-background::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.62);
  z-index: 1;
}

.footer-content {
  position: relative;
  z-index: 2;
  width: 100%;
  padding: 180px 0 40px;
}

.container {
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 120px;
  position: relative;
}

.footer-title {
  position: absolute;
  top: -80px;
  left: 84px;
  font-size: 120px;
  font-weight: 700;
  line-height: 120px;
  color: #F8F9F9;
  margin: 0;
}

.footer-glass-box {
  backdrop-filter: blur(10px);
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(248, 249, 249, 0.4);
  border-radius: 12px;
  padding: 56px;
  display: flex;
  gap: 64px;
  align-items: center;
}

.footer-left {
  display: flex;
  flex-direction: column;
  gap: 32px;
  min-width: 350px;
  flex-shrink: 0;
}

.tagline {
  font-size: 16px;
  line-height: 24px;
  color: white;
  margin: 0;
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.contact-link {
  font-size: 32px;
  font-weight: 700;
  line-height: 40px;
  color: #F8F9F9;
  text-decoration: none;
  transition: opacity 0.3s;
}

.contact-link:hover {
  opacity: 0.8;
}

.social-links {
  display: flex;
  gap: 12px;
}

.social-badge {
  padding: 4px 12px;
  background: transparent;
  color: #F8F9F9;
  border-radius: 19px;
  font-size: 16px;
  line-height: 24px;
  text-decoration: none;
  transition: background 0.3s;
  border: 1px solid rgba(255, 255, 255, 0.44);
}

.social-badge:hover {
  background: rgba(255, 255, 255, 0.1);
}

.divider {
  width: 1px;
  height: 270px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.5) 50%, rgba(255, 255, 255, 0) 100%);
  flex-shrink: 0;
}

.footer-right {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 270px;
  flex: 1;
}

.footer-columns {
  display: flex;
  gap: 120px;
}

.footer-column {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.footer-heading {
  font-size: 24px;
  font-weight: 800;
  line-height: 32px;
  color: #F8F9F9;
  margin: 0;
}

.footer-menu {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.footer-menu a {
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  color: white;
  text-decoration: none;
  transition: opacity 0.3s;
}

.footer-menu a:hover {
  opacity: 0.7;
}

.copyright {
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  color: white;
  margin: 0;
  text-align: left;
}

@media (max-width: 1200px) {
  .footer-title {
    font-size: 80px;
    line-height: 80px;
    left: 60px;
  }
  
  .container {
    padding: 0 60px;
  }
  
  .footer-glass-box {
    flex-direction: column;
    align-items: flex-start;
    gap: 40px;
  }
  
  .divider {
    width: 100%;
    height: 1px;
    background: linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.5) 50%, rgba(255, 255, 255, 0) 100%);
  }
  
  .footer-right {
    width: 100%;
    height: auto;
    gap: 32px;
  }
  
  .footer-columns {
    gap: 60px;
  }
}

@media (max-width: 768px) {
  .footer {
    min-height: 500px;
  }
  
  .footer-content {
    padding: 100px 0 24px;
  }
  
  .container {
    padding: 0 16px;
  }
  
  .footer-title {
    font-size: 36px;
    line-height: 36px;
    left: 16px;
    top: -50px;
  }
  
  .footer-glass-box {
    padding: 24px;
  }
  
  .footer-left {
    min-width: auto;
    width: 100%;
    gap: 24px;
  }
  
  .tagline {
    font-size: 14px;
    line-height: 1.5;
  }
  
  .footer-columns {
    flex-direction: column;
    gap: 28px;
  }
  
  .footer-heading {
    font-size: 20px;
  }
  
  .footer-menu a {
    font-size: 14px;
  }
  
  .contact-link {
    font-size: 20px;
    line-height: 28px;
  }
  
  .social-badge {
    font-size: 14px;
    padding: 3px 10px;
  }
  
  .copyright {
    font-size: 14px;
  }
}

@media (max-width: 480px) {
  .footer-title {
    font-size: 28px;
    line-height: 28px;
  }
  
  .contact-link {
    font-size: 18px;
    line-height: 24px;
  }
  
  .footer-heading {
    font-size: 18px;
  }
  
  .copyright {
    font-size: 12px;
  }
}
</style>
