import React, { useState, useEffect, useMemo } from 'react'

// Components
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import ElectricBorder from '../components/Border.jsx'

// Assets
import cinamonImg from '/cinamon.webp'
import pumpkinseedsImg from '/pumpkinseeds.webp'
import honeyImg from '/honey.avif'
import essentialoilImg from '/essential-oil.webp'
import datesImg from '/dates.avif'
import tumericImg from '/tumeric.webp'
import cinnamonpowderImg from '/cinnamon-powder.avif'
import basilImg from '/basil.webp'
import blackpepperImg from '/blackpepper.avif'
import cloveImg from '/clove.avif'
import coconutoilImg from '/coconutoil.avif'
import gingerImg from '/ginger.webp'
import mintImg from '/mint.avif'
import nutmegImg from '/nutmeg.webp'
import oliveoilImg from '/olive.avif'
import thymeImg from '/rhyme.avif'
import rosemaryImg from '/rosemary.webp'
import sheaImg from '/shea.avif'
import vitaminImg from '/vitamin.webp'

/** ─────────────────────────────
 * 🛍️  Product Data
 * ───────────────────────────── */
const PRODUCTS = [
  { id: 1, name: 'Cinnamon', price: 200, img: cinamonImg, description: 'Pure cinnamon sticks, perfect for baking and cooking.', ingredients: '100% Cinnamon', category: 'Spices', rating: 4.5, badge: 'Popular' },
  { id: 2, name: 'Pumpkin Seeds', price: 200, img: pumpkinseedsImg, description: 'Crunchy roasted pumpkin seeds, great for snacking.', ingredients: 'Pumpkin Seeds, Salt', category: 'Seeds', rating: 4.8, badge: 'New' },
  { id: 4, name: 'Honey', price: 200, img: honeyImg, description: 'Natural honey for your tea and snacks.', ingredients: '100% Honey', category: 'Sweeteners', rating: 4.2, badge: 'Discount' },
  { id: 5, name: 'Essential Oil', price: 200, img: essentialoilImg, description: 'Natural essential oil for wellness.', ingredients: '100% Natural Oil', category: 'Oils', rating: 4.2, badge: 'Discount' },
  { id: 6, name: 'Dates', price: 200, img: datesImg, description: 'Sweet dates, rich in fiber.', ingredients: '100% Dates', category: 'Fruits', rating: 4.2, badge: 'Discount' },
  { id: 7, name: 'Cinnamon Powder', price: 200, img: cinnamonpowderImg, description: 'Finely ground cinnamon powder.', ingredients: 'Cinnamon', category: 'Spices', rating: 4.2, badge: 'Discount' },
  { id: 8, name: 'Basil', price: 200, img: basilImg, description: 'Fresh organic basil leaves.', ingredients: '100% Basil', category: 'Herbs', rating: 4.2, badge: 'Discount' },
  { id: 9, name: 'Black Pepper', price: 200, img: blackpepperImg, description: 'Strong and aromatic black pepper seeds.', ingredients: '100% Black Pepper', category: 'Spices', rating: 4.2, badge: 'Discount' },
  { id: 10, name: 'Clove', price: 200, img: cloveImg, description: 'Aromatic cloves used for cooking and health.', ingredients: '100% Clove', category: 'Spices', rating: 4.2, badge: 'Discount' },
  { id: 11, name: 'Coconut Oil', price: 200, img: coconutoilImg, description: 'Pure coconut oil for cooking and skin care.', ingredients: '100% Coconut Oil', category: 'Oils', rating: 4.2, badge: 'Discount' },
  { id: 12, name: 'Ginger', price: 200, img: gingerImg, description: 'Fresh organic ginger roots.', ingredients: '100% Ginger', category: 'Spices', rating: 4.2, badge: 'Discount' },
  { id: 13, name: 'Mint', price: 200, img: mintImg, description: 'Refreshing mint leaves.', ingredients: '100% Mint', category: 'Herbs', rating: 4.2, badge: 'Discount' },
  { id: 14, name: 'Nutmeg', price: 200, img: nutmegImg, description: 'Rich and aromatic nutmeg spice.', ingredients: '100% Nutmeg', category: 'Spices', rating: 4.2, badge: 'Discount' },
  { id: 15, name: 'Olive Oil', price: 200, img: oliveoilImg, description: 'Cold-pressed olive oil.', ingredients: '100% Olive Oil', category: 'Oils', rating: 4.2, badge: 'Discount' },
  { id: 16, name: 'Thyme', price: 200, img: thymeImg, description: 'Dried thyme leaves for seasoning.', ingredients: '100% Thyme', category: 'Herbs', rating: 4.2, badge: 'Discount' },
  { id: 17, name: 'Rosemary', price: 200, img: rosemaryImg, description: 'Fragrant rosemary leaves.', ingredients: '100% Rosemary', category: 'Herbs', rating: 4.2, badge: 'Discount' },
  { id: 18, name: 'Shea Butter', price: 200, img: sheaImg, description: 'Organic shea butter for skin care.', ingredients: '100% Shea Butter', category: 'Natural Products', rating: 4.2, badge: 'Discount' },
  { id: 19, name: 'Vitamin E', price: 200, img: vitaminImg, description: 'Vitamin E oil for skin and wellness.', ingredients: 'Vitamin E', category: 'Oils', rating: 4.2, badge: 'Discount' },
  { id: 20, name: 'Turmeric', price: 200, img: tumericImg, description: 'Organic turmeric powder.', ingredients: '100% Turmeric', category: 'Spices', rating: 4.2, badge: 'New' },
]

const CATEGORIES = ['All', ...new Set(PRODUCTS.map(p => p.category))]

/** ─────────────────────────────
 * 🧠  Product Card
 * ───────────────────────────── */
const ProductCard = React.memo(({ product, onClick }) => (
  <div
    className="bg-white/10 backdrop-blur-md rounded-2xl shadow-lg p-4 flex flex-col justify-center text-center hover:scale-105 transition-transform duration-300 relative w-full sm:w-62"
  >
    <span
      className={`absolute top-2 left-2 px-2 py-1 rounded text-xs font-bold
        ${product.badge === 'New' ? 'bg-green-500' :
        product.badge === 'Popular' ? 'bg-blue-500' :
        product.badge === 'Discount' ? 'bg-red-500' : 'bg-gray-500'}
        text-white`}
    >
      {product.badge}
    </span>

    <img
      src={product.img}
      alt={product.name}
      loading="lazy"
      className="w-50 h-50 object-cover rounded-full mb-4 cursor-pointer"
      onClick={() => onClick(product)}
    />

    <h2 className="text-xl font-semibold mb-2">{product.name}</h2>

    <div>
      <span className="text-yellow-400 mr-2">
        {'★'.repeat(Math.round(product.rating))}
        {'☆'.repeat(5 - Math.round(product.rating))}
      </span>
      <span className="text-sm text-gray-200">{product.rating}</span>
    </div>

    <p className="text-lg mb-4">${product.price}</p>

    <ElectricBorder
      color="#7df9ff"
      speed={0.2}
      chaos={0.2}
      thickness={2}
      style={{ borderRadius: 16 }}
    >
      <button
        onClick={() => onClick(product)}
        className="bg-teal-500 hover:bg-teal-600 text-white w-full px-4 py-2 rounded-lg font-medium transition-colors duration-300 cursor-pointer"
      >
        View Details
      </button>
    </ElectricBorder>
  </div>
))

/** ─────────────────────────────
 * 🧠  Main Component
 * ───────────────────────────── */
const Products = () => {
  const [cart, setCart] = useState([])
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [quantity, setQuantity] = useState(1)
  const [searchInput, setSearchInput] = useState('')
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('All')

  // 🌀 Debounce search
  useEffect(() => {
    const timeout = setTimeout(() => setSearch(searchInput), 300)
    return () => clearTimeout(timeout)
  }, [searchInput])

  // 🛒 Load cart
  useEffect(() => {
    const savedCart = localStorage.getItem('cart')
    if (savedCart) setCart(JSON.parse(savedCart))
  }, [])

  // 💾 Save cart
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  // ⚡ Filtered products
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(
      p =>
        (category === 'All' || p.category === category) &&
        p.name.toLowerCase().includes(search.toLowerCase())
    )
  }, [category, search])

  const openModal = product => {
    setSelectedProduct(product)
    setQuantity(1)
  }
  const closeModal = () => setSelectedProduct(null)

  const addToCart = (product, qty = 1) => {
    setCart(prevCart => {
      const existing = prevCart.find(item => item.id === product.id)
      if (existing) {
        return prevCart.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + qty } : item
        )
      }
      return [...prevCart, { ...product, quantity: qty }]
    })
    closeModal()
  }

  const removeFromCart = id => setCart(prev => prev.filter(item => item.id !== id))
  const cartTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(135deg, #0f2027 0%, #2c5364 100%)' }}>
      <Navbar />
      <h1 className="font-bold text-center text-4xl p-6">What We Sell</h1>

      {/* Category + Search */}
      <div className="flex flex-col md:flex-row items-center justify-between px-6 mb-6 gap-4">
        <select
          value={category}
          onChange={e => setCategory(e.target.value)}
          className="bg-white/10 text-black rounded px-3 py-2"
        >
          {CATEGORIES.map(cat => (
            <option key={cat}>{cat}</option>
          ))}
        </select>

        <input
          type="text"
          placeholder="Search products..."
          value={searchInput}
          onChange={e => setSearchInput(e.target.value)}
          className="bg-white/10 text-white rounded px-3 py-2 w-full md:w-64"
        />
      </div>

      {/* Products */}
      <div className="flex flex-wrap gap-6 justify-center px-2">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} onClick={openModal} />
        ))}
      </div>

      {/* Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-[9999]">
          <div className="bg-white text-gray-900 rounded-2xl shadow-xl p-8 w-full max-w-md relative">
            <button onClick={closeModal} className="absolute top-2 right-2 text-gray-500 hover:text-red-500 text-2xl">&times;</button>

            <img
              src={selectedProduct.img}
              alt={selectedProduct.name}
              loading="lazy"
              className="w-32 h-32 object-cover rounded-xl mx-auto mb-4"
            />
            <h2 className="text-2xl font-bold mb-2">{selectedProduct.name}</h2>

            <p className="mb-2">{selectedProduct.description}</p>
            <p className="mb-2 text-sm"><strong>Ingredients:</strong> {selectedProduct.ingredients}</p>
            <p className="mb-2 text-lg font-bold">${selectedProduct.price}</p>

            <div className="flex items-center mb-4">
              <label htmlFor="qty" className="mr-2 font-medium">Quantity:</label>
              <input
                id="qty"
                type="number"
                min={1}
                value={quantity}
                onChange={e => setQuantity(Number(e.target.value))}
                className="border rounded px-2 py-1 w-16"
              />
            </div>

            <button
              onClick={() => addToCart(selectedProduct, quantity)}
              className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-300 w-full mb-2 cursor-pointer"
            >
              Add to Cart
            </button>
          </div>
        </div>
      )}

      {/* Cart */}
      <div className="mt-10 px-6 max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold mb-3">Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <div className="bg-white/10 p-4 rounded-lg">
            <ul className="space-y-2 mb-4">
              {cart.map(item => (
                <li key={item.id} className="flex justify-between items-center">
                  <span>{item.name} <span className="text-xs text-gray-300">x{item.quantity}</span></span>
                  <span>${item.price * item.quantity}</span>
                  <button onClick={() => removeFromCart(item.id)} className="ml-4 text-red-400 hover:text-red-600 font-bold">Remove</button>
                </li>
              ))}
            </ul>
            <div className="flex justify-between items-center font-bold text-lg mb-4">
              <span>Total:</span>
              <span>${cartTotal}</span>
            </div>
            <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-medium w-full">
              Pay Now
            </button>
          </div>
        )}
      </div>

      <Footer />
    </div>
  )
}

export default Products
