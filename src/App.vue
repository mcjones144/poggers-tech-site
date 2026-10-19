<script setup>
const year = new Date().getFullYear()

const areas = [
  {
    title: 'Strategy',
    text: 'Technology roadmaps, vendor selection and budgets that match where the business is heading.',
  },
  {
    title: 'APIs & data systems',
    text: 'API design and integration, SQL database architecture and the cloud platforms that run them.',
  },
  {
    title: 'Security',
    text: 'Sensible controls, backups and staff awareness, sized for small and mid-sized teams.',
  },
]
</script>

<template>
  <div class="page">
    <main>
      <h1>Poggers<span class="tld">.tech</span><span class="sub">Consulting</span></h1>
      <p class="lede">
        We plan, build and secure the technology that moves your business forward.
      </p>
      <ul class="areas">
        <li v-for="area in areas" :key="area.title">
          <h2>{{ area.title }}</h2>
          <p>{{ area.text }}</p>
        </li>
      </ul>
    </main>
    <footer>
      <span>&copy; {{ year }} Poggers.tech Consulting</span>
      <span>poggers.tech</span>
    </footer>
  </div>
</template>
