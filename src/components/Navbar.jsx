import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <>
      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
        .nav-link:hover { color: #f5a623 !important; }
        .social-icon:hover { transform: scale(1.15); }
        .hamburger-line {
          display: block;
          width: 22px;
          height: 2px;
          background: #111;
          transition: all 0.3s;
        }
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger-btn { display: flex !important; }
        }
        @media (min-width: 769px) {
          .hamburger-btn { display: none !important; }
          .mobile-menu { display: none !important; }
        }
      `}</style>

      <div style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100 }}>
        {/* Main navbar */}
        <div style={{
          background: '#fff',
          borderBottom: '3px solid #111',
          padding: '14px 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          boxShadow: scrolled ? '0 4px 20px rgba(0,0,0,0.1)' : 'none',
        }}>
          {/* Left: avatar + name */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{
              width: '46px',
              height: '46px',
              borderRadius: '50%',
              border: '3px solid #111',
              background: 'linear-gradient(135deg, #f5a623 40%, #e0941a 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: 'Share Tech Mono, monospace',
              fontSize: '15px',
              fontWeight: 'bold',
              color: '#111',
              flexShrink: 0,
            }}>RM</div>
            <div>
              <div style={{
                fontFamily: 'Share Tech Mono, monospace',
                fontSize: '16px',
                color: '#111',
                letterSpacing: '-0.5px',
                lineHeight: 1.2,
              }}>Rhea Misquitta</div>
              <div style={{
                fontSize: '11px',
                color: '#555',
                fontFamily: 'Space Grotesk, sans-serif',
              }}>Computer Engineering Student</div>
            </div>
          </div>

          {/* Desktop nav links */}
          <ul className="desktop-nav" style={{
            display: 'flex',
            gap: '28px',
            listStyle: 'none',
            margin: 0,
            padding: 0,
          }}>
            {['about', 'skills', 'projects', 'certificates'].map((s) => (
              <li
                key={s}
                className="nav-link"
                onClick={() => scrollTo(s)}
                style={{
                  fontFamily: 'Share Tech Mono, monospace',
                  fontSize: '12px',
                  color: '#111',
                  cursor: 'pointer',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  transition: 'color 0.2s',
                }}
              >{s}</li>
            ))}
          </ul>

          {/* Hamburger */}
          <button
            className="hamburger-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              display: 'none',
              flexDirection: 'column',
              gap: '5px',
              padding: '4px',
            }}
          >
            <span className="hamburger-line" style={{
              transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none',
            }} />
            <span className="hamburger-line" style={{
              opacity: menuOpen ? 0 : 1,
            }} />
            <span className="hamburger-line" style={{
              transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none',
            }} />
          </button>
        </div>

        {/* Mobile dropdown menu */}
        <div className="mobile-menu" style={{
          display: menuOpen ? 'flex' : 'none',
          flexDirection: 'column',
          background: '#fff',
          borderBottom: '3px solid #111',
          padding: '0',
        }}>
          {['about', 'skills', 'projects', 'certificates'].map((s, i) => (
            <div
              key={s}
              onClick={() => scrollTo(s)}
              style={{
                padding: '16px 24px',
                fontFamily: 'Share Tech Mono, monospace',
                fontSize: '13px',
                color: '#111',
                textTransform: 'uppercase',
                letterSpacing: '2px',
                cursor: 'pointer',
                borderTop: i === 0 ? '1px solid #eee' : '1px solid #eee',
                transition: 'background 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.background = '#f5a623'}
              onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
            >{s}</div>
          ))}
        </div>

        {/* Status bar */}
        <div style={{
          background: '#111',
          padding: '8px 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '8px',
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            color: '#fff',
            fontFamily: 'Share Tech Mono, monospace',
            fontSize: '12px',
          }}>
            <div style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: '#4ade80',
              animation: 'pulse 2s infinite',
              flexShrink: 0,
            }} />
            Available for internships &amp; opportunities
          </div>
          <div style={{ display: 'flex', gap: '10px' }}>
            {[
              { label: '@', href: 'mailto:rheapmisquitta@gmail.com' },
              { label: 'in', href: 'https://www.linkedin.com/in/rhea-misquitta15' },
            ].map(({ label, href }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer">
                <div className="social-icon" style={{
                  width: '30px',
                  height: '30px',
                  borderRadius: '50%',
                  background: '#f5a623',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#111',
                  fontSize: '12px',
                  fontWeight: 'bold',
                  fontFamily: 'Share Tech Mono, monospace',
                  cursor: 'pointer',
                  transition: 'transform 0.2s',
                }}>{label}</div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}