import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

const Header = () => {
  const { totalItems } = useCart()

  return (
    <header className="border-b bg-white">
      <div className="bg-uzum px-4 py-1 text-sm text-white">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div>Olib ketish punktlari • Yetkazib berish</div>
          <div className="flex items-center gap-4">
            <button className="text-white/90 text-sm">Savol-javob</button>
            <button className="text-white/90 text-sm">Sotuvchi bo'ling</button>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center gap-6">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-uzum font-bold">U</div>
          <div>
            <div className="text-lg font-bold text-uzum">Uzum Market</div>
            <div className="text-xs text-gray-500">Onlayn do'kon</div>
          </div>
        </Link>

        <div className="flex-1">
          <div className="relative">
            <input placeholder="Izlash: mahsulot, brend..." className="w-full rounded-lg border p-3 pl-4 pr-36 shadow-sm" />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-uzum text-white px-4 py-2 rounded-lg">Qidirish</button>
          </div>
        </div>

        <nav className="flex items-center gap-4">
          <Link to="/" className="text-sm text-gray-600 hover:text-uzum">Katalog</Link>
          <Link to="/cart" className="relative text-gray-600 hover:text-uzum flex items-center gap-2">
            <span className="text-2xl">🛒</span>
            <span className="hidden sm:inline">Savat</span>
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>
        </nav>
      </div>

      <div className="border-t">
        <div className="max-w-6xl mx-auto px-4 py-3 flex gap-4 items-center overflow-x-auto">
          <button className="px-3 py-1 rounded-full text-sm bg-white border">Barcha kategoriyalar</button>
          <button className="px-3 py-1 rounded-full text-sm text-gray-600">Barcha mahsulotlar</button>
          <button className="px-3 py-1 rounded-full text-sm text-gray-600">Barcha brendlar</button>
        </div>
      </div>
    </header>
  )
}

export default Header
