const skillGroups = [
    {
      label: 'Languages',
      icon: '{ }',
      items: ['Python', 'Java', 'SQL'],
    },
    {
      label: 'Data & ML',
      icon: '▦',
      items: ['Excel', 'Power BI', 'Tableau', 'Data Cleaning', 'EDA', 'Data Visualization, Machine Learning Basics'],
    },
    {
      label: 'Tools & Frameworks',
      icon: '◈',
      items: ['React', 'MySQL', 'Supabase', 'Figma', 'Canva', 'Prisma ORM'],
    },
    {
      label: 'Concepts',
      icon: '◻',
      items: ['OOP', 'REST APIs', 'Data Structures', 'Blockchain Basics'],
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
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
      gap: '20px',
    },
    card: {
      border: '2px solid #333',
      padding: '24px 20px',
      transition: 'border-color 0.2s, transform 0.2s',
    },
    cardIcon: {
      fontFamily: 'Share Tech Mono, monospace',
      fontSize: '22px',
      color: '#f5a623',
      marginBottom: '12px',
    },
    cardLabel: {
      fontFamily: 'Share Tech Mono, monospace',
      fontSize: '12px',
      color: '#f5a623',
      textTransform: 'uppercase',
      letterSpacing: '2px',
      marginBottom: '16px',
    },
    tagList: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '8px',
    },
    tag: {
      background: 'transparent',
      border: '1px solid #444',
      color: '#ccc',
      padding: '4px 10px',
      fontFamily: 'Space Grotesk, sans-serif',
      fontSize: '12px',
      borderRadius: '0',
    },
  }
  
  export default function Skills() {
    return (
      <>
        <style>{`
          .skill-card:hover {
            border-color: #f5a623 !important;
            transform: translateY(-4px);
          }
        `}</style>
        <section style={styles.section} id="skills">
          <div style={styles.inner}>
            <div style={styles.sectionTitle}>Skills</div>
            <div style={styles.grid}>
              {skillGroups.map((group) => (
                <div key={group.label} className="skill-card" style={styles.card}>
                  <div style={styles.cardIcon}>{group.icon}</div>
                  <div style={styles.cardLabel}>{group.label}</div>
                  <div style={styles.tagList}>
                    {group.items.map((item) => (
                      <span key={item} style={styles.tag}>{item}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </>
    )
  }