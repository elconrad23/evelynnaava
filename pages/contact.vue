<script setup lang="ts">
useSeoMeta({
  title: 'Get in Touch | Evelyn Naava',
  description: 'Send a message to Evelyn Naava to talk about your financial goals.'
})

const services = [
  'Securities Trading',
  'Unit Trusts',
  'Bonds',
  'Investment',
  'Motor Insurance',
  'Health Insurance',
  'Life Insurance',
  'Travel Insurance',
  'Education Insurance',
  'Agricultural Insurance',
  'Something else'
]

const form = reactive({
  fullName: '',
  email: '',
  phone: '',
  interest: '',
  message: ''
})

const status = ref<'idle' | 'loading' | 'success' | 'error'>('idle')
const errorMessage = ref('')

async function submit() {
  status.value = 'loading'
  errorMessage.value = ''
  try {
    await $fetch('/api/contact', { method: 'POST', body: form })
    status.value = 'success'
    form.fullName = ''
    form.email = ''
    form.phone = ''
    form.interest = ''
    form.message = ''
  } catch (err: any) {
    status.value = 'error'
    errorMessage.value = err?.data?.statusMessage || 'Something went wrong. Please try again, or email directly.'
  }
}
</script>

<template>
  <div>
    <section class="py-14 sm:py-20">
      <div class="container-page grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <p class="eyebrow">Get in Touch</p>
          <h1 class="mt-3 text-3xl sm:text-4xl">Let's talk about your financial goals</h1>
          <p class="mt-4 text-ink/70">
            Whether you have a question, need advice, or are ready to start your financial journey, I'm here to help. Reach out and I'll get back to you as soon as possible.
          </p>

          <div class="mt-8 space-y-5">
            <div class="flex items-start gap-3">
              <span class="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-navy/5 text-navy">💬</span>
              <div>
                <p class="font-heading text-sm font-semibold text-navy">Friendly & Professional Support</p>
                <p class="text-sm text-ink/60">Your questions matter.</p>
              </div>
            </div>
            <div class="flex items-start gap-3">
              <span class="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-navy/5 text-navy">🔒</span>
              <div>
                <p class="font-heading text-sm font-semibold text-navy">Confidential & Secure</p>
                <p class="text-sm text-ink/60">Your information is always protected.</p>
              </div>
            </div>
            <div class="flex items-start gap-3">
              <span class="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-navy/5 text-navy">🤝</span>
              <div>
                <p class="font-heading text-sm font-semibold text-navy">Personalised Guidance</p>
                <p class="text-sm text-ink/60">Tailored to your unique goals.</p>
              </div>
            </div>
          </div>

          <div class="mt-10 hidden max-w-xs sm:block">
            <img src="/images/portrait.jpg" alt="Evelyn Naava" class="w-full rounded-2xl object-cover object-top" />
          </div>
        </div>

        <form class="rounded-2xl border border-navy/10 bg-white p-6 sm:p-8" @submit.prevent="submit">
          <h2 class="text-xl">Send Me a Message</h2>
          <p class="mt-1 text-sm text-ink/60">Fill in the form below and I'll get back to you shortly.</p>

          <div class="mt-6 space-y-5">
            <div>
              <label class="field-label" for="fullName">Full Name</label>
              <input id="fullName" v-model="form.fullName" required type="text" placeholder="Jane Doe" class="field" />
            </div>
            <div>
              <label class="field-label" for="email">Email Address</label>
              <input id="email" v-model="form.email" required type="email" placeholder="you@example.com" class="field" />
            </div>
            <div>
              <label class="field-label" for="phone">Phone Number</label>
              <input id="phone" v-model="form.phone" type="tel" placeholder="+256 700 123 456" class="field" />
            </div>
            <div>
              <label class="field-label" for="interest">I'm Interested In</label>
              <select id="interest" v-model="form.interest" class="field">
                <option value="" disabled>Select a service</option>
                <option v-for="s in services" :key="s" :value="s">{{ s }}</option>
              </select>
            </div>
            <div>
              <label class="field-label" for="message">Message</label>
              <textarea id="message" v-model="form.message" required rows="4" maxlength="500" placeholder="Type your message here…" class="field resize-none" />
              <p class="mt-1 text-right text-xs text-ink/40">{{ form.message.length }}/500</p>
            </div>

            <button type="submit" class="btn-accent w-full" :disabled="status === 'loading'">
              {{ status === 'loading' ? 'Sending…' : 'Send Message' }}
            </button>

            <p v-if="status === 'success'" class="text-sm text-navy">Thank you — your message has been sent. I'll be in touch soon.</p>
            <p v-if="status === 'error'" class="text-sm text-pink-dark">{{ errorMessage }}</p>

            <p class="text-center text-xs text-ink/45">By sending this message, you agree to our Privacy Policy.</p>
          </div>
        </form>
      </div>
    </section>

    <section class="border-t border-navy/10 py-14">
      <div class="container-page">
        <p class="text-center eyebrow">Other Ways to Reach Me</p>
        <div class="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <div class="rounded-2xl border border-navy/10 bg-white p-5">
            <p class="font-heading text-sm font-semibold text-navy">Call Me</p>
            <a href="tel:+256700123456" class="mt-1 block text-sm text-ink/70 hover:text-pink">+256 751660828 / +256 776933339</a>
            <p class="mt-1 text-xs text-ink/45">Mon – Fri, 8:00 AM – 6:00 PM</p>
          </div>
          <div class="rounded-2xl border border-navy/10 bg-white p-5">
            <p class="font-heading text-sm font-semibold text-navy">WhatsApp</p>
            <a href="https://wa.me/256751660828" target="_blank" class="mt-1 block text-sm text-ink/70 hover:text-pink">Chat on WhatsApp</a>
            <p class="mt-1 text-xs text-ink/45">Quick responses</p>
          </div>
          <div class="rounded-2xl border border-navy/10 bg-white p-5">
            <p class="font-heading text-sm font-semibold text-navy">Email</p>
            <a href="mailto:hello@evelynnaava.com" class="mt-1 block text-sm text-ink/70 hover:text-pink">hello@evelynnaava.com</a>
            <p class="mt-1 text-xs text-ink/45">I typically reply within 24 hours</p>
          </div>
          <div class="rounded-2xl border border-navy/10 bg-white p-5">
            <p class="font-heading text-sm font-semibold text-navy">Book a Consultation</p>
            <p class="mt-1 text-sm text-ink/70">Schedule a convenient time</p>
            <p class="mt-1 text-xs text-ink/45">In-person or online</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
