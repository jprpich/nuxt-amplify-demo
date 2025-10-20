<template>
  <div class="auth-page">
    <div class="auth-container">
      <div class="auth-card">
        <h1 class="auth-title">
          <span class="gradient-text">Welcome Back</span>
        </h1>
        <p class="auth-subtitle">Sign in to your account</p>

        <form @submit.prevent="handleLogin" class="auth-form">
          <div class="form-group">
            <label for="email">Email</label>
            <input
              id="email"
              v-model="email"
              type="email"
              placeholder="your@email.com"
              required
            />
          </div>

          <div class="form-group">
            <label for="password">Password</label>
            <input
              id="password"
              v-model="password"
              type="password"
              placeholder="Enter your password"
              required
            />
          </div>

          <div v-if="error" class="error-message">
            {{ error }}
          </div>

          <button type="submit" class="btn btn-primary" :disabled="loading">
            {{ loading ? 'Signing in...' : 'Sign In' }}
          </button>
        </form>

        <div class="auth-footer">
          <p>Don't have an account? <NuxtLink to="/signup">Sign up</NuxtLink></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { signIn } from 'aws-amplify/auth'

const email = ref('')
const password = ref('')
const loading = ref(false)
const error = ref('')

const handleLogin = async () => {
  try {
    loading.value = true
    error.value = ''
    
    await signIn({
      username: email.value,
      password: password.value,
    })
    
    // Redirect to home page after successful login
    navigateTo('/')
  } catch (err) {
    error.value = err.message || 'An error occurred during sign in'
    console.error('Login error:', err)
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
.auth-page {
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);
}

.auth-container {
  width: 100%;
  max-width: 450px;
}

.auth-card {
  background: white;
  padding: 3rem;
  border-radius: 20px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
}

.auth-title {
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 0.5rem;
}

.gradient-text {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.auth-subtitle {
  text-align: center;
  color: #666;
  font-size: 1.1rem;
  margin-bottom: 2rem;
}

.auth-form {
  margin-bottom: 1.5rem;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: #333;
}

.form-group input {
  width: 100%;
  padding: 0.875rem 1rem;
  border: 2px solid #e0e0e0;
  border-radius: 10px;
  font-size: 1rem;
  transition: all 0.3s ease;
}

.form-group input:focus {
  outline: none;
  border-color: #667eea;
  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
}

.error-message {
  padding: 1rem;
  background: #fee;
  border: 1px solid #fcc;
  border-radius: 10px;
  color: #c33;
  margin-bottom: 1rem;
  font-size: 0.9rem;
}

.btn {
  width: 100%;
  padding: 1rem 2rem;
  border-radius: 10px;
  font-size: 1.1rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  display: inline-block;
  cursor: pointer;
  border: none;
}

.btn-primary {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
}

.btn-primary:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4);
}

.btn-primary:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.auth-footer {
  text-align: center;
  padding-top: 1.5rem;
  border-top: 1px solid #e0e0e0;
}

.auth-footer p {
  color: #666;
}

.auth-footer a {
  color: #667eea;
  text-decoration: none;
  font-weight: 600;
}

.auth-footer a:hover {
  text-decoration: underline;
}

@media (max-width: 480px) {
  .auth-card {
    padding: 2rem 1.5rem;
  }

  .auth-title {
    font-size: 2rem;
  }
}
</style>

