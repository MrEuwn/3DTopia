import { useState } from 'react'
import icons from './ProductIcons.jsx'

/**
 * Drop a real photo into /public/images/products/<name>.jpg matching the
 * `image` path in src/data/products.js and it will be used automatically.
 * Until then (or if the file is missing), this renders a soft illustrated
 * placeholder instead of a broken image icon.
 */
export default function ProductVisual({ image, icon = 'Blob', bg = 'bg-primary-container', iconColor = 'text-on-primary-container' }) {
  const [failed, setFailed] = useState(false)
  const Icon = icons[icon] || icons.Blob

  if (image && !failed) {
    return (
      <img
        src={image}
        alt=""
        onError={() => setFailed(true)}
        className="w-full h-full object-cover"
      />
    )
  }

  return (
    <div className={`craft-tile w-full h-full flex items-center justify-center ${bg} ${iconColor}`}>
      <Icon />
    </div>
  )
}
