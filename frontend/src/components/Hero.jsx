import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      padding: '120px 32px 40px 32px', // Slightly increased top padding for navbar clearance
      background: 'var(--cream)',
      overflow: 'hidden'
    }}>
      <div style={{
        position: 'absolute',
        inset: 0,
        opacity: 0.25,
        backgroundImage: 'radial-gradient(var(--brown-faint) 1px, transparent 1px)',
        backgroundSize: '24px 24px',
        pointerEvents: 'none'
      }} />

      <div style={{ 
        maxWidth: '1140px', 
        margin: '0 auto', 
        width: '100%', 
        display: 'grid', 
        gridTemplateColumns: '1.1fr 0.9fr', 
        gap: '40px', 
        alignItems: 'center',
        position: 'relative',
        zIndex: 2
      }} className="hero-grid">
        
        {/* —— LEFT SIDE —— */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(3rem, 4.8vw, 4.5rem)', // Scaled up title baseline slightly
            fontWeight: 800,
            lineHeight: 1.05,
            color: 'var(--ink)',
            margin: '0 0 18px 0',
            letterSpacing: '-0.02em'
          }}>
            Hi, I'm<br />
            <span style={{ color: 'var(--brown)' }}>Sujana Sharma</span>
          </h1>

          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            background: 'var(--rust-bg)',
            border: '1.5px solid var(--rust)',
            padding: '6px 18px',
            borderRadius: '4px',
            marginBottom: '24px'
          }}>
            <p style={{
              fontFamily: 'var(--font-hand)',
              fontSize: '1.5rem', // Bumped handwritten sticker label size
              fontWeight: 'bold',
              color: 'var(--rust)',
              margin: 0
            }}>
              Web Developer &amp; Programmer ♡
            </p>
          </div>

          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '1.05rem', // Increased body text size for clear, comfortable scanning
            color: 'var(--brown-light)',
            lineHeight: 1.7,
            maxWidth: '480px', // Widened slightly to balance out larger text size
            margin: '0 0 32px 0'
          }}>
            I build web projects using Python and Django for backend systems, combined with React for clean interfaces. I enjoy writing scripts to handle data tasks, automating repetitive routines, and connecting frontend views with logical code bases.
          </p>

          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', marginBottom: '36px' }}>
            <a href="#skills" style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.88rem', // Scaled up primary actions
              fontWeight: 700,
              color: 'var(--paper)',
              background: 'var(--green)',
              border: '2px solid var(--green)',
              borderRadius: '6px',
              padding: '12px 24px',
              textDecoration: 'none',
              boxShadow: '0 3px 0 #283d23, 0 4px 8px rgba(0,0,0,0.1)'
            }}>
              View My Skills →
            </a>
            <a href="#contact" style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.88rem',
              fontWeight: 700,
              color: 'var(--ink)',
              background: 'var(--paper)',
              border: '2px solid var(--brown-mid)',
              borderRadius: '6px',
              padding: '12px 24px',
              textDecoration: 'none',
              boxShadow: '0 3px 0 var(--brown-mid), 0 4px 8px rgba(0,0,0,0.05)'
            }}>
              Let's Talk 💬
            </a>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.8rem', fontType: 'bold', fontWeight: 800, color: 'var(--brown-faint)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Find Me On</span>
            <div style={{ display: 'flex', gap: '10px' }}>
              {[
                { name: 'in', href: 'https://www.linkedin.com/in/sujana-sharma-49779934b' },
                { name: 'git', href: 'https://github.com/Sujana-deve' },
                { name: 'mail', href: 'mailto:sharmasujana420@gmail.com' }
              ].map(soc => (
                <a key={soc.name} href={soc.href} target="_blank" rel="noreferrer" style={{
                  width: '34px',
                  height: '34px',
                  borderRadius: '50%',
                  background: 'var(--paper)',
                  border: '1.5px solid var(--brown-xfaint)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textDecoration: 'none',
                  fontSize: '0.82rem',
                  fontWeight: 'bold',
                  color: 'var(--brown-mid)',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
                }}>
                  {soc.name}
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* —— RIGHT SIDE —— */}
        <div style={{ position: 'relative', width: '100%', height: '440px' }} className="hero-desk-illustration">
          <div style={{ position: 'absolute', bottom: '20px', left: '-20px', right: '-20px', height: '140px', background: 'var(--cream-dark)', border: '2px solid var(--brown-faint)', borderRadius: '12px', zIndex: 1 }} />

          <div style={{ position: 'absolute', left: '10px', bottom: '80px', width: '120px', zIndex: 3 }}>
            <motion.div
              initial={{ opacity: 0, x: -24, rotate: -12 }}
              animate={{ opacity: 1, x: 0, rotate: -2 }}
              transition={{ duration: 0.5, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
              style={{ background: '#4a6741', height: '20px', borderRadius: '3px 3px 0 0', border: '1px solid var(--brown)', paddingLeft: '8px', color: '#fff', fontSize: '0.55rem', fontFamily: 'monospace', display: 'flex', alignItems: 'center' }}
            >
              JavaScript
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.68, ease: [0.16, 1, 0.3, 1] }}
              style={{ background: '#b8380a', height: '22px', border: '1px solid var(--brown)', marginTop: '-2px', paddingLeft: '8px', color: '#fff', fontSize: '0.55rem', fontFamily: 'monospace', display: 'flex', alignItems: 'center' }}
            >
              Django
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.81, ease: [0.16, 1, 0.3, 1] }}
              style={{ background: '#4a3221', height: '24px', borderRadius: '0 0 3px 3px', border: '1px solid var(--brown)', marginTop: '-2px', paddingLeft: '8px', color: '#f2ead8', fontSize: '0.55rem', fontFamily: 'monospace', display: 'flex', alignItems: 'center', fontWeight: 'bold' }}
            >
              Python
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -8, rotate: -1.5, boxShadow: '0 18px 32px rgba(74,46,26,0.22)' }}
            style={{ position: 'absolute', right: '20px', bottom: '50px', width: '290px', height: '330px', background: '#e4dac2', border: '3px solid var(--brown-mid)', borderRadius: '16px 16px 4px 4px', boxShadow: '0 10px 25px rgba(74,46,26,0.15)', zIndex: 2, padding: '12px', display: 'flex', flexDirection: 'column', cursor: 'default' }}
          >
            <div style={{ flex: 1, background: '#1a120b', borderRadius: '8px', overflow: 'hidden', position: 'relative', border: '1.5px solid var(--brown)' }}>
              <img src="/profile.jpg" alt="Sujana" style={{ width: '100%', height: '100%', objectFit: 'cover' }} onError={(e) => { e.target.style.opacity = '0.15'; }} />
              <div style={{ position: 'absolute', bottom: '8px', left: '8px', background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(4px)', padding: '2px 6px', borderRadius: '4px', fontSize: '0.6rem', color: '#fff', fontFamily: 'monospace' }}>&lt;/&gt; Code Environment</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -30, rotate: -18, scale: 0.75 }}
            animate={{ opacity: 1, y: 0, rotate: -4, scale: 1 }}
            transition={{ duration: 0.55, delay: 0.95, ease: [0.34, 1.56, 0.64, 1] }}
            whileHover={{ rotate: 3, scale: 1.06 }}
            style={{ position: 'absolute', top: '20px', left: '120px', background: 'var(--paper)', border: '1px solid var(--brown-xfaint)', padding: '12px', width: '115px', zIndex: 4, cursor: 'default' }}
          >
            <p style={{ fontFamily: 'var(--font-hand)', fontSize: '0.9rem', color: 'var(--brown-mid)', margin: 0, textAlign: 'center', lineHeight: 1.2 }}>Keep Creating,<br />Keep Learning 🛠️</p>
          </motion.div>
        </div>

      </div>
      <style>{`
        @media (max-width: 860px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 16px !important; text-align: center !important; }
          .hero-desk-illustration { display: none !important; }
          p { margin: 0 auto 24px auto !important; }
          .nav-links { display: none !important; } /* Standard safe breakdown handling */
        }
      `}</style>
    </section>
  )
}