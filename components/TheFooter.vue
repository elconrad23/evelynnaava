<script setup lang="ts">
const year = new Date().getFullYear()
</script>

<template>
  <footer class="bg-navy text-white">
    <div class="container-page grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
      <div>
        <div class="flex items-center gap-3">
          <img src="/images/logo-mark.png" alt="Evelyn Naava" class="h-10 w-10" />
          <span class="font-display text-lg">Evelyn Naava</span>
        </div>
        <p class="mt-4 text-sm text-white/70">Building financial confidence for every stage of life, through honest advice and steady partnership.</p>
        <p class="mt-4 font-heading text-xs tracking-wide text-pink-light">Protection. Partnerships. Prosperity.</p>
      </div>

      <div>
        <p class="font-heading text-sm font-semibold">Services</p>
        <ul class="mt-4 space-y-2 text-sm text-white/70">
          <li><NuxtLink to="/services/securities-trading" class="hover:text-pink-light">Securities Trading</NuxtLink></li>
          <li><NuxtLink to="/services/unit-trusts" class="hover:text-pink-light">Unit Trusts</NuxtLink></li>
          <li><NuxtLink to="/services/bonds" class="hover:text-pink-light">Bonds</NuxtLink></li>
          <li><NuxtLink to="/services/investment" class="hover:text-pink-light">Investment</NuxtLink></li>
          <li><NuxtLink to="/services/insurance" class="hover:text-pink-light">Insurance</NuxtLink></li>
        </ul>
      </div>

      <div>
        <p class="font-heading text-sm font-semibold">Get in touch</p>
        <ul class="mt-4 space-y-2 text-sm text-white/70">
          <li>Kampala, Uganda</li>
          <li><a href="tel:+256776933339" class="hover:text-pink-light">+256 776933339</a></li>
          <li><a href="mailto:evelynnaava185@gmail.com" class="hover:text-pink-light">evelynnaava185@gmail.com</a></li>
          <li><NuxtLink to="/contact" class="hover:text-pink-light">Contact form →</NuxtLink></li>
        </ul>
      </div>

      <NewsletterForm />
    </div>

    <div class="border-t border-white/10">
      <div class="container-page flex flex-col gap-2 py-5 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
        <p>© {{ year }} Evelyn Naava. All rights reserved.</p>
        <p>Plan · Invest · Protect · Grow</p>
      </div>
    </div>
  </footer>
</template>
