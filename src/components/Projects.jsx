const projects = [
    {
      name: 'Transit OS',
      tech: ['Python', 'React', 'Polygon Amoy'],
      tag: 'Blockchain',
      desc: 'A decentralized smart mobility platform enabling seamless offline-capable ticketing and trustless revenue sharing across multiple transit operators using blockchain technology.',
      link: '#',
    },
    {
      name: 'Tours & Travels CRM',
      tech: ['React.js', 'Vite', 'PostgreSQL', 'Prisma ORM', 'Resend API'],
      tag: 'Full Stack',
      desc: 'Full-stack CRM for a travel agency to streamline customer management, tour bookings, and financial tracking, replacing manual spreadsheet workflows.',
      link: '#',
    },
    {
      name: 'Breast Cancer Classification Model',
      tech: ['Python', 'scikit-learn'],
      tag: 'ML',
      desc: 'Performed EDA, preprocessing, and feature scaling on the Wisconsin dataset. Built Logistic Regression, Decision Tree, and Random Forest models evaluated by precision, recall, and F1-score.',
      link: '#',
    },
    {
      name: 'Retail Data Analytics Dashboard',
      tech: ['Power BI', 'Tableau', 'Excel'],
      tag: 'Analytics',
      desc: 'Analyzed retail datasets to identify sales trends and business insights. Built interactive dashboards for clear, data-driven reporting.',
      link: '#',
    },
    {
      name: 'PocketGuard – Finance Manager',
      tech: ['Java', 'Swing', 'MySQL'],
      tag: 'Desktop App',
      desc: 'Finance management application with expense tracking and budgeting analytics built with Java Swing and MySQL.',
      link: '#',
    },
    {
      name: 'Educational Website for Tutorial Center',
      tech: ['React'],
      tag: 'Frontend',
      desc: 'Responsive multi-page website with clean UI, structured navigation, and a dynamic circular gallery for enhanced visual engagement.',
      link: '#',
    },
  ]
  
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
      marginBottom: '48px',
      letterSpacing: '-3px',
      lineHeight: 1,
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
      gap: '0',
    },
    card: {
      border: '3px solid #111',
      marginRight: '-3px',
      marginBottom: '-3px',
      padding: '32px',
      background: '#fff',
      transition: 'background 0.2s, transform 0.2s',
      cursor: 'pointer',
      position: 'relative',
      overflow: 'hidden',
    },
    topRow: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      marginBottom: '16px',
    },
    tag: {
      background: '#f5a623',
      color: '#111',
      fontFamily: 'Share Tech Mono, monospace',
      fontSize: '10px',
      textTransform: 'uppercase',
      letterSpacing: '2px',
      padding: '4px 10px',
      border: '2px solid #111',
    },
    arrow: {
      fontFamily: 'Share Tech Mono, monospace',
      fontSize: '18px',
      color: '#ccc',
      transition: 'color 0.2s',
    },
    cardName: {
      fontFamily: 'Share Tech Mono, monospace',
      fontSize: '18px',
      color: '#111',
      marginBottom: '12px',
      lineHeight: 1.2,
    },
    cardDesc: {
      fontFamily: 'Space Grotesk, sans-serif',
      fontSize: '13px',
      color: '#555',
      lineHeight: 1.6,
      marginBottom: '20px',
    },
    techRow: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '6px',
    },
    techTag: {
      border: '1px solid #ddd',
      padding: '2px 8px',
      fontFamily: 'Share Tech Mono, monospace',
      fontSize: '10px',
      color: '#888',
      textTransform: 'uppercase',
      letterSpacing: '0.5px',
    },
  }
  
  export default function Projects() {
    return (
      <>
        <style>{`
          .project-card:hover {
            background: #111 !important;
          }
          .project-card:hover .proj-name {
            color: #f5a623 !important;
          }
          .project-card:hover .proj-desc {
            color: #aaa !important;
          }
          .project-card:hover .proj-arrow {
            color: #f5a623 !important;
          }
          .project-card:hover .proj-tech {
            border-color: #333 !important;
            color: #666 !important;
          }
        `}</style>
        <section style={styles.section} id="projects">
          <div style={styles.sectionTitle}>Projects</div>
          <div style={styles.grid}>
            {projects.map((p) => (
              <div key={p.name} className="project-card" style={styles.card}>
                <div style={styles.topRow}>
                  <span style={styles.tag}>{p.tag}</span>
                  <span className="proj-arrow" style={styles.arrow}>→</span>
                </div>
                <div className="proj-name" style={styles.cardName}>{p.name}</div>
                <p className="proj-desc" style={styles.cardDesc}>{p.desc}</p>
                <div style={styles.techRow}>
                  {p.tech.map((t) => (
                    <span key={t} className="proj-tech" style={styles.techTag}>{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </>
    )
  }