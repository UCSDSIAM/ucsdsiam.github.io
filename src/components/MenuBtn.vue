<template>
  <button class="menu-btn" type="button" @click="$emit('toggle')" aria-label="Menu">
    <span class="icon-stack" :class="{ open: isOpen }" aria-hidden="true">
      <svg class="menu-icon menu" viewBox="0 0 24 24">
        <path :d="mdiMenu" />
      </svg>
      <svg class="menu-icon close" viewBox="0 0 24 24">
        <path :d="mdiClose" />
      </svg>
    </span>
  </button>
</template>

<script setup>
import { mdiMenu, mdiClose } from '@mdi/js'

defineProps({
  isOpen: { type: Boolean, default: false },
})

defineEmits(['toggle'])
</script>

<style scoped>
.menu-btn {
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
}

.icon-stack {
  position: relative;
  width: 1.8rem;
  height: 1.8rem;
  display: inline-block;
}

.menu-icon {
  position: absolute;
  inset: 0;
  fill: var(--text-nav);
  transition:
    opacity 200ms ease,
    transform 200ms ease;
}

/* show menu */
.menu-icon.menu {
  opacity: 1;
  transform: scale(1);
}

.menu-icon.close {
  opacity: 0;
  transform: scale(0.9);
}

/* show close */
.icon-stack.open .menu-icon.menu {
  opacity: 0;
  transform: scale(0.9);
}

.icon-stack.open .menu-icon.close {
  opacity: 1;
  transform: scale(1);
}
</style>
