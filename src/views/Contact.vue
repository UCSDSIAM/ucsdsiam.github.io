<template>
  <section class="page contact">
    <h1>Contact Us</h1>
    <p>Feel free to reach out and stay in touch.</p>

    <section class="section section--first card-grid card-grid--col2">
      <!-- Slack -->
      <ContactCard
        v-for="contact in CONTACTS"
        :key="contact.title"
        :title="contact.title"
        :icon="contact.icon"
        :description="contact.description"
        :btn-text="contact.btnText"
        :href="contact.href"
      />
    </section>
  </section>
</template>

<script setup>
import ContactCard from '@/components/ContactCard.vue'
import { LINKS } from '@/data/links'
import { mdiSlack, mdiListBoxOutline, mdiEmail } from '@mdi/js'

const CONTACTS = [
  // {
  //   title: 'Membership Form',
  //   icon: mdiListBoxOutline,
  //   description: 'Complete this form to join the SIAM Student Chapter at UC San Diego. Mailing list enrollment is optional.',
  //   btnText: 'Join the Chapter',
  //   href: LINKS.form,
  // },
  {
    title: 'Slack',
    icon: mdiSlack,
    description: 'Our main communication platform for announcements, updates, and discussions.',
    btnText: 'Join Slack',
    href: LINKS.slackInvite,
  },
  {
    title: 'Email',
    icon: mdiEmail,
    description: 'Sponsorships, partnerships, or private questions.',
    btnText: 'qihaoye@ucsd.edu',
    href: 'mailto:qihaoye@ucsd.edu',
  },
]
</script>

<style scoped>
.contact .card-grid {
  max-width: 1000px;
}
</style>
