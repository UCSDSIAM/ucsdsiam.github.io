<template>
  <div class="card contact-card">
    <header>
      <h3 class="card-title">{{ title }}</h3>

      <svg class="contact-icon" viewBox="0 0 24 24" aria-hidden="true">
        <path :d="icon" />
      </svg>
    </header>

    <p>{{ description }}</p>

    <div class="cta-btn-wrap">
      <CtaBtn :href="href" variant="tertiary" external>{{ btnText }}</CtaBtn>
    </div>
  </div>
</template>

<script setup>
import CtaBtn from '@/components/CtaBtn.vue'

defineProps({
  title: { type: String, required: true },
  icon: { type: String, default: '' },
  description: { type: String, required: true },
  btnText: { type: String, required: true },
  href: { type: String, required: true },
})
</script>

<style scoped>
.contact-card {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  padding: var(--card-padding);
}

.contact-card header {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.contact-icon {
  width: var(--card-title-fs);
  height: var(--card-title-fs);
  fill: var(--text-card-title);
}

.contact-card .cta-btn-wrap {
  margin-top: auto;
  padding-top: 1rem;
}
</style>
