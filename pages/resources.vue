<script setup lang="ts">
useSeoMeta({
  title: 'Resources | Evelyn Naava',
  description: 'Guides and notes on savings, insurance and investing from Evelyn Naava.'
})

const articles = [
  { title: 'Unit trusts vs. fixed deposits: which fits your goal?', tag: 'Investing', minutes: 6 },
  { title: 'A simple checklist before you buy your first shares', tag: 'Securities Trading', minutes: 5 },
  { title: 'How much life cover does your family actually need?', tag: 'Insurance', minutes: 7 },
  { title: 'Bonds explained: lending your way to steady returns', tag: 'Bonds', minutes: 4 },
  { title: 'Building an education fund without derailing today\u2019s budget', tag: 'Education Insurance', minutes: 6 },
  { title: 'Protecting a farm business: what agricultural cover includes', tag: 'Agricultural Insurance', minutes: 5 }
]
</script>

<template>
  <div>
    <section class="bg-navy py-16 text-white sm:py-20">
      <div class="container-page max-w-2xl">
        <p class="font-heading text-xs font-semibold uppercase tracking-wide text-pink-light">Resources</p>
        <h1 class="mt-3 text-4xl text-white sm:text-5xl">Notes on money, made practical</h1>
        <p class="mt-4 text-white/75">Short reads to help you make sense of savings, insurance and investing before we speak.</p>
      </div>
    </section>

    <section class="py-16 sm:py-20">
      <div class="container-page grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <article v-for="a in articles" :key="a.title" class="rounded-2xl border border-navy/10 bg-white p-6">
          <p class="font-heading text-xs font-semibold text-pink">{{ a.tag }}</p>
          <h3 class="mt-3 font-heading text-base font-semibold text-navy leading-snug">{{ a.title }}</h3>
          <p class="mt-4 text-xs text-ink/50">{{ a.minutes }} min read</p>
        </article>
      </div>
    </section>

    <section class="pb-20">
      <div class="container-page rounded-3xl bg-navy px-8 py-10 text-white">
        <div class="max-w-md">
          <NewsletterForm />
        </div>
      </div>
    </section>
  </div>
</template>
