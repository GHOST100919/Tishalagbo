import React, { useState, useEffect, useMemo } from 'react'

// Components
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import ElectricBorder from '../components/border.jsx'
// Assets
import cinamonImg from '/cinamon.webp'
import pumpkinseedsImg from '/pumpkinseeds.webp'
import spicesImg from '/spices.avif'
import honeyImg from '/honey.avif'
import essentialoilImg from '/essential-oil.webp'
import datesImg from '/dates.avif'
import tumericImg from '/tumeric.webp'
import cinnamonpowderImg from '/cinnamon-powder.avif'

/** ─────────────────────────────
 * 🛍️  Product Data
 * ───────────────────────────── */
const PRODUCTS = [
  { id: 1, name: 'Cinnamon', price: 200, img: cinamonImg, description: 'Pure cinnamon sticks, perfect for baking and cooking.', ingredients: '100% Cinnamon', category: 'Spices', rating: 4.5, badge: 'Popular' },
  { id: 2, name: 'Pumpkin Seeds', price: 200, img: pumpkinseedsImg, description: 'Crunchy roasted pumpkin seeds, great for snacking.', ingredients: 'Pumpkin Seeds, Salt', category: 'Seeds', rating: 4.8, badge: 'New' },
  { id: 3, name: 'Spices', price: 200, img: spicesImg, description: 'A blend of aromatic spices for all your recipes.', ingredients: 'Cinnamon, Cloves, Cardamom', category: 'Spices', rating: 4.2, badge: 'Discount' },
  { id: 4, name: 'Honey', price: 200, img: honeyImg, description: 'Natural honey for your tea and snacks.', ingredients: '100% Honey', category: 'Honey', rating: 4.2, badge: 'Discount' },
  { id: 5, name: 'Essential oil', price: 200, img: essentialoilImg, description: 'Natural essential oil for wellness.', ingredients: '100% Natural Oil', category: 'Oils', rating: 4.2, badge: 'Discount' },
  { id: 6, name: 'Dates', price: 200, img: datesImg, description: 'Sweet dates, rich in fiber.', ingredients: '100% Dates', category: 'Seeds', rating: 4.2, badge: 'Discount' },
  { id: 7, name: 'Cinnamon powder', price: 200, img: cinnamonpowderImg, description: 'Finely ground cinnamon powder.', ingredients: 'Cinnamon', category: 'Spices', rating: 4.2, badge: 'Discount' },
  { id: 8, name: 'Tumeric', price: 200, img: tumericImg, description: 'Organic turmeric powder.', ingredients: '100% Tumeric', category: 'Spices', rating: 4.2, badge: 'Discount' },
]

const CATEGORIES = ['All', ...new Set(PRODUCTS.map(p => p.category))]

/** ─────────────────────────────
 * 🧠  Product Card (Memoized)
 * ───────────────────────────── */
const ProductCard = React.memo(({ product, onClick }) => (
  <ElectricBorder
    color="#7df9ff"
    speed={0.5}   // ⚡ reduced speed for performance
    chaos={0.4}   // ⚡ less chaos for lower GPU usage
    thickness={2}
    style={{ borderRadius: 16 }}
  >
    <div
      className="bg-white/10 backdrop-blur-md rounded-2xl shadow-lg p-4 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300 relative w-full sm:w-72"
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
        loading="lazy"   // ✅ Lazy loading
        className="w-40 h-40 object-cover rounded-xl mb-4 cursor-pointer"
        onClick={() => onClick(product)}
      />

      <h2 className="text-xl font-semibold mb-2">{product.name}</h2>

      <div className="flex items-center justify-center mb-2">
        <span className="text-yellow-400 mr-2">
          {'★'.repeat(Math.round(product.rating))}
          {'☆'.repeat(5 - Math.round(product.rating))}
        </span>
        <span className="text-sm text-gray-200">{product.rating}</span>
      </div>

      <p className="text-lg mb-4">${product.price}</p>

      <button
        onClick={() => onClick(product)}
        className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-300"
      >
        View Details
      </button>
    </div>
  </ElectricBorder>
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
  const [reviews, setReviews] = useState({})

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

  // ⚡ useMemo to avoid recalculating filter every render
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

  const addReview = (id, text, stars) => {
    setReviews(prev => ({
      ...prev,
      [id]: [...(prev[id] || []), { text, stars }],
    }))
  }

  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(135deg, #0f2027 0%, #2c5364 100%)' }}>
      <Navbar />
      <h1 className="font-bold text-center text-4xl p-6">What we sell</h1>

      {/* Category + Search */}
      <div className="flex flex-col md:flex-row items-center justify-between px-6 mb-6 gap-4">
        <select
          value={category}
          onChange={e => setCategory(e.target.value)}
          className="bg-white/10 text-black rounded px-3 py-2"
        >
          {CATEGORIES.map(cat => <option key={cat}>{cat}</option>)}
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
      <div className="flex flex-wrap gap-6 justify-center px-6">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} onClick={openModal} />
        ))}
      </div>

      {/* Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
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
              className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-300 w-full mb-2"
            >
              Add to cart
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
              {cart.map((item, i) => (
                <li key={i} className="flex justify-between items-center">
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
              Checkout
            </button>
          </div>
        )}
      </div>

      <Footer />
    </div>
  )
}


/** ─────────────────────────────
 * 📝 Review Form Component
 * ───────────────────────────── */
function ReviewForm({ productId, addReview }) {
  const [text, setText] = useState('')
  const [stars, setStars] = useState(5)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (text.trim()) {
      addReview(productId, text, stars)
      setText('')
      setStars(5)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <label htmlFor="stars" className="text-sm">Rating:</label>
        <select
          id="stars"
          value={stars}
          onChange={e => setStars(Number(e.target.value))}
          className="border rounded px-2 py-1"
        >
          {[5, 4, 3, 2, 1].map(s => (
            <option key={s} value={s}>{s} Star{s > 1 ? 's' : ''}</option>
          ))}
        </select>
      </div>

      <textarea
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Write a review..."
        className="border rounded px-2 py-1"
        rows={2}
      />

      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded"
      >
        Submit Review
      </button>
    </form>
  )
}

export default Products
