<template>
  <section class="contact-form">
    <div class="container">
      <div class="form-wrapper">
        <div class="left-section">
          <div class="section-header">
            <div class="badge">Contact us</div>
            <h2 class="section-title">Ready to Order ?</h2>
            <p class="section-description">
              Get competitive pricing for premium sea bass fingerlings. We provide complete 
              export documentation and reliable shipping to your farm.
            </p>
          </div>
          
          <div class="contact-info">
            <div class="contact-item">
              <div class="icon-wrapper">
                <svg class="icon" viewBox="0 0 40 40" fill="none" stroke="currentColor">
                  <path d="M36 25.33v5a3.33 3.33 0 01-3.63 3.34 32.98 32.98 0 01-14.38-5.12 32.5 32.5 0 01-10-10A32.98 32.98 0 012.87 4.17 3.33 3.33 0 016.2.54h5a3.33 3.33 0 013.33 2.87c.21 1.58.6 3.13 1.17 4.68a3.33 3.33 0 01-.75 3.52l-2.12 2.12a26.67 26.67 0 0010 10l2.12-2.12a3.33 3.33 0 013.52-.75 21.4 21.4 0 004.68 1.17A3.33 3.33 0 0136 25.33z" stroke-width="2"/>
                </svg>
              </div>
              <div class="contact-content">
                <span class="contact-label">Have Question?</span>
                <span class="contact-value">+66 (0) 2-xxx-xxxx</span>
              </div>
            </div>
            
            <div class="contact-item">
              <div class="icon-wrapper">
                <svg class="icon" viewBox="0 0 40 40" fill="none" stroke="currentColor">
                  <path d="M6.67 6.67h26.66a3.33 3.33 0 013.34 3.33v20a3.33 3.33 0 01-3.34 3.33H6.67A3.33 3.33 0 013.33 30V10a3.33 3.33 0 013.34-3.33z" stroke-width="2"/>
                  <path d="M36.67 10L20 21.67 3.33 10" stroke-width="2"/>
                </svg>
              </div>
              <div class="contact-content">
                <span class="contact-label">Writen email</span>
                <span class="contact-value">export@thaiSeabass.com</span>
              </div>
            </div>
            
            <div class="contact-item">
              <div class="icon-wrapper">
                <svg class="icon" viewBox="0 0 40 40" fill="none" stroke="currentColor">
                  <path d="M35 16.67c0 11.66-15 21.66-15 21.66S5 28.33 5 16.67a15 15 0 1130 0z" stroke-width="2"/>
                  <circle cx="20" cy="16.67" r="5" stroke-width="2"/>
                </svg>
              </div>
              <div class="contact-content">
                <span class="contact-label">Our Location</span>
                <span class="contact-value">Licensed Hatchery, Thailand</span>
              </div>
            </div>
            
            <div class="contact-item">
              <div class="icon-wrapper">
                <svg class="icon" viewBox="0 0 40 40" fill="none" stroke="currentColor">
                  <circle cx="20" cy="20" r="16.67" stroke-width="2"/>
                  <path d="M20 10v10l6.67 3.33" stroke-width="2"/>
                </svg>
              </div>
              <div class="contact-content">
                <span class="contact-label">Online Support</span>
                <span class="contact-value">24 hr Delivery Service</span>
              </div>
            </div>
          </div>
        </div>
        
        <div class="right-section">
          <form class="form" @submit.prevent="handleSubmit">
            <div class="form-row">
              <div class="form-group">
                <label class="form-label">Company Name *</label>
                <input 
                  type="text" 
                  class="form-input" 
                  placeholder="Your aquaculture farm name"
                  v-model="formData.companyName"
                  required
                />
              </div>
              <div class="form-group">
                <label class="form-label">Country</label>
                <select class="form-select" v-model="formData.country" required>
                  <option value="">Select your country</option>
                  <option value="thailand">Thailand</option>
                  <option value="vietnam">Vietnam</option>
                  <option value="malaysia">Malaysia</option>
                  <option value="indonesia">Indonesia</option>
                </select>
              </div>
            </div>
            
            <div class="form-row">
              <div class="form-group">
                <label class="form-label">Required Quantity *</label>
                <input 
                  type="number" 
                  class="form-input" 
                  placeholder="Number of fry needed"
                  v-model="formData.quantity"
                  required
                />
              </div>
              <div class="form-group">
                <label class="form-label">Preferred Size</label>
                <select class="form-select" v-model="formData.size" required>
                  <option value="">Select size</option>
                  <option value="1-1.5cm">1-1.5 cm (Standard)</option>
                  <option value="1.5-2inch">1.5-2 inch (Premium)</option>
                </select>
              </div>
            </div>
            
            <div class="form-group full-width">
              <label class="form-label">Contact Email *</label>
              <input 
                type="email" 
                class="form-input" 
                placeholder="Your@email.com"
                v-model="formData.email"
                required
              />
            </div>
            
            <div class="form-group full-width">
              <label class="form-label">Additional Requirements *</label>
              <textarea 
                class="form-textarea" 
                placeholder="Delivery timeline, special requirements, etc."
                v-model="formData.requirements"
                rows="5"
                required
              ></textarea>
            </div>
            
            <button type="submit" class="submit-button">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const formData = ref({
  companyName: '',
  country: '',
  quantity: '',
  size: '',
  email: '',
  requirements: ''
})

const handleSubmit = () => {
  console.log('Form submitted:', formData.value)
  alert('Thank you! We will contact you soon.')
}
</script>

<style scoped>
.contact-form {
  background: #f8f8f8;
  padding: 60px 0;
}

.container {
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 120px;
}

.form-wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  background: white;
  border-radius: 16px;
  overflow: hidden;
}

.left-section {
  padding: 100px 60px;
}

.section-header {
  margin-bottom: 40px;
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
  font-size: 48px;
  font-weight: 700;
  line-height: 1.2;
  color: #17255C;
  margin: 0 0 16px;
}

.section-description {
  font-size: 16px;
  line-height: 1.6;
  color: #666;
  margin: 0;
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.contact-item {
  display: flex;
  gap: 16px;
  align-items: flex-start;
}

.icon-wrapper {
  width: 40px;
  height: 40px;
  flex-shrink: 0;
}

.icon {
  width: 100%;
  height: 100%;
  color: #dc143c;
}

.contact-content {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.contact-label {
  font-size: 14px;
  color: #666;
}

.contact-value {
  font-size: 18px;
  font-weight: 600;
  color: #17255C;
}

.right-section {
  background: #f8f8f8;
  padding: 100px 40px;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.form-row {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.form-group.full-width {
  grid-column: 1 / -1;
}

.form-label {
  font-size: 14px;
  color: #17255C;
  font-weight: 500;
}

.form-input,
.form-select,
.form-textarea {
  padding: 12px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  font-size: 16px;
  font-family: inherit;
  background: white;
  transition: border-color 0.3s;
}

.form-input:focus,
.form-select:focus,
.form-textarea:focus {
  outline: none;
  border-color: #dc143c;
}

.form-textarea {
  resize: vertical;
  min-height: 120px;
}

.submit-button {
  padding: 12px 24px;
  background: #dc143c;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.3s;
  align-self: flex-start;
}

.submit-button:hover {
  background: #b81030;
}

@media (max-width: 1024px) {
  .form-wrapper {
    grid-template-columns: 1fr;
  }
  
  .container {
    padding: 0 24px;
  }
  
  .left-section,
  .right-section {
    padding: 60px 40px;
  }
}

@media (max-width: 768px) {
  .contact-form {
    padding: 40px 0;
  }
  
  .container {
    padding: 0 16px;
  }
  
  .form-wrapper {
    border-radius: 12px;
  }
  
  .left-section,
  .right-section {
    padding: 32px 24px;
  }
  
  .section-header {
    margin-bottom: 28px;
  }
  
  .section-title {
    font-size: 28px;
  }
  
  .section-description {
    font-size: 14px;
  }
  
  .badge {
    font-size: 12px;
    padding: 3px 10px;
  }
  
  .contact-info {
    gap: 20px;
  }
  
  .icon-wrapper {
    width: 36px;
    height: 36px;
  }
  
  .contact-label {
    font-size: 12px;
  }
  
  .contact-value {
    font-size: 16px;
  }
  
  .form-row {
    grid-template-columns: 1fr;
    gap: 16px;
  }
  
  .form {
    gap: 20px;
  }
  
  .form-label {
    font-size: 13px;
  }
  
  .form-input,
  .form-select,
  .form-textarea {
    padding: 10px;
    font-size: 14px;
  }
  
  .form-textarea {
    min-height: 100px;
  }
  
  .submit-button {
    width: 100%;
    padding: 12px;
    font-size: 15px;
  }
}

@media (max-width: 480px) {
  .section-title {
    font-size: 24px;
  }
  
  .contact-value {
    font-size: 14px;
  }
}
</style>
