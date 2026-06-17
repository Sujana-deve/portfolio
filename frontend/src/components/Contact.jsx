import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [activeField, setActiveField] = useState('idle'); // 'name', 'email', 'message', 'idle'

  return (
    <section id="contact" style={{ background: 'var(--cream)', padding: '80px 24px 60px 24px', position: 'relative' }}>
      <div style={{ maxWidth: '960px', margin: '0 auto', position: 'relative' }}>
        
        {/* ====================================================
            PEEK-A-BOO DESK MASCOT EFFECT (Inspired by image_98edbe.jpg)
            ==================================================== */}
        <div style={{ 
          position: 'absolute', 
          top: '-64px', 
          right: '80px', 
          width: '120px', 
          height: '70px', 
          zIndex: 0,
          overflow: 'hidden',
          pointerEvents: 'none'
        }} className="mascot-viewport">
          <motion.div
            animate={{
              y: activeField === 'message' ? 45 : activeField === 'idle' ? 15 : 0,
              rotate: activeField === 'email' ? -4 : activeField === 'name' ? 4 : 0
            }}
            transition={{ type: 'spring', stiffness: 200, damping: 15 }}
            style={{ width: '100%', height: '100%', position: 'relative' }}
          >
            {/* Mascot Head (Pure CSS Vector) */}
            <div style={{
              width: '90px',
              height: '80px',
              background: 'var(--brown-mid)',
              borderRadius: '50% 50% 45% 45%',
              margin: '0 auto',
              position: 'relative',
              border: '2px solid var(--brown)'
            }}>
              {/* Left Ear */}
              <div style={{ position: 'absolute', top: '-8px', left: '4px', width: '24px', height: '24px', background: 'var(--brown-mid)', border: '2px solid var(--brown)', borderRadius: '50% 50% 0 50%' }}>
                <div style={{ width: '10px', height: '10px', background: 'var(--cream-dark)', borderRadius: '50%', margin: '4px auto 0 auto' }} />
              </div>
              {/* Right Ear */}
              <div style={{ position: 'absolute', top: '-8px', right: '4px', width: '24px', height: '24px', background: 'var(--brown-mid)', border: '2px solid var(--brown)', borderRadius: '50% 50% 50% 0' }}>
                <div style={{ width: '10px', height: '10px', background: 'var(--cream-dark)', borderRadius: '50%', margin: '4px auto 0 auto' }} />
              </div>
              {/* Eyes Container */}
              <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', marginTop: '22px' }}>
                {/* Left Eye */}
                <div style={{ width: '14px', height: '14px', background: 'var(--ink)', borderRadius: '50%', position: 'relative' }}>
                  <motion.div 
                    animate={{ x: activeField === 'email' ? -2 : activeField === 'name' ? 2 : 0 }}
                    style={{ width: '5px', height: '5px', background: '#fff', borderRadius: '50%', position: 'absolute', top: '2px', left: '2px' }} 
                  />
                </div>
                {/* Right Eye */}
                <div style={{ width: '14px', height: '14px', background: 'var(--ink)', borderRadius: '50%', position: 'relative' }}>
                  <motion.div 
                    animate={{ x: activeField === 'email' ? -2 : activeField === 'name' ? 2 : 0 }}
                    style={{ width: '5px', height: '5px', background: '#fff', borderRadius: '50%', position: 'absolute', top: '2px', left: '2px' }} 
                  />
                </div>
              </div>
              {/* Nose & Snout */}
              <div style={{ width: '12px', height: '8px', background: 'var(--rust)', borderRadius: '50%', margin: '4px auto 0 auto' }} />
              <div style={{ width: '16px', height: '6px', borderBottom: '2px solid var(--ink)', borderRadius: '0 0 50% 50%', margin: '-2px auto 0 auto' }} />
            </div>
          </motion.div>
        </div>

        {/* ====================================================
            MAIN SPLIT CONTENT WRAPPER
            ==================================================== */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: '1fr 1.1fr', 
          gap: '40px',
          background: 'var(--paper)',
          border: '2px solid var(--brown)',
          borderRadius: '8px',
          padding: '40px',
          boxShadow: '0 6px 0 var(--brown), 0 12px 24px rgba(74,46,26,0.08)',
          position: 'relative',
          zIndex: 1
        }} className="contact-card-grid grid-paper">
          
          {/* —— LEFT SIDE: Direct Static Details —— */}
          <div style={{ display: 'flex', flexType: 'column', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <span style={{ fontFamily: 'var(--font-hand)', fontSize: '1.4rem', color: 'var(--rust)', fontWeight: 'bold', display: 'block', marginBottom: '4px' }}>
                Say hello
              </span>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2.4rem', fontWeight: 800, color: 'var(--ink)', margin: '0 0 16px 0' }}>
                Let's Connect
              </h2>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', color: 'var(--brown-light)', lineHeight: 1.6, margin: '0 0 32px 0', maxWidth: '340px' }}>
                Drop a line if you want to talk about a project build, ask about one of my repositories, or just get in touch.
              </p>
            </div>

            {/* Structured Info Card Rows */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {[
                { label: 'Email Address', val: 'sharmasujana420@gmail.com', href: 'mailto:sharmasujana420@gmail.com', icon: '✉️' },
                { label: 'LinkedIn Connection', val: 'https://www.linkedin.com/in/sujana-sharma-b2230b416/', href: 'https://www.linkedin.com/in/sujana-sharma-b2230b416/', icon: '💼' },
                { label: 'GitHub Repository Profile', val: 'github.com/Sujana-deve', href: 'https://github.com/Sujana-deve', icon: '🛠️' }
              ].map(info => (
                <a key={info.label} href={info.href} target="_blank" rel="noreferrer" style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  background: 'var(--paper-dark)',
                  border: '1px solid var(--brown-xfaint)',
                  borderRadius: '6px',
                  padding: '12px',
                  textDecoration: 'none',
                  transition: 'transform 0.1s ease'
                }} className="contact-info-row">
                  <span style={{ fontSize: '1.2rem' }}>{info.icon}</span>
                  <div>
                    <span style={{ display: 'block', fontFamily: 'var(--font-body)', fontSize: '0.68rem', fontWeight: 700, color: 'var(--brown-light)', textTransform: 'uppercase', letterSpacing: '0.02em' }}>{info.label}</span>
                    <span style={{ display: 'block', fontFamily: 'var(--font-body)', fontSize: '0.85rem', color: 'var(--ink)', fontWeight: 600 }} className="truncate">{info.val}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* —— RIGHT SIDE: Tangible Clipboard Form Container —— */}
          <div style={{ 
            background: 'var(--cream-dark)', 
            border: '1px solid var(--brown-light)', 
            borderRadius: '6px', 
            padding: '28px 24px',
            boxShadow: 'inset 0 2px 8px rgba(0,0,0,0.04)'
          }}>
            <form onSubmit={(e) => e.preventDefault()} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
              
              {/* Input Name */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <label style={{ fontFamily: 'var(--font-body)', fontSize: '0.78rem', fontWeight: 700, color: 'var(--brown)', textTransform: 'uppercase' }}>
                  Your Name
                </label>
                <input 
                  type="text" 
                  placeholder="" 
                  onFocus={() => setActiveField('name')}
                  onBlur={() => setActiveField('idle')}
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.88rem',
                    padding: '10px 12px',
                    border: '1.5px solid var(--brown-faint)',
                    borderRadius: '4px',
                    background: 'var(--paper)',
                    color: 'var(--ink)',
                    outline: 'none',
                    transition: 'border-color 0.15s ease'
                  }}
                  className="focus:border-[var(--brown)]"
                />
              </div>

              {/* Input Email */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <label style={{ fontFamily: 'var(--font-body)', fontSize: '0.78rem', fontWeight: 700, color: 'var(--brown)', textTransform: 'uppercase' }}>
                  Your Email
                </label>
                <input 
                  type="email" 
                  placeholder="" 
                  onFocus={() => setActiveField('email')}
                  onBlur={() => setActiveField('idle')}
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.88rem',
                    padding: '10px 12px',
                    border: '1.5px solid var(--brown-faint)',
                    borderRadius: '4px',
                    background: 'var(--paper)',
                    color: 'var(--ink)',
                    outline: 'none',
                    transition: 'border-color 0.15s ease'
                  }}
                  className="focus:border-[var(--brown)]"
                />
              </div>

              {/* Input Message */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <label style={{ fontFamily: 'var(--font-body)', fontSize: '0.78rem', fontWeight: 700, color: 'var(--brown)', textTransform: 'uppercase' }}>
                  Message
                </label>
                <textarea 
                  rows="4"
                  placeholder="Let's work on something together..." 
                  onFocus={() => setActiveField('message')}
                  onBlur={() => setActiveField('idle')}
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.88rem',
                    padding: '10px 12px',
                    border: '1.5px solid var(--brown-faint)',
                    borderRadius: '4px',
                    background: 'var(--paper)',
                    color: 'var(--ink)',
                    outline: 'none',
                    resize: 'none',
                    transition: 'border-color 0.15s ease'
                  }}
                  className="focus:border-[var(--brown)]"
                />
              </div>

              {/* Submit Action */}
              <button 
                type="submit"
                style={{
                  fontFamily: 'var(--font-body)',
                  fontWeight: 700,
                  fontSize: '0.8rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.04em',
                  color: 'var(--paper)',
                  background: 'var(--brown)',
                  border: '2px solid var(--brown)',
                  borderRadius: '4px',
                  padding: '12px',
                  cursor: 'pointer',
                  boxShadow: '0 3px 0 var(--ink)',
                  marginTop: '6px',
                  transition: 'all 0.1s ease'
                }}
                className="hover:translate-y-[1px] hover:shadow-[0_2px_0_var(--ink)] active:translate-y-[3px] active:shadow-none"
              >
                Send Message ✉️
              </button>

            </form>
          </div>

        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-card-grid { grid-template-columns: 1fr !important; gap: 32px !important; padding: 24px !important; }
          .mascot-viewport { right: 32px !important; }
          .contact-info-row:hover { transform: none !important; }
        }
        @media (min-width: 769px) {
          .contact-info-row:hover { transform: translateX(3px); }
        }
      `}</style>
    </section>
  );
}