import { motion } from 'framer-motion'

export default function AboutMe() {
  return (
    <section id="about" style={{ background: 'var(--cream)', padding: '40px 32px' }}>
      <div className="notebook-container grid-paper" style={{ maxWidth: '1020px', margin: '0 auto' }}>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '32px' }} className="about-grid">
          
          {/* —— LEFT SIDE —— */}
          <div className="about-notebook">
            <h2 style={{ 
              fontFamily: 'var(--font-display)', 
              color: 'var(--brown)', 
              fontSize: '1.8rem', 
              fontWeight: 800, 
              margin: '0 0 16px 0' 
            }}>
              About Me
            </h2>
            
            <p style={{ 
              fontFamily: 'var(--font-body)', 
              fontSize: '0.9rem', 
              color: 'var(--ink)', 
              lineHeight: 1.6,
              margin: '0 0 16px 0'
            }}>
              I am a web developer with a practical focus on backend logic and simple web systems. I enjoy organizing structured databases, writing readable automation programs, and building cleanly styled user interfaces.
            </p>

            <p style={{ 
              fontFamily: 'var(--font-body)', 
              fontSize: '0.9rem', 
              color: 'var(--ink)', 
              lineHeight: 1.6,
              margin: '0 0 20px 0'
            }}>
              Instead of just exploring configurations on paper, I spend my time building real tools—whether that means a functional tracking ledger, a chat panel interface, or data scripts to dispatch files.
            </p>

            <div style={{ display: 'inline-block', position: 'relative' }}>
              <span style={{ fontFamily: 'var(--font-hand)', fontSize: '1.3rem', color: 'var(--rust)', fontWeight: 'bold' }}>
                Building clear, reliable tools.
              </span>
            </div>
          </div>

          {/* —— RIGHT SIDE —— */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', justifyContent: 'center' }}>
            
            <div style={{ background: 'var(--paper-dark)', border: '1px solid var(--brown-xfaint)', borderRadius: '6px', padding: '14px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                <span>⚙️</span>
                <h4 style={{ fontFamily: 'var(--font-body)', fontSize: '0.82rem', fontWeight: 700, color: 'var(--brown)', textTransform: 'uppercase', margin: 0 }}>
                  Practical Focus
                </h4>
              </div>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.8rem', color: 'var(--brown-light)', margin: 0, lineHeight: 1.4 }}>
                I value solid structure over fancy complexity. My goal is to write code that functions exactly as expected without unneeded clutter.
              </p>
            </div>

            <div style={{ background: 'var(--paper-dark)', border: '1px solid var(--brown-xfaint)', borderRadius: '6px', padding: '14px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                <span>🔨</span>
                <h4 style={{ fontFamily: 'var(--font-body)', fontSize: '0.82rem', fontWeight: 700, color: 'var(--brown)', textTransform: 'uppercase', margin: 0 }}>
                  Project Experience
                </h4>
              </div>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.8rem', color: 'var(--brown-light)', margin: 0, lineHeight: 1.4 }}>
                Every tool in my repositories represents a problem I wanted to map out and solve, showing clear, stepwise progress.
              </p>
            </div>

            <div style={{ background: 'var(--paper-dark)', border: '1px solid var(--brown-xfaint)', borderRadius: '6px', padding: '14px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                <span>📖</span>
                <h4 style={{ fontFamily: 'var(--font-body)', fontSize: '0.82rem', fontWeight: 700, color: 'var(--brown)', textTransform: 'uppercase', margin: 0 }}>
                  Continuous Adaptation
                </h4>
              </div>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.8rem', color: 'var(--brown-light)', margin: 0, lineHeight: 1.4 }}>
                I pick up new tools and developer packages as needed to complete the job and keep code bases clean.
              </p>
            </div>

          </div>
        </div>

      </div>
      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 24px !important; }
          .about-notebook { padding-left: 24px !important; }
          .about-notebook::before { display: none !important; }
        }
      `}</style>
    </section>
  )
}