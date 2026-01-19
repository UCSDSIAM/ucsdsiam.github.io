<template>
  <svg
    class="logo-svg"
    xmlns="http://www.w3.org/2000/svg"
    :width="size"
    :height="size"
    viewBox="0 0 1024 1024"
    role="img"
    aria-label="Line-only circular logo mark"
  >
    <!-- <defs>
      <clipPath id="clipCircle">
        <circle cx="512" cy="512" r="360" />
      </clipPath>
    </defs>

    <circle
      cx="512"
      cy="512"
      r="470"
      :stroke="stroke"
      :stroke-width="ringWidth"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
    />

    <g clip-path="url(#clipCircle)">
      <circle
        cx="760"
        cy="350"
        r="78"
        :stroke="stroke"
        :stroke-width="innerStroke"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      />

      <path
        d="M -40 560
           C 120 430, 300 470, 420 560
           C 540 650, 690 660, 840 590
           C 970 530, 1080 560, 1100 610"
        :stroke="stroke"
        :stroke-width="innerStroke"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      />

      <g
        :stroke="stroke"
        :stroke-width="innerStroke"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <circle cx="250" cy="650" r="10" />
        <circle cx="300" cy="700" r="8" />
        <circle cx="220" cy="720" r="7" />

        <circle cx="820" cy="650" r="10" />
        <circle cx="770" cy="710" r="8" />
        <circle cx="860" cy="720" r="7" />
      </g>

      <g
        :stroke="stroke"
        :stroke-width="innerStroke"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M250 650 L300 700 L220 720" />
        <path d="M820 650 L770 710 L860 720" />
      </g>
    </g> -->
    <defs>
      <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#FFD34D"/>
        <stop offset="55%" stop-color="#F6A03A"/>
        <stop offset="100%" stop-color="#0B7D8C"/>
      </linearGradient>
      <linearGradient id="wave" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#0B7D8C"/>
        <stop offset="100%" stop-color="#0A2A43"/>
      </linearGradient>
  <!--Text on a top arc-->
      <path id="topArc" d="M 170 520 A 342 342 0 0 1 854 520"/>
      <path id="bottomArc" d="M 170 504 A 342 342 0 0 0 854 504" />
  <!--Clip everything to an inner circle-->
      <clipPath id="clipCircle">
        <circle cx="512" cy="512" r="360"/>
      </clipPath>
    </defs>
  <!--Outer ring-->
    <circle cx="512" cy="512" r="470" fill="#ffffff"/>
    <circle cx="512" cy="512" r="470" fill="none" stroke="#0A2A43" stroke-width="44"/>
  <!--Inner content (clipped)-->
    <g clip-path="url(#clipCircle)">
      <rect x="0" y="0" width="1024" height="1024" fill="url(#sky)"/>
  <!--Sun-->
      <circle cx="760" cy="350" r="78" fill="#ffffff" opacity="0.92"/>
  <!--Wave (simple)-->
      <path d="M -40 560
              C 120 430, 300 470, 420 560
              C 540 650, 690 660, 840 590
              C 970 530, 1080 560, 1100 610
              L 1100 1100 L -40 1100 Z" fill="url(#wave)" opacity="0.95"/>
  <!--Geisel-like simplified silhouette-->
      <!-- <g transform="translate(512 520)">
        <rect x="-150" y="70" width="300" height="70" rx="10" fill="#ffffff" opacity="0.92"/>
        <rect x="-30" y="10" width="60" height="110" rx="18" fill="#ffffff" opacity="0.92"/>
        <path d="M -220 40
                C -150 5, -80 -15, 0 -15
                C 80 -15, 150 5, 220 40
                L 220 90
                C 150 60, 80 50, 0 50
                C -80 50, -150 60, -220 90 Z" fill="#ffffff" opacity="0.92"/>
        <path d="M -185 68 C -120 48, -60 38, 0 38 C 60 38, 120 48, 185 68" fill="none" stroke="#0A2A43" stroke-width="6" opacity="0.35"/>
      </g> -->
  <!--A few "math nodes" (minimal)-->
      <g fill="#ffffff" opacity="0.75">
        <circle cx="250" cy="650" r="10"/>
        <circle cx="300" cy="700" r="8"/>
        <circle cx="220" cy="720" r="7"/>
        <circle cx="820" cy="650" r="10"/>
        <circle cx="770" cy="710" r="8"/>
        <circle cx="860" cy="720" r="7"/>
      </g>
      <g stroke="#ffffff" stroke-width="5" opacity="0.55" fill="none">
        <path d="M250 650 L300 700 L220 720"/>
        <path d="M820 650 L770 710 L860 720"/>
      </g>
    </g>
  <!--Top text: UCSD-->
    <text font-family="Arial, Helvetica, sans-serif" font-weight="800" font-size="100" fill="#0A2A43" stroke="#ffffff" stroke-width="10" paint-order="stroke">
      <textPath href="#topArc" startOffset="50%" text-anchor="middle" letter-spacing="6">UC San Diego</textPath>
    </text>
  <!--Center text: SIAM-->
    <text x="512" y="560" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="1000" font-size="160" fill="#0B7D8C" stroke="#ffffff" stroke-width="14" paint-order="stroke">
      SIAM
    </text>
  <!--Bottom text: STUDENT CHAPTER-->
    <text text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="700" font-size="80" fill="#0A2A43" stroke="#ffffff" stroke-width="6" paint-order="stroke">
      <textPath href="#bottomArc" startOffset="50%" text-anchor="middle" letter-spacing="12">STUDENT CHAPTER</textPath>
    </text>
  </svg>
</template>

<script setup>
const props = defineProps({
  size: { type: [Number, String], default: 256 },
  stroke: { type: String, default: "currentColor" },
  ringWidth: { type: [Number, String], default: 44 },
  innerStroke: { type: [Number, String], default: 6 }
});
</script>

<style scoped>
.logo-svg {
  height: 2rem;
  width: auto;
  flex-shrink: 0;
}
</style>
