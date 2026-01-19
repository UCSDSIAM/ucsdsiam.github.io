<template>
  <nav class="navbar">
    <div class="navbar-inner">
      <div class="nav-left">
        <RouterLink to="/" class="brand" aria-label="SIAM UCSD home">
          <span class="logo">
            <Logo />
          </span>
          <span class="brand-text">
            <span class="brand-title">SIAM Student Chapter</span>
            <span class="brand-subtitle">at UC San Diego</span>
          </span>
        </RouterLink>

        <div class="nav-links-main">
          <NavLinks />
        </div>
      </div>

      <!-- Right side: theme toggle or menu button -->
      <div class="theme-toggle-main">
        <ThemeToggle />
      </div>
      <div class="menu-btn-wrap">
        <MenuBtn :isOpen="isMenuOpen" @toggle="isMenuOpen = !isMenuOpen" />
      </div>
    </div>
  </nav>

  <!-- Backdrop -->
  <div class="menu-backdrop" v-show="isMenuOpen" @click="isMenuOpen = false"></div>

  <!-- Sliding panel -->
  <div class="menu-panel-wrap" :class="{ open: isMenuOpen }">
    <MenuPanel />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import NavLinks from './NavLinks.vue'
import ThemeToggle from './ThemeToggle.vue'
import MenuBtn from './MenuBtn.vue'
import MenuPanel from './MenuPanel.vue'
import Logo from './Logo.vue'

const isMenuOpen = ref(false)
</script>

<style scoped>
.navbar {
  width: 100%;
  height: var(--nav-height);
  background: var(--bg-nav);
  display: flex;
  align-items: center;
  justify-content: center;
}

.navbar-inner {
  width: 100%;
  max-width: var(--container-max-width);
  height: 100%;
  margin: 0 auto;
  padding: 0 var(--nav-px);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
}

.nav-left {
  display: inline-flex;
  align-items: center;
  gap: 2rem;
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--logo);
  text-decoration: none;
}

.logo {
  display: inline-flex;
  perspective: 800px;
}

.logo :deep(svg) {
  transform-style: preserve-3d;
  transition: transform 600ms ease;
}

.logo:hover :deep(svg) {
  transform: rotateY(1turn);
}

.brand-text {
  display: inline-flex;
  flex-direction: column;
  font-family: var(--font-primary);
  letter-spacing: -0.01em;
}

.brand-title {
  font-size: 15px;
  font-weight: 600;
  color: var(--text-brand-title);
}

.brand-subtitle {
  font-size: 11px;
  font-weight: 500;
  color: var(--text-brand-sub);
}

.menu-btn-wrap,
.menu-backdrop,
.menu-panel-wrap {
  display: none;
}

@media (max-width: 1200px) {
  .nav-left {
    gap: 1.5rem;
  }

  .brand-text {
    display: none;
  }
}

@media (max-width: 900px) {
  .brand-text {
    display: inline-flex;
  }

  .nav-links-main,
  .theme-toggle-main {
    display: none;
  }

  .menu-btn-wrap {
    display: inline-flex;
    z-index: 20;
  }

  .menu-backdrop {
    display: block;
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.22);
    z-index: 10;
  }

  .menu-panel-wrap {
    position: fixed;
    top: var(--navbar-height);
    right: 0;
    display: flex;
    transform: translateX(100%);
    transition: transform 200ms ease;
    z-index: 20;
  }

  .menu-panel-wrap.open {
    transform: translateX(0);
  }
}

@media (max-width: 500px) {
  .brand {
    gap: 0.4rem;
  }

  .brand-title {
    font-size: 14px;
  }

  .brand-subtitle {
    font-size: 10px;
  }
}
</style>
