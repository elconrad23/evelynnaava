<script setup lang="ts">
import { insuranceLines } from '~/utils/services'

useSeoMeta({
  title: 'Insurance | Evelyn Naava',
  description: 'Motor, health, life, travel, education and agricultural insurance from Evelyn Naava.'
})
</script>

<template>
  <div>
    <ServicePageHero
      eyebrow="Advisory Service"
      title="Insurance"
      intro="Comprehensive cover across the moments that matter most, matched to your budget and family."
    />

    <section class="py-16 sm:py-20">
      <div class="container-page">
        <p class="eyebrow">Lines of Cover</p>
        <h2 class="mt-3 max-w-lg text-3xl sm:text-4xl">Six ways to protect what matters</h2>

        <div class="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <div
            v-for="line in insuranceLines"
            :key="line.name"
            class="rounded-2xl border border-navy/10 bg-white p-6"
          >
            <h3 class="font-heading text-base font-semibold text-navy">{{ line.name }}</h3>
            <p class="mt-2 text-sm text-ink/70">{{ line.description }}</p>
          </div>
        </div>
      </div>

      <div class="container-page mt-14 rounded-3xl bg-navy px-8 py-10 text-white">
        <h2 class="text-2xl text-white sm:text-3xl">Not sure which cover you need?</h2>
        <p class="mt-2 max-w-lg text-white/75">Tell me about your family or business and I'll recommend the right combination of policies.</p>
        <NuxtLink to="/contact" class="btn-accent mt-6 inline-flex">Book a Consultation</NuxtLink>
      </div>
    </section>
  </div>
</template>
