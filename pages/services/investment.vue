<script setup lang="ts">
useSeoMeta({
  title: 'Investment | Evelyn Naava',
  description: 'A tailored investment plan that balances growth, risk and your timeline.'
})

const points = [
  { title: 'Goal-based planning', desc: 'Every recommendation traces back to something you are actually working toward.' },
  { title: 'Diversified approach', desc: 'A mix across asset classes so no single setback derails your progress.' },
  { title: 'Business investment', desc: 'Savings and growth solutions built for business owners, not just individuals.' },
  { title: 'Regular reviews', desc: 'Your plan adjusts as your income, family and priorities evolve.' }
]
</script>

<template>
  <div>
    <ServicePageHero
      eyebrow="Advisory Service"
      title="Investment"
      intro="A tailored investment plan that balances growth, risk and your timeline, across markets and asset classes."
    />

    <section class="py-16 sm:py-20">
      <div class="container-page grid gap-10 lg:grid-cols-2">
        <div v-for="point in points" :key="point.title" class="rounded-2xl border border-navy/10 bg-white p-6">
          <h3 class="font-heading text-base font-semibold text-navy">{{ point.title }}</h3>
          <p class="mt-2 text-sm text-ink/70">{{ point.desc }}</p>
        </div>
      </div>

      <div class="container-page mt-14 rounded-3xl bg-navy px-8 py-10 text-white">
        <h2 class="text-2xl text-white sm:text-3xl">Let's build your investment plan</h2>
        <p class="mt-2 max-w-lg text-white/75">A short conversation is enough to map out where to begin.</p>
        <NuxtLink to="/contact" class="btn-accent mt-6 inline-flex">Book a Consultation</NuxtLink>
      </div>
    </section>
  </div>
</template>
