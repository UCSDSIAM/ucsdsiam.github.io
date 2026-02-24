<!-- EventsList.vue -->
<template>
  <section class="events">
    <div v-if="events && events.length" class="events__list">
      <article v-for="(e, i) in events" :key="i" class="card">
        <div class="card__top">
          <div class="card__titleRow">
            <h3 class="card__title">{{ e.topic || "Untitled event" }}</h3>
            <span v-if="e.quarter" class="badge">{{ e.quarter }}</span>
          </div>

          <dl class="meta">
            <div v-if="e.time" class="meta__row">
              <dt class="meta__k">Time</dt>
              <dd class="meta__v">{{ e.time }}</dd>
            </div>
            <div v-if="e.location" class="meta__row">
              <dt class="meta__k">Location</dt>
              <dd class="meta__v">{{ e.location }}</dd>
            </div>
          </dl>
        </div>

        <div class="card__body">
          <div v-if="hasPdf(e)" class="pdf">
            <div class="pdf__bar">
              <span class="pdf__label">Flyer</span>
              <a class="pdf__link" :href="e.src" target="_blank" rel="noopener">
                Open PDF
              </a>
            </div>

            <object class="pdf__viewer" :data="e.src" type="application/pdf">
              <iframe class="pdf__viewer" :src="e.src" title="Event PDF viewer" />
            </object>
          </div>

          <div v-else class="content">
            <p v-if="e.content" class="content__text">{{ e.content }}</p>
            <p v-else class="content__text content__text--muted">No details provided.</p>
          </div>
        </div>
      </article>
    </div>

    <p v-else class="events__empty">No events available.</p>
  </section>
</template>

<script setup>
defineProps({
  events: {
    type: Array,
    required: true,
  },
});

function hasPdf(e) {
  let flag = typeof e?.src === "string";
  if (!flag) return false;

  let s = e.src.trim();
  flag = flag && s.length > 0 && s.toLowerCase().endsWith(".pdf");

  return flag;
}
</script>

<style scoped>
.events {
  font-family: var(--font-primary);
  max-width: var(--container-max-width);
  margin: 0 auto;
  color: var(--text-primary);
}

.events__header {
  margin-bottom: 1.25rem;
}

.events__title {
  margin: 0;
  font-size: 2rem;
  font-weight: 650;
  letter-spacing: -0.02em;
  color: var(--text-page-title);
}

.events__list {
  display: grid;
  gap: 1.5rem;
}

.card {
  border: 1px solid var(--border);
  border-radius: 18px;
  overflow: hidden;
  background: var(--bg-card-gradient);
  box-shadow: 0 10px 30px rgba(15, 23, 42, 0.06);
  backdrop-filter: blur(10px);
}

.card__top {
  padding: var(--card-padding);
  border-bottom: 1px solid var(--divider);
}

.card__titleRow {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 0.9rem;
}

.card__title {
  margin: 0;
  font-size: var(--card-title-fs);
  font-weight: 650;
  letter-spacing: -0.01em;
  color: var(--text-card-title);
}

.badge {
  display: inline-flex;
  align-items: center;
  padding: 0.35rem 0.6rem;
  border-radius: 999px;
  font-size: 0.85rem;
  color: var(--text-btn);
  background: var(--highlight);
  white-space: nowrap;
}

.meta {
  margin: 0;
  display: grid;
  gap: 0.65rem;
}

.meta__row {
  display: grid;
  grid-template-columns: 90px 1fr;
  gap: 0.75rem;
  align-items: start;
}

.meta__k {
  margin: 0;
  font-size: 0.9rem;
  color: var(--text-muted);
  font-weight: 650;
}

.meta__v {
  margin: 0;
  font-size: 0.95rem;
  color: var(--text-secondary);
  font-weight: 650;
}

.card__body {
  padding: var(--card-padding);
}

.pdf__bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 0.75rem;
}

.pdf__label {
  font-size: 0.9rem;
  color: var(--text-tertiary);
}

.pdf__link {
  font-size: 0.95rem;
  color: var(--link);
  text-decoration: none;
}
.pdf__link:hover {
  color: var(--highlight-hover);
  text-decoration: underline;
}

.pdf__viewer {
  width: 100%;
  height: min(72vh, 860px);
  border: 1px solid var(--border);
  border-radius: 14px;
  background: var(--bg-gradient);
}

.content__text {
  margin: 0;
  font-size: var(--card-body-fs);
  line-height: 1.65;
  color: var(--text-secondary);
}

.content__text--muted {
  color: var(--text-muted);
}

.events__empty {
  margin: 0;
  font-size: 1rem;
  color: var(--text-muted);
}
</style>
