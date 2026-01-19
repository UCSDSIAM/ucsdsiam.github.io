<template>
  <component :is="componentTag" class="cta" :class="`cta--${variant}`" v-bind="linkAttrs">
    <span><slot /></span>
    <svg class="cta-icon" viewBox="0 0 24 24" aria-hidden="true">
      <path :d="mdiArrowRight" />
    </svg>
  </component>
</template>

<script setup>
import { computed } from 'vue'
import { mdiArrowRight } from '@mdi/js'

const props = defineProps({
  href: { type: String, default: '' },
  to: { type: String, default: '' },
  variant: {
    type: String,
    default: 'primary',
    validator: (v) => ['primary', 'secondary', 'tertiary'].includes(v),
  },
  external: { type: Boolean, default: false },
})

const componentTag = computed(() => (props.external ? 'a' : 'router-link'))

const linkAttrs = computed(() => {
  return props.external
    ? {
        href: props.href,
        target: '_blank',
        rel: 'noopener noreferrer',
      }
    : {
        to: props.to,
      }
})
</script>

<style scoped>
.cta {
  --cta-fs: 1rem;

  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5em;
  font-size: var(--cta-fs);
  font-weight: 700;
  text-decoration: none;
  padding: var(--cta-py) var(--cta-px);
  border-radius: 999px;
  transition:
    transform 200ms ease,
    background 200ms ease,
    box-shadow 200ms ease;
}

.cta--primary {
  --cta-py: 0.95rem;
  --cta-px: 1.6rem;

  color: var(--text-btn);
  background: var(--highlight);
  box-shadow: 0 10px 30px rgba(37, 99, 235, 0.22);
}

.cta--secondary {
  --cta-py: 0.75rem;
  --cta-px: 1.3rem;

  color: var(--highlight);
  border: 2px solid var(--highlight);
}

.cta--tertiary {
  --cta-px: 0;
  --cta-py: 0;

  color: var(--highlight);
}

.cta--primary:hover {
  background: var(--highlight-hover);
  transform: translateY(-1px);
  box-shadow: 0 14px 34px rgba(37, 99, 235, 0.28);
}

.cta--primary:active {
  transform: translateY(0px);
}

.cta-icon {
  width: 1.625em;
  height: 1.625em;
  transition: transform 200ms ease;
  flex-shrink: 0;
}

.cta--primary .cta-icon {
  fill: var(--text-btn);
}

.cta--secondary .cta-icon,
.cta--tertiary .cta-icon {
  fill: var(--highlight);
}

.cta:hover .cta-icon {
  transform: translateX(0.15em);
}

@media (max-width: 900px) {
  .cta {
    --cta-fs: 0.95rem;
  }

  .cta--primary {
    --cta-py: 0.85rem;
    --cta-px: 1.45rem;
  }

  .cta--secondary {
    --cta-py: 0.7rem;
    --cta-px: 1.15rem;
  }
}

@media (max-width: 700px) {
  .cta {
    --cta-fs: 0.9rem;
  }

  .cta--primary {
    --cta-py: 0.75rem;
    --cta-px: 1.3rem;
  }

  .cta--secondary {
    --cta-py: 0.65rem;
    --cta-px: 1.05rem;
  }
}

@media (max-width: 500px) {
  .cta {
    --cta-fs: 0.875rem;
  }

  .cta--primary {
    --cta-py: 0.7rem;
    --cta-px: 1.15rem;
  }

  .cta--secondary {
    --cta-py: 0.6rem;
    --cta-px: 0.95rem;
  }
}
</style>
