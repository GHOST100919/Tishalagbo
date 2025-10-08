import React from 'react';
import inImg from '/in.jpeg';
import xImg from '/x.png';
import faceImg from '/face.png';
const Footer = () => {
    return (
        <footer style={{
            width: '100%',
            background: 'linear-gradient(90deg, #0f2027 0%, #02bb84ff 100%)',
            color: '#fff',
            padding: '2.5rem 0 1.2rem 0',
            textAlign: 'center',
            fontFamily: 'Inter, sans-serif',
            marginTop: '2rem',
            boxShadow: '0 -2px 24px #00ffb344',
        }}>
            <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: '2.5rem',
                maxWidth: '1200px',
                margin: '0 auto 1.5rem auto',
            }}>
                {/* Brand Info */}
                <div style={{ flex: '1 1 220px', minWidth: '220px', marginBottom: '1.5rem' }}>
                    <h4 style={{ color: '#00ffb3', fontWeight: 700, fontSize: '1.3rem', marginBottom: '0.5rem', letterSpacing: '2px' }}>Tishalagbo</h4>
                    <p style={{ color: '#b2f5ea', fontSize: '1rem', marginBottom: '0.7rem' }}>Nourishing the world, naturally.</p>
                    <div style={{ display: 'flex', gap: '0.7rem', justifyContent: 'center' }}>
                        {/* Example badges, replace src with actual assets if available */}
                        <img src="/back.jpg" alt="Organic Certification" style={{ width: '32px', height: '32px', borderRadius: '50%', boxShadow: '0 0 8px #00ffb3' }} />
                        <img src="/back.jpg" alt="Trusted Brand" style={{ width: '32px', height: '32px', borderRadius: '50%', boxShadow: '0 0 8px #00c3ff' }} />
                    </div>
                </div>

                {/* Customer Service */}
                <div style={{ flex: '1 1 180px', minWidth: '180px', marginBottom: '1.5rem' }}>
                    <h4 style={{ color: '#fff', fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.5rem' }}>Customer Service</h4>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                        <li><a href="/contact" className='text-gray-300 hover:text-green-300/90'>Contact Us</a></li>
                        <li><a href="/faq" className='text-gray-300 hover:text-green-300/90'>FAQ</a></li>
                        <li><a href="/shipping" className='text-gray-300 hover:text-green-300/90'>Shipping & Returns</a></li>
                    </ul>
                </div>

                {/* Shop Navigation */}
                <div style={{ flex: '1 1 180px', minWidth: '180px', marginBottom: '1.5rem' }}>
                    <h4 style={{ color: '#fff', fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.5rem' }}>Shop</h4>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, gap: '0.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <li><a href="/category/herbs-spices" className='text-gray-300 hover:text-green-300/90'>Herbs & Spices</a></li>
                        <li><a href="/category/honey" className='text-gray-300 hover:text-green-300/90'>Natural Honey</a></li>
                        <li><a href="/category/wellness" className='text-gray-300 hover:text-green-300/90'>Wellness Products</a></li>
                        <li><a href="/category/gifts" className='text-gray-300 hover:text-green-300/90'>Kits & Gifts</a></li>
                    </ul>
                </div>

                {/* Social & Newsletter */}
                <div style={{ flex: '1 1 220px', minWidth: '220px', marginBottom: '1.5rem' }}>
                    <h4 style={{ color: '#fff', fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.5rem' }}>Stay Connected</h4>
                    <p style={{ color: '#b2f5ea', fontSize: '1rem', marginBottom: '0.7rem' }}>Join our newsletter for fresh updates and special offers.</p>
                    <div style={{ display: 'flex', gap: '0.7rem', justifyContent: 'center' }}>
                        {/* Example social icons, replace src with actual assets if available */}
                        <a href="https://www.instagram.com/yourbrand" target="_blank" rel="noopener noreferrer"><img src={inImg} alt="Instagram" style={{ width: '28px', height: '28px', borderRadius: '50%' }} /></a>
                        <a href="https://www.pinterest.com/yourbrand" target="_blank" rel="noopener noreferrer"><img src={xImg} alt="Pinterest" style={{ width: '28px', height: '28px', borderRadius: '50%' }} /></a>
                        <a href="https://www.facebook.com/yourbrand" target="_blank" rel="noopener noreferrer"><img src={faceImg} alt="Facebook" style={{ width: '28px', height: '28px', borderRadius: '50%' }} /></a>
                    </div>
                </div>
            </div>

            {/* Legal & Copyright */}
            <div style={{ borderTop: '1px solid #00ffb344', paddingTop: '1rem', marginTop: '1rem', fontSize: '0.95rem', color: '#b2f5ea', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <p style={{ marginBottom: '0.5rem' }}>&copy; 2025 Tishalagbo. All Rights Reserved.</p>
                <div style={{ display: 'flex', gap: '1.2rem' }}>
                    <a href="/privacy-policy" style={{ color: '#b2f5ea', textDecoration: 'underline' }}>Privacy Policy</a>
                    <a href="/terms-of-service" style={{ color: '#b2f5ea', textDecoration: 'underline' }}>Terms of Service</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
