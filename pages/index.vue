<script setup lang="ts">
import { services } from '~/utils/services'

useSeoMeta({
  title: 'Evelyn Naava | Protection. Partnerships. Prosperity.',
  description: 'Plan today, live better tomorrow. Securities trading, unit trusts, bonds, investment and insurance advice from Evelyn Naava.'
})

const steps = [
  { title: 'Understand your needs', desc: 'A candid conversation about where you are and where you want to be.' },
  { title: 'Create a tailored plan', desc: 'A plan built around your income, goals and appetite for risk.' },
  { title: 'Guide your journey', desc: 'Ongoing check-ins as your life and priorities change.' },
  { title: 'Help you achieve your goals', desc: 'Steady progress toward the future you are building.' }
]

const whyPoints = [
  '15+ years of experience in financial advisory and wealth management',
  'Personalised, unbiased advice',
  'A strong track record of helping clients reach their financial goals',
  'Access to leading investment and insurance providers',
  'Ongoing support and guidance',
  'Trusted by individuals, families and businesses'
]
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="overflow-hidden bg-cream pt-12 sm:pt-16 lg:pt-20">
      <div class="container-page grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <p class="eyebrow">Your financial partner for a brighter tomorrow</p>
          <h1 class="mt-4 text-4xl leading-[1.1] sm:text-5xl lg:text-[3.4rem]">
            Plan today.<br />Live better tomorrow.
          </h1>
          <p class="mt-6 max-w-md text-base leading-relaxed text-ink/75">
            I help individuals, families and businesses build financial security through smart investments, practical savings plans and comprehensive insurance solutions.
          </p>

          <div class="mt-8 border-l-2 border-pink pl-4">
            <p class="font-display text-lg italic text-navy">Evelyn Naava</p>
            <p class="font-heading text-xs uppercase tracking-wide text-ink/60">Financial Advisor</p>
            <p class="mt-2 font-display italic text-ink/70">"Your goals, my priority."</p>
          </div>

          <div class="mt-9 flex flex-wrap gap-4">
            <NuxtLink to="/contact" class="btn-accent">Book a Consultation</NuxtLink>
            <NuxtLink to="/services" class="btn-outline">Explore Services</NuxtLink>
          </div>
        </div>

        <div class="relative mx-auto w-full max-w-sm lg:max-w-none">
          <div class="brand-ring relative">
            <img
              src="/images/portrait.jpg"
              alt="Evelyn Naava, Financial Advisor"
              class="portrait-blend"
            />
          </div>
          <div class="relative z-10 mx-auto mt-6 flex max-w-sm items-center gap-3 rounded-2xl bg-white px-5 py-4 shadow-lg">
            <span class="font-display text-2xl text-pink">15+</span>
            <span class="font-heading text-xs leading-tight text-navy/80">Years of experience<br />in trusted advice</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Process strip -->
    <section class="mt-16 bg-navy py-10 text-white sm:mt-24">
      <div class="container-page grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <div v-for="step in steps" :key="step.title">
          <p class="font-heading text-sm font-semibold text-pink-light">{{ step.title }}</p>
          <p class="mt-2 text-sm text-white/70">{{ step.desc }}</p>
        </div>
      </div>
    </section>

    <!-- Services -->
    <section class="py-20 sm:py-24">
      <div class="container-page">
        <div class="max-w-xl">
          <p class="eyebrow">Advisory Services</p>
          <h2 class="mt-3 text-3xl sm:text-4xl">A full toolkit for your financial life</h2>
          <p class="mt-4 text-ink/70">From day-to-day savings to long-term protection, each service is explained in full on its own page.</p>
        </div>

        <div class="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <ServiceCard
            v-for="service in services"
            :key="service.slug"
            :to="`/services/${service.slug}`"
            :title="service.title"
            :description="service.description"
          />
        </div>
      </div>
    </section>

    <!-- Why work with me -->
    <section class="bg-white py-20 sm:py-24">
      <div class="container-page grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <p class="eyebrow">Why work with me</p>
          <h2 class="mt-3 text-3xl sm:text-4xl">Advice built around you, not a product quota</h2>
          <ul class="mt-8 space-y-4">
            <li v-for="point in whyPoints" :key="point" class="flex items-start gap-3">
              <span class="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-navy text-white">
                <svg width="10" height="10" viewBox="0 0 12 10" fill="none"><path d="M1 5L4.5 8.5L11 1.5" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
              </span>
              <span class="text-sm text-ink/80">{{ point }}</span>
            </li>
          </ul>
        </div>

        <figure class="relative flex flex-col justify-between overflow-hidden rounded-2xl bg-navy p-8 text-white">
          <blockquote class="font-display text-2xl italic leading-snug">
            "Financial wellness is not a luxury, it's a foundation for the life you deserve."
          </blockquote>
          <figcaption class="mt-8 font-heading text-sm text-pink-light">- Evelyn Naava</figcaption>
        </figure>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-20 sm:py-24">
      <div class="container-page flex flex-col items-start gap-6 rounded-3xl bg-pink px-8 py-12 text-white sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 class="text-2xl text-white sm:text-3xl">Let's talk about your financial goals</h2>
          <p class="mt-2 text-white/85">A conversation today can lead to a brighter tomorrow.</p>
        </div>
        <NuxtLink to="/contact" class="btn-primary shrink-0 bg-navy hover:bg-navy-dark">Get in Touch</NuxtLink>
      </div>
    </section>
  </div>
</template>
