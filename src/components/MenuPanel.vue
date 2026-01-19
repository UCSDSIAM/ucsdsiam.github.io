<template>
  <div class="menu-panel">
    <NavLinks variant="vertical" />
    <ThemeToggle />
  </div>
</template>

<script setup>
import ThemeToggle from './ThemeToggle.vue'
import NavLinks from './NavLinks.vue'
</script>

<style scoped>
.menu-panel {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  padding: 1.5rem 2rem;
}

.menu-panel {
  background: var(--bg-nav);
  box-shadow: -6px 0 16px rgba(0, 0, 0, 0.14);
}

[data-theme='dark'] .menu-panel {
  box-shadow: -6px 0 16px rgba(0, 0, 0, 0.38);
}
</style>
