<template>
  <section class="page">
    <h1>Past Events</h1>
    
    <section class="section section--first">
      <EventsList :events="PAST_EVENTS" />
    </section>
  </section>
</template>

<script setup>
import EventsList from "@/components/EventsList.vue";
import { PAST_EVENTS } from '@/data/past_events'
</script>
