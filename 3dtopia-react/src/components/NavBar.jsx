import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/bookmarks', label: 'Bookmarks' },
  { to: '/keychains', label: 'Keychains' },
  { to: '/custom', label: 'Custom' },
  { to: '/contact', label: 'Contact' },
]

export default function NavBar() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  return (
    <header className="fixed top-0 w-full z-50 bg-surface/60 backdrop-blur-md shadow-sm">
      <div className="flex justify-between items-center px-gutter py-4 max-w-container-max mx-auto">
        <Link to="/" className="font-display-lg text-headline-md font-extrabold tracking-tight text-primary">
          3DTopia
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {LINKS.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`nav-link font-body-md text-body-md transition-colors duration-200 ${
                pathname === l.to ? 'active text-primary' : 'text-on-surface-variant hover:text-primary'
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label="Search"
            className="hidden md:flex items-center justify-center w-10 h-10 rounded-full hover:bg-primary-container/20 transition-all duration-300 text-primary"
          >
            <span className="material-symbols-outlined">search</span>
          </button>
          <Link
            to="/bookmarks"
            className="btn-pill hidden sm:inline-flex font-label-md text-label-md bg-primary text-on-primary px-6 py-2 rounded-full active:scale-95"
          >
            Shop Now
          </Link>
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((o) => !o)}
            className="md:hidden w-10 h-10 flex items-center justify-center text-primary"
          >
            <span className="material-symbols-outlined">{open ? 'close' : 'menu'}</span>
          </button>
        </div>
      </div>

      <div className={`mobile-menu md:hidden bg-surface border-t border-outline-variant/30 ${open ? 'open' : ''}`}>
        <nav className="flex flex-col px-gutter py-2">
          {LINKS.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className={`py-3 ${pathname === l.to ? 'text-primary font-bold' : 'text-on-surface-variant'}`}
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
