const styles = {
    section: {
      padding: '80px 40px',
      maxWidth: '1100px',
      margin: '0 auto',
    },
    sectionTitle: {
      fontFamily: 'Share Tech Mono, monospace',
      fontSize: 'clamp(40px, 6vw, 80px)',
      color: '#111',
      marginBottom: '40px',
      letterSpacing: '-3px',
      lineHeight: 1,
    },
    card: {
      border: '3px solid #111',
      background: '#fff',
      padding: '40px',
      marginBottom: '0',
      position: 'relative',
      overflow: 'hidden',
    },
    bodyText: {
      fontFamily: 'Space Grotesk, sans-serif',
      fontSize: '18px',
      lineHeight: 1.7,
      color: '#111',
      marginBottom: '20px',
      fontWeight: 500,
    },
    bodyText2: {
      fontFamily: 'Space Grotesk, sans-serif',
      fontSize: '16px',
      lineHeight: 1.7,
      color: '#444',
    },
    orangeBar: {
      height: '8px',
      background: '#f5a623',
      border: '3px solid #111',
      borderTop: 'none',
      marginBottom: '40px',
    },
    eduRow: {
      display: 'flex',
      gap: '20px',
      flexWrap: 'wrap',
      marginTop: '40px',
    },
    eduCard: {
      flex: '1 1 260px',
      border: '3px solid #111',
      padding: '24px',
      background: '#111',
      color: '#fff',
      position: 'relative',
    },
    eduYear: {
      fontFamily: 'Share Tech Mono, monospace',
      fontSize: '12px',
      color: '#f5a623',
      marginBottom: '8px',
      textTransform: 'uppercase',
      letterSpacing: '2px',
    },
    eduDegree: {
      fontFamily: 'Share Tech Mono, monospace',
      fontSize: '16px',
      color: '#fff',
      marginBottom: '4px',
    },
    eduSchool: {
      fontFamily: 'Space Grotesk, sans-serif',
      fontSize: '14px',
      color: '#aaa',
    },
  }
  
  export default function About() {
    return (
      <section style={styles.section} id="about">
        <div style={styles.sectionTitle}>About</div>
        <div style={styles.card}>
          <p style={styles.bodyText}>
            Second-year Computer Engineering student with an interest in software development,
            backend systems, and data analytics.
          </p>
          <p style={styles.bodyText2}>
            Currently exploring new technologies, building projects, and solving real-world
            problems through tech. Familiar with Python, SQL, React, Power BI, and Tableau —
            with a keen interest in learning and gaining hands-on industry experience.
          </p>
        </div>
      </section>
    )
  }