<template>
  <button class="theme-toggle" type="button" @click="onToggleTheme" aria-label="Toggle theme">
    <svg class="theme-icon sun" viewBox="0 0 24 24" aria-hidden="true">
      <path :d="mdiWhiteBalanceSunny" />
    </svg>
    <svg class="theme-icon moon" viewBox="0 0 24 24" aria-hidden="true">
      <path :d="mdiMoonWaningCrescent" />
    </svg>
    <span class="toggle-thumb"></span>
  </button>
</template>

<script setup>
import { ref } from 'vue'
import { mdiWhiteBalanceSunny, mdiMoonWaningCrescent } from '@mdi/js'
import { toggleTheme, getCurrentTheme } from '@/theme'

const isDark = ref(getCurrentTheme() === 'dark')

function onToggleTheme() {
  toggleTheme()
  isDark.value = getCurrentTheme() === 'dark'
}
</script>

<style scoped>
.theme-toggle {
  width: 50px;
  height: 26px;
  flex-shrink: 0;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 5px 0 7px;
  background: none;
  border: 1.5px solid var(--text-nav);
  border-radius: 999px;
  color: var(--text-nav);
  cursor: pointer;
}

.theme-icon {
  width: 14px;
  height: 14px;
  fill: var(--text-nav);
  transition: opacity 200ms ease;
}

.toggle-thumb {
  width: 20px;
  height: 20px;
  position: absolute;
  left: 2px;
  top: 50%;
  transform: translateY(-50%);
  background-color: var(--text-nav);
  border-radius: 50%;
  transition: transform 200ms ease;
  z-index: 10;
}

[data-theme='dark'] .toggle-thumb {
  transform: translate(23px, -50%);
}
</style>
