import { useEffect, useRef } from 'react'

export default function Hero() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    const particles = Array.from({ length: 60 }, () => ({
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
    return () => cancelAnimationFrame(animId)
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
          to { width: 120px; }
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
        @keyframes glitchX {
          0%, 100% { clip-path: inset(0 0 100% 0); transform: translateX(0); }
          10% { clip-path: inset(10% 0 80% 0); transform: translateX(-4px); }
          20% { clip-path: inset(30% 0 50% 0); transform: translateX(4px); }
          30% { clip-path: inset(50% 0 30% 0); transform: translateX(-2px); }
          40% { clip-path: inset(70% 0 10% 0); transform: translateX(2px); }
          50% { clip-path: inset(0 0 0 0); transform: translateX(0); }
        }
        .btn-hero-primary:hover {
          background: #f5a623 !important;
          color: #111 !important;
          transform: translateY(-2px);
          box-shadow: 4px 4px 0 #111;
        }
        .btn-hero-secondary:hover {
          background: #fff !important;
          color: #111 !important;
          transform: translateY(-2px);
          box-shadow: 4px 4px 0 rgba(255,255,255,0.3);
        }
        .hero-tag:hover {
          background: #111 !important;
          color: #f5a623 !important;
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
        {/* Big watermark letters */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          fontFamily: 'Share Tech Mono, monospace',
          fontSize: 'clamp(120px, 20vw, 280px)',
          color: 'rgba(0,0,0,0.04)',
          letterSpacing: '-10px',
          whiteSpace: 'nowrap',
          userSelect: 'none',
          zIndex: 0,
          lineHeight: 1,
        }}>RM</div>

        {/* Rotating ring top-right */}
        <div style={{
          position: 'absolute',
          top: '-60px',
          right: '-60px',
          width: '280px',
          height: '280px',
          border: '3px dashed rgba(245,166,35,0.4)',
          borderRadius: '50%',
          animation: 'rotateSlow 18s linear infinite',
          zIndex: 0,
        }} />
        <div style={{
          position: 'absolute',
          top: '-30px',
          right: '-30px',
          width: '180px',
          height: '180px',
          border: '3px solid rgba(245,166,35,0.2)',
          borderRadius: '50%',
          animation: 'rotateSlowReverse 12s linear infinite',
          zIndex: 0,
        }} />

        {/* Rotating ring bottom-left */}
        <div style={{
          position: 'absolute',
          bottom: '-80px',
          left: '-80px',
          width: '320px',
          height: '320px',
          border: '3px dashed rgba(0,0,0,0.08)',
          borderRadius: '50%',
          animation: 'rotateSlow 22s linear infinite reverse',
          zIndex: 0,
        }} />

        {/* Pixel grid block top-left */}
        <div style={{
          position: 'absolute',
          top: '140px',
          left: '40px',
          display: 'grid',
          gridTemplateColumns: 'repeat(5, 10px)',
          gap: '5px',
          zIndex: 0,
          opacity: 0.25,
        }}>
          {Array.from({ length: 25 }).map((_, i) => (
            <div key={i} style={{
              width: '10px',
              height: '10px',
              background: i % 3 === 0 ? '#f5a623' : '#111',
            }} />
          ))}
        </div>

        {/* Pixel grid block bottom-right */}
        <div style={{
          position: 'absolute',
          bottom: '80px',
          right: '40px',
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 10px)',
          gap: '5px',
          zIndex: 0,
          opacity: 0.2,
        }}>
          {Array.from({ length: 16 }).map((_, i) => (
            <div key={i} style={{
              width: '10px',
              height: '10px',
              background: i % 2 === 0 ? '#111' : '#f5a623',
            }} />
          ))}
        </div>

        {/* Canvas particles */}
        <canvas
          ref={canvasRef}
          style={{
            position: 'absolute',
            top: 0, left: 0,
            width: '100%',
            height: '100%',
            zIndex: 0,
          }}
        />

        {/* Main content box */}
        <div style={{
          width: '90%',
          maxWidth: '1100px',
          position: 'relative',
          zIndex: 2,
          display: 'grid',
          gridTemplateColumns: '1fr auto',
          gap: '0',
          border: '3px solid #111',
          background: '#fff',
          overflow: 'hidden',
          animation: 'slideUp 0.8s ease both',
        }}>

          {/* Left: orange hero panel */}
          <div style={{
            background: 'linear-gradient(150deg, #f5a623 0%, #d4820e 100%)',
            padding: '60px 50px',
            position: 'relative',
            overflow: 'hidden',
            minHeight: '440px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}>
            {/* Inner grid overlay */}
            <div style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: `
                linear-gradient(rgba(0,0,0,0.06) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0,0,0,0.06) 1px, transparent 1px)
              `,
              backgroundSize: '32px 32px',
            }} />

            {/* Diagonal stripe accent */}
            <div style={{
              position: 'absolute',
              bottom: '-20px',
              right: '-20px',
              width: '180px',
              height: '180px',
              background: 'repeating-linear-gradient(-45deg, rgba(0,0,0,0.08) 0px, rgba(0,0,0,0.08) 4px, transparent 4px, transparent 16px)',
            }} />

            <div style={{ position: 'relative', zIndex: 2 }}>
              {/* Name */}
              <div style={{
                fontFamily: 'Share Tech Mono, monospace',
                fontSize: 'clamp(52px, 7vw, 88px)',
                color: '#111',
                lineHeight: 0.95,
                letterSpacing: '-3px',
                marginBottom: '24px',
                animation: 'slideIn 0.6s ease both',
              }}>
                RHEA<br />
                <span style={{
                  WebkitTextStroke: '2.5px #111',
                  color: 'transparent',
                }}>
                  MISQUITTA
                </span>
              </div>

              {/* Animated underline */}
              <div style={{
                height: '4px',
                background: '#111',
                animation: 'expandWidth 1s ease 0.5s both',
                marginBottom: '28px',
              }} />

              {/* Skill tags */}
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

            {/* Bottom CTA row */}
            <div style={{
              display: 'flex',
              gap: '12px',
              flexWrap: 'wrap',
              position: 'relative',
              zIndex: 2,
              animation: 'slideUp 0.6s ease 0.7s both',
              opacity: 0,
              animationFillMode: 'forwards',
            }}>
            
            </div>
          </div>

          {/* Right: black sidebar */}
          <div style={{
            background: '#111',
            width: '220px',
            padding: '40px 28px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            borderLeft: '3px solid #111',
          }}>
          </div>
        </div>

        {/* Scroll hint */}
        <div style={{
          position: 'absolute',
          bottom: '24px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '4px',
          zIndex: 2,
          animation: 'bounceDown 1.5s ease-in-out infinite',
        }}>
          <span style={{
            fontFamily: 'Share Tech Mono, monospace',
            fontSize: '10px',
            color: 'rgba(0,0,0,0.3)',
            letterSpacing: '3px',
            textTransform: 'uppercase',
          }}>scroll</span>
          <span style={{ color: 'rgba(0,0,0,0.3)', fontSize: '12px' }}>▼</span>
        </div>
      </section>
    </>
  )
}