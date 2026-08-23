import { useState } from 'react'

export default function HeartToggle({ className = '' }) {
  const [active, setActive] = useState(false)
  return (
    <button
      type="button"
      aria-label={active ? 'Remove from wishlist' : 'Add to wishlist'}
      onClick={() => setActive((a) => !a)}
      className={`heart-toggle ${active ? 'active' : ''} absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/80 flex items-center justify-center text-on-surface-variant ${className}`}
    >
      <span className="material-symbols-outlined fill-heart text-lg">favorite</span>
    </button>
  )
}
