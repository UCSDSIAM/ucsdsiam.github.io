<template>
  <div class="card member-card">
    <img v-if="src" :src="src" :alt="fullName" class="avatar" loading="lazy" />
    <div v-else class="avatar placeholder" aria-hidden="true">
      <svg class="avatar-icon" viewBox="0 0 24 24">
        <path :d="mdiAccountCircle" />
      </svg>
    </div>

    <header class="member-header">
      <h3 class="card-title">
        <XLink v-if="link" :href="link">
          {{ fullName }}
        </XLink>
        <span v-else>{{ fullName }}</span>
      </h3>
      <p class="card-subtitle">{{ role }}</p>
    </header>

    <p v-if="bio">{{ bio }}</p>
  </div>
</template>

<script setup>
import { mdiAccountCircle } from '@mdi/js'
import XLink from './XLink.vue'

defineProps({
  fullName: { type: String, required: true },
  role: { type: String, required: true },
  src: { type: String, default: '' },
  bio: { type: String, default: '', required: false },
  link: { type: String, default: '' },
})
</script>

<style scoped>
.member-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.8rem;
  padding: var(--card-padding-tall);
  text-align: center;
}

.avatar {
  width: 7rem;
  height: 7rem;
  border-radius: 50%;
  object-fit: cover;
}

.avatar.placeholder {
  background: var(--border);
  display: flex;
  align-items: center;
  justify-content: center;
}

.avatar-icon {
  width: 5rem;
  height: 5rem;
  fill: var(--text-secondary);
}

.member-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

@media (max-width: 500px) {
  .member-card {
    gap: 1.5rem;
  }
}
</style>
