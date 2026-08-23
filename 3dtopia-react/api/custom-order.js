// Vercel Serverless Function — POST /api/custom-order
// Same setup as /api/contact.js — see that file for the RESEND_API_KEY /
// CONTACT_TO_EMAIL environment variables. You can point custom orders to a
// different inbox with ORDER_TO_EMAIL if you'd like to keep them separate.

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { name, email, projectType, details, company } = req.body || {}

  if (company) {
    return res.status(200).json({ ok: true })
  }

  if (!name || !email || !details) {
    return res.status(400).json({ error: 'Name, email, and project details are required.' })
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: 'Please provide a valid email address.' })
  }

  const apiKey = process.env.RESEND_API_KEY
  const toEmail = process.env.ORDER_TO_EMAIL || process.env.CONTACT_TO_EMAIL || 'hello@3dtopia.studio'

  if (!apiKey) {
    console.log('[custom order] RESEND_API_KEY not set — logging submission instead of emailing:', {
      name, email, projectType, details,
    })
    return res.status(200).json({ ok: true, delivered: false })
  }

  try {
    const resendRes = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev',
        to: toEmail,
        reply_to: email,
        subject: `[3DTopia Custom Order] ${projectType || 'New request'} — ${name}`,
        text: `From: ${name} <${email}>\nProject type: ${projectType || '(none)'}\n\n${details}`,
      }),
    })

    if (!resendRes.ok) {
      const errText = await resendRes.text()
      console.error('[custom order] Resend error:', errText)
      return res.status(502).json({ error: 'Failed to send your request right now. Please try again shortly.' })
    }

    return res.status(200).json({ ok: true, delivered: true })
  } catch (err) {
    console.error('[custom order] Unexpected error:', err)
    return res.status(500).json({ error: 'Something went wrong on our end.' })
  }
}
