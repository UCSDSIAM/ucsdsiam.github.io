<template>
  <section class="not-found">
    <h1>404</h1>
    <p>Sorry, the page you're looking for doesn't exist.</p>
    <RouterLink to="/">Go back home</RouterLink>
  </section>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped>
.not-found {
  min-height: calc(100vh - var(--nav-height));
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 1.5rem;
}

.not-found h1 {
  font-size: 3rem;
  margin: 0;
}

.not-found p {
  color: var(--text-muted);
}

.not-found a {
  color: var(--text-nav);
  font-weight: 500;
  text-decoration: none;
  margin-top: 0.5rem;
}
</style>
