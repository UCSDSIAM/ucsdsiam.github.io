<template>
  <section class="page resources">
    <h1>Resources</h1>
    <p>Below are selected resources from UC San Diego, SIAM, and other related organizations.</p>

    <section class="section section--first card-grid card-grid--col2 card-grid--lg-gap">
      <!-- <section class="card resource-card">
        <h2 class="card-title">Academic Resources</h2>
        <ul>
          <li>
            <strong>UCSD Courses:</strong>
            <XLink href="https://shangjingbo1226.github.io/teaching/2022-spring-CSE109">
              CSE 109 (Introduction to Programming Contests)
            </XLink>
            and
            <XLink href="https://shangjingbo1226.github.io/2020-winter-CSE190-CAP">
              CSE 190 (Introduction to Competitive Algorithmic Programming) </XLink
            >.
          </li>

          <li>
            <XLink href="https://cpbook.net/">Competitive Programming book</XLink>: The newer
            editions are available for purchase and the 1st edition is available as a PDF
            <XLink
              href="https://www.comp.nus.edu.sg/~stevenha/myteaching/competitive_programming/cp1.pdf"
            >
              here </XLink
            >.
          </li>

          <li>
            <XLink href="https://cp-algorithms.com/">cp-algorithms</XLink>: A website that contains
            dozens of implementations of useful algorithms.
          </li>

          <li>
            <XLink href="https://usaco.guide/">USACO Guide</XLink>: Comprehensive competitive
            programming curriculum with structured learning paths and high-quality explanations.
          </li>

          <li>
            <XLink href="https://cses.fi/problemset/">CSES Problem Set</XLink>: Curated collection
            of essential competitive programming problems with clean problem statements.
          </li>
        </ul>
      </section> -->
      <section class="card resource-card">
        <h2>Academic Resources</h2>
        <ul>
          <li v-for="term in ACADEMIC.slice(0, 4)" :key="term.name">
            <XLink :href="term.url">
              {{ term.name }}
            </XLink>

            <span
              v-if="term.description"
              @click="toggle(term.name)"
              style="margin-left: 6px; cursor: pointer;"
            >
              {{ expanded[term.name] ? "less" : "more" }}
            </span>

            <div v-if="expanded[term.name]" style="margin-top: 4px;">
              {{ term.description }}
            </div>
          </li>
        </ul>

        <details v-if="ACADEMIC.length > 4" class="details">
          <summary class="details__summary no-margin">
            <span class="details__more">Show more</span>
            <span class="details__less">Show less</span>
          </summary>

          <ul>
            <li v-for="term in ACADEMIC.slice(4)" :key="term.name">
              <XLink :href="term.url">
                {{ term.name }}
              </XLink>

              <span
                v-if="term.description"
                @click="toggle(term.name)"
                style="margin-left: 6px; cursor: pointer;"
              >
                {{ expanded[term.name] ? "less" : "more" }}
              </span>

              <div v-if="expanded[term.name]" style="margin-top: 4px;">
                {{ term.description }}
              </div>
            </li>
          </ul>
        </details>
      </section>

      <section class="card resource-card">
        <h2>Career Opportunities</h2>
        <ul>
          <li v-for="term in CAREER.slice(0, 4)" :key="term.name">
            <XLink :href="term.url">
              {{ term.name }}
            </XLink>

            <span
              v-if="term.description"
              @click="toggle(term.name)"
              style="margin-left: 6px; cursor: pointer;"
            >
              {{ expanded[term.name] ? "less" : "more" }}
            </span>

            <div v-if="expanded[term.name]" style="margin-top: 4px;">
              {{ term.description }}
            </div>
          </li>
        </ul>

        <details v-if="CAREER.length > 4" class="details">
          <summary class="details__summary no-margin">
            <span class="details__more">Show more</span>
            <span class="details__less">Show less</span>
          </summary>

          <ul>
            <li v-for="term in CAREER.slice(4)" :key="term.name">
              <XLink :href="term.url">
                {{ term.name }}
              </XLink>

              <span
                v-if="term.description"
                @click="toggle(term.name)"
                style="margin-left: 6px; cursor: pointer;"
              >
                {{ expanded[term.name] ? "less" : "more" }}
              </span>

              <div v-if="expanded[term.name]" style="margin-top: 4px;">
                {{ term.description }}
              </div>
            </li>
          </ul>
        </details>
      </section>
    </section>
  </section>
</template>

<script setup>
import XLink from '@/components/XLink.vue'
import { ACADEMIC, CAREER } from '@/data/resources'
import { ref } from 'vue';

const expanded = ref({});

function toggle(i) {
  expanded.value[i] = !expanded.value[i];
}
</script>
