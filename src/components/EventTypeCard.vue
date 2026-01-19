<template>
  <div class="card event-type-card">
    <h3 class="card-title">{{ eventType }}</h3>
    <p>
      <slot />
    </p>
  </div>
</template>

<script setup>
defineProps({
  eventType: { type: String, required: true },
})
</script>

<style scoped>
.event-type-card {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  padding: var(--card-padding);
}
</style>
