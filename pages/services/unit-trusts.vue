<script setup lang="ts">
useSeoMeta({
  title: 'Unit Trusts | Evelyn Naava',
  description: 'Grow your wealth with professionally managed unit trust funds matched to your goals.'
})

const points = [
  { title: 'Professionally managed', desc: 'Your money is pooled with other investors and managed by experienced fund managers.' },
  { title: 'Matched to your goals', desc: 'Choose from money market, balanced or equity funds based on your timeline and risk appetite.' },
  { title: 'Start small, grow steadily', desc: 'Begin with a modest amount and add to it regularly as your income allows.' },
  { title: 'Liquid when you need it', desc: 'Access your money within days should your plans change.' }
]
</script>

<template>
  <div>
    <ServicePageHero
      eyebrow="Advisory Service"
      title="Unit Trusts"
      intro="Grow your wealth with professionally managed funds, without needing to track the market yourself."
    />

    <section class="py-16 sm:py-20">
      <div class="container-page grid gap-10 lg:grid-cols-2">
        <div v-for="point in points" :key="point.title" class="rounded-2xl border border-navy/10 bg-white p-6">
          <h3 class="font-heading text-base font-semibold text-navy">{{ point.title }}</h3>
          <p class="mt-2 text-sm text-ink/70">{{ point.desc }}</p>
        </div>
      </div>

      <div class="container-page mt-14 rounded-3xl bg-navy px-8 py-10 text-white">
        <h2 class="text-2xl text-white sm:text-3xl">Ready to start growing your savings?</h2>
        <p class="mt-2 max-w-lg text-white/75">Let's find the fund that matches your goals and comfort with risk.</p>
        <NuxtLink to="/contact" class="btn-accent mt-6 inline-flex">Book a Consultation</NuxtLink>
      </div>
    </section>
  </div>
</template>
