export default function FilterPills({ options, active, onChange }) {
  return (
    <div className="flex flex-wrap justify-center gap-3">
      {options.map((opt, i) => (
        <button
          key={opt}
          type="button"
          onClick={() => onChange(i)}
          className={`filter-pill px-5 py-2 rounded-full font-label-md text-label-sm border ${
            active === i
              ? 'bg-primary text-on-primary border-primary'
              : 'border-outline-variant text-on-surface-variant'
          }`}
        >
          {opt}
        </button>
      ))}
    </div>
  )
}
