import { useState, useEffect } from 'react'

const styles = {
  wrapper: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
  },
  navbar: {
    background: '#fff',
    borderBottom: '3px solid #111',
    padding: '18px 40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  left: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
  },
  avatar: {
    width: '52px',
    height: '52px',
    borderRadius: '50%',
    border: '3px solid #111',
    background: 'linear-gradient(135deg, #f5a623 40%, #e0941a 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Share Tech Mono, monospace',
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#111',
    flexShrink: 0,
  },
  nameBlock: {
    display: 'flex',
    flexDirection: 'column',
  },
  name: {
    fontFamily: 'Share Tech Mono, monospace',
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#111',
    letterSpacing: '-0.5px',
  },
  title: {
    fontSize: '13px',
    color: '#555',
    fontFamily: 'Space Grotesk, sans-serif',
  },
  navLinks: {
    display: 'flex',
    gap: '32px',
    listStyle: 'none',
  },
  navLink: {
    fontFamily: 'Share Tech Mono, monospace',
    fontSize: '13px',
    color: '#111',
    cursor: 'pointer',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    transition: 'color 0.2s',
  },
  statusBar: {
    background: '#111',
    padding: '8px 40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  statusLeft: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    color: '#fff',
    fontFamily: 'Share Tech Mono, monospace',
    fontSize: '13px',
  },
  dot: {
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    background: '#4ade80',
    animation: 'pulse 2s infinite',
  },
  socialIcons: {
    display: 'flex',
    gap: '12px',
  },
  socialIcon: {
    width: '32px',
    height: '32px',
    borderRadius: '50%',
    background: '#f5a623',
    border: '2px solid #f5a623',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#111',
    fontSize: '13px',
    fontWeight: 'bold',
    fontFamily: 'Share Tech Mono, monospace',
    cursor: 'pointer',
    transition: 'transform 0.2s',
  },
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
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
      `}</style>
      <div style={styles.wrapper}>
        <div style={{ ...styles.navbar, boxShadow: scrolled ? '0 4px 20px rgba(0,0,0,0.1)' : 'none' }}>
          <div style={styles.left}>
            <div style={styles.avatar}>RM</div>
            <div style={styles.nameBlock}>
              <span style={styles.name}>Rhea Misquitta</span>
              <span style={styles.title}>Computer Engineering Student</span>
            </div>
          </div>
          <ul style={styles.navLinks}>
            {['about', 'skills', 'projects', 'certificates'].map((s) => (
              <li
                key={s}
                className="nav-link"
                style={styles.navLink}
                onClick={() => scrollTo(s)}
              >
                {s}
              </li>
            ))}
          </ul>
        </div>
        <div style={styles.statusBar}>
          <div style={styles.statusLeft}>
            <div style={styles.dot} />
            Available for internships &amp; opportunities
          </div>
          <div style={styles.socialIcons}>
            <a href="mailto:rheapmisquitta@gmail.com" title="Email">
              <div className="social-icon" style={styles.socialIcon}>@</div>
            </a>
            <a href="https://www.linkedin.com/in/rhea-misquitta15" target="_blank" rel="noreferrer">
              <div className="social-icon" style={styles.socialIcon}>in</div>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}