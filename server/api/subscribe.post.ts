export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { email } = body || {}

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!email || !emailPattern.test(email)) {
    throw createError({ statusCode: 400, statusMessage: 'Please enter a valid email address.' })
  }

  const transport = getTransport()
  const recipient = getRecipient()

  if (!transport || !recipient) {
    console.warn('[subscribe] SMTP not configured yet. New subscriber:', email)
    throw createError({
      statusCode: 503,
      statusMessage: "Subscriptions aren't fully connected yet — please try again soon."
    })
  }

  await transport.sendMail({
    from: `"Evelyn Naava Website" <${recipient}>`,
    to: recipient,
    replyTo: email,
    subject: 'New mailing list subscriber',
    text: `New subscriber: ${email}`
  })

  return { ok: true }
})
