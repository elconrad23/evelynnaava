<script setup lang="ts">
defineProps<{
  eyebrow: string
  title: string
  intro: string
}>()
</script>

<template>
  <section class="bg-navy py-16 text-white sm:py-20">
    <div class="container-page max-w-2xl">
      <NuxtLink to="/services" class="font-heading text-xs font-semibold text-pink-light hover:text-white">← All services</NuxtLink>
      <p class="mt-4 font-heading text-xs font-semibold uppercase tracking-wide text-pink-light">{{ eyebrow }}</p>
      <h1 class="mt-3 text-4xl text-white sm:text-5xl">{{ title }}</h1>
      <p class="mt-4 text-white/75">{{ intro }}</p>
    </div>
  </section>
</template>
