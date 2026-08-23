// Simple stroke-based icon set (currentColor) used as placeholders for
// product photography. Swap the corresponding image in /public/images/products/
// and these disappear automatically — see ProductVisual.jsx.

export function Paw() {
  return (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M12 20 c-6-4-9-7-9-11 a5 5 0 0 1 9-3 a5 5 0 0 1 9 3 c0 4-3 7-9 11Z" />
    </svg>
  )
}

export function Cat() {
  return (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <ellipse cx="12" cy="14" rx="8" ry="6" />
      <circle cx="7" cy="8" r="1.6" fill="currentColor" stroke="none" />
      <path d="M4 12 L2 8 M20 12 L22 8" />
    </svg>
  )
}

export function Corgi() {
  return (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <ellipse cx="12" cy="13" rx="7" ry="6" />
      <path d="M7 8 L5 3 M17 8 L19 3" />
      <path d="M9 18 v2 M15 18 v2" />
      <circle cx="12" cy="16.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function Owl() {
  return (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M6 4 L9 8 M18 4 L15 8" />
      <ellipse cx="12" cy="13" rx="7" ry="8" />
      <circle cx="9" cy="11" r="2" />
      <circle cx="15" cy="11" r="2" />
      <path d="M12 14 l1.4 2 h-2.8 Z" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function EggPan() {
  return (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <rect x="4" y="9" width="16" height="9" rx="2" />
      <circle cx="12" cy="13" r="3" fill="currentColor" stroke="none" />
      <path d="M20 12 h3" />
    </svg>
  )
}

export function Avocado() {
  return (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M12 3 C8 5 6 9 6 13 a6 6 0 0 0 12 0 c0-4-2-8-6-10Z" />
      <circle cx="12" cy="14" r="2.6" />
    </svg>
  )
}

export function BubbleTea() {
  return (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M7 8 h10 l-1.2 11 a2 2 0 0 1-2 1.8 h-3.6 a2 2 0 0 1-2-1.8 Z" />
      <path d="M6 8 h12 M12 2 v3" />
      <circle cx="10" cy="16" r="0.9" fill="currentColor" stroke="none" />
      <circle cx="13" cy="17.2" r="0.9" fill="currentColor" stroke="none" />
      <circle cx="11.2" cy="18.4" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function Letters() {
  return (
    <div className="flex items-center gap-1 px-2">
      {['A', 'B', 'C'].map((l) => (
        <svg key={l} width="18" height="30" viewBox="0 0 18 30">
          <text x="0" y="20" fontFamily="Be Vietnam Pro" fontWeight="700" fontSize="14" fill="currentColor">
            {l}
          </text>
        </svg>
      ))}
    </div>
  )
}

export function Charm() {
  return (
    <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M12 3 l2.2 4.6 5 0.7 -3.6 3.6 0.9 5 -4.5-2.4 -4.5 2.4 0.9-5 -3.6-3.6 5-0.7Z" />
    </svg>
  )
}

export function Mountain() {
  return (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M4 18 L8 6 L12 18 L16 6 L20 18" />
    </svg>
  )
}

export function Succulent() {
  return (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 3 C9 6 7 9 7 12 a5 5 0 0 0 10 0 c0 -3 -2 -6 -5 -9 Z" />
    </svg>
  )
}

export function Moon() {
  return (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M15 4 a8 8 0 1 0 0 16 a10 10 0 0 1 0-16Z" />
    </svg>
  )
}

export function Butterfly() {
  return (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 5 v14" />
      <path d="M12 8 C9 5 4 6 4 10 c0 3 4 3 8 1" />
      <path d="M12 8 C15 5 20 6 20 10 c0 3-4 3-8 1" />
      <path d="M12 13 C9 16 5 15 5 18 c0 2 3 2 7 0" />
      <path d="M12 13 C15 16 19 15 19 18 c0 2-3 2-7 0" />
    </svg>
  )
}

export function Script() {
  return (
    <svg width="90" height="40" viewBox="0 0 90 40">
      <text x="0" y="28" fontFamily="Plus Jakarta Sans" fontSize="22" fontStyle="italic" fill="currentColor">
        Aa
      </text>
    </svg>
  )
}

export function Blob() {
  return (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <circle cx="12" cy="12" r="7" />
      <circle cx="12" cy="12" r="2.4" fill="currentColor" stroke="none" />
    </svg>
  )
}

const icons = { Paw, Cat, Corgi, Owl, EggPan, Avocado, BubbleTea, Letters, Charm, Mountain, Succulent, Moon, Butterfly, Script, Blob }
export default icons
