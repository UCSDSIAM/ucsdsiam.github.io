<template>
  <a
    :href="href"
    class="xlink"
    :class="{ 'xlink--chip': chip }"
    target="_blank"
    rel="noopener noreferrer"
    v-bind="$attrs"
  >
    <slot />
  </a>
</template>

<script setup>
defineProps({
  href: { type: String, required: true },
  chip: { type: Boolean, default: false },
})
</script>

<style scoped>
.xlink {
  color: var(--link);
  text-decoration: underline;
  text-underline-offset: 2px;
}

.xlink:hover {
  opacity: 0.85;
}

.xlink--chip {
  padding: 0.55rem 0.85rem;
  font-size: 0.9rem;
  text-decoration: none;
  border: 1px solid var(--border);
  border-radius: 999px;
  background: var(--bg-card-gradient);
}
</style>
