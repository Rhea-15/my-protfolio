import { useEffect, useRef } from 'react'

export default function Hero() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const particles = Array.from({ length: 40 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 3 + 1,
      speedX: (Math.random() - 0.5) * 0.6,
      speedY: (Math.random() - 0.5) * 0.6,
      opacity: Math.random() * 0.4 + 0.1,
    }))

    let animId
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach((p) => {
        ctx.fillStyle = `rgba(0,0,0,${p.opacity})`
        ctx.fillRect(p.x, p.y, p.size, p.size)
        p.x += p.speedX
        p.y += p.speedY
        if (p.x < 0) p.x = canvas.width
        if (p.x > canvas.width) p.x = 0
        if (p.y < 0) p.y = canvas.height
        if (p.y > canvas.height) p.y = 0
      })
      animId = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideIn {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes expandWidth {
          from { width: 0; }
          to { width: 100px; }
        }
        @keyframes rotateSlow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes rotateSlowReverse {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
        @keyframes bounceDown {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(6px); }
        }

        .btn-hero-primary:hover {
          background: #f5a623 !important;
          color: #111 !important;
          box-shadow: 4px 4px 0 #111;
        }
        .btn-hero-secondary:hover {
          background: #fff !important;
          color: #111 !important;
        }
        .hero-tag:hover {
          background: #111 !important;
          color: #f5a623 !important;
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 1fr 220px;
        }
        .hero-sidebar {
          display: flex !important;
        }
        .hero-ring { display: block; }
        .hero-pixel-grid { display: grid; }

        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
          }
          .hero-sidebar {
            display: none !important;
          }
          .hero-ring {
            display: none !important;
          }
          .hero-pixel-grid {
            display: none !important;
          }
          .hero-btn-row {
            flex-direction: column !important;
          }
          .hero-btn-row button {
            width: 100% !important;
          }
        }
      `}</style>

      <section
        id="home"
        style={{
          paddingTop: '120px',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#e8e8d8',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Watermark */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          fontFamily: 'Share Tech Mono, monospace',
          fontSize: 'clamp(80px, 20vw, 280px)',
          color: 'rgba(0,0,0,0.04)',
          letterSpacing: '-10px',
          whiteSpace: 'nowrap',
          userSelect: 'none',
          zIndex: 0,
          lineHeight: 1,
          pointerEvents: 'none',
        }}>RM</div>

        {/* Rings - hidden on mobile */}
        <div className="hero-ring" style={{
          position: 'absolute', top: '-60px', right: '-60px',
          width: '280px', height: '280px',
          border: '3px dashed rgba(245,166,35,0.4)',
          borderRadius: '50%',
          animation: 'rotateSlow 18s linear infinite',
          zIndex: 0,
        }} />
        <div className="hero-ring" style={{
          position: 'absolute', top: '-30px', right: '-30px',
          width: '180px', height: '180px',
          border: '3px solid rgba(245,166,35,0.2)',
          borderRadius: '50%',
          animation: 'rotateSlowReverse 12s linear infinite',
          zIndex: 0,
        }} />
        <div className="hero-ring" style={{
          position: 'absolute', bottom: '-80px', left: '-80px',
          width: '320px', height: '320px',
          border: '3px dashed rgba(0,0,0,0.08)',
          borderRadius: '50%',
          animation: 'rotateSlow 22s linear infinite reverse',
          zIndex: 0,
        }} />

        {/* Pixel grids - hidden on mobile */}
        <div className="hero-pixel-grid" style={{
          position: 'absolute', top: '140px', left: '40px',
          gridTemplateColumns: 'repeat(5, 10px)',
          gap: '5px', zIndex: 0, opacity: 0.25,
        }}>
          {Array.from({ length: 25 }).map((_, i) => (
            <div key={i} style={{
              width: '10px', height: '10px',
              background: i % 3 === 0 ? '#f5a623' : '#111',
            }} />
          ))}
        </div>
        <div className="hero-pixel-grid" style={{
          position: 'absolute', bottom: '80px', right: '40px',
          gridTemplateColumns: 'repeat(4, 10px)',
          gap: '5px', zIndex: 0, opacity: 0.2,
        }}>
          {Array.from({ length: 16 }).map((_, i) => (
            <div key={i} style={{
              width: '10px', height: '10px',
              background: i % 2 === 0 ? '#111' : '#f5a623',
            }} />
          ))}
        </div>

        {/* Canvas */}
        <canvas ref={canvasRef} style={{
          position: 'absolute', top: 0, left: 0,
          width: '100%', height: '100%', zIndex: 0,
        }} />

        {/* Main box */}
        <div
          className="hero-grid"
          style={{
            width: '90%',
            maxWidth: '1100px',
            position: 'relative',
            zIndex: 2,
            border: '3px solid #111',
            background: '#fff',
            overflow: 'hidden',
            animation: 'slideUp 0.8s ease both',
          }}
        >
          {/* Left orange panel */}
          <div style={{
            background: 'linear-gradient(150deg, #f5a623 0%, #d4820e 100%)',
            padding: 'clamp(32px, 6vw, 60px) clamp(24px, 5vw, 50px)',
            position: 'relative',
            overflow: 'hidden',
            minHeight: 'clamp(340px, 55vw, 440px)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}>
            {/* Grid overlay */}
            <div style={{
              position: 'absolute', inset: 0,
              backgroundImage: `
                linear-gradient(rgba(0,0,0,0.06) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0,0,0,0.06) 1px, transparent 1px)
              `,
              backgroundSize: '32px 32px',
              pointerEvents: 'none',
            }} />

            {/* Diagonal stripe accent */}
            <div style={{
              position: 'absolute', bottom: '-20px', right: '-20px',
              width: '180px', height: '180px',
              background: 'repeating-linear-gradient(-45deg, rgba(0,0,0,0.08) 0px, rgba(0,0,0,0.08) 4px, transparent 4px, transparent 16px)',
              pointerEvents: 'none',
            }} />

            {/* Corner accents */}
            <div style={{
              position: 'absolute', top: 0, left: 0,
              width: '60px', height: '60px',
              borderRight: '3px solid rgba(0,0,0,0.15)',
              borderBottom: '3px solid rgba(0,0,0,0.15)',
              pointerEvents: 'none',
            }} />
            <div style={{
              position: 'absolute', bottom: 0, right: 0,
              width: '60px', height: '60px',
              borderLeft: '3px solid rgba(0,0,0,0.15)',
              borderTop: '3px solid rgba(0,0,0,0.15)',
              pointerEvents: 'none',
            }} />

            {/* Top content: name + underline + tags */}
            <div style={{ position: 'relative', zIndex: 2 }}>
              <div style={{
                fontFamily: 'Share Tech Mono, monospace',
                fontSize: 'clamp(44px, 10vw, 88px)',
                color: '#111',
                lineHeight: 0.95,
                letterSpacing: 'clamp(-1px, -0.5vw, -3px)',
                marginBottom: '20px',
                animation: 'slideIn 0.6s ease both',
              }}>
                RHEA<br />
                <span style={{
                  WebkitTextStroke: '2px #111',
                  color: 'transparent',
                }}>
                  MISQUITTA
                </span>
              </div>

              <div style={{
                height: '4px',
                background: '#111',
                animation: 'expandWidth 1s ease 0.5s both',
                marginBottom: '24px',
              }} />

              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '8px',
                animation: 'slideUp 0.6s ease 0.4s both',
                opacity: 0,
                animationFillMode: 'forwards',
              }}>
              </div>
            </div>

            {/* Bottom CTA buttons */}
            <div
              className="hero-btn-row"
              style={{
                display: 'flex',
                gap: '12px',
                flexWrap: 'wrap',
                position: 'relative',
                zIndex: 2,
                animation: 'slideUp 0.6s ease 0.7s both',
                opacity: 0,
                animationFillMode: 'forwards',
                marginTop: '32px',
              }}
            >              
            </div>
          </div>

          {/* Right black sidebar — hidden on mobile */}
        </div> {/* <-- ADDED MISSING CLOSING TAG HERE */}

        {/* Scroll hint */}
        <div style={{
          position: 'absolute', bottom: '24px', left: '50%',
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', gap: '4px', zIndex: 2,
          animation: 'bounceDown 1.5s ease-in-out infinite',
        }}>
          <span style={{
            fontFamily: 'Share Tech Mono, monospace',
            fontSize: '10px', color: 'rgba(0,0,0,0.3)',
            letterSpacing: '3px', textTransform: 'uppercase',
          }}>scroll</span>
          <span style={{ color: 'rgba(0,0,0,0.3)', fontSize: '12px' }}>▼</span>
        </div>
      </section>
    </>
  )
}