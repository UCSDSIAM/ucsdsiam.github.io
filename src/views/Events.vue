<template>
  <section class="page">
    <h1>Upcoming Events</h1>
    <p>
      Find the schedule for events. The calendar below reflects the most up-to-date schedule.
    </p>

    <section class="section section--first card-grid">
      <EventTypeCard event-type="Regular Events">
        Our regular meetings, which are scheduled based on the availability of invited speakers, take the form of student colloquiums or topic workshops.
      </EventTypeCard>

      <EventTypeCard event-type="Other Events">
        We also organize occasional events, including alumni talks, career panels, mock interviews, and opportunities to connect with other organizations.
      </EventTypeCard>
    </section>

    <section class="section">
      <iframe
        class="google-calendar"
        :src="LINKS.calendar"
        loading="lazy"
      ></iframe>
    </section>
  </section>
</template>

<script setup>
import EventTypeCard from '@/components/EventTypeCard.vue'
import { EVENTS } from '@/data/events'
import { LINKS } from '@/data/links';
</script>
