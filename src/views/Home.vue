<template>
  <div class="glow" aria-hidden="true"></div>
  <section class="hero">
    <div class="container hero-inner">

      <h1 class="hero-title">
        Connecting <span class="hero-triton">Tritons</span> Through
        <span class="hero-accent">Applied Mathematics</span>
      </h1>

      <p class="hero-subtitle">
        Welcome to the <span style="font-weight: 800;">SIAM Student Chapter at UC San Diego</span>.
      </p>

      <div class="hero-cta">
        <CtaBtn :href="LINKS.form" external>Join the Chapter</CtaBtn>
        <br/><br/>
        <CtaBtn :href="LINKS.slackInvite" external>Join Slack</CtaBtn>
      </div>
    </div>
  </section>

  <section>
    <details class="details page">
      <summary class="details__summary no-margin large-text">
        <span class="details__more large-text">Show events</span>
        <span class="details__less large-text">Hide events</span>
      </summary>

      <section>
        <iframe
          class="google-calendar"
          :src="LINKS.calendar"
          loading="lazy"
        ></iframe>
      </section>
    </details>
  </section>

  <section class="about page">
    <div>
      <h2 class="about-title">About Us</h2>
      <p class="about-text">
        The SIAM Student Chapter at UC San Diego is a student-led organization affiliated with the <XLink :href="UCSD_LINKS.ucsdMath">UC San Diego Department of Mathematics</XLink>.
        The chapter serves as a forum for students and researchers interested in applied mathematics, computational science, and related interdisciplinary areas.
        Membership and participation are open to undergraduates, graduate students, faculty, visitors, and members of the broader campus community from any academic background.
        <br/><br/>
        Join the <XLink :href="LINKS.slackInvite">Slack</XLink> to stay up-to-date on our latest communications!
      </p>
      <CtaBtn to="/join-us" variant="tertiary">Join Us</CtaBtn>
    </div>

    <div>
      <h3 class="about-subtitle">What is SIAM?</h3>
      <p class="about-text">
        <XLink :href="SIAM_LINKS.siam">Society for Industrial and Applied Mathematics (SIAM)</XLink> is an international community of 14,000+ individual members.
        Almost 500 academic, manufacturing, research and development, service and consulting organizations, government, and military organizations worldwide are institutional members.
        SIAM was incorporated in 1952 as a nonprofit organization to convey useful mathematical knowledge to other professionals who could implement mathematical theory for practical, industrial, or scientific use.
      </p>
      <CtaBtn :href="SIAM_LINKS.siamAboutUs" variant="tertiary" external>Learn More About SIAM</CtaBtn>
    </div>
  </section>
</template>

<script setup>
import CtaBtn from '@/components/CtaBtn.vue'
import XLink from '@/components/XLink.vue'
import { LINKS, SIAM_LINKS, UCSD_LINKS } from '@/data/links'
</script>
