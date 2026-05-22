const certs = [
    {
      org: 'Tata Group',
      name: 'Data Visualization',
      via: 'Forage',
      points: ['Built dashboards using Power BI & Tableau', 'Delivered actionable business insights'],
    },
    {
      org: 'Deloitte Australia',
      name: 'Data Analytics',
      via: 'Forage',
      points: ['Analyzed real-world datasets', 'Applied Tableau for reporting'],
    },
    {
      org: 'Quizcred in collab with WebTrantra',
      name: 'Codesangram',
      via: 'Online Hackathon',
      points: ['Developed a full-stack decentralized application for transport & mobility domain in a cross-functional team.'],
    },
  ]
  
  const styles = {
    section: {
      background: '#111',
      padding: '80px 40px',
    },
    inner: {
      maxWidth: '1100px',
      margin: '0 auto',
    },
    sectionTitle: {
      fontFamily: 'Share Tech Mono, monospace',
      fontSize: 'clamp(40px, 6vw, 80px)',
      color: '#fff',
      marginBottom: '48px',
      letterSpacing: '-3px',
      lineHeight: 1,
    },
    row: {
      display: 'flex',
      gap: '0',
      flexWrap: 'wrap',
    },
    card: {
      flex: '1 1 280px',
      border: '2px solid #333',
      padding: '32px',
      marginRight: '-2px',
      marginBottom: '-2px',
      position: 'relative',
      transition: 'border-color 0.2s',
    },
    arrow: {
      fontFamily: 'Share Tech Mono, monospace',
      fontSize: '24px',
      color: '#f5a623',
      marginBottom: '16px',
      display: 'block',
    },
    via: {
      fontFamily: 'Share Tech Mono, monospace',
      fontSize: '11px',
      color: '#f5a623',
      textTransform: 'uppercase',
      letterSpacing: '2px',
      marginBottom: '8px',
    },
    org: {
      fontFamily: 'Share Tech Mono, monospace',
      fontSize: '20px',
      color: '#fff',
      marginBottom: '4px',
    },
    certName: {
      fontFamily: 'Space Grotesk, sans-serif',
      fontSize: '14px',
      color: '#888',
      marginBottom: '20px',
    },
    divider: {
      height: '1px',
      background: '#333',
      marginBottom: '20px',
    },
    point: {
      fontFamily: 'Space Grotesk, sans-serif',
      fontSize: '13px',
      color: '#aaa',
      marginBottom: '8px',
      paddingLeft: '12px',
      position: 'relative',
      lineHeight: 1.5,
    },
    bullet: {
      position: 'absolute',
      left: 0,
      color: '#f5a623',
    },
  }
  
  export default function Certificates() {
    return (
      <>
        <style>{`
          .cert-card:hover { border-color: #f5a623 !important; }
        `}</style>
        <section style={styles.section} id="certificates">
          <div style={styles.inner}>
            <div style={styles.sectionTitle}>Experiences</div>
            <div style={styles.row}>
              {certs.map((c) => (
                <div key={c.org} className="cert-card" style={styles.card}>
                  <span style={styles.arrow}>▼</span>
                  <div style={styles.via}>{c.via}</div>
                  <div style={styles.org}>{c.org}</div>
                  <div style={styles.certName}>{c.name}</div>
                  <div style={styles.divider} />
                  {c.points.map((pt, i) => (
                    <div key={i} style={styles.point}>
                      <span style={styles.bullet}>›</span>
                      {pt}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>
      </>
    )
  }