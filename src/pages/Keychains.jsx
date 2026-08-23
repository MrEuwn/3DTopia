import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'
import FilterPills from '../components/FilterPills.jsx'
import ProductCard from '../components/ProductCard.jsx'
import { keychainFilters, keychainProducts, formatIDR } from '../data/products.js'

export default function Keychains() {
  const [activeFilter, setActiveFilter] = useState(0)

  const visible = useMemo(() => {
    if (activeFilter === 0) return keychainProducts
    const category = keychainFilters[activeFilter]
    return keychainProducts.filter((p) => p.category === category)
  }, [activeFilter])

  return (
    <>
      <section className="px-margin-mobile md:px-gutter max-w-container-max mx-auto text-center pt-12 pb-8 stagger-in">
        <h1 className="font-headline-lg text-headline-lg-mobile md:text-display-lg text-primary mb-4">Our Keychain Collection</h1>
        <p className="font-body-md text-body-md text-on-surface-variant max-w-xl mx-auto mb-8">
          Discover our lovingly crafted 3D printed keychains. From fandom favorites to custom initials, find the
          perfect little companion for your keys or bag.
        </p>
        <FilterPills options={keychainFilters} active={activeFilter} onChange={setActiveFilter} />
      </section>

      <section className="px-margin-mobile md:px-gutter max-w-container-max mx-auto pb-section-gap-md">
        {/* Two hand-crafted featured cards, shown when "All" or "Fandom" is active */}
        {(activeFilter === 0 || keychainFilters[activeFilter] === 'Fandom') && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <Reveal className="card-lift bg-surface-container-lowest rounded-lg overflow-hidden shadow-soft-depth relative">
              <span className="absolute top-3 left-3 z-10 bg-soft-yellow text-on-tertiary-container text-label-sm font-label-md px-3 py-1 rounded-full">
                Bestseller
              </span>
              <div className="craft-tile h-40 bg-primary-fixed flex items-center justify-center">
                <svg width="46" height="46" viewBox="0 0 24 24" fill="none" stroke="#713949" strokeWidth="1.6">
                  <circle cx="9" cy="9" r="5" />
                  <circle cx="9" cy="9" r="1.6" fill="#713949" />
                  <path d="M13 13 L20 20 M17 17 l2 -2 M19 19 l1.5 -1.5" />
                </svg>
              </div>
              <div className="p-5">
                <p className="text-label-sm text-on-surface-variant mb-1">Fandom Collection</p>
                <h3 className="font-headline-md text-body-md font-bold mb-2">ARMY Bomb Lightstick</h3>
                <div className="flex justify-between items-center">
                  <span className="font-headline-md text-body-md text-primary">{formatIDR(45000)}</span>
                  <button className="btn-pill w-9 h-9 flex items-center justify-center rounded-full bg-secondary-container text-on-secondary-container">
                    <span className="material-symbols-outlined text-lg">shopping_bag</span>
                  </button>
                </div>
              </div>
            </Reveal>

            <Reveal delay={60} className="card-lift bg-surface-container-lowest rounded-lg overflow-hidden shadow-soft-depth">
              <div className="craft-tile h-40 bg-lavender-accent flex items-center justify-center gap-1 px-3">
                {['C', 'L', 'A', 'R', 'A'].map((letter, i) => (
                  <svg key={i} width="18" height="30" viewBox="0 0 18 30">
                    <text x="0" y="20" fontFamily="Be Vietnam Pro" fontWeight="700" fontSize="14" fill="#55483a">
                      {letter}
                    </text>
                  </svg>
                ))}
              </div>
              <div className="p-5">
                <p className="text-label-sm text-on-surface-variant mb-1">Personalized</p>
                <h3 className="font-headline-md text-body-md font-bold mb-2">Custom Letter Block</h3>
                <div className="flex justify-between items-center">
                  <span className="font-headline-md text-body-md text-primary">Mulai {formatIDR(25000)}</span>
                  <Link to="/custom" className="btn-outline text-label-sm font-label-md border border-primary text-primary px-4 py-1.5 rounded-full">
                    Customize
                  </Link>
                </div>
              </div>
            </Reveal>

            <Reveal delay={120} className="card-lift bg-primary-container rounded-lg overflow-hidden shadow-soft-depth flex">
              <div className="p-6 flex flex-col justify-center">
                <h3 className="font-headline-md text-headline-md text-on-primary-container mb-2">The BTS Arirang Set</h3>
                <p className="text-label-sm text-on-primary-container/80 mb-4">
                  Collect all the signature emblems. Perfectly designed for ARMYs to showcase their pride.
                </p>
                <p className="font-headline-md text-body-md text-on-primary-container mb-4">{formatIDR(150000)} / set of 8</p>
                <button className="btn-pill self-start bg-primary text-on-primary text-label-sm font-label-md px-5 py-2 rounded-full">
                  View Full Set
                </button>
              </div>
            </Reveal>
          </div>
        )}

        {visible.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {visible.map((p, i) => (
              <ProductCard key={p.id} product={p} delay={(i % 3) * 60} />
            ))}
          </div>
        ) : (
          <p className="text-center text-on-surface-variant py-10">No designs in this category yet — check back soon!</p>
        )}
      </section>

      {/* Custom CTA banner */}
      <section className="px-margin-mobile md:px-gutter max-w-container-max mx-auto pb-section-gap-lg">
        <Reveal className="bg-cream-bg rounded-xl md:rounded-[40px] px-8 md:px-16 py-12 flex flex-col md:flex-row items-center justify-between gap-6 shadow-soft-depth">
          <div>
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg mb-2">Want something completely unique?</h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
              We do custom commissions! Whether it&apos;s a corporate logo, a specific character, or an inside joke,
              we can model and print it for you.
            </p>
          </div>
          <Link
            to="/custom"
            className="btn-pill shrink-0 inline-flex items-center gap-2 bg-primary text-on-primary font-label-md text-label-md px-6 py-3 rounded-full active:scale-95"
          >
            Start a Custom Project <span className="material-symbols-outlined text-base">arrow_forward</span>
          </Link>
        </Reveal>
      </section>
    </>
  )
}
