import { motion } from 'framer-motion'

const skillData = {
  Frontend: [
    { name: 'HTML5', logo: '🌐' },
    { name: 'CSS3', logo: '🎨' },
    { name: 'JavaScript', logo: '📜' },
    { name: 'React', logo: '⚛️' },
    { name: 'Tailwind CSS', logo: '🌊' }
  ],
  Backend: [
    { name: 'Python', logo: '🐍' },
    { name: 'Django', logo: '🎯' },
    { name: 'RESTful APIs', logo: '🔌' },
    { name: 'Database Design', logo: '🗄️' }
  ],
  'Tools & Workflow': [
    { name: 'Git', logo: '🌿' },
    { name: 'GitHub', logo: '🐙' },
    { name: 'VS Code', logo: '💻' },
    { name: 'npm', logo: '📦' }
  ],
  'Emerging Tech': [
    { name: 'AI Tools', logo: '🤖' },
    { name: 'ChatGPT', logo: '💬' },
    { name: 'GitHub Copilot', logo: '🚀' }
  ]
}

export default function Skills() {
  return (
    <section id="skills" style={{ background: 'var(--cream)', padding: '40px 32px' }}>
      <div style={{ 
        maxWidth: '1100px', 
        margin: '0 auto',
        background: 'var(--paper)',
        border: '2px solid var(--brown-xfaint)',
        borderRadius: '12px',
        padding: '32px',
        boxShadow: '0 4px 20px rgba(74,46,26,0.05)'
      }}>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '24px', borderBottom: '1px solid var(--brown-xfaint)', paddingBottom: '12px' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', color: 'var(--brown)', fontSize: '1.6rem', fontWeight: 800, margin: 0 }}>
            My Skills
          </h2>
          <span style={{ fontFamily: 'var(--font-hand)', color: 'var(--brown-faint)', fontSize: '1.2rem' }}>✦ tech inventory</span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }} className="skills-dense-grid">
          {Object.entries(skillData).map(([category, items], idx) => (
            <div key={category} style={{
              background: 'var(--paper-dark)',
              border: '1.5px solid var(--brown-xfaint)',
              borderRadius: '8px',
              padding: '16px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '14px' }}>
                <span style={{ fontSize: '0.85rem' }}>📁</span>
                <h3 style={{ fontFamily: 'var(--font-body)', fontSize: '0.85rem', fontWeight: 700, color: 'var(--brown)', textTransform: 'uppercase', letterSpacing: '0.05em', margin: 0 }}>
                  {category}
                </h3>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))', gap: '10px' }}>
                {items.map(tech => (
                  <div key={tech.name} style={{
                    background: 'var(--paper)',
                    border: '1px solid rgba(139,100,60,0.15)',
                    borderRadius: '6px',
                    padding: '10px 6px',
                    textAlign: 'center',
                    boxShadow: '0 1px 3px rgba(0,0,0,0.02)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '4px'
                  }}>
                    <span style={{ fontSize: '1.2rem' }}>{tech.logo}</span>
                    <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.72rem', fontWeight: 600, color: 'var(--ink)' }}>
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .skills-dense-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}