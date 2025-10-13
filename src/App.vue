<template>
  <div class="app">
    <Header />
    <Hero />
    <WhyChooseUs />
    <Carousel />
    <WhyChooseDetails />
    <Products />
    <ContactForm />
    <Footer />
  </div>
</template>

<script setup>
import Header from './components/Header.vue'
import Hero from './components/Hero.vue'
import Carousel from './components/Carousel.vue'
import WhyChooseUs from './components/WhyChooseUs.vue'
import WhyChooseDetails from './components/WhyChooseDetails.vue'
import Products from './components/Products.vue'
import ContactForm from './components/ContactForm.vue'
import Footer from './components/Footer.vue'
</script>

<style scoped>
.app {
  width: 100%;
  overflow-x: hidden;
}
</style>
