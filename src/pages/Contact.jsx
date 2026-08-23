import Reveal from '../components/Reveal.jsx'
import useApiSubmit from '../hooks/useApiSubmit.js'

export default function Contact() {
  const { status, error, handleSubmit } = useApiSubmit('/api/contact')

  return (
    <>
      <section className="px-margin-mobile md:px-gutter max-w-container-max mx-auto text-center pt-12 pb-10 stagger-in">
        <h1 className="font-display-lg text-headline-lg-mobile md:text-display-lg text-primary mb-4">Let&apos;s Create Together</h1>
        <p className="font-body-md text-body-md text-on-surface-variant max-w-xl mx-auto">
          Have a wild idea or a custom project in mind? We&apos;d love to hear from you. Reach out through any of our
          channels below and let&apos;s make it 3D.
        </p>
      </section>

      <section className="px-margin-mobile md:px-gutter max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 pb-section-gap-md">
        {/* Form */}
        <Reveal as="form" onSubmit={handleSubmit} className="md:col-span-2 bg-surface-container-lowest rounded-xl p-8 shadow-soft-depth space-y-5">
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg mb-2">Send a Message</h2>

          {/* Honeypot — hidden from real visitors, catches simple bots */}
          <input type="text" name="company" tabIndex="-1" autoComplete="off" className="hidden" aria-hidden="true" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="font-label-md text-label-sm text-on-surface-variant mb-1 block">Your Name</label>
              <input required name="name" type="text" placeholder="Joy Crafter" className="form-field w-full rounded-lg border border-outline-variant bg-surface-container-lowest px-4 py-2.5" />
            </div>
            <div>
              <label className="font-label-md text-label-sm text-on-surface-variant mb-1 block">Email Address</label>
              <input required name="email" type="email" placeholder="joy@example.com" className="form-field w-full rounded-lg border border-outline-variant bg-surface-container-lowest px-4 py-2.5" />
            </div>
          </div>
          <div>
            <label className="font-label-md text-label-sm text-on-surface-variant mb-1 block">Subject (Optional)</label>
            <select name="subject" defaultValue="Custom Order Inquiry" className="form-field w-full rounded-lg border border-outline-variant bg-surface-container-lowest px-4 py-2.5">
              <option>Custom Order Inquiry</option>
              <option>Product Question</option>
              <option>Shipping &amp; Order Status</option>
              <option>Partnership / Wholesale</option>
            </select>
          </div>
          <div>
            <label className="font-label-md text-label-sm text-on-surface-variant mb-1 block">Your Message</label>
            <textarea required name="message" rows="5" placeholder="Tell us about your 3D printing dreams..." className="form-field w-full rounded-lg border border-outline-variant bg-surface-container-lowest px-4 py-2.5" />
          </div>

          {status === 'error' && (
            <p className="text-error text-label-sm font-label-md">{error}</p>
          )}

          <button
            type="submit"
            disabled={status === 'sending' || status === 'sent'}
            className="btn-pill inline-flex items-center gap-2 bg-primary text-on-primary font-label-md text-label-md px-7 py-3 rounded-full disabled:opacity-70"
          >
            {status === 'sending' && 'Sending…'}
            {status === 'sent' && (
              <>
                <span className="material-symbols-outlined text-base align-middle">check_circle</span> Sent!
              </>
            )}
            {(status === 'idle' || status === 'error') && (
              <>
                Send Message <span className="material-symbols-outlined text-base">send</span>
              </>
            )}
          </button>
        </Reveal>

        {/* Channels */}
        <div className="space-y-5">
          <Reveal>
            <a
              href="https://wa.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="card-lift flex items-center justify-between gap-4 bg-secondary-container rounded-lg p-6 shadow-soft-depth"
            >
              <div className="flex items-center gap-4">
                <span className="w-12 h-12 rounded-full bg-white/70 flex items-center justify-center">
                  <span className="material-symbols-outlined icon-pop text-on-secondary-container">chat</span>
                </span>
                <div>
                  <h3 className="font-headline-md text-body-md font-bold text-on-secondary-container">WhatsApp</h3>
                  <p className="text-label-sm text-on-secondary-container/80">Quick chats &amp; updates</p>
                </div>
              </div>
              <span className="material-symbols-outlined text-on-secondary-container">arrow_forward</span>
            </a>
          </Reveal>
          <Reveal delay={80}>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="card-lift flex items-center justify-between gap-4 bg-primary-container rounded-lg p-6 shadow-soft-depth"
            >
              <div className="flex items-center gap-4">
                <span className="w-12 h-12 rounded-full bg-white/70 flex items-center justify-center">
                  <span className="material-symbols-outlined icon-pop text-on-primary-container">photo_camera</span>
                </span>
                <div>
                  <h3 className="font-headline-md text-body-md font-bold text-on-primary-container">Instagram</h3>
                  <p className="text-label-sm text-on-primary-container/80">See our latest work</p>
                </div>
              </div>
              <span className="material-symbols-outlined text-on-primary-container">arrow_forward</span>
            </a>
          </Reveal>
          <Reveal delay={160}>
            <a href="mailto:hello@3dtopia.studio" className="card-lift flex items-center justify-between gap-4 bg-lavender-accent rounded-lg p-6 shadow-soft-depth">
              <div className="flex items-center gap-4">
                <span className="w-12 h-12 rounded-full bg-white/70 flex items-center justify-center">
                  <span className="material-symbols-outlined icon-pop text-on-tertiary-container">mail</span>
                </span>
                <div>
                  <h3 className="font-headline-md text-body-md font-bold text-on-tertiary-container">Email Us</h3>
                  <p className="text-label-sm text-on-tertiary-container/80">hello@3dtopia.studio</p>
                </div>
              </div>
              <span className="material-symbols-outlined text-on-tertiary-container">arrow_forward</span>
            </a>
          </Reveal>
        </div>
      </section>

      <div className="wave-divider h-5 opacity-50 my-6 mx-auto max-w-2xl"></div>

      {/* Studio */}
      <Reveal as="section" className="px-margin-mobile md:px-gutter max-w-container-max mx-auto pb-section-gap-lg text-center">
        <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg mb-8">Visit Our Studio</h2>
        <div className="relative max-w-2xl mx-auto rounded-xl overflow-hidden shadow-soft-depth bg-secondary-container h-64 flex items-center justify-center">
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage:
                'repeating-linear-gradient(0deg, transparent, transparent 24px, rgba(0,0,0,.06) 25px), repeating-linear-gradient(90deg, transparent, transparent 24px, rgba(0,0,0,.06) 25px)',
            }}
          />
          <div className="relative z-10 bg-surface-container-lowest rounded-lg p-6 shadow-soft-depth max-w-xs">
            <span className="material-symbols-outlined text-primary text-3xl float-slow inline-block mb-2">location_on</span>
            <h3 className="font-headline-md text-body-md font-bold text-primary mb-1">3DTopia Studio</h3>
            <p className="text-label-sm text-on-surface-variant">
              123 Creative Lane, Artisan District
              <br />
              Surabaya, East Java, Indonesia
            </p>
            <p className="text-label-sm text-primary font-label-md mt-2">By appointment only</p>
          </div>
        </div>
      </Reveal>
    </>
  )
}
