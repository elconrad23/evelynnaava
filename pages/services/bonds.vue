<script setup lang="ts">
useSeoMeta({
  title: 'Bonds | Evelyn Naava',
  description: 'Earn steady, predictable returns through government and corporate bonds.'
})

const points = [
  { title: 'Predictable income', desc: 'Fixed interest payments at regular intervals over the life of the bond.' },
  { title: 'Government & corporate options', desc: 'Choose the balance of safety and yield that suits your plan.' },
  { title: 'Capital preservation', desc: 'A steadier complement to the growth potential of equities.' },
  { title: 'Clear terms', desc: 'Know your maturity date and expected return before you commit.' }
]
</script>

<template>
  <div>
    <ServicePageHero
      eyebrow="Advisory Service"
      title="Bonds"
      intro="Earn steady, predictable returns by lending to government or established companies."
    />

    <section class="py-16 sm:py-20">
      <div class="container-page grid gap-10 lg:grid-cols-2">
        <div v-for="point in points" :key="point.title" class="rounded-2xl border border-navy/10 bg-white p-6">
          <h3 class="font-heading text-base font-semibold text-navy">{{ point.title }}</h3>
          <p class="mt-2 text-sm text-ink/70">{{ point.desc }}</p>
        </div>
      </div>

      <div class="container-page mt-14 rounded-3xl bg-navy px-8 py-10 text-white">
        <h2 class="text-2xl text-white sm:text-3xl">Want a steadier place for your capital?</h2>
        <p class="mt-2 max-w-lg text-white/75">Let's see whether bonds belong in your portfolio and which terms fit your timeline.</p>
        <NuxtLink to="/contact" class="btn-accent mt-6 inline-flex">Book a Consultation</NuxtLink>
      </div>
    </section>
  </div>
</template>
