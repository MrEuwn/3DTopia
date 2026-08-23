import { Link } from 'react-router-dom'
import HeartToggle from './HeartToggle.jsx'
import ProductVisual from './ProductVisual.jsx'
import Reveal from './Reveal.jsx'
import { formatIDR } from '../data/products.js'

export default function ProductCard({ product, delay = 0 }) {
  return (
    <Reveal delay={delay} className="card-lift bg-surface-container-lowest rounded-lg overflow-hidden shadow-soft-depth relative">
      {product.badge && (
        <span className="absolute top-3 left-3 z-10 bg-soft-yellow text-on-tertiary-container text-label-sm font-label-md px-3 py-1 rounded-full">
          {product.badge}
        </span>
      )}
      <HeartToggle />
      <div className="h-40">
        <ProductVisual image={product.image} icon={product.icon} bg={product.bg} iconColor={product.iconColor} />
      </div>
      <div className="p-5">
        {product.collection && <p className="text-label-sm text-on-surface-variant mb-1">{product.collection}</p>}
        <h3 className="font-headline-md text-body-md font-bold mb-1">{product.name}</h3>
        {product.blurb && <p className="text-label-sm text-on-surface-variant mb-3">{product.blurb}</p>}
        <div className={`flex justify-between items-center ${product.blurb ? '' : 'mt-2'}`}>
          <span className="font-headline-md text-body-md text-primary">
            {product.priceFrom ? `Mulai ${formatIDR(product.price)}` : formatIDR(product.price)}
          </span>
          {product.customizable ? (
            <Link to="/custom" className="btn-pill text-label-sm font-label-md bg-primary text-on-primary px-4 py-1.5 rounded-full">
              Custom
            </Link>
          ) : (
            <button
              type="button"
              aria-label={`Add ${product.name} to cart`}
              className="btn-pill w-9 h-9 flex items-center justify-center rounded-full bg-secondary-container text-on-secondary-container"
            >
              <span className="material-symbols-outlined text-lg">shopping_bag</span>
            </button>
          )}
        </div>
      </div>
    </Reveal>
  )
}
