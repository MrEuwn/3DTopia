import { useMemo, useState } from 'react'
import Reveal from '../components/Reveal.jsx'
import FilterPills from '../components/FilterPills.jsx'
import ProductCard from '../components/ProductCard.jsx'
import { bookmarkFilters, bookmarkProducts, formatIDR } from '../data/products.js'

export default function Bookmarks() {
  const [activeFilter, setActiveFilter] = useState(0)

  const visible = useMemo(() => {
    if (activeFilter === 0) return bookmarkProducts
    const category = bookmarkFilters[activeFilter]
    return bookmarkProducts.filter((p) => p.category === category)
  }, [activeFilter])

  return (
    <>
      <section className="px-margin-mobile md:px-gutter max-w-container-max mx-auto text-center pt-12 pb-8 stagger-in">
        <h1 className="font-headline-lg text-headline-lg-mobile md:text-display-lg text-primary mb-4">Designer Bookmarks</h1>
        <p className="font-body-md text-body-md text-on-surface-variant max-w-xl mx-auto mb-8">
          Discover our collection of whimsical, 3D-printed bookmarks. Perfect for saving your spot in style or gifting
          to the bookworm in your life.
        </p>
        <FilterPills options={bookmarkFilters} active={activeFilter} onChange={setActiveFilter} />
      </section>

      <section className="px-margin-mobile md:px-gutter max-w-container-max mx-auto pb-section-gap-md">
        {/* Featured banner — shown only when "All Designs" or "Nature" is active */}
        {(activeFilter === 0 || bookmarkFilters[activeFilter] === 'Nature') && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <Reveal className="md:col-span-2 card-lift bg-surface-container-lowest rounded-lg overflow-hidden shadow-soft-depth relative">
              <span className="absolute top-4 left-4 z-10 bg-lavender-accent text-on-tertiary-container text-label-sm font-label-md px-3 py-1 rounded-full flex items-center gap-1">
                <span className="material-symbols-outlined text-sm">star</span> Featured Collection
              </span>
              <div className="craft-tile h-48 bg-primary-container flex items-center justify-center">
                <svg width="72" height="72" viewBox="0 0 24 24" fill="none" stroke="#713949" strokeWidth="1.4">
                  <path d="M6 3h12v18l-6-4-6 4Z" />
                </svg>
              </div>
              <div className="p-6 flex justify-between items-center gap-4">
                <div>
                  <h3 className="font-headline-md text-body-md font-bold mb-1">Sakura Bookmark Set</h3>
                  <p className="text-label-sm text-on-surface-variant">
                    A complete set of layered cherry-blossom designs, hand-finished in soft pastels.
                  </p>
                </div>
                <div className="text-right shrink-0">
                  <p className="font-headline-md text-body-md text-primary mb-2">{formatIDR(95000)}</p>
                  <button className="btn-pill bg-primary text-on-primary text-label-sm font-label-md px-4 py-2 rounded-full inline-flex items-center gap-1">
                    View Set <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </button>
                </div>
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

        {/* Pagination (visual only — wire up to real pagination once your catalog grows) */}
        <div className="flex justify-center items-center gap-2 mt-12">
          <button className="w-9 h-9 flex items-center justify-center rounded-full text-on-surface-variant/40">
            <span className="material-symbols-outlined">chevron_left</span>
          </button>
          <button className="btn-pill w-9 h-9 flex items-center justify-center rounded-full bg-primary text-on-primary font-label-md">1</button>
          <button className="w-9 h-9 flex items-center justify-center rounded-full text-primary">
            <span className="material-symbols-outlined">chevron_right</span>
          </button>
        </div>
      </section>
    </>
  )
}
