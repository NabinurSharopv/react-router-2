// Simple mock API for Uzum Market (filter-ready data)
const products = [
  {
    id: '1',
    name: 'Sovun',
    price: 29000,
    image: 'https://images.uzum.uz/cufjfdc5j42bjc4bt33g/t_product_540_high.jpg',
    description: 'Toza, yangi qizil uzum. 1kg narxi.',
    category: 'Gel',
    colors: ['Qizil'],
    brand: 'DeMe',
    country: 'O‘zbekiston'
  },
  {
    id: '2',
    name: 'Olma Sharbat',
    price: 45000,
    image: '	https://images.uzum.uz/cdegc7rb3ho5lmur853g/t_product_540_high.jpg',
    description: 'Tabiiy uzum sharbat, konservantsiz.',
    category: 'Ichimlik',
    colors: ['Sariq'],
    brand: 'UzumCo',
    country: 'Qozog‘iston'
  },
  {
    id: '3',
    name: 'Garnerdan toralash',
    price: 31000,
    image: 'https://images.uzum.uz/cudks5ei4n324lr773m0/t_product_540_high.jpg',
    description: 'Soglom uzumdan tayyorlangan choy.',
    category: 'Yuz uchun',
    colors: ['Yashil'],
    brand: 'TeaM',
    country: 'Rossiya'
  },
  {
    id: '4',
    name: 'Samsung A17 5G',
    price: 880000,
    image: 'https://images.uzum.uz/d36inlr4eu2s0bgio3pg/t_product_540_high.jpg',
    description: 'Tez qiziydigan elektr choynak.',
    category: 'Barcha uy jihozlari',
    colors: ['Oq','Qora'],
    brand: 'Keller',
    country: 'Xitoy'
  },
  {
    id: '5',
    name: 'Shirin makkajuxori ',
    price: 20000,
    image: '	https://images.uzum.uz/ct9eulviub3d1eoko990/t_product_540_high.jpg',
    description: 'Kichik oilaviy muzlatgich.',
    category: 'Barcha uy jihozlari',
    colors: ['Oq'],
    brand: 'HomeCool',
    country: 'Xitoy'
  },
  {
    id: '6',
    name: 'KOnserva',
    price: 12000,
    image: '	https://images.uzum.uz/clqopkl6sfhsc0uo0n90/t_product_540_high.jpg',
    description: 'Toza va shirin qand.',
    category: 'Oziq-ovqat',
    colors: ['Sariq'],
    brand: 'Sweet',
    country: 'O‘zbekiston'
  },
    {
    id: '6',
    name: 'Shampun',
    price: 25000,
    image: '	https://images.uzum.uz/cudj54ui4n324lr764tg/t_product_540_high.jpg',
    description: 'Toza va shirin qand.',
    category: 'Oziq-ovqat',
    colors: ['Sariq'],
    brand: 'Sweet',
    country: 'O‘zbekiston'
  },
      {
    id: '6',
    name: 'Choknak',
    price: 94000,
    image: 'https://images.uzum.uz/d13s8rj3uvppu2ab4qn0/t_product_540_high.jpg',
    description: 'Toza va shirin qand.',
    category: 'Oziq-ovqat',
    colors: ['Sariq'],
    brand: 'Sweet',
    country: 'O‘zbekiston'
  }
]

function fakeDelay(result, ms = 200) {
  return new Promise((resolve) => setTimeout(() => resolve(result), ms))
}

export function getProducts() {
  // return all fields so UI can filter
  return fakeDelay(products.slice())
}

export function getProductById(id) {
  const p = products.find(x => x.id === String(id))
  return fakeDelay(p || null)
}

export default { getProducts, getProductById }
