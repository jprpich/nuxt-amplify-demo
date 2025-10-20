<template>
  <div class="products-container">
    <header class="products-header">
      <h1>Our Products</h1>
      <p class="subtitle">Discover our curated collection of premium items</p>
    </header>

    <div class="filters">
      <button 
        v-for="category in categories" 
        :key="category"
        :class="['filter-btn', { active: selectedCategory === category }]"
        @click="selectedCategory = category"
      >
        {{ category }}
      </button>
    </div>

    <div class="products-grid">
      <div 
        v-for="product in filteredProducts" 
        :key="product.id"
        class="product-card"
      >
        <div class="product-image">
          <div class="image-placeholder" :style="{ background: product.color }">
            <span class="product-icon">{{ product.icon }}</span>
          </div>
          <span class="product-badge">{{ product.badge }}</span>
        </div>
        <div class="product-info">
          <h3>{{ product.name }}</h3>
          <p class="product-description">{{ product.description }}</p>
          <div class="product-footer">
            <span class="product-price">${{ product.price }}</span>
            <button class="add-to-cart-btn">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const selectedCategory = ref('All')

const categories = ['All', 'Electronics', 'Fashion', 'Home', 'Sports']

const products = [
  {
    id: 1,
    name: 'Wireless Headphones',
    description: 'Premium noise-cancelling headphones with 30hr battery life',
    price: 299,
    category: 'Electronics',
    badge: 'Best Seller',
    color: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    icon: '🎧'
  },
  {
    id: 2,
    name: 'Smart Watch Pro',
    description: 'Advanced fitness tracking with heart rate monitor',
    price: 399,
    category: 'Electronics',
    badge: 'New',
    color: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    icon: '⌚'
  },
  {
    id: 3,
    name: 'Designer Backpack',
    description: 'Stylish and durable backpack with laptop compartment',
    price: 129,
    category: 'Fashion',
    badge: 'Trending',
    color: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    icon: '🎒'
  },
  {
    id: 4,
    name: 'Leather Jacket',
    description: 'Premium quality genuine leather jacket',
    price: 459,
    category: 'Fashion',
    badge: 'Premium',
    color: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    icon: '🧥'
  },
  {
    id: 5,
    name: 'Smart Coffee Maker',
    description: 'WiFi enabled coffee maker with app control',
    price: 179,
    category: 'Home',
    badge: 'Hot',
    color: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    icon: '☕'
  },
  {
    id: 6,
    name: 'Yoga Mat Pro',
    description: 'Extra thick non-slip yoga mat with carrying strap',
    price: 49,
    category: 'Sports',
    badge: 'Popular',
    color: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
    icon: '🧘'
  },
  {
    id: 7,
    name: 'LED Desk Lamp',
    description: 'Adjustable brightness with USB charging port',
    price: 79,
    category: 'Home',
    badge: 'Eco',
    color: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
    icon: '💡'
  },
  {
    id: 8,
    name: 'Running Shoes Elite',
    description: 'Lightweight running shoes with advanced cushioning',
    price: 159,
    category: 'Sports',
    badge: 'Best Seller',
    color: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)',
    icon: '👟'
  },
  {
    id: 9,
    name: '4K Webcam',
    description: 'Ultra HD webcam with auto-focus and noise reduction',
    price: 149,
    category: 'Electronics',
    badge: 'New',
    color: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
    icon: '📹'
  }
]

const filteredProducts = computed(() => {
  if (selectedCategory.value === 'All') {
    return products
  }
  return products.filter(p => p.category === selectedCategory.value)
})
</script>

<style scoped>
.products-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 3rem 2rem;
}

.products-header {
  text-align: center;
  margin-bottom: 3rem;
}

.products-header h1 {
  font-size: 3rem;
  font-weight: 700;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 0.5rem;
}

.subtitle {
  font-size: 1.2rem;
  color: #666;
}

.filters {
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-bottom: 3rem;
  flex-wrap: wrap;
}

.filter-btn {
  padding: 0.75rem 1.5rem;
  border: 2px solid #e0e0e0;
  background: white;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}

.filter-btn:hover {
  border-color: #667eea;
  color: #667eea;
  transform: translateY(-2px);
}

.filter-btn.active {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-color: transparent;
  color: white;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 2rem;
}

.product-card {
  background: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  cursor: pointer;
}

.product-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
}

.product-image {
  position: relative;
  height: 250px;
  overflow: hidden;
}

.image-placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;
}

.product-card:hover .image-placeholder {
  transform: scale(1.05);
}

.product-icon {
  font-size: 5rem;
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2));
}

.product-badge {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: rgba(255, 255, 255, 0.95);
  padding: 0.5rem 1rem;
  border-radius: 50px;
  font-size: 0.85rem;
  font-weight: 600;
  color: #667eea;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.product-info {
  padding: 1.5rem;
}

.product-info h3 {
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #333;
}

.product-description {
  color: #666;
  font-size: 0.95rem;
  line-height: 1.5;
  margin-bottom: 1.5rem;
  min-height: 3rem;
}

.product-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.product-price {
  font-size: 1.8rem;
  font-weight: 700;
  color: #667eea;
}

.add-to-cart-btn {
  padding: 0.75rem 1.5rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 50px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.add-to-cart-btn:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
}

.add-to-cart-btn:active {
  transform: scale(0.98);
}

@media (max-width: 768px) {
  .products-header h1 {
    font-size: 2rem;
  }
  
  .products-grid {
    grid-template-columns: 1fr;
  }
  
  .filters {
    gap: 0.5rem;
  }
  
  .filter-btn {
    padding: 0.6rem 1.2rem;
    font-size: 0.9rem;
  }
}
</style>

