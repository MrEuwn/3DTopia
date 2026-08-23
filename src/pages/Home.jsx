import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'

const CATEGORIES = [
  { to: '/keychains', icon: 'key', bg: 'bg-primary-fixed', text: 'text-on-primary-fixed-variant', textFaint: 'text-on-primary-fixed-variant/70', title: 'Custom Creations', desc: 'Personalized pieces made just for you' },
  { to: '/bookmarks', icon: 'bookmark', bg: 'bg-soft-yellow', text: 'text-on-tertiary-container', textFaint: 'text-on-tertiary-container/70', title: 'Collectibles', desc: 'Fun pieces to collect and display' },
  { to: '/custom', icon: 'potted_plant', bg: 'bg-secondary-container', text: 'text-on-secondary-container', textFaint: 'text-on-secondary-container/70', title: 'Everyday Goods', desc: 'Useful creations for everyday life' },
  { to: '/custom', icon: 'redeem', bg: 'bg-lavender-accent', text: 'text-on-tertiary-container', textFaint: 'text-on-tertiary-container/70', title: 'Event & Merchandise', desc: 'Made for fandoms, brands and events' },
]

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative px-margin-mobile md:px-gutter max-w-container-max mx-auto pt-10 pb-section-gap-md overflow-hidden">
        <div className="relative rounded-xl md:rounded-[40px] bg-primary-fixed overflow-hidden">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-1 absolute inset-0 opacity-40">
            <div className="bg-tertiary-container"></div>
            <div className="bg-primary-container"></div>
            <div className="bg-soft-yellow"></div>
            <div className="bg-secondary-container"></div>
            <div className="bg-lavender-accent"></div>
            <div className="bg-tertiary-fixed"></div>
            <div className="bg-primary-fixed-dim"></div>
            <div className="bg-secondary-fixed"></div>
          </div>
          <div className="relative z-10 px-8 md:px-16 py-16 md:py-24 stagger-in">
            <span className="font-label-md text-label-md text-on-primary-fixed-variant tracking-widest uppercase mb-3 block">
              Welcome to
            </span>
            <h1 className="font-display-lg text-headline-lg-mobile md:text-display-lg text-on-background mb-4">3DTopia</h1>
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-background/80 mb-6 max-w-2xl underline decoration-primary/40 underline-offset-8">
              Where ideas come to life in 3D
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl mb-10">
              A creative 3D printing studio crafting unique pieces, custom projects, collectibles, and more &mdash; made
              with joy, one layer at a time.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/custom"
                className="btn-pill inline-flex items-center gap-2 font-label-md text-label-md bg-primary text-on-primary px-7 py-3 rounded-full active:scale-95"
              >
                Explore Our Creator <span className="material-symbols-outlined text-base">arrow_forward</span>
              </Link>
              <Link
                to="/about"
                className="btn-outline inline-flex items-center font-label-md text-label-md border-2 border-primary text-primary px-7 py-3 rounded-full"
              >
                Learn More
              </Link>
            </div>
          </div>
          <span className="sparkle material-symbols-outlined text-deep-rose text-3xl" style={{ top: '12%', right: '10%' }}>
            auto_awesome
          </span>
          <span
            className="sparkle material-symbols-outlined text-lavender-accent text-2xl"
            style={{ bottom: '16%', right: '20%', animationDelay: '1.1s' }}
          >
            auto_awesome
          </span>
        </div>
      </section>

      {/* Category cards */}
      <section className="px-margin-mobile md:px-gutter max-w-container-max mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 mb-section-gap-md">
        {CATEGORIES.map((c, i) => (
          <Reveal key={c.title} delay={i * 60}>
            <Link to={c.to} className={`card-lift block ${c.bg} rounded-lg p-6 shadow-soft-depth`}>
              <span className={`material-symbols-outlined icon-pop ${c.text} text-4xl mb-3 block`}>{c.icon}</span>
              <h3 className={`font-headline-md text-body-md font-bold ${c.text} mb-1`}>{c.title}</h3>
              <p className={`text-label-sm ${c.textFaint} mb-3`}>{c.desc}</p>
              <span className={`font-label-md text-label-sm ${c.text} inline-flex items-center gap-1`}>
                Explore <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </span>
            </Link>
          </Reveal>
        ))}
      </section>

      <div className="w-full h-5 wave-divider opacity-60 my-2"></div>

      {/* Feature creations */}
      <section className="py-section-gap-md px-margin-mobile md:px-gutter max-w-container-max mx-auto">
        <Reveal as="h2" className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-center mb-12">
          Feature Creations
        </Reveal>
        <Reveal className="grid grid-cols-2 md:grid-cols-4 gap-5">
          <div className="craft-tile card-lift bg-primary-container rounded-lg h-40 flex items-center justify-center shadow-soft-depth">
            <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="#713949" strokeWidth="1.6">
              <circle cx="12" cy="12" r="7" />
              <circle cx="12" cy="12" r="2.4" fill="#713949" />
            </svg>
          </div>
          <div className="craft-tile card-lift bg-soft-yellow rounded-lg h-40 flex items-center justify-center shadow-soft-depth">
            <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="#55483a" strokeWidth="1.6">
              <path d="M12 2 L15 9 L12 14 L9 9 Z" />
              <circle cx="12" cy="17" r="3" />
            </svg>
          </div>
          <div className="craft-tile card-lift bg-secondary-container rounded-lg h-40 flex items-center justify-center shadow-soft-depth">
            <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="#58674f" strokeWidth="1.6">
              <rect x="4" y="10" width="16" height="7" rx="2" />
              <path d="M8 10 V6 h8 v4" />
            </svg>
          </div>
          <div className="craft-tile card-lift bg-lavender-accent rounded-lg h-40 flex items-center justify-center shadow-soft-depth">
            <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="#55483a" strokeWidth="1.6">
              <path d="M4 18 L8 6 L12 18 L16 6 L20 18" />
            </svg>
          </div>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="px-margin-mobile md:px-gutter max-w-container-max mx-auto mb-section-gap-lg">
        <Reveal className="relative bg-primary-container rounded-xl md:rounded-[40px] px-8 md:px-16 py-14 md:py-20 text-center overflow-hidden shadow-soft-depth">
          <span className="sparkle material-symbols-outlined text-on-primary-container/60 text-2xl" style={{ top: '10%', left: '8%' }}>
            auto_awesome
          </span>
          <span
            className="sparkle material-symbols-outlined text-on-primary-container/60 text-2xl"
            style={{ bottom: '14%', right: '10%', animationDelay: '1.3s' }}
          >
            auto_awesome
          </span>
          <span className="material-symbols-outlined text-on-primary-container text-5xl mb-4 float-slow inline-block">
            lightbulb
          </span>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-primary-container mb-3">
            Have an idea? Let&rsquo;s make it 3D.
          </h2>
          <p className="font-body-md text-body-md text-on-primary-container/80 max-w-lg mx-auto mb-8">
            From imagination to creation, we bring your ideas to life &mdash; one print at a time.
          </p>
          <Link
            to="/custom"
            className="btn-pill inline-flex items-center gap-2 font-label-md text-label-md bg-primary text-on-primary px-7 py-3 rounded-full active:scale-95"
          >
            Start a Custom Project <span className="material-symbols-outlined text-base">arrow_forward</span>
          </Link>
        </Reveal>
      </section>
    </>
  )
}
