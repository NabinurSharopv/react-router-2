// Simple mock API for Uzum Market (filter-ready data)
const products = [
  {
    id: '1',
    name: 'Sovun',
    price: 29000,
    image: 'https://images.uzum.uz/cufjfdc5j42bjc4bt33g/t_product_540_high.jpg',
    description: 'Toza, yangi qizil uzum. 1kg narxi.',
    category: 'Meva',
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
    name: 'Uzum Choy',
    price: 18000,
    image: 'https://images.uzum.uz/cufjfdc5j42bjc4bt33g/t_product_540_high.jpg',
    description: 'Soglom uzumdan tayyorlangan choy.',
    category: 'Ichimlik',
    colors: ['Yashil'],
    brand: 'TeaM',
    country: 'Rossiya'
  },
  {
    id: '4',
    name: 'Elektr choynak',
    price: 880000,
    image: 'https://images.uzum.uz/cufjfdc5j42bjc4bt33g/t_product_540_high.jpg',
    description: 'Tez qiziydigan elektr choynak.',
    category: 'Barcha uy jihozlari',
    colors: ['Oq','Qora'],
    brand: 'Keller',
    country: 'Xitoy'
  },
  {
    id: '5',
    name: 'Muzlatgich kichik',
    price: 3200000,
    image: 'https://images.uzum.uz/cufjfdc5j42bjc4bt33g/t_product_540_high.jpg',
    description: 'Kichik oilaviy muzlatgich.',
    category: 'Barcha uy jihozlari',
    colors: ['Oq'],
    brand: 'HomeCool',
    country: 'Xitoy'
  },
  {
    id: '6',
    name: 'Qand',
    price: 12000,
    image: 'https://images.uzum.uz/cufjfdc5j42bjc4bt33g/t_product_540_high.jpg',
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
