<script setup lang="ts">
import { services } from '~/utils/services'

useSeoMeta({
  title: 'Services | Evelyn Naava',
  description: 'Securities trading, unit trusts, bonds, investment and insurance services from Evelyn Naava.'
})
</script>

<template>
  <div>
    <section class="bg-navy py-16 text-white sm:py-20">
      <div class="container-page max-w-2xl">
        <p class="font-heading text-xs font-semibold uppercase tracking-wide text-pink-light">My Services</p>
        <h1 class="mt-3 text-4xl text-white sm:text-5xl">Every service, built around your goals</h1>
        <p class="mt-4 text-white/75">Whether you're placing your first trade or protecting a growing family, here's where each conversation starts.</p>
      </div>
    </section>

    <section class="py-16 sm:py-20">
      <div class="container-page grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <ServiceCard
          v-for="service in services"
          :key="service.slug"
          :to="`/services/${service.slug}`"
          :title="service.title"
          :description="service.description"
        />
      </div>
    </section>

    <section class="pb-20">
      <div class="container-page flex flex-col items-start gap-6 rounded-3xl bg-white border border-navy/10 px-8 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 class="text-2xl sm:text-3xl">Not sure where to start?</h2>
          <p class="mt-2 text-ink/70">Book a free consultation and we'll map out the right mix together.</p>
        </div>
        <NuxtLink to="/contact" class="btn-accent shrink-0">Book a Consultation</NuxtLink>
      </div>
    </section>
  </div>
</template>
