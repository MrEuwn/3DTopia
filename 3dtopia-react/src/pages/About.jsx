import Reveal from '../components/Reveal.jsx'

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="py-section-gap-md md:py-section-gap-lg px-margin-mobile md:px-gutter max-w-container-max mx-auto text-center stagger-in">
        <span className="font-label-md text-label-md text-primary tracking-widest uppercase mb-4 block">Our Story</span>
        <h1 className="font-display-lg text-headline-lg-mobile md:text-display-lg text-on-background mb-6 max-w-3xl mx-auto">
          Bringing Imagination to Life in <span className="text-primary">3D</span>
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-10">
          We are a creative 3D printing studio dedicated to crafting unique, personalized pieces, custom projects, and
          delightful collectibles that bring joy to your everyday life.
        </p>
        <div className="relative w-full h-[320px] md:h-[500px] rounded-xl overflow-hidden shadow-soft-depth bg-primary-fixed">
          <div className="grid grid-cols-3 md:grid-cols-6 gap-1 absolute inset-0 opacity-70">
            <div className="bg-tertiary-container"></div>
            <div className="bg-primary-container"></div>
            <div className="bg-soft-yellow"></div>
            <div className="bg-secondary-container"></div>
            <div className="bg-lavender-accent"></div>
            <div className="bg-tertiary-fixed"></div>
          </div>
          <div className="relative z-10 h-full flex flex-col items-center justify-center gap-3">
            <span className="material-symbols-outlined text-on-primary-fixed-variant text-6xl float-slow">
              precision_manufacturing
            </span>
            <p className="font-headline-md text-headline-md text-on-primary-fixed-variant">
              Our workshop, where every layer is printed with care
            </p>
          </div>
        </div>
      </section>

      <div className="w-full h-5 wave-divider opacity-50 my-10"></div>

      {/* Mission & Craft */}
      <Reveal
        as="section"
        className="py-section-gap-md px-margin-mobile md:px-gutter max-w-container-max mx-auto bg-cream-bg rounded-xl md:rounded-[40px] my-section-gap-md"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center p-8 md:p-16">
          <div>
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-background mb-6">
              Where Ideas Come to Life
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant mb-6">
              Every piece at 3DTopia begins with a spark of creativity. Our mission is to bridge the gap between
              imagination and physical reality, using precision technology guided by an artisan&apos;s touch.
            </p>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Whether it&apos;s a bespoke gift, a custom corporate souvenir, or a whimsical collectible to brighten
              your desk, we pour love and meticulous detail into every layer printed.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="craft-tile card-lift w-full h-48 rounded-lg shadow-soft-depth bg-primary-container flex items-center justify-center">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#713949" strokeWidth="1.5">
                  <path d="M12 3 C9 6 7 9 7 12 a5 5 0 0 0 10 0 c0 -3 -2 -6 -5 -9 Z" />
                </svg>
              </div>
              <div className="bg-primary-container p-6 rounded-lg text-center shadow-soft-depth">
                <span className="material-symbols-outlined icon-pop text-on-primary-container text-4xl mb-2">palette</span>
                <h3 className="font-label-md text-label-md text-on-primary-container">Custom Colors</h3>
              </div>
            </div>
            <div className="space-y-4 mt-8">
              <div className="bg-secondary-container p-6 rounded-lg text-center shadow-soft-depth">
                <span className="material-symbols-outlined icon-pop text-on-secondary-container text-4xl mb-2">
                  precision_manufacturing
                </span>
                <h3 className="font-label-md text-label-md text-on-secondary-container">High Precision</h3>
              </div>
              <div className="craft-tile card-lift w-full h-48 rounded-lg shadow-soft-depth bg-secondary-container flex items-center justify-center gap-2">
                <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#58674f" strokeWidth="1.6">
                  <rect x="4" y="10" width="14" height="9" rx="2" />
                  <path d="M8 10V6h6v4" />
                </svg>
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#58674f" strokeWidth="1.6">
                  <circle cx="12" cy="12" r="7" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </Reveal>

      {/* Values */}
      <section className="py-section-gap-md px-margin-mobile md:px-gutter max-w-container-max mx-auto">
        <Reveal as="h2" className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-center mb-4">
          What Guides Us
        </Reveal>
        <Reveal as="p" className="font-body-md text-body-md text-on-surface-variant text-center max-w-xl mx-auto mb-12">
          Three principles shape every piece that leaves our studio.
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Reveal className="card-lift bg-surface-container-low p-8 rounded-lg shadow-soft-depth">
            <span className="material-symbols-outlined icon-pop text-primary text-4xl mb-4 block">favorite</span>
            <h3 className="font-headline-md text-body-md font-bold mb-2">Made with Joy</h3>
            <p className="text-body-md text-on-surface-variant">
              Every order is treated like a small celebration, not just a transaction.
            </p>
          </Reveal>
          <Reveal delay={80} className="card-lift bg-surface-container-low p-8 rounded-lg shadow-soft-depth">
            <span className="material-symbols-outlined icon-pop text-secondary text-4xl mb-4 block">verified</span>
            <h3 className="font-headline-md text-body-md font-bold mb-2">Precision First</h3>
            <p className="text-body-md text-on-surface-variant">
              Clean layers, tight tolerances, and quality checks before anything ships.
            </p>
          </Reveal>
          <Reveal delay={160} className="card-lift bg-surface-container-low p-8 rounded-lg shadow-soft-depth">
            <span className="material-symbols-outlined icon-pop text-tertiary text-4xl mb-4 block">diversity_2</span>
            <h3 className="font-headline-md text-body-md font-bold mb-2">Made for You</h3>
            <p className="text-body-md text-on-surface-variant">Custom by default &mdash; your idea, your colors, your story.</p>
          </Reveal>
        </div>
      </section>
    </>
  )
}
