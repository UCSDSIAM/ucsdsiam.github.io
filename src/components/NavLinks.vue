<template>
  <ul class="nav-links" :class="`nav-links--${variant}`">
    <li>
      <RouterLink to="/">
        <span class="nav-text">Home</span>
      </RouterLink>
    </li>
    <li>
      <RouterLink to="/events">
        <span class="nav-text">Events</span>
      </RouterLink>
    </li>
    <li>
      <RouterLink to="/resources">
        <span class="nav-text">Resources</span>
      </RouterLink>
    </li>
    <li>
      <RouterLink to="/past-events">
        <span class="nav-text">Past Events</span>
      </RouterLink>
    </li>
    <li>
      <RouterLink to="/executive-board">
        <span class="nav-text">Executive Board</span>
      </RouterLink>
    </li>
    <li>
      <RouterLink to="/contact-us">
        <span class="nav-text">Contact Us</span>
      </RouterLink>
    </li>
    <li>
      <RouterLink to="/join-us">
        <span class="nav-text">Join Us</span>
      </RouterLink>
    </li>
  </ul>
</template>

<script setup>
defineProps({
  variant: {
    type: String,
    default: 'horizontal',
    validator: (v) => ['horizontal', 'vertical'].includes(v),
  },
})
</script>

<style scoped>
.nav-links {
  display: inline-flex;
  gap: 1.5rem;
  list-style: none;
  padding: 0;
  margin: 0;
}

.nav-links a {
  position: relative;
  text-decoration: none;
}

.nav-text {
  font-size: 15px;
  font-weight: 500;
  color: var(--text-nav);
}

.nav-links a::after {
  content: '';
  position: absolute;
  left: 50%;
  bottom: -10px;
  width: 30px;
  height: 2px;
  border-radius: 999px;
  background-color: var(--text-nav);
  transform: translateX(-50%) scaleX(0);
  transform-origin: center;
  transition: transform 200ms ease;
}

.nav-links--horizontal a:hover::after {
  transform: translateX(-50%) scaleX(1);
}

.nav-links--vertical {
  flex-direction: column;
  gap: 0.7rem;
}

.nav-links--vertical a::after {
  left: 0;
  transform: scaleX(0);
  transform-origin: left;
}

.nav-links--vertical a:hover::after {
  transform: scaleX(1);
}

.nav-links--vertical .nav-text:active {
  opacity: 0.85;
}
</style>
