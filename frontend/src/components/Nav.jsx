import React from 'react';

export default function Navbar() {
  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      height: '70px',
      background: 'rgba(247, 242, 229, 0.92)', // var(--cream) with subtle opacity
      backdropFilter: 'blur(8px)',
      borderBottom: '1px solid var(--brown-xfaint)',
      zIndex: 100,
      display: 'flex',
      alignItems: 'center',
      padding: '0 32px'
    }}>
      <div style={{
        maxWidth: '1140px',
        margin: '0 auto',
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        {/* Logo Brand / Name */}
        <a href="#" style={{
          fontFamily: 'var(--font-display)',
          fontSize: '1.45rem', // Bumped up for better prominence
          fontWeight: 800,
          color: 'var(--ink)',
          textDecoration: 'none'
        }}>
          Sujana <span style={{ color: 'var(--brown)', fontWeight: 400 }}>Sharma</span>
        </a>

        {/* Navigation Links Row */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '28px' }} className="nav-links">
          {[
            { name: 'About', href: '#about' },
            { name: 'Skills', href: '#skills' },
            { name: 'Projects', href: '#projects' },
            { name: 'Contact', href: '#contact' }
          ].map(link => (
            <a 
              key={link.name} 
              href={link.href} 
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1.05rem', // Increased size for high readability
                fontWeight: 600,
                color: 'var(--brown-light)',
                textDecoration: 'none',
                transition: 'color 0.1s ease'
              }}
              className="hover:text-[var(--ink)]"
            >
              {link.name}
            </a>
          ))}
          
          {/* Action CTA Button */}
          <a 
            href="#contact" 
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.95rem', // Adjusted proportionally
              fontWeight: 700,
              color: 'var(--paper)',
              background: 'var(--brown)',
              padding: '8px 16px',
              borderRadius: '4px',
              textDecoration: 'none',
              boxShadow: '0 2px 0 var(--ink)',
              marginLeft: '8px'
            }}
          >
            Let's Talk
          </a>
        </div>
      </div>
    </nav>
  );
}