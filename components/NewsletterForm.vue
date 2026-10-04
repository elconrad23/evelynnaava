<script setup lang="ts">
const email = ref('')
const status = ref<'idle' | 'loading' | 'success' | 'error'>('idle')
const errorMessage = ref('')

async function subscribe() {
  if (!email.value) return
  status.value = 'loading'
  errorMessage.value = ''
  try {
    await $fetch('/api/subscribe', {
      method: 'POST',
      body: { email: email.value }
    })
    status.value = 'success'
    email.value = ''
  } catch (err: any) {
    status.value = 'error'
    errorMessage.value = err?.data?.statusMessage || 'Something went wrong. Please try again.'
  }
}
</script>

<template>
  <div>
    <p class="font-heading text-sm font-semibold text-white">Join the mailing list</p>
    <p class="mt-1 text-sm text-white/70">Monthly notes on savings, insurance and investing, straight to your inbox.</p>

    <form class="mt-4 flex flex-col gap-2 sm:flex-row" @submit.prevent="subscribe">
      <label for="newsletter-email" class="sr-only">Email address</label>
      <input
        id="newsletter-email"
        v-model="email"
        type="email"
        required
        placeholder="you@example.com"
        class="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/50 focus:border-pink focus:ring-1 focus:ring-pink"
      />
      <button type="submit" class="btn-accent shrink-0" :disabled="status === 'loading'">
        {{ status === 'loading' ? 'Sending…' : 'Subscribe' }}
      </button>
    </form>

    <p v-if="status === 'success'" class="mt-2 text-sm text-pink-light">You're subscribed — thank you!</p>
    <p v-if="status === 'error'" class="mt-2 text-sm text-pink-light">{{ errorMessage }}</p>
  </div>
</template>
