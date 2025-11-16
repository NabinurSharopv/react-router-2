import React, { useEffect, useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { getProductById } from '../api/mockApi'
import { useCart } from '../context/CartContext'

const ProductDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { addToCart } = useCart()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [quantity, setQuantity] = useState(1)
  const [added, setAdded] = useState(false)

  useEffect(() => {
    let mounted = true
    getProductById(id).then(p => {
      if (mounted) setProduct(p)
    }).finally(() => mounted && setLoading(false))
    return () => { mounted = false }
  }, [id])

  if (loading) return <p>Yuklanmoqda...</p>
  if (!product) return <p>Mahsulot topilmadi</p>
  const handleAddToCart = () => {
    addToCart(product, quantity)
    setAdded(true)
    setTimeout(() => {
      setAdded(false)
      navigate('/cart')
    }, 1500)
  }


  const placeholder = 'https://via.placeholder.com/640x480.png?text=No+image'
  return (
    <article className="max-w-5xl mx-auto p-4 grid grid-cols-1 md:grid-cols-3 gap-6">
      <img
        src={product.image}
        alt={product.name}
        className="detail-image col-span-1 md:col-span-1 w-full h-64 object-cover rounded"
        onError={(e) => { e.currentTarget.src = placeholder }}
      />
      <div className="detail-info md:col-span-2">
        <h2 className="text-2xl font-semibold">{product.name}</h2>
        <p className="text-sm text-gray-600 mt-1">{product.brand} • {product.country}</p>
        <p className="price text-uzum font-bold text-2xl mt-4">{product.price.toLocaleString()} so'm</p>
        <p className="mt-4 text-gray-700">{product.description}</p>
        
        <div className="mt-6 space-y-4">
          <div className="flex items-center gap-4">
            <span className="font-semibold">Soni:</span>
            <div className="flex items-center border rounded">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-3 py-1 hover:bg-gray-100"
              >
                -
              </button>
              <span className="px-4 py-1">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="px-3 py-1 hover:bg-gray-100"
              >
                +
              </button>
            </div>
          </div>

          <div className="flex gap-3">
            <button
              onClick={handleAddToCart}
              className={`flex-1 px-4 py-3 rounded font-semibold text-white transition ${
                added
                  ? 'bg-green-500'
                  : 'bg-uzum hover:bg-uzum-dark'
              }`}
            >
              {added ? '✓ Satyesiga qo\'shildi' : 'Satyesiga qo\'shish'}
            </button>
            <Link to="/" className="px-4 py-3 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 font-semibold">
              Orqaga
            </Link>
          </div>
        </div>
      </div>
    </article>
  )
}

export default ProductDetail
