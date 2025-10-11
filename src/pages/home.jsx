import React from 'react'
import Navbar from '../components/Navbar.jsx'
import Orb from '../components/Orb.jsx'
import herbsImg from '/herbs.jpg';
import rootedImg from '/rooted.jpeg';
import assuranceImg from '/assurance.jpeg';
import backImg from '/back.jpg';
import Footer from '../components/Footer.jsx';
import './home.module.css';
import { Link } from 'react-router-dom';



// Orb with glowing effect and optional overlay text
const OrbWithOverlay = ({ text }) => (
  <div style={{
    width: '60vw',
    maxWidth: '500px',
    height: '60vw',
    maxHeight: '500px',
    position: 'relative',   // ✅ instead of absolute
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
    background: 'rgba(0,0,0,0.2)',
    // margin: '2rem',       // ✅ add spacing
  }}>
    <Orb
      hoverIntensity={2}
      rotateOnHover={true}
      hue={120}
      forceHoverState={false}
    />
    <div style={{
      position: 'absolute',
      top: 0, left: 0, width: '100%', height: '100%',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      pointerEvents: 'none', userSelect: 'none', zIndex: 2
    }}>
      <img src={herbsImg} alt="Center Icon" style={{ width: '190px', height: '190px', borderRadius: '50%', boxShadow: '0 0 16px #00ffb3' }} />
      {text}
    </div>
  </div>
)



const Home = () => {
  return (
    <div style={{ minHeight: '100vh', fontFamily: 'Inter, sans-serif', background: 'linear-gradient(135deg, #0f2027 0%, #2c5364 100%)' }}>
      <Navbar />
      <main style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '70vh', padding: '40px 10px' }}>
        {/* Hero Section */}
  <section style={{
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: '80px',
    marginBottom: '1.5rem',
  }}>
    <h1 style={{
      color: '#fff',
      fontSize: '2.5rem',
      fontWeight: 800,
      marginBottom: '1.2rem',
      letterSpacing: '2px',
      textAlign: 'center',
      textShadow: '0 2px 16px #000',
      maxWidth: '95vw',
    }}>
      Welcome to Tishaalagbo
    </h1>
    <p style={{
      color: '#b2f5ea',
      fontSize: '1.15rem',
      maxWidth: '95vw',
      textAlign: 'center',
      marginBottom: '2.5rem',
      lineHeight: 1.6,
    }}>
      Discover the power of nature and tradition. Explore our herbal products and holistic wellness solutions, rooted in culture and care.
    </p>
    <OrbWithOverlay text={''} />
    <Link to='/Products'>
    <button
      style={{
        marginTop: '1.5rem',
        background: 'linear-gradient(90deg, #00ffb3 0%, #00c3ff 100%)',
        color: '#222',
        fontWeight: 700,
        fontSize: '1.1rem',
        padding: '0.9rem 2.2rem',
        border: 'none',
        borderRadius: '999px',
        boxShadow: '0 2px 16px #00ffb3',
        cursor: 'pointer',
        transition: 'transform 0.2s, background 0.3s',
        maxWidth: '90vw',
      }}
      onMouseOver={e => {
        e.currentTarget.style.transform = 'scale(1.07)';
        e.currentTarget.style.background = 'linear-gradient(90deg, #00c3ff 0%, #00ffb3 100%)';
        e.currentTarget.style.color = '#fff';
      }}
      onMouseOut={e => {
        e.currentTarget.style.transform = 'scale(1)';
        e.currentTarget.style.background = 'linear-gradient(90deg, #00ffb3 0%, #00c3ff 100%)';
        e.currentTarget.style.color = '#222';
      }}
    >
      Shop Now
    </button>
    </Link>
  </section>

        {/* Cards Section */}
        <section style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
          <h2 style={{ color: '#fff', fontSize: '2rem', fontWeight: 700, marginBottom: '2rem', letterSpacing: '1px', textShadow: '0 2px 16px #000', marginTop: '10rem' }}>
            Featured Herbal Products
          </h2>
          <div
            style={{
              display: 'flex',
              gap: '2vw',
              flexWrap: 'wrap',
              justifyContent: 'center',
              width: '100%',
              maxWidth: '1100px',
              margin: '0 auto',
            }}
          >
            {/* Card 1 */}
            <div style={{
              background: 'rgba(255,255,255,0.07)',
              borderRadius: '1.5rem',
              boxShadow: '0 4px 32px #00ffb344',
              padding: '1.2rem 0.7rem',
              width: '90vw',
              maxWidth: '300px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              border: '1.5px solid #00ffb3',
              backdropFilter: 'blur(2px)',
              minHeight: '320px',
              marginBottom: '2vw',
            }}>
              <img src={herbsImg} alt="Herbal Mix" style={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: '1rem', marginBottom: '1.2rem' }} />
              <h3 style={{ color: '#00ffb3', fontWeight: 700, fontSize: '1.3rem', marginBottom: '0.7rem' }}>Herbal Mix</h3>
              <p style={{ color: '#fff', textAlign: 'center', fontSize: '1rem', lineHeight: 1.5 }}>
                A unique blend of traditional herbs to boost your immunity and overall wellness. 100% natural and organic.
              </p>
            </div>
            {/* Card 2 */}
            <div style={{
              background: 'rgba(255,255,255,0.07)',
              borderRadius: '1.5rem',
              boxShadow: '0 4px 32px #00c3ff44',
              padding: '1.2rem 0.7rem',
              width: '90vw',
              maxWidth: '300px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              border: '1.5px solid #00c3ff',
              backdropFilter: 'blur(2px)',
              minHeight: '320px',
              marginBottom: '2vw',
            }}>
              <img src={rootedImg} alt="Rooted Tonic" style={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: '1rem', marginBottom: '1.2rem' }} />
              <h3 style={{ color: '#00c3ff', fontWeight: 700, fontSize: '1.3rem', marginBottom: '0.7rem' }}>Rooted Tonic</h3>
              <p style={{ color: '#fff', textAlign: 'center', fontSize: '1rem', lineHeight: 1.5 }}>
                Revitalize your body with our signature tonic, crafted from deep-rooted botanicals for energy and balance.
              </p>
            </div>
            {/* Card 3 */}
            <div style={{
              background: 'rgba(255,255,255,0.07)',
              borderRadius: '1.5rem',
              boxShadow: '0 4px 32px #b2f5ea44',
              padding: '1.2rem 0.7rem',
              width: '90vw',
              maxWidth: '300px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              border: '1.5px solid #b2f5ea',
              backdropFilter: 'blur(2px)',
              minHeight: '320px',
              marginBottom: '2vw',
            }}>
              <img src={assuranceImg} alt="Assurance Tea" style={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: '1rem', marginBottom: '1.2rem' }} />
              <h3 style={{ color: '#b2f5ea', fontWeight: 700, fontSize: '1.3rem', marginBottom: '0.7rem' }}>Assurance Tea</h3>
              <p style={{ color: '#fff', textAlign: 'center', fontSize: '1rem', lineHeight: 1.5 }}>
                Calm your mind and body with our soothing herbal tea, perfect for relaxation and peace of mind.
              </p>
            </div>
            {/* Card 4 */}
            <div style={{
              background: 'rgba(255,255,255,0.07)',
              borderRadius: '1.5rem',
              boxShadow: '0 4px 32px #00ffb344',
              padding: '1.2rem 0.7rem',
              width: '90vw',
              maxWidth: '300px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              border: '1.5px solid #00ffb3',
              backdropFilter: 'blur(2px)',
              minHeight: '320px',
              marginBottom: '2vw',
            }}>
              <img src={backImg} alt="Back Relief Balm" style={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: '1rem', marginBottom: '1.2rem' }} />
              <h3 style={{ color: '#00ffb3', fontWeight: 700, fontSize: '1.3rem', marginBottom: '0.7rem' }}>Back Relief Balm</h3>
              <p style={{ color: '#fff', textAlign: 'center', fontSize: '1rem', lineHeight: 1.5 }}>
                Soothe aches and pains with our herbal balm, crafted for deep relief and comfort.
              </p>
            </div>
          </div>
        </section>

        {/* Why Choose Tishalagbo Section */}
        <section style={{
          width: '100%',
          marginTop: '4rem',
          marginBottom: '2rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
          <h2 style={{ color: '#00ffb3', fontSize: '2rem', fontWeight: 700, marginBottom: '1.5rem', letterSpacing: '1px', textShadow: '0 2px 16px #000', textAlign: 'center' }}>
            Why Choose Tishaalagbo?
          </h2>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '2vw',
            justifyContent: 'center',
            width: '100%',
            maxWidth: '900px',
            margin: '0 auto',
          }}>
            {/* Feature 1 */}
            <div style={{
              background: 'rgba(255,255,255,0.09)',
              borderRadius: '1.2rem',
              boxShadow: '0 2px 16px #00ffb344',
              padding: '1.2rem 1rem',
              width: '90vw',
              maxWidth: '260px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              marginBottom: '2vw',
            }}>
              <img src={herbsImg} alt="Natural" style={{ width: '60px', height: '60px', borderRadius: '50%', marginBottom: '1rem', objectFit: 'cover', boxShadow: '0 0 8px #00ffb3' }} />
              <h3 style={{ color: '#00ffb3', fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.5rem' }}>100% Natural</h3>
              <p style={{ color: '#fff', textAlign: 'center', fontSize: '0.95rem', lineHeight: 1.5 }}>
                All our products are made from pure, natural ingredients with no artificial additives.
              </p>
            </div>
            {/* Feature 2 */}
            <div style={{
              background: 'rgba(255,255,255,0.09)',
              borderRadius: '1.2rem',
              boxShadow: '0 2px 16px #00c3ff44',
              padding: '1.2rem 1rem',
              width: '90vw',
              maxWidth: '260px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              marginBottom: '2vw',
            }}>
              <img src={rootedImg} alt="Rooted in Tradition" style={{ width: '60px', height: '60px', borderRadius: '50%', marginBottom: '1rem', objectFit: 'cover', boxShadow: '0 0 8px #00c3ff' }} />
              <h3 style={{ color: '#00c3ff', fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.5rem' }}>Rooted in Tradition</h3>
              <p style={{ color: '#fff', textAlign: 'center', fontSize: '0.95rem', lineHeight: 1.5 }}>
                Our remedies are inspired by generations of herbal wisdom and cultural heritage.
              </p>
            </div>
            {/* Feature 3 */}
            <div style={{
              background: 'rgba(255,255,255,0.09)',
              borderRadius: '1.2rem',
              boxShadow: '0 2px 16px #b2f5ea44',
              padding: '1.2rem 1rem',
              width: '90vw',
              maxWidth: '260px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              marginBottom: '2vw',
            }}>
              <img src={assuranceImg} alt="Assured Quality" style={{ width: '60px', height: '60px', borderRadius: '50%', marginBottom: '1rem', objectFit: 'cover', boxShadow: '0 0 8px #b2f5ea' }} />
              <h3 style={{ color: '#b2f5ea', fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.5rem' }}>Assured Quality</h3>
              <p style={{ color: '#fff', textAlign: 'center', fontSize: '0.95rem', lineHeight: 1.5 }}>
                We guarantee the highest standards in sourcing, preparation, and packaging.
              </p>
            </div>
            {/* Feature 4 */}
            <div style={{
              background: 'rgba(255,255,255,0.09)',
              borderRadius: '1.2rem',
              boxShadow: '0 2px 16px #00ffb344',
              padding: '1.2rem 1rem',
              width: '90vw',
              maxWidth: '260px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              marginBottom: '2vw',
            }}>
              <img src={backImg} alt="Customer Care" style={{ width: '60px', height: '60px', borderRadius: '50%', marginBottom: '1rem', objectFit: 'cover', boxShadow: '0 0 8px #00ffb3' }} />
              <h3 style={{ color: '#00ffb3', fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.5rem' }}>Customer Care</h3>
              <p style={{ color: '#fff', textAlign: 'center', fontSize: '0.95rem', lineHeight: 1.5 }}>
                We are dedicated to your wellness journey, offering support and guidance every step of the way.
              </p>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section style={{
          width: '100%',
          marginTop: '4rem',
          marginBottom: '2rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
          <h2 style={{ color: '#fff', fontSize: '2rem', fontWeight: 700, marginBottom: '1.5rem', letterSpacing: '1px', textShadow: '0 2px 16px #000', textAlign: 'center' }}>
            What Our Customers Say
          </h2>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '2vw',
            justifyContent: 'center',
            width: '100%',
            maxWidth: '900px',
            margin: '0 auto',
          }}>
            <div style={{
              background: 'rgba(255,255,255,0.09)',
              borderRadius: '1.2rem',
              boxShadow: '0 2px 16px #00ffb344',
              padding: '1.2rem 1rem',
              width: '90vw',
              maxWidth: '320px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              marginBottom: '2vw',
            }}>
              <p style={{ color: '#fff', fontSize: '1rem', textAlign: 'center', marginBottom: '1rem', fontStyle: 'italic' }}>
                "Tishalagbo's herbal mix helped boost my energy and immunity. Highly recommended!"
              </p>
              <span style={{ color: '#00ffb3', fontWeight: 700 }}>— Ada, Lagos</span>
            </div>
            <div style={{
              background: 'rgba(255,255,255,0.09)',
              borderRadius: '1.2rem',
              boxShadow: '0 2px 16px #00c3ff44',
              padding: '1.2rem 1rem',
              width: '90vw',
              maxWidth: '320px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              marginBottom: '2vw',
            }}>
              <p style={{ color: '#fff', fontSize: '1rem', textAlign: 'center', marginBottom: '1rem', fontStyle: 'italic' }}>
                "The assurance tea is my go-to for relaxation. I love the natural taste!"
              </p>
              <span style={{ color: '#b2f5ea', fontWeight: 700 }}>— Chinedu, Abuja</span>
            </div>
            <div style={{
              background: 'rgba(255,255,255,0.09)',
              borderRadius: '1.2rem',
              boxShadow: '0 2px 16px #b2f5ea44',
              padding: '1.2rem 1rem',
              width: '90vw',
              maxWidth: '320px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              marginBottom: '2vw',
            }}>
              <p style={{ color: '#fff', fontSize: '1rem', textAlign: 'center', marginBottom: '1rem', fontStyle: 'italic' }}>
                "Rooted tonic gave me the balance I needed. Great customer care too!"
              </p>
              <span style={{ color: '#00c3ff', fontWeight: 700 }}>— Funmi, Ibadan</span>
            </div>
          </div>
        </section>
      </main>
      <Footer/>
    </div>
  )
}

export default Home
