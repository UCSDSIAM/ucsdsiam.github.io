<template>
  <div class="card info-card" :class="`info-card--${variant}`">
    <p class="info-label">{{ infoLabel }}</p>
    <p class="info-value">{{ infoValue }}</p>
  </div>
</template>

<script setup>
defineProps({
  variant: { type: String, default: 'overview' },
  infoLabel: { type: String, required: true },
  infoValue: { type: String, required: true },
})
</script>

<style scoped>
.info-card {
  padding: 1.25rem;
}

.info-card--overview .info-label {
  color: var(--text-tertiary);
  font-size: 0.85rem;
  margin-bottom: 0.35rem;
}

.info-card--overview .info-value {
  color: var(--text-primary);
  font-weight: 600;
}

.info-card--step .info-label {
  color: var(--text-card-title);
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}
</style>
