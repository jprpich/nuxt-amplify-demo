<template>
  <div class="landing-page">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <h1 class="hero-title">
          <span class="gradient-text">Premium Products</span>
          <br />For Modern Living
        </h1>
        <p class="hero-subtitle">
          Discover our curated collection of high-quality products designed to elevate your lifestyle
        </p>
        <div class="hero-buttons">
          <NuxtLink to="/products" class="btn btn-primary">
            Shop Now
          </NuxtLink>
          <NuxtLink to="/about" class="btn btn-secondary">
            Learn More
          </NuxtLink>
        </div>
      </div>
      <div class="hero-visual">
        <div class="floating-card card-1">🎧</div>
        <div class="floating-card card-2">⌚</div>
        <div class="floating-card card-3">🎒</div>
        <div class="floating-card card-4">☕</div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="features">
      <h2 class="section-title">Why Choose Us</h2>
      <div class="features-grid">
        <div class="feature-card">
          <div class="feature-icon">🚚</div>
          <h3>Free Shipping</h3>
          <p>Free delivery on all orders over $50. Fast and reliable shipping worldwide.</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">🔒</div>
          <h3>Secure Payment</h3>
          <p>Your payment information is processed securely with industry-standard encryption.</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">↩️</div>
          <h3>Easy Returns</h3>
          <p>30-day return policy. If you're not satisfied, we'll make it right.</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">⭐</div>
          <h3>Premium Quality</h3>
          <p>Only the finest products from trusted brands. Quality guaranteed.</p>
        </div>
      </div>
    </section>

    <!-- Categories Section -->
    <section class="categories">
      <h2 class="section-title">Shop By Category</h2>
      <div class="categories-grid">
        <NuxtLink to="/products" class="category-card" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%)">
          <div class="category-icon">📱</div>
          <h3>Electronics</h3>
          <p>Latest tech gadgets</p>
        </NuxtLink>
        <NuxtLink to="/products" class="category-card" style="background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%)">
          <div class="category-icon">👔</div>
          <h3>Fashion</h3>
          <p>Style & trends</p>
        </NuxtLink>
        <NuxtLink to="/products" class="category-card" style="background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)">
          <div class="category-icon">🏠</div>
          <h3>Home</h3>
          <p>Living essentials</p>
        </NuxtLink>
        <NuxtLink to="/products" class="category-card" style="background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)">
          <div class="category-icon">⚽</div>
          <h3>Sports</h3>
          <p>Active lifestyle</p>
        </NuxtLink>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="stats">
      <div class="stats-grid">
        <div class="stat-card">
          <div class="stat-number">50K+</div>
          <div class="stat-label">Happy Customers</div>
        </div>
        <div class="stat-card">
          <div class="stat-number">1000+</div>
          <div class="stat-label">Products</div>
        </div>
        <div class="stat-card">
          <div class="stat-number">4.9★</div>
          <div class="stat-label">Average Rating</div>
        </div>
        <div class="stat-card">
          <div class="stat-number">24/7</div>
          <div class="stat-label">Customer Support</div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta">
      <div class="cta-content">
        <h2>Ready to Start Shopping?</h2>
        <p>Join thousands of satisfied customers and discover premium products today</p>
        <NuxtLink to="/products" class="btn btn-primary btn-large">
          Browse All Products
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup>
// You can add any dynamic data or functionality here
</script>

<style scoped>
.landing-page {
  width: 100%;
  overflow-x: hidden;
}

/* Hero Section */
.hero {
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4rem 2rem;
  max-width: 1400px;
  margin: 0 auto;
  gap: 4rem;
}

.hero-content {
  flex: 1;
  max-width: 600px;
}

.hero-title {
  font-size: 4rem;
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: 1.5rem;
  color: #1a1a1a;
}

.gradient-text {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-subtitle {
  font-size: 1.3rem;
  color: #666;
  line-height: 1.6;
  margin-bottom: 2.5rem;
}

.hero-buttons {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.btn {
  padding: 1rem 2.5rem;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  display: inline-block;
  cursor: pointer;
}

.btn-primary {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
}

.btn-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 25px rgba(102, 126, 234, 0.5);
}

.btn-secondary {
  background: white;
  color: #667eea;
  border: 2px solid #667eea;
}

.btn-secondary:hover {
  background: #667eea;
  color: white;
  transform: translateY(-3px);
}

.btn-large {
  padding: 1.2rem 3rem;
  font-size: 1.2rem;
}

.hero-visual {
  flex: 1;
  position: relative;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.floating-card {
  position: absolute;
  width: 120px;
  height: 120px;
  background: white;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
  animation: float 6s ease-in-out infinite;
}

.card-1 {
  top: 10%;
  left: 10%;
  animation-delay: 0s;
}

.card-2 {
  top: 15%;
  right: 15%;
  animation-delay: 1.5s;
}

.card-3 {
  bottom: 20%;
  left: 5%;
  animation-delay: 3s;
}

.card-4 {
  bottom: 15%;
  right: 10%;
  animation-delay: 4.5s;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-20px) rotate(5deg);
  }
}

/* Features Section */
.features {
  padding: 6rem 2rem;
  background: #f8f9fa;
}

.section-title {
  text-align: center;
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 3rem;
  color: #1a1a1a;
}

.features-grid {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.feature-card {
  background: white;
  padding: 2.5rem;
  border-radius: 20px;
  text-align: center;
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
}

.feature-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.1);
}

.feature-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.feature-card h3 {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  color: #1a1a1a;
}

.feature-card p {
  color: #666;
  line-height: 1.6;
}

/* Categories Section */
.categories {
  padding: 6rem 2rem;
  max-width: 1400px;
  margin: 0 auto;
}

.categories-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

.category-card {
  padding: 3rem 2rem;
  border-radius: 20px;
  text-align: center;
  color: white;
  text-decoration: none;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.category-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0);
  transition: all 0.3s ease;
}

.category-card:hover::before {
  background: rgba(0, 0, 0, 0.1);
}

.category-card:hover {
  transform: translateY(-10px) scale(1.02);
  box-shadow: 0 15px 50px rgba(0, 0, 0, 0.2);
}

.category-icon {
  font-size: 4rem;
  margin-bottom: 1rem;
  position: relative;
  z-index: 1;
}

.category-card h3 {
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  position: relative;
  z-index: 1;
}

.category-card p {
  font-size: 1.1rem;
  opacity: 0.9;
  position: relative;
  z-index: 1;
}

/* Stats Section */
.stats {
  padding: 6rem 2rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.stats-grid {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 3rem;
}

.stat-card {
  text-align: center;
}

.stat-number {
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 0.5rem;
}

.stat-label {
  font-size: 1.1rem;
  opacity: 0.9;
}

/* CTA Section */
.cta {
  padding: 6rem 2rem;
  background: #f8f9fa;
}

.cta-content {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

.cta-content h2 {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #1a1a1a;
}

.cta-content p {
  font-size: 1.3rem;
  color: #666;
  margin-bottom: 2.5rem;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .hero {
    flex-direction: column;
    min-height: auto;
    padding: 3rem 1.5rem;
  }

  .hero-visual {
    height: 400px;
    width: 100%;
  }

  .hero-title {
    font-size: 3rem;
  }
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }

  .hero-subtitle {
    font-size: 1.1rem;
  }

  .section-title {
    font-size: 2rem;
  }

  .hero-visual {
    height: 300px;
  }

  .floating-card {
    width: 80px;
    height: 80px;
    font-size: 2rem;
  }

  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }

  .stat-number {
    font-size: 2.5rem;
  }

  .cta-content h2 {
    font-size: 2rem;
  }

  .cta-content p {
    font-size: 1.1rem;
  }

  .btn {
    padding: 0.9rem 2rem;
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .hero {
    padding: 2rem 1rem;
  }

  .hero-title {
    font-size: 2rem;
  }

  .features,
  .categories,
  .stats,
  .cta {
    padding: 3rem 1rem;
  }

  .categories-grid {
    grid-template-columns: 1fr;
  }
}
</style>
