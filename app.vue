<template>
  <div class="app-wrapper">
    <nav class="navbar">
      <div class="nav-container">
        <NuxtLink to="/" class="logo">
          <span class="logo-icon">🛍️</span>
          <span class="logo-text">ShopHub</span>
        </NuxtLink>
        
        <button class="mobile-menu-btn" @click="mobileMenuOpen = !mobileMenuOpen">
          <span v-if="!mobileMenuOpen">☰</span>
          <span v-else>✕</span>
        </button>

        <div class="nav-links" :class="{ 'mobile-open': mobileMenuOpen }">
          <NuxtLink to="/" class="nav-link" @click="mobileMenuOpen = false">
            Home
          </NuxtLink>
          <NuxtLink to="/products" class="nav-link" @click="mobileMenuOpen = false">
            Products
          </NuxtLink>
          <NuxtLink to="/about" class="nav-link" @click="mobileMenuOpen = false">
            About
          </NuxtLink>
          <button class="cart-btn">
            <span class="cart-text">Cart</span>
            <span class="cart-count">0</span>
          </button>
        </div>
      </div>
    </nav>

    <main class="main-content">
      <NuxtPage />
    </main>

    <footer class="footer">
      <div class="footer-container">
        <div class="footer-grid">
          <div class="footer-column">
            <h3>ShopHub</h3>
            <p>Your destination for premium products and exceptional service.</p>
            <div class="social-links">
              <a href="#" class="social-link">📘</a>
              <a href="#" class="social-link">🐦</a>
              <a href="#" class="social-link">📷</a>
              <a href="#" class="social-link">💼</a>
            </div>
          </div>
          
          <div class="footer-column">
            <h4>Quick Links</h4>
            <NuxtLink to="/" class="footer-link">Home</NuxtLink>
            <NuxtLink to="/products" class="footer-link">Products</NuxtLink>
            <NuxtLink to="/about" class="footer-link">About Us</NuxtLink>
            <a href="#" class="footer-link">Contact</a>
          </div>
          
          <div class="footer-column">
            <h4>Customer Service</h4>
            <a href="#" class="footer-link">Shipping Info</a>
            <a href="#" class="footer-link">Returns</a>
            <a href="#" class="footer-link">FAQ</a>
            <a href="#" class="footer-link">Support</a>
          </div>
          
          <div class="footer-column">
            <h4>Newsletter</h4>
            <p>Subscribe for exclusive offers and updates</p>
            <div class="newsletter-form">
              <input type="email" placeholder="Your email" class="newsletter-input">
              <button class="newsletter-btn">→</button>
            </div>
          </div>
        </div>
        
        <div class="footer-bottom">
          <p>&copy; 2025 ShopHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const mobileMenuOpen = ref(false)

// Proper way to access environment variables in Nuxt
const config = useRuntimeConfig()
console.log('Env variable:', config.public.test)
</script>

<style>
/* Global styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  color-scheme: light;
  background: #fff;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  line-height: 1.6;
  color: #333;
  background: #fff;
}

.app-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: #fff;
}

/* Navbar Styles */
.navbar {
  background: white;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
  padding: 1rem 0;
}

.nav-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 700;
  color: #1a1a1a;
  transition: all 0.3s ease;
}

.logo:hover {
  transform: scale(1.05);
}

.logo-icon {
  font-size: 2rem;
}

.logo-text {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.mobile-menu-btn {
  display: none;
  background: none;
  border: none;
  font-size: 1.8rem;
  cursor: pointer;
  color: #333;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.nav-link {
  text-decoration: none;
  color: #333;
  font-weight: 500;
  font-size: 1.05rem;
  transition: all 0.3s ease;
  position: relative;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 0;
  height: 2px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  transition: width 0.3s ease;
}

.nav-link:hover {
  color: #667eea;
}

.nav-link:hover::after {
  width: 100%;
}

.nav-link.router-link-active {
  color: #667eea;
}

.nav-link.router-link-active::after {
  width: 100%;
}

.cart-btn {
  position: relative;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  padding: 0.6rem 1.2rem;
  border-radius: 50px;
  cursor: pointer;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
  font-size: 0.95rem;
}

.cart-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4);
}

.cart-text {
  font-size: 1rem;
  letter-spacing: 0.3px;
}

.cart-count {
  background: white;
  color: #667eea;
  padding: 0.15rem 0.5rem;
  border-radius: 50px;
  font-size: 0.8rem;
  font-weight: 700;
  min-width: 20px;
  text-align: center;
}

/* Main Content */
.main-content {
  flex: 1;
}

/* Footer Styles */
.footer {
  background: #1a1a1a;
  color: white;
  padding: 4rem 0 2rem;
  margin-top: 4rem;
}

.footer-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
}

.footer-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem;
  margin-bottom: 3rem;
}

.footer-column h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.footer-column h4 {
  font-size: 1.2rem;
  margin-bottom: 1rem;
  color: white;
}

.footer-column p {
  color: #999;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.social-links {
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
}

.social-link {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  text-decoration: none;
  font-size: 1.3rem;
  transition: all 0.3s ease;
}

.social-link:hover {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  transform: translateY(-3px);
}

.footer-link {
  display: block;
  color: #999;
  text-decoration: none;
  margin-bottom: 0.75rem;
  transition: all 0.3s ease;
}

.footer-link:hover {
  color: white;
  padding-left: 5px;
}

.newsletter-form {
  display: flex;
  gap: 0.5rem;
  margin-top: 1rem;
}

.newsletter-input {
  flex: 1;
  padding: 0.75rem 1rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: rgba(255, 255, 255, 0.1);
  color: white;
  border-radius: 50px;
  outline: none;
  transition: all 0.3s ease;
}

.newsletter-input::placeholder {
  color: #999;
}

.newsletter-input:focus {
  border-color: #667eea;
  background: rgba(255, 255, 255, 0.15);
}

.newsletter-btn {
  width: 45px;
  height: 45px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border: none;
  border-radius: 50%;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.newsletter-btn:hover {
  transform: scale(1.1);
}

.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 2rem;
  text-align: center;
  color: #999;
}

/* Mobile Styles */
@media (max-width: 768px) {
  .mobile-menu-btn {
    display: block;
  }

  .nav-links {
    position: fixed;
    top: 70px;
    right: -100%;
    width: 70%;
    max-width: 300px;
    height: calc(100vh - 70px);
    background: white;
    flex-direction: column;
    align-items: flex-start;
    padding: 2rem;
    box-shadow: -2px 0 20px rgba(0, 0, 0, 0.1);
    transition: right 0.3s ease;
  }

  .nav-links.mobile-open {
    right: 0;
  }

  .nav-link {
    width: 100%;
    padding: 1rem 0;
    border-bottom: 1px solid #f0f0f0;
  }

  .cart-btn {
    width: 100%;
    justify-content: center;
    margin-top: 1rem;
  }

  .footer-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}

@media (max-width: 480px) {
  .nav-container {
    padding: 0 1rem;
  }

  .logo {
    font-size: 1.2rem;
  }

  .logo-icon {
    font-size: 1.5rem;
  }

  .footer {
    padding: 3rem 0 1.5rem;
  }

  .footer-container {
    padding: 0 1rem;
  }
}
</style>

