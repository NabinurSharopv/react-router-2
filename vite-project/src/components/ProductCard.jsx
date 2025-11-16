import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

// product.image contains inline SVG data-URIs provided by mockApi

const ProductCard = ({ product }) => {
  const { addToCart } = useCart()
  const [added, setAdded] = useState(false)

  const handleAddToCart = () => {
    addToCart(product, 1)
    setAdded(true)
    setTimeout(() => setAdded(false), 1200)
  }

  return (
    <article className="bg-white border rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition relative flex flex-col">
      <Link to={`/product/${product.id}`} className="block relative">
        <img
          src={product.image}
          alt={product.name}
          style={{ width: '100%', height: 160, objectFit: 'cover', display: 'block', backgroundColor: '#fafafa' }}
          onError={(e) => { /* inline SVGs should render; no fallback needed */ }}
        />
        <div className="absolute left-3 top-3 bg-white/90 px-2 py-1 rounded text-xs font-medium">{product.brand}</div>
        <button className="absolute right-3 top-3 bg-white/90 rounded-full w-8 h-8 flex items-center justify-center">♡</button>
      </Link>

      <div className="p-3 flex-1 flex flex-col">
        <h3 className="text-sm font-medium line-clamp-2 mb-2">{product.name}</h3>
        <p className="text-xs text-gray-500 mb-3">{product.category} • {product.country}</p>

        <div className="mt-auto">
          <div className="flex items-baseline justify-between gap-3 mb-3">
            <div className="text-uzum text-lg font-bold">{product.price.toLocaleString()} so'm</div>
            <div className="text-sm text-gray-500">15% chegirma</div>
          </div>

          <button onClick={handleAddToCart} className={`w-full py-3 rounded-lg text-white font-semibold ${added ? 'bg-green-500' : 'bg-uzum hover:bg-uzum-dark'}`}>
            {added ? 'Qo\'shildi' : "Online sotib olish"}
          </button>
        </div>
      </div>
    </article>
  )
}

export default ProductCard
