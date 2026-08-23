import Reveal from '../components/Reveal.jsx'
import useApiSubmit from '../hooks/useApiSubmit.js'

export default function Custom() {
  const { status, error, handleSubmit } = useApiSubmit('/api/custom-order')

  return (
    <>
      {/* Hero */}
      <section className="px-margin-mobile md:px-gutter max-w-container-max mx-auto pt-10">
        <Reveal className="bg-primary-container rounded-xl md:rounded-[40px] p-8 md:p-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center overflow-hidden relative">
          <span className="sparkle material-symbols-outlined text-on-primary-container/50 text-2xl" style={{ top: '8%', right: '12%' }}>
            auto_awesome
          </span>
          <div>
            <span className="inline-block bg-surface-container-lowest/70 text-on-primary-container font-label-md text-label-sm px-4 py-1.5 rounded-full mb-4">
              Bring Ideas to Life
            </span>
            <h1 className="font-display-lg text-headline-lg-mobile md:text-headline-lg text-on-primary-container mb-4">
              Start Your <span className="text-primary">Custom</span> Project
            </h1>
            <p className="font-body-md text-body-md text-on-primary-container/80 mb-8 max-w-md">
              From imagination to creation, we bring your unique ideas to life with precision 3D printing. Perfect
              for gifts, corporate souvenirs, or personal collections.
            </p>
            <a
              href="#build-it"
              className="btn-pill inline-flex items-center gap-2 bg-primary text-on-primary font-label-md text-label-md px-7 py-3 rounded-full active:scale-95"
            >
              Start a Custom Project <span className="material-symbols-outlined text-base">arrow_forward</span>
            </a>
          </div>
          <div className="grid grid-cols-4 gap-2 bg-surface-container-lowest rounded-lg p-3 shadow-soft-depth">
            <div className="craft-tile bg-primary-fixed rounded aspect-square flex items-center justify-center">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#713949" strokeWidth="1.8"><rect x="4" y="4" width="16" height="16" rx="3" /></svg>
            </div>
            <div className="craft-tile bg-soft-yellow rounded aspect-square flex items-center justify-center">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#55483a" strokeWidth="1.8"><path d="M12 2 L15 9 L12 14 L9 9 Z" /></svg>
            </div>
            <div className="craft-tile bg-secondary-container rounded aspect-square flex items-center justify-center">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#58674f" strokeWidth="1.8"><rect x="4" y="10" width="16" height="7" rx="2" /></svg>
            </div>
            <div className="craft-tile bg-lavender-accent rounded aspect-square flex items-center justify-center">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#55483a" strokeWidth="1.8"><circle cx="12" cy="12" r="7" /></svg>
            </div>
            <div className="craft-tile bg-tertiary-fixed rounded aspect-square flex items-center justify-center">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#514537" strokeWidth="1.8"><path d="M4 18 L8 6 L12 18 L16 6 L20 18" /></svg>
            </div>
            <div className="craft-tile bg-primary-container rounded aspect-square flex items-center justify-center">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#713949" strokeWidth="1.8"><circle cx="12" cy="12" r="7" /><circle cx="12" cy="12" r="2.4" fill="#713949" /></svg>
            </div>
            <div className="craft-tile bg-secondary-fixed rounded aspect-square flex items-center justify-center">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#3c4b35" strokeWidth="1.8"><path d="M12 3 C9 6 7 9 7 12 a5 5 0 0 0 10 0 c0 -3 -2 -6 -5 -9 Z" /></svg>
            </div>
            <div className="craft-tile bg-tertiary-container rounded aspect-square flex items-center justify-center">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#55483a" strokeWidth="1.8"><rect x="5" y="5" width="14" height="14" rx="7" /></svg>
            </div>
          </div>
        </Reveal>
      </section>

      <div className="wave-divider h-5 opacity-50 my-12 mx-auto max-w-md"></div>

      {/* How it works */}
      <section className="px-margin-mobile md:px-gutter max-w-container-max mx-auto pb-section-gap-md text-center">
        <Reveal as="h2" className="font-headline-lg text-headline-lg-mobile md:text-headline-lg mb-3">
          How It Works
        </Reveal>
        <Reveal as="p" className="font-body-md text-body-md text-on-surface-variant max-w-lg mx-auto mb-12">
          Your custom creation is just a few steps away. We make the process simple and collaborative.
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          <Reveal className="card-lift bg-surface-container-low rounded-lg p-8 shadow-soft-depth">
            <div className="w-10 h-10 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center font-headline-md font-bold mb-4">1</div>
            <span className="material-symbols-outlined text-primary text-3xl mb-3 block">lightbulb</span>
            <h3 className="font-headline-md text-body-md font-bold mb-2">Share Your Idea</h3>
            <p className="text-body-md text-on-surface-variant">
              Tell us what you want to create. Send sketches, reference images, or just a detailed description.
            </p>
          </Reveal>
          <Reveal delay={80} className="card-lift bg-surface-container-low rounded-lg p-8 shadow-soft-depth">
            <div className="w-10 h-10 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center font-headline-md font-bold mb-4">2</div>
            <span className="material-symbols-outlined text-secondary text-3xl mb-3 block">design_services</span>
            <h3 className="font-headline-md text-body-md font-bold mb-2">Design &amp; Quote</h3>
            <p className="text-body-md text-on-surface-variant">
              We&apos;ll review your idea, provide a 3D mock-up, and send you a detailed quote and timeline.
            </p>
          </Reveal>
          <Reveal delay={160} className="card-lift bg-surface-container-low rounded-lg p-8 shadow-soft-depth">
            <div className="w-10 h-10 rounded-full bg-tertiary-container text-on-tertiary-container flex items-center justify-center font-headline-md font-bold mb-4">3</div>
            <span className="material-symbols-outlined text-tertiary text-3xl mb-3 block">local_shipping</span>
            <h3 className="font-headline-md text-body-md font-bold mb-2">Print &amp; Deliver</h3>
            <p className="text-body-md text-on-surface-variant">
              Once approved, we print your masterpiece with care and ship it directly to your door.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Form */}
      <section id="build-it" className="px-margin-mobile md:px-gutter max-w-container-max mx-auto pb-section-gap-lg">
        <Reveal className="bg-cream-bg rounded-xl md:rounded-[40px] p-8 md:p-14 max-w-2xl mx-auto shadow-soft-depth">
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-center mb-2">Let&apos;s Build It</h2>
          <p className="font-body-md text-body-md text-on-surface-variant text-center mb-8">
            Fill out the form below or reach out directly to start your custom 3D printing journey.
          </p>
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Honeypot — hidden from real visitors, catches simple bots */}
            <input type="text" name="company" tabIndex="-1" autoComplete="off" className="hidden" aria-hidden="true" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="font-label-md text-label-sm text-on-surface-variant mb-1 block">Name</label>
                <input required name="name" type="text" placeholder="Your Name" className="form-field w-full rounded-lg border border-outline-variant bg-surface-container-lowest px-4 py-2.5" />
              </div>
              <div>
                <label className="font-label-md text-label-sm text-on-surface-variant mb-1 block">Email</label>
                <input required name="email" type="email" placeholder="your@email.com" className="form-field w-full rounded-lg border border-outline-variant bg-surface-container-lowest px-4 py-2.5" />
              </div>
            </div>
            <div>
              <label className="font-label-md text-label-sm text-on-surface-variant mb-1 block">Project Type</label>
              <select name="projectType" defaultValue="Personalized Gift" className="form-field w-full rounded-lg border border-outline-variant bg-surface-container-lowest px-4 py-2.5">
                <option>Personalized Gift</option>
                <option>Corporate Souvenir</option>
                <option>Collectible / Fandom Merch</option>
                <option>Something Else</option>
              </select>
            </div>
            <div>
              <label className="font-label-md text-label-sm text-on-surface-variant mb-1 block">Project Details</label>
              <textarea required name="details" rows="4" placeholder="Describe your idea in detail..." className="form-field w-full rounded-lg border border-outline-variant bg-surface-container-lowest px-4 py-2.5" />
            </div>

            {status === 'error' && (
              <p className="text-error text-label-sm font-label-md">{error}</p>
            )}

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                type="submit"
                disabled={status === 'sending' || status === 'sent'}
                className="btn-pill flex-1 bg-primary text-on-primary font-label-md text-label-md py-3 rounded-full inline-flex items-center justify-center gap-2 disabled:opacity-70"
              >
                {status === 'sending' && 'Sending…'}
                {status === 'sent' && (
                  <>
                    <span className="material-symbols-outlined text-base align-middle">check_circle</span> Sent!
                  </>
                )}
                {(status === 'idle' || status === 'error') && 'Submit Request'}
              </button>
              <a
                href="https://wa.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pill flex-1 flex items-center justify-center gap-2 bg-secondary text-on-secondary font-label-md text-label-md py-3 rounded-full"
              >
                <span className="material-symbols-outlined text-base">chat</span> WhatsApp Us
              </a>
            </div>
          </form>
        </Reveal>
      </section>
    </>
  )
}
