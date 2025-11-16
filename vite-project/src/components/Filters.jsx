import React, { useMemo } from 'react'

const CheckboxList = ({ title, options, selectedSet, onToggle }) => (
  <div className="mb-4">
    <h4 className="text-sm font-medium mb-2">{title}</h4>
    <div className="flex flex-col gap-2">
      {options.map(opt => (
        <label key={opt} className="flex items-center gap-2 text-sm">
          <input
            type="checkbox"
            checked={selectedSet.has(opt)}
            onChange={() => onToggle(opt)}
            className="w-4 h-4"
          />
          <span>{opt}</span>
        </label>
      ))}
    </div>
  </div>
)

const Filters = ({ products, filters, onChange, onReset }) => {
  // derive options
  const { categories, colors, brands, countries, priceRange } = useMemo(() => {
    const cats = new Set()
    const cols = new Set()
    const brs = new Set()
    const con = new Set()
    let min = Infinity, max = -Infinity
    for (const p of products) {
      cats.add(p.category)
      p.colors?.forEach(c => cols.add(c))
      brs.add(p.brand)
      con.add(p.country)
      if (p.price < min) min = p.price
      if (p.price > max) max = p.price
    }
    if (!isFinite(min)) min = 0
    if (!isFinite(max)) max = 0
    return { categories: Array.from(cats), colors: Array.from(cols), brands: Array.from(brs), countries: Array.from(con), priceRange: { min, max } }
  }, [products])

  const setCategory = (value) => onChange({ ...filters, category: value })
  const toggleSet = (key, value) => {
    const s = new Set(filters[key])
    if (s.has(value)) s.delete(value)
    else s.add(value)
    onChange({ ...filters, [key]: s })
  }

  return (
    <aside className="w-64 p-4 bg-white border rounded-md shadow-sm">
      <div className="mb-4">
        <h4 className="text-sm font-medium mb-2">Kategoriyalar</h4>
        <div className="flex flex-col gap-2">
          <label className="flex items-center gap-2 text-sm">
            <input type="radio" name="category" checked={!filters.category} onChange={() => setCategory(null)} className="w-4 h-4" />
            <span>Hammasi</span>
          </label>
          {categories.map(c => (
            <label key={c} className="flex items-center gap-2 text-sm">
              <input type="radio" name="category" checked={filters.category === c} onChange={() => setCategory(c)} className="w-4 h-4" />
              <span>{c}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <h4 className="text-sm font-medium mb-2">Narx, so'm</h4>
        <div className="flex gap-2">
          <input type="number" value={filters.minPrice ?? ''} placeholder={priceRange.min} onChange={e => onChange({ ...filters, minPrice: e.target.value ? Number(e.target.value) : null })} className="w-1/2 p-1 border rounded" />
          <input type="number" value={filters.maxPrice ?? ''} placeholder={priceRange.max} onChange={e => onChange({ ...filters, maxPrice: e.target.value ? Number(e.target.value) : null })} className="w-1/2 p-1 border rounded" />
        </div>
      </div>

      <CheckboxList title="Rang" options={colors} selectedSet={filters.colors} onToggle={(v) => toggleSet('colors', v)} />
      <CheckboxList title="Brend" options={brands} selectedSet={filters.brands} onToggle={(v) => toggleSet('brands', v)} />
      <CheckboxList title="Davlat" options={countries} selectedSet={filters.countries} onToggle={(v) => toggleSet('countries', v)} />

      <div className="mt-3">
        <button className="w-full px-3 py-2 bg-uzum text-white rounded" onClick={onReset}>Tozalash</button>
      </div>
    </aside>
  )
}

export default Filters
