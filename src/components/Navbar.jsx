import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 50, backdropFilter: 'blur(8px)' }}>
      <nav
        className="p-4 flex flex-col sm:flex-row sm:justify-between sm:items-center"
        style={{ background: 'linear-gradient(90deg, #0f2027 0%, #00ffb3 100%)', color: '#fff', boxShadow: '0 2px 12px #00ffb366', borderBottom: '1.5px solid #00ffb355' }}
      >
        <div className="w-full flex justify-between items-center">
          <div className="flex items-center">
            <button
              className="sm:hidden text-white focus:outline-none"
              style={{ fontSize: 28, background: 'none', border: 'none', cursor: 'pointer', marginRight: '1rem' }}
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              <span style={{ fontWeight: 900 }}>&#9776;</span>
            </button>
            <ul
              className={`flex-col sm:flex-row font-semibold text-lg sm:flex sm:space-x-6 w-full sm:w-auto ${open ? 'flex' : 'hidden'} sm:!flex`}
              style={{
                marginTop: open ? 16 : 0,
                background: open ? 'rgba(15,32,39,0.98)' : 'none',
                borderRadius: open ? '0 0 1rem 1rem' : 0,
                boxShadow: open ? '0 8px 24px #00ffb366' : 'none',
                padding: open ? '1rem 0' : 0,
                alignItems: 'center',
                transition: 'all 0.2s',
              }}
            >
              <Link to='/'>
              <li style={{ cursor: 'pointer', transition: 'color 0.2s', padding: '0.5rem 1rem' }}
                onMouseOver={e => e.currentTarget.style.color = '#00ffb3'}
                onMouseOut={e => e.currentTarget.style.color = '#fff'}
              >Home</li>
              </Link>
              <Link to='/about'>
              <li style={{ cursor: 'pointer', transition: 'color 0.2s', padding: '0.5rem 1rem' }}
                onMouseOver={e => e.currentTarget.style.color = '#00ffb3'}
                onMouseOut={e => e.currentTarget.style.color = '#fff'}
              >About</li>
              </Link>
              <Link to='/Products'>
              <li style={{ cursor: 'pointer', transition: 'color 0.2s', padding: '0.5rem 1rem' }}
                onMouseOver={e => e.currentTarget.style.color = '#00ffb3'}
                onMouseOut={e => e.currentTarget.style.color = '#fff'}
              >Products</li>
              </Link>
              <li style={{ cursor: 'pointer', transition: 'color 0.2s', padding: '0.5rem 1rem' }}
                onMouseOver={e => e.currentTarget.style.color = '#00ffb3'}
                onMouseOut={e => e.currentTarget.style.color = '#fff'}
              >Contact</li>
            </ul>
          </div>
          <header style={{ fontWeight: 900, fontSize: '1.5rem', letterSpacing: '2px', color: '#00ffb3', textShadow: '0 2px 8px #000' }}>Tishalagbo</header>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
