<template>
  <section class="page contact">
    <h1>Join SIAM Student Chapter at UC San Diego</h1>
    <p>
      Members of <XLink :href="SIAM_LINKS.siamStudentChapter">SIAM Student Chapters</XLink> are eligible to receive free
      <XLink :href="SIAM_LINKS.siamStudentMembership">SIAM Student Memberships</XLink>.
      Chapter members can join online or complete an application form.
    </p>

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

  <section class="about two-columns-even page">
    <div>
      <h3 class="about-title">
        SIAM Student Chapter
      </h3>
      <p class="about-text">
        <XLink :href="SIAM_LINKS.siamStudentChapter">SIAM Student Chapter</XLink> is a campus-based branch of the Society for Industrial and Applied Mathematics that connects students with peers, faculty, and the broader SIAM community.
        <br/><br/> 
        These chapters support interdisciplinary engagement in applied mathematics, computational science, and related fields by organising professional development events, seminars, guest lectures, workshops, and social activities.
        They provide opportunities to build networks, share research interests, explore career paths, and develop leadership skills.
        <br/><br/>
        SIAM supports chapters with resources, guidance, and funding for local activities, and full-time student members of a chapter are eligible for free <XLink href="https://www.siam.org/membership/individual-membership/student-membership/">SIAM Student Membership</XLink> and its associated benefits.
      </p>
      <CtaBtn :href="SIAM_LINKS.siamStudentChapter" variant="tertiary" external>Learn More About SIAM Student Chapter</CtaBtn>
    </div>
    <div>
      <h3 class="about-title">
        SIAM Student Membership
      </h3>
      <p class="about-text">
        <XLink :href="SIAM_LINKS.siamStudentMembership">SIAM Student Membership</XLink> provides students with opportunities to connect, learn, and grow within the applied mathematics and computational science community.
        <br/><br/>
        It allows students to network with researchers, faculty, and industry professionals through SIAM conferences and activities.
        It increases academic and professional visibility by linking students to a broad international community in applied mathematics, computational science, and data science.
        It offers discounted access to SIAM journals, books, and conferences, making high quality research more accessible.
        It also provides career development resources and may be considered positively when applying for SIAM student travel awards.
        <br/><br/>
        In short, SIAM Student Membership supports students' academic development, professional networking, and access to research resources at a low cost.
      </p>
      <CtaBtn :href="SIAM_LINKS.siamStudentMembership" variant="tertiary" external>Learn More About SIAM Student Membership</CtaBtn>
    </div>
  </section>
</template>

<script setup>
import ContactCard from '@/components/ContactCard.vue'
import { LINKS, SIAM_LINKS } from '@/data/links'
import { mdiSlack, mdiListBoxOutline } from '@mdi/js'
import CtaBtn from '@/components/CtaBtn.vue'
import XLink from '@/components/XLink.vue'

const CONTACTS = [
  {
    title: 'Membership Form',
    icon: mdiListBoxOutline,
    description: 'Complete this form to join the SIAM Student Chapter at UC San Diego. Mailing list enrollment is optional.',
    btnText: 'Join the Chapter',
    href: LINKS.form,
  },
  {
    title: 'Slack',
    icon: mdiSlack,
    description: 'Our main communication platform for announcements, updates, and discussions.',
    btnText: 'Join Slack',
    href: LINKS.slackInvite,
  },
]
</script>

<style scoped>
.contact .card-grid {
  max-width: 1000px;
}
</style>
