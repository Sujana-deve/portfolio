import React, { useRef, useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { certifications } from '../data/content';

const CARD_W = 460;
const CARD_H = 320;

export default function Certifications() {
  const sectionRef = useRef(null);
  const [active, setActive] = useState(0);
  const [hovering, setHovering] = useState(false);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] });

  const count = certifications.length;
  const angleStep = 360 / count;
  const radius = Math.round(CARD_W / (2 * Math.sin(Math.PI / count)));

  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    if (hovering) return;
    const idx = Math.min(count - 1, Math.max(0, Math.floor(v * count)));
    setActive(idx);
  });

  React.useEffect(() => {
    if (!hovering) return;
    const id = setInterval(() => setActive((p) => (p + 1) % count), 1800);
    return () => clearInterval(id);
  }, [hovering, count]);

  const cert = certifications[active];

  return (
    <section id="certifications" ref={sectionRef} className="py-16 px-4 md:px-8 bg-[var(--cream)]">
      <div className="max-w-[1020px] mx-auto">
        <div className="mb-10 text-center md:text-left">
          <span className="font-hand text-xl text-[var(--rust)] font-bold block mb-1">
            Pinned to the board
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-extrabold text-[var(--ink)] tracking-tight">
            Certifications
          </h2>
          <div className="w-16 h-1 bg-[var(--rust)] mt-3 mx-auto md:mx-0 rounded-full" />
        </div>

        <div
          className="flex flex-col items-center"
          onMouseEnter={() => setHovering(true)}
          onMouseLeave={() => setHovering(false)}
        >
          <div
            className="relative w-full flex items-center justify-center"
            style={{ perspective: '1600px', height: '380px' }}
          >
            <motion.div
              className="relative"
              style={{ width: CARD_W, height: CARD_H, transformStyle: 'preserve-3d' }}
              animate={{ rotateY: -active * angleStep }}
              transition={{ type: 'spring', stiffness: 60, damping: 16 }}
            >
              {certifications.map((c, i) => (
                <div
                  key={c.title}
                  className="absolute inset-0 rounded-xl border-4 border-[var(--brown)] bg-white shadow-[0_4px_0_var(--brown)] overflow-hidden flex items-center justify-center"
                  style={{
                    transform: `rotateY(${i * angleStep}deg) translateZ(${radius}px)`,
                    backfaceVisibility: 'hidden',
                  }}
                >
                  <img
                    src={c.image}
                    alt={c.title + ' certificate'}
                    className="w-full h-full object-contain p-1"
                  />
                </div>
              ))}
            </motion.div>
          </div>

          <div className="flex gap-2 mt-6">
            {certifications.map((c, i) => (
              <button
                key={c.title}
                onClick={() => setActive(i)}
                aria-label={`Show ${c.title} certificate`}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  i === active ? 'w-6 bg-[var(--rust)]' : 'w-2.5 bg-[var(--brown-light)]'
                }`}
              />
            ))}
          </div>

          <div className="text-center mt-5 max-w-md">
            <h3 className="font-display text-lg font-bold text-[var(--ink)]">{cert.title}</h3>
            <span className="font-body text-xs text-[var(--brown-mid)] mt-1 block">
              {cert.issuer} &middot; {cert.date}
            </span>
            <p className="font-body text-xs text-[var(--brown-light)] mt-2 leading-relaxed">{cert.blurb}</p>

            <div className="flex items-center justify-center gap-3 mt-3">
              <a
                href={cert.image}
                target="_blank"
                rel="noreferrer"
                className="font-body text-[10px] font-bold text-[var(--ink)] bg-[var(--cream-dark)] border border-[var(--brown-mid)] rounded px-3 py-1 hover:bg-[var(--cream-deeper)] transition-all"
              >
                View certificate
              </a>
              {cert.verifyUrl && (
                <a
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="font-body text-[10px] text-[var(--brown-mid)] underline"
                >
                  Verify online
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}