<template>
  <div class="footer">
    <a class="siam" :href="SIAM_LINKS.siam" target="_blank">
      <SIAMLogo />
    </a>
    <span class="separator">@</span>
    <a class="ucsd" :href="UCSD_LINKS.ucsdMath" target="_blank">
      <UCSanDiegoLogoBlueGold class="ucsd-light" />
      <UCSanDiegoLogoWhite class="ucsd-dark" />
    </a>
    <!-- <a class="logo" href="SIAM_LINKS.siam">
      <Logo />
    </a> -->
  </div>
</template>

<script setup>
import SIAMLogo from './SIAMLogo.vue'
import UCSanDiegoLogoBlueGold from './UCSanDiegoLogoBlueGold.vue'
import UCSanDiegoLogoWhite from './UCSanDiegoLogoWhite.vue'
import Logo from './Logo.vue'
import { SIAM_LINKS, UCSD_LINKS } from '@/data/links';
</script>

<style scoped>
.footer {
  --font-sz: 0.8rem;
  --icon-height: 2.75rem;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: var(--font-sz);
  margin: 2rem;
}

.sponsor-text {
  color: var(--text-muted);
  font-size: var(--font-sz);
}

.siam {
  color: var(--text-nav);
  display: inline-flex;
  align-items: center;
}

:deep(.siam-svg) {
  height: var(--icon-height);
}

.ucsd {
  color: var(--text-nav);
  display: inline-flex;
  align-items: center;
}

:deep(.UCSDLogoBlueGold-svg) {
  height: var(--icon-height);
}

:deep(.UCSDLogoWhite-svg) {
  height: var(--icon-height);
}

.ucsd-dark {
  display: none;
}

/* dark theme */
:root[data-theme="dark"] .ucsd-light {
  display: none;
}

:root[data-theme="dark"] .ucsd-dark {
  display: inline-block;
}

.separator {
  line-height: 0;
  font-size: 1.5rem;
}

.logo {
  color: var(--text-nav);
  display: inline-flex;
  align-items: center;
}

:deep(.logo-svg) {
  height: var(--icon-height);
}

@media (max-width: 900px) {
  .footer {
    --font-sz: 0.65rem;
    --icon-height: 2.25rem;
    margin: 1.5rem;
  }
}

@media (max-width: 500px) {
  .footer {
    --font-sz: 0.55rem;
    --icon-height: 1.85rem;
    margin: 1rem;
  }
}
</style>
