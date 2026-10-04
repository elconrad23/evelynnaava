<script setup lang="ts">
useSeoMeta({
  title: 'Securities Trading | Evelyn Naava',
  description: 'Trade listed shares with guidance grounded in research and your long-term goals.'
})

const points = [
  { title: 'Guided market entry', desc: 'Understand how the stock market works before you place your first trade.' },
  { title: 'Research-led picks', desc: 'Recommendations backed by company fundamentals, not tips or trends.' },
  { title: 'Portfolio oversight', desc: 'Regular reviews so your holdings stay aligned with your goals and risk appetite.' },
  { title: 'Execution support', desc: 'Hands-on help placing and settling trades through licensed brokers.' }
]
</script>

<template>
  <div>
    <ServicePageHero
      eyebrow="Advisory Service"
      title="Securities Trading"
      intro="Buy and sell listed shares on the stock exchange with a plan behind every decision, not just a hunch."
    />

    <section class="py-16 sm:py-20">
      <div class="container-page grid gap-10 lg:grid-cols-2">
        <div v-for="point in points" :key="point.title" class="rounded-2xl border border-navy/10 bg-white p-6">
          <h3 class="font-heading text-base font-semibold text-navy">{{ point.title }}</h3>
          <p class="mt-2 text-sm text-ink/70">{{ point.desc }}</p>
        </div>
      </div>

      <div class="container-page mt-14 rounded-3xl bg-navy px-8 py-10 text-white">
        <h2 class="text-2xl text-white sm:text-3xl">Thinking about your first trade?</h2>
        <p class="mt-2 max-w-lg text-white/75">Let's talk through what you're trying to achieve and whether securities trading fits your wider plan.</p>
        <NuxtLink to="/contact" class="btn-accent mt-6 inline-flex">Book a Consultation</NuxtLink>
      </div>
    </section>
  </div>
</template>
