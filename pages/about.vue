<script setup lang="ts">
useSeoMeta({
  title: 'About | Evelyn Naava',
  description: 'Meet Evelyn Naava, a financial advisor with 15+ years of experience in wealth management and insurance.'
})
const testimonials = [
  {
    quote: 'Evelyn helped me plan my investments and get the right insurance for my family. Her advice is practical, honest and always in my best interest.',
    name: 'A Happy Client'
  },
  {
    quote: 'I had no idea where to start with unit trusts. Evelyn broke it down simply and I finally feel in control of my savings.',
    name: 'A Long-Term Client'
  },
  {
    quote: 'From my first share purchase to insuring my business, Evelyn has been a steady, knowledgeable partner every step of the way.',
    name: 'A Business Owner'
  }
]
</script>

<template>
  <div>
    <section class="py-16 sm:py-20">
      <div class="container-page grid items-center gap-12 lg:grid-cols-2">
        <div>
          <p class="eyebrow">About Evelyn</p>
          <h1 class="mt-3 text-4xl sm:text-5xl">Advice that puts your goals first</h1>
          <p class="mt-6 text-ink/75 leading-relaxed">
            For more than fifteen years, I've helped individuals, families and businesses turn financial uncertainty into a clear plan. My work sits at the intersection of protection, partnership and prosperity — helping people build wealth while making sure that wealth is protected.
          </p>
          <p class="mt-4 text-ink/75 leading-relaxed">
            I believe financial wellness is not a luxury; it's the foundation for the life you deserve. Whether you're placing your first trade, choosing a unit trust, or insuring your family's future, I bring the same standard of honest, unbiased advice.
          </p>
          <div class="mt-8 flex flex-wrap gap-4">
            <NuxtLink to="/contact" class="btn-accent">Book a Consultation</NuxtLink>
            <NuxtLink to="/services" class="btn-outline">See My Services</NuxtLink>
          </div>
        </div>
        <div class="brand-ring relative mx-auto max-w-sm">
          <img
            src="/images/portrait.jpg"
            alt="Evelyn Naava, Financial Advisor"
            class="portrait-blend"
          />
        </div>
      </div>
    </section>

    <section class="bg-navy py-16 text-white sm:py-20">
      <div class="container-page grid gap-8 sm:grid-cols-3">
        <div>
          <p class="font-display text-4xl text-pink-light">15+</p>
          <p class="mt-2 font-heading text-sm text-white/75">Years in financial advisory & wealth management</p>
        </div>
        <div>
          <p class="font-display text-4xl text-pink-light">5</p>
          <p class="mt-2 font-heading text-sm text-white/75">Core service lines, from trading to insurance</p>
        </div>
        <div>
          <p class="font-display text-4xl text-pink-light">6</p>
          <p class="mt-2 font-heading text-sm text-white/75">Types of insurance cover available</p>
        </div>
      </div>
    </section>
    <section id="testimonials" class="scroll-mt-24 py-16 sm:py-20" aria-labelledby="testimonials-heading">
      <div class="container-page mb-8">
        <p class="eyebrow">Testimonials</p>
        <h2 id="testimonials-heading" class="mt-3 text-3xl sm:text-4xl">What clients say</h2>
      </div>
      <div class="container-page grid gap-6 lg:grid-cols-3">
        <figure v-for="t in testimonials" :key="t.name" class="flex flex-col justify-between rounded-2xl border border-navy/10 bg-white p-7">
          <blockquote class="font-display text-lg italic leading-snug text-navy">"{{ t.quote }}"</blockquote>
          <figcaption class="mt-6 font-heading text-sm font-semibold text-pink">— {{ t.name }}</figcaption>
        </figure>
      </div>
    </section>

    <section class="pb-20">
      <div class="container-page flex flex-col items-start gap-6 rounded-3xl bg-pink px-8 py-10 text-white sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 class="text-2xl text-white sm:text-3xl">Ready to start your own story?</h2>
          <p class="mt-2 text-white/85">Book a free consultation today.</p>
        </div>
        <NuxtLink to="/contact" class="btn-primary shrink-0 bg-navy hover:bg-navy-dark">Get in Touch</NuxtLink>
      </div>
    </section>
  </div>
</template>
