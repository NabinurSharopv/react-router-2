import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, clearCart, totalPrice, totalItems } = useCart()

  if (cart.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Satyesi</h1>
        <div className="text-center py-8">
          <p className="text-gray-500 text-lg mb-4">Satyesi bo'sh</p>
          <Link to="/" className="text-uzum hover:underline">
            Mahsulotlarga qaytish
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Satyesi</h1>

      <div className="space-y-4 mb-8">
        {cart.map(item => (
          <div key={item.id} className="flex gap-4 border rounded-lg p-4 bg-white">
            <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded" />
            <div className="flex-1">
              <h3 className="font-semibold text-lg">{item.name}</h3>
              <p className="text-gray-600">{item.description}</p>
              <p className="text-lg font-bold text-uzum mt-2">
                {(item.price * item.quantity).toLocaleString('en-US')} so'm
              </p>
            </div>

            <div className="flex flex-col items-end gap-2">
              <div className="flex items-center gap-2 border rounded">
                <button
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  className="px-2 py-1 hover:bg-gray-100"
                >
                  -
                </button>
                <span className="px-3 py-1">{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="px-2 py-1 hover:bg-gray-100"
                >
                  +
                </button>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-600 hover:text-red-800 text-sm"
              >
                O'chirish
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="border-t pt-4">
        <div className="flex justify-between items-center mb-4">
          <span className="text-lg">Jami mahsulot:</span>
          <span className="text-lg font-semibold">{totalItems} ta</span>
        </div>
        <div className="flex justify-between items-center mb-6">
          <span className="text-xl font-bold">Jami narx:</span>
          <span className="text-2xl font-bold text-uzum">
            {totalPrice.toLocaleString('en-US')} so'm
          </span>
        </div>

        <div className="flex gap-4">
          <button
            onClick={clearCart}
            className="flex-1 px-4 py-2 border border-gray-300 rounded hover:bg-gray-50"
          >
            Satyesini tozalash
          </button>
          <button className="flex-1 px-4 py-2 bg-uzum text-white rounded hover:bg-uzum-dark">
            Buyurtma berish
          </button>
        </div>

        <Link to="/" className="block text-center mt-4 text-uzum hover:underline">
          Davomini xarid qilish
        </Link>
      </div>
    </div>
  )
}

export default Cart
