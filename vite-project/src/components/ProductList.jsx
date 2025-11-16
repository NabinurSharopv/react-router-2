import React, { useEffect, useMemo, useState } from 'react'
import { getProducts } from '../api/mockApi'
import ProductCard from './ProductCard'
import Filters from './Filters'

const defaultFilters = () => ({ category: null, minPrice: null, maxPrice: null, colors: new Set(), brands: new Set(), countries: new Set() })

const ProductList = () => {
  const [all, setAll] = useState([])
  const [loading, setLoading] = useState(true)
  const [filters, setFilters] = useState(defaultFilters)

  useEffect(() => {
    let mounted = true
    getProducts().then(data => {
      if (mounted) setAll(data)
    }).finally(() => mounted && setLoading(false))
    return () => { mounted = false }
  }, [])

  const filtered = useMemo(() => {
    if (!all || all.length === 0) return []
    return all.filter(p => {
      if (filters.category && p.category !== filters.category) return false
      if (filters.minPrice != null && p.price < filters.minPrice) return false
      if (filters.maxPrice != null && p.price > filters.maxPrice) return false
      if (filters.colors.size > 0) {
        if (!p.colors || !p.colors.some(c => filters.colors.has(c))) return false
      }
      if (filters.brands.size > 0 && !filters.brands.has(p.brand)) return false
      if (filters.countries.size > 0 && !filters.countries.has(p.country)) return false
      return true
    })
  }, [all, filters])

  const handleFiltersChange = (next) => {
    // ensure sets remain sets
    const copy = { ...next, colors: new Set(next.colors), brands: new Set(next.brands), countries: new Set(next.countries) }
    setFilters(copy)
  }

  const handleReset = () => setFilters(defaultFilters())

  if (loading) return <p>Yuklanmoqda...</p>

  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex items-center justify-between py-6">
        <h2 className="text-2xl font-semibold">Mahsulotlar</h2>
        <div className="text-sm text-gray-600">{filtered.length} ta mahsulot</div>
      </div>

      <div className="flex gap-6 items-start">
        <div className="hidden lg:block w-72">
          <Filters products={all} filters={filters} onChange={handleFiltersChange} onReset={handleReset} />
        </div>

        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 flex-1">
          {filtered.length === 0 ? <p>Mahsulot topilmadi</p> : filtered.map(p => (
            <ProductCard key={p.id} product={p} />
          ))}
        </section>
      </div>
    </div>
  )
}

export default ProductList
