import nodemailer from 'nodemailer'

export function getTransport() {
  const config = useRuntimeConfig()

  if (!config.smtpHost || !config.smtpUser || !config.smtpPass) {
    return null
  }

  return nodemailer.createTransport({
    host: config.smtpHost,
    port: Number(config.smtpPort) || 587,
    secure: Number(config.smtpPort) === 465,
    auth: {
      user: config.smtpUser,
      pass: config.smtpPass
    }
  })
}

export function getRecipient() {
  const config = useRuntimeConfig()
  return config.contactToEmail || config.smtpUser || ''
}
