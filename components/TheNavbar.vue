<script setup lang="ts">
const open = ref(false)
const route = useRoute()
watch(() => route.fullPath, () => { open.value = false })

const links = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Resources', to: '/resources' },
  { label: 'About', to: '/about' },
  { label: 'Get in Touch', to: '/contact' }
]
</script>

<template>
  <header class="sticky top-0 z-50 border-b border-navy/10 bg-cream/95 backdrop-blur">
    <div class="container-page flex h-20 items-center justify-between">
      <NuxtLink to="/" class="flex items-center gap-3">
        <img src="/images/logo-mark.png" alt="Evelyn Naava" class="h-11 w-11" />
        <span class="flex flex-col leading-none">
          <span class="font-display text-xl text-navy">Evelyn Naava</span>
          <span class="font-heading text-[10px] tracking-wide text-pink">Protection. Partnerships. Prosperity.</span>
        </span>
      </NuxtLink>

      <nav class="hidden items-center gap-8 lg:flex">
        <NuxtLink
          v-for="link in links.slice(0, -1)"
          :key="link.to"
          :to="link.to"
          :aria-label="link.label === 'Home' ? 'Home' : undefined"
          :title="link.label === 'Home' ? 'Home' : undefined"
          class="font-heading text-sm font-medium text-navy/80 hover:text-pink transition-colors"
          active-class="!text-pink"
        >
          <HomeIcon v-if="link.label === 'Home'" />
          <template v-else>{{ link.label }}</template>
        </NuxtLink>
        <NuxtLink to="/contact" class="btn-primary">Book a Consultation</NuxtLink>
      </nav>

      <button
        class="flex h-10 w-10 items-center justify-center rounded-full border border-navy/20 lg:hidden"
        aria-label="Toggle menu"
        :aria-expanded="open"
        @click="open = !open"
      >
        <span class="relative block h-3.5 w-4">
          <span class="absolute left-0 top-0 h-0.5 w-4 bg-navy transition-transform" :class="open ? 'translate-y-[6px] rotate-45' : ''" />
          <span class="absolute left-0 top-1.5 h-0.5 w-4 bg-navy transition-opacity" :class="open ? 'opacity-0' : ''" />
          <span class="absolute left-0 top-3 h-0.5 w-4 bg-navy transition-transform" :class="open ? '-translate-y-[6px] -rotate-45' : ''" />
        </span>
      </button>
    </div>

    <div v-show="open" class="border-t border-navy/10 bg-cream lg:hidden">
      <nav class="container-page flex flex-col gap-1 py-4">
        <NuxtLink
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          :aria-label="link.label === 'Home' ? 'Home' : undefined"
          :title="link.label === 'Home' ? 'Home' : undefined"
          class="rounded-lg px-3 py-3 font-heading text-sm font-medium text-navy/85 hover:bg-navy/5"
          active-class="!text-pink"
        >
          <HomeIcon v-if="link.label === 'Home'" />
          <template v-else>{{ link.label }}</template>
        </NuxtLink>
      </nav>
    </div>
  </header>
</template>
