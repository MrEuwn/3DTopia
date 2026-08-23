// Vercel Serverless Function — POST /api/contact
// Uses Resend's plain REST API via fetch (no extra npm package needed).
// Configure these in your Vercel project's Environment Variables:
//   RESEND_API_KEY   — from https://resend.com (free tier is enough to start)
//   CONTACT_TO_EMAIL — the inbox that should receive messages, e.g. hello@3dtopia.studio
//
// Until RESEND_API_KEY is set, submissions are simply logged (visible in
// `vercel dev` output or your Vercel Function Logs) so nothing breaks —
// the form will still say "Sent!" to the visitor.

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { name, email, subject, message, company } = req.body || {}

  // Honeypot: real visitors never fill this hidden field in.
  if (company) {
    return res.status(200).json({ ok: true })
  }

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email, and message are required.' })
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: 'Please provide a valid email address.' })
  }

  const apiKey = process.env.RESEND_API_KEY
  const toEmail = process.env.CONTACT_TO_EMAIL || 'hello@3dtopia.studio'

  if (!apiKey) {
    console.log('[contact form] RESEND_API_KEY not set — logging submission instead of emailing:', {
      name, email, subject, message,
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
        // Resend requires the "from" address to be on a domain you've
        // verified with them. Until you do, their shared sandbox address
        // works for testing.
        from: process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev',
        to: toEmail,
        reply_to: email,
        subject: `[3DTopia Contact] ${subject || 'New message'} — ${name}`,
        text: `From: ${name} <${email}>\nSubject: ${subject || '(none)'}\n\n${message}`,
      }),
    })

    if (!resendRes.ok) {
      const errText = await resendRes.text()
      console.error('[contact form] Resend error:', errText)
      return res.status(502).json({ error: 'Failed to send email right now. Please try again shortly.' })
    }

    return res.status(200).json({ ok: true, delivered: true })
  } catch (err) {
    console.error('[contact form] Unexpected error:', err)
    return res.status(500).json({ error: 'Something went wrong on our end.' })
  }
}
