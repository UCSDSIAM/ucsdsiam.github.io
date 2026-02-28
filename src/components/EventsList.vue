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
          <div v-if="has_flyer(e)" class="pdf">
            <div class="bar">
              <span class="label">Flyer</span>
              <a class="url__link" :href="`${e.source_folder}${e.flyer}`" target="_blank" rel="noopener">
                Open PDF
              </a>
            </div>

            <object class="pdf__viewer" :data="`${e.source_folder}${e.flyer}`" type="application/pdf">
              <iframe class="pdf__viewer" :src="`${e.source_folder}${e.flyer}`" title="Event PDF viewer" />
            </object>
          </div>

          <div v-else class="content">
            <p v-if="e.content" class="content__text">{{ e.content }}</p>
            <p v-else class="content__text content__text--muted">No details provided.</p>
          </div>
        </div>

        <div v-if="e.photos && e.photos.length" class="gallery card__body">
          <div class="bar">
            <span class="label">Photos</span>

            <a class="url__link" :href="get_photo_url(e, i)" target="_blank" rel="noopener">
              Open Photo
            </a>
          </div>

          <div class="gallery__viewer">
            <button
              class="gallery__nav gallery__nav--left"
              type="button"
              aria-label="Previous photo"
              @click="previous_photo(e, i)"
            >
              ‹
            </button>

            <img
              class="gallery__imgLarge"
              :src="get_photo_url(e, i)"
              :alt="`photo ${current_index(i) + 1}`"
              loading="lazy"
            />

            <button
              class="gallery__nav gallery__nav--right"
              type="button"
              aria-label="Next photo"
              @click="next_photo(e, i)"
            >
              ›
            </button>
          </div>

          <div class="gallery__dots" role="tablist" aria-label="Photo navigation">
            <button
              v-for="(p, j) in e.photos"
              :key="j"
              type="button"
              class="gallery__dot"
              :class="{ active: current_index(i) === j }"
              :aria-label="`Go to photo ${j + 1}`"
              @click="set_photo(i, j)"
            />
          </div>
        </div>
      </article>
    </div>

    <p v-else class="events__empty">No events available.</p>
  </section>
</template>

<script setup>
import { reactive } from "vue";

defineProps({
  events: {
    type: Array,
    required: true,
  },
});

function has_flyer(e) {
  let flag = typeof e?.flyer === "string";
  if (!flag) return false;

  let s = e.flyer.trim();
  console.log( s );
  flag = flag && s.length > 0 && s.toLowerCase().endsWith(".pdf");

  return flag;
}

const photo_index = reactive({});

function current_index(i) {
  return photo_index[i] ?? 0;
}

function set_photo(i, j) {
  photo_index[i] = j;
}

function get_photo_url(e, i) {
  const index = current_index(i);
  return `${e.source_folder}${e.photos[index]}`;
}

function next_photo(e, i) {
  const l = e.photos.length;
  const index = current_index(i);
  photo_index[i] = (index + 1) % l;
}

function previous_photo(e, i) {
  const l = e.photos.length;
  const index = current_index(i);
  photo_index[i] = (index - 1 + l) % l;
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
  border-top: 1px solid var(--divider);
}

.bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 0.75rem;
}

.label {
  font-size: 0.9rem;
  color: var(--text-tertiary);
}

.url__link {
  font-size: 0.95rem;
  color: var(--link);
  text-decoration: none;
}
.url__link:hover {
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

.gallery__viewer {
  position: relative;
  width: 100%;
}

.gallery__imgLarge {
  width: 100%;
  object-fit: contain;
  border-radius: 16px;
  border: 1px solid var(--border);
  background: var(--bg-gradient);
  display: block;
}

.gallery__nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  border: 0;
  cursor: pointer;
  font-size: 28px;
  font-weight: 800;
  padding: 16px 16px;
  border-radius: 20px;
  color: var(--text-primary);
  background: color-mix(in srgb, var(--text-muted) 60%, transparent);
  backdrop-filter: blur(10px);
}

.gallery__nav--left {
  left: 10px;
}

.gallery__nav--right {
  right: 10px;
}

.gallery__dots {
  display: flex;
  justify-content: center;
  gap: 6px;
  margin-top: 10px;
}

.gallery__dot {
  width: 15px;
  height: 5px;
  border-radius: 15px;
  border: 0;
  cursor: pointer;
  background: rgba(148, 163, 184, 0.7);
}

.gallery__dot.active {
  background: rgba(59, 130, 246, 0.95);
}
</style>
