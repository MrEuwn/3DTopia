import { useState } from 'react'

/**
 * Submits a form to a given API endpoint (e.g. '/api/contact') as JSON.
 * Requires each field to have a `name` attribute matching what the
 * corresponding /api function expects.
 *
 * Note: the /api routes only run when deployed on Vercel or under
 * `vercel dev` — plain `npm run dev` (Vite only) won't serve them, so
 * submissions will fail locally unless you use `vercel dev` instead.
 */
export default function useApiSubmit(endpoint) {
  const [status, setStatus] = useState('idle') // idle | sending | sent | error
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = e.target
    const data = Object.fromEntries(new FormData(form).entries())

    setStatus('sending')
    setError('')
    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      const body = await res.json().catch(() => ({}))
      if (!res.ok) throw new Error(body.error || 'Something went wrong. Please try again.')

      setStatus('sent')
      form.reset()
      setTimeout(() => setStatus('idle'), 3000)
    } catch (err) {
      setStatus('error')
      setError(err.message || 'Something went wrong. Please try again.')
      setTimeout(() => setStatus('idle'), 4000)
    }
  }

  return { status, error, handleSubmit }
}
