export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { fullName, email, phone, interest, message } = body || {}

  if (!fullName || !email || !message) {
    throw createError({ statusCode: 400, statusMessage: 'Please fill in your name, email and message.' })
  }

  const transport = getTransport()
  const recipient = getRecipient()

  if (!transport || !recipient) {
    // Mail is not configured yet — log so nothing is lost, and tell the visitor.
    console.warn('[contact] SMTP not configured yet. Submission received:', { fullName, email, phone, interest, message })
    throw createError({
      statusCode: 503,
      statusMessage: "This form isn't fully connected yet — please email hello@evelynnaava.com directly for now."
    })
  }

  await transport.sendMail({
    from: `"Evelyn Naava Website" <${recipient}>`,
    to: recipient,
    replyTo: email,
    subject: `New enquiry from ${fullName}${interest ? ` — ${interest}` : ''}`,
    text: [
      `Name: ${fullName}`,
      `Email: ${email}`,
      `Phone: ${phone || 'Not provided'}`,
      `Interested in: ${interest || 'Not specified'}`,
      '',
      'Message:',
      message
    ].join('\n')
  })

  return { ok: true }
})
