<script setup lang="ts">
defineProps<{
  to: string
  title: string
  description: string
}>()
</script>

<template>
  <NuxtLink
    :to="to"
    class="group flex flex-col justify-between rounded-2xl border border-navy/10 bg-white p-6 transition-all duration-200 hover:border-pink hover:shadow-[0_12px_30px_-12px_rgba(44,45,109,0.25)]"
  >
    <div>
      <slot name="icon" />
      <h3 class="mt-4 font-heading text-base font-semibold text-navy">{{ title }}</h3>
      <p class="mt-2 text-sm leading-relaxed text-ink/70">{{ description }}</p>
    </div>
    <span class="mt-5 inline-flex items-center gap-1.5 font-heading text-xs font-semibold text-pink">
      Learn more
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" class="transition-transform group-hover:translate-x-0.5">
        <path d="M1 7H13M13 7L8 2M13 7L8 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </span>
  </NuxtLink>
</template>
