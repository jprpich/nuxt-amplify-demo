<template>
  <div class="about-page">
    <!-- Hero Section -->
    <section class="about-hero">
      <div class="about-hero-content">
        <h1 class="about-title">
          <span class="gradient-text">Our Story</span>
        </h1>
        <p class="about-subtitle">
          Building the future of online shopping with quality, innovation, and customer satisfaction at our core
        </p>
      </div>
    </section>

    <!-- Mission Section -->
    <section class="mission">
      <div class="mission-container">
        <div class="mission-content">
          <h2>Our Mission</h2>
          <p class="large-text">
            We believe that shopping should be an experience, not just a transaction. Our mission is to curate 
            the finest products and deliver them with exceptional service that exceeds expectations.
          </p>
          <p>
            Founded in 2020, we've grown from a small startup to a trusted destination for premium products. 
            Every item in our collection is carefully selected to ensure it meets our high standards for 
            quality, design, and value.
          </p>
        </div>
        <div class="mission-visual">
          <div class="visual-card card-large">
            <div class="visual-icon">🎯</div>
            <h3>Our Vision</h3>
            <p>To be the world's most customer-centric online store</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Values Section -->
    <section class="values">
      <h2 class="section-title">Our Core Values</h2>
      <div class="values-grid">
        <div class="value-card">
          <div class="value-icon">💎</div>
          <h3>Quality First</h3>
          <p>We never compromise on quality. Every product is tested and verified before reaching our customers.</p>
        </div>
        <div class="value-card">
          <div class="value-icon">🤝</div>
          <h3>Customer Focus</h3>
          <p>Your satisfaction is our priority. We listen, adapt, and continuously improve based on your feedback.</p>
        </div>
        <div class="value-card">
          <div class="value-icon">🌱</div>
          <h3>Sustainability</h3>
          <p>We're committed to sustainable practices and partnering with eco-conscious brands.</p>
        </div>
        <div class="value-card">
          <div class="value-icon">⚡</div>
          <h3>Innovation</h3>
          <p>We embrace technology and innovation to provide the best shopping experience possible.</p>
        </div>
        <div class="value-card">
          <div class="value-icon">🌍</div>
          <h3>Global Reach</h3>
          <p>Serving customers worldwide with fast, reliable shipping to over 100 countries.</p>
        </div>
        <div class="value-card">
          <div class="value-icon">❤️</div>
          <h3>Passion</h3>
          <p>We love what we do, and it shows in every interaction and every product we offer.</p>
        </div>
      </div>
    </section>

    <!-- Team Section -->
    <section class="team">
      <h2 class="section-title">Meet Our Team</h2>
      <p class="team-intro">The passionate people behind our success</p>
      <div class="team-grid">
        <div class="team-card">
          <div class="team-avatar" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%)">
            <span>👨‍💼</span>
          </div>
          <h3>John Anderson</h3>
          <p class="team-role">Founder & CEO</p>
          <p class="team-bio">Visionary leader with 15+ years in e-commerce and retail innovation.</p>
        </div>
        <div class="team-card">
          <div class="team-avatar" style="background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%)">
            <span>👩‍💼</span>
          </div>
          <h3>Sarah Chen</h3>
          <p class="team-role">Head of Product</p>
          <p class="team-bio">Product expert dedicated to curating the perfect collection for our customers.</p>
        </div>
        <div class="team-card">
          <div class="team-avatar" style="background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)">
            <span>👨‍💻</span>
          </div>
          <h3>Michael Torres</h3>
          <p class="team-role">CTO</p>
          <p class="team-bio">Tech innovator building seamless shopping experiences through cutting-edge solutions.</p>
        </div>
        <div class="team-card">
          <div class="team-avatar" style="background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)">
            <span>👩‍🎨</span>
          </div>
          <h3>Emily Rodriguez</h3>
          <p class="team-role">Creative Director</p>
          <p class="team-bio">Design enthusiast crafting beautiful and intuitive user experiences.</p>
        </div>
      </div>
    </section>

    <!-- Milestones Section -->
    <section class="milestones">
      <h2 class="section-title">Our Journey</h2>
      <div class="timeline">
        <div class="timeline-item">
          <div class="timeline-dot"></div>
          <div class="timeline-content">
            <h3>2020</h3>
            <h4>The Beginning</h4>
            <p>Started with a vision to revolutionize online shopping</p>
          </div>
        </div>
        <div class="timeline-item">
          <div class="timeline-dot"></div>
          <div class="timeline-content">
            <h3>2021</h3>
            <h4>Rapid Growth</h4>
            <p>Reached 10,000 happy customers and expanded product range</p>
          </div>
        </div>
        <div class="timeline-item">
          <div class="timeline-dot"></div>
          <div class="timeline-content">
            <h3>2023</h3>
            <h4>Going Global</h4>
            <p>Launched international shipping to 100+ countries</p>
          </div>
        </div>
        <div class="timeline-item">
          <div class="timeline-dot"></div>
          <div class="timeline-content">
            <h3>2025</h3>
            <h4>Innovation Leader</h4>
            <p>50K+ customers and recognized as a top e-commerce platform</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="about-cta">
      <div class="about-cta-content">
        <h2>Join Our Journey</h2>
        <p>Experience the difference of shopping with a company that truly cares</p>
        <NuxtLink to="/products" class="btn btn-primary btn-large">
          Start Shopping
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup>
// You can add any dynamic data or functionality here
</script>

<style scoped>
.about-page {
  width: 100%;
}

/* Hero Section */
.about-hero {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 8rem 2rem 6rem;
  text-align: center;
}

.about-hero-content {
  max-width: 900px;
  margin: 0 auto;
}

.about-title {
  font-size: 4rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
}

.gradient-text {
  color: white;
}

.about-subtitle {
  font-size: 1.4rem;
  line-height: 1.6;
  opacity: 0.95;
}

/* Mission Section */
.mission {
  padding: 6rem 2rem;
  background: white;
}

.mission-container {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.mission-content h2 {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: #1a1a1a;
}

.large-text {
  font-size: 1.3rem;
  line-height: 1.8;
  color: #333;
  margin-bottom: 1.5rem;
  font-weight: 500;
}

.mission-content p {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #666;
}

.mission-visual {
  display: flex;
  justify-content: center;
  align-items: center;
}

.visual-card {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 3rem;
  border-radius: 30px;
  text-align: center;
  box-shadow: 0 20px 60px rgba(102, 126, 234, 0.3);
  transform: rotate(-5deg);
  transition: all 0.3s ease;
}

.visual-card:hover {
  transform: rotate(0deg) scale(1.05);
}

.visual-icon {
  font-size: 5rem;
  margin-bottom: 1rem;
}

.visual-card h3 {
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.visual-card p {
  font-size: 1.1rem;
  opacity: 0.9;
}

/* Values Section */
.values {
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

.values-grid {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
}

.value-card {
  background: white;
  padding: 2.5rem;
  border-radius: 20px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
}

.value-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.1);
}

.value-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.value-card h3 {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  color: #1a1a1a;
}

.value-card p {
  color: #666;
  line-height: 1.6;
  font-size: 1.05rem;
}

/* Team Section */
.team {
  padding: 6rem 2rem;
  background: white;
  max-width: 1400px;
  margin: 0 auto;
}

.team-intro {
  text-align: center;
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 3rem;
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2.5rem;
  margin-top: 3rem;
}

.team-card {
  text-align: center;
  padding: 2rem;
  background: white;
  border-radius: 20px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
}

.team-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
}

.team-avatar {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin: 0 auto 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
}

.team-card h3 {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #1a1a1a;
}

.team-role {
  font-size: 1.1rem;
  color: #667eea;
  font-weight: 600;
  margin-bottom: 1rem;
}

.team-bio {
  color: #666;
  line-height: 1.6;
  font-size: 1rem;
}

/* Milestones Section */
.milestones {
  padding: 6rem 2rem;
  background: #f8f9fa;
}

.timeline {
  max-width: 900px;
  margin: 3rem auto 0;
  position: relative;
  padding-left: 3rem;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 3px;
  background: linear-gradient(180deg, #667eea 0%, #764ba2 100%);
}

.timeline-item {
  position: relative;
  margin-bottom: 3rem;
  padding-left: 2rem;
}

.timeline-dot {
  position: absolute;
  left: -3rem;
  top: 0;
  width: 20px;
  height: 20px;
  background: white;
  border: 4px solid #667eea;
  border-radius: 50%;
  box-shadow: 0 0 0 4px #f8f9fa;
}

.timeline-content h3 {
  font-size: 1.8rem;
  font-weight: 700;
  color: #667eea;
  margin-bottom: 0.5rem;
}

.timeline-content h4 {
  font-size: 1.3rem;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 0.5rem;
}

.timeline-content p {
  color: #666;
  line-height: 1.6;
  font-size: 1.05rem;
}

/* CTA Section */
.about-cta {
  padding: 6rem 2rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.about-cta-content {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

.about-cta-content h2 {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.about-cta-content p {
  font-size: 1.3rem;
  margin-bottom: 2.5rem;
  opacity: 0.95;
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
  background: white;
  color: #667eea;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.btn-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 25px rgba(0, 0, 0, 0.3);
}

.btn-large {
  padding: 1.2rem 3rem;
  font-size: 1.2rem;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .mission-container {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  .visual-card {
    transform: rotate(0deg);
  }
}

@media (max-width: 768px) {
  .about-title {
    font-size: 2.5rem;
  }

  .about-subtitle {
    font-size: 1.1rem;
  }

  .mission-content h2 {
    font-size: 2rem;
  }

  .large-text {
    font-size: 1.1rem;
  }

  .section-title {
    font-size: 2rem;
  }

  .team-grid {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }

  .about-cta-content h2 {
    font-size: 2rem;
  }

  .about-cta-content p {
    font-size: 1.1rem;
  }

  .timeline {
    padding-left: 2rem;
  }

  .timeline-dot {
    left: -2.5rem;
  }
}

@media (max-width: 480px) {
  .about-hero {
    padding: 5rem 1rem 4rem;
  }

  .about-title {
    font-size: 2rem;
  }

  .mission,
  .values,
  .team,
  .milestones,
  .about-cta {
    padding: 3rem 1rem;
  }

  .values-grid,
  .team-grid {
    grid-template-columns: 1fr;
  }

  .team-avatar {
    width: 120px;
    height: 120px;
    font-size: 3rem;
  }
}
</style>
