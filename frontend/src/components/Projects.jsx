import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { projects } from '../data/content';

function ProjectVisual({ kind }) {
  if (kind === "bookify") {
    return (
      <div className="w-full h-full p-2 flex flex-col justify-between bg-stone-50 font-serif">
        <div className="border-b border-stone-200 pb-1 flex justify-between items-center">
          <span className="text-[10px] font-bold tracking-tight text-stone-800">Bookify</span>
          <span className="text-[7px] bg-emerald-100 text-emerald-700 font-mono px-1 py-0.5 rounded">92% match</span>
        </div>
        <div className="my-1 flex-1 flex gap-1 items-end">
          <div className="w-4 h-8 bg-stone-300 rounded-sm" />
          <div className="w-4 h-10 bg-stone-400 rounded-sm" />
          <div className="w-4 h-6 bg-emerald-400 rounded-sm" />
          <div className="w-4 h-9 bg-stone-300 rounded-sm" />
        </div>
        <span className="text-[7px] text-stone-400 font-sans">Recommended for you</span>
      </div>
    );
  }
  if (kind === "fashionhub") {
    return (
      <div className="w-full h-full p-2 flex flex-col justify-between bg-[#fceddb]">
        <div className="flex justify-between items-center text-[10px] font-bold text-amber-900 border-b border-amber-200 pb-1">
          <span>FashionHub</span>
          <span className="bg-amber-800 text-white text-[8px] px-1.5 py-0.5 rounded-full">eSewa</span>
        </div>
        <div className="grid grid-cols-3 gap-1 my-1">
          <div className="bg-white rounded border border-amber-200/60 h-6" />
          <div className="bg-white rounded border border-amber-200/60 h-6" />
          <div className="bg-white rounded border border-amber-200/60 h-6" />
        </div>
        <div className="bg-amber-800 text-white text-center text-[9px] py-1 rounded font-medium">Checkout</div>
      </div>
    );
  }
  if (kind === "leadscoring") {
    return (
      <div className="w-full h-full p-2 flex flex-col justify-between bg-indigo-50 font-mono">
        <div className="flex justify-between items-center text-[9px] font-bold text-indigo-900 border-b border-indigo-100 pb-1">
          <span>Lead score</span>
          <span className="text-[7px] bg-indigo-600 text-white px-1 rounded">decay 30d</span>
        </div>
        <div className="my-1 flex-1 flex flex-col gap-1 justify-center">
          <div className="flex items-center gap-1">
            <div className="h-1.5 bg-indigo-600 rounded-full" style={{ width: '85%' }} />
            <span className="text-[6px] text-indigo-500">hot</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="h-1.5 bg-indigo-400 rounded-full" style={{ width: '55%' }} />
            <span className="text-[6px] text-indigo-500">warm</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="h-1.5 bg-indigo-200 rounded-full" style={{ width: '25%' }} />
            <span className="text-[6px] text-indigo-400">cold</span>
          </div>
        </div>
        <span className="text-[6px] text-indigo-400">CSV batch: 340 leads scored</span>
      </div>
    );
  }
  if (kind === "quickbites") {
    return (
      <div className="w-full h-full p-2 flex flex-col justify-between bg-orange-50">
        <div className="flex justify-between items-center text-[10px] font-bold text-orange-900 border-b border-orange-200 pb-1">
          <span>QuickBites</span>
          <span className="bg-orange-700 text-white text-[8px] px-1.5 py-0.5 rounded-full">3 items</span>
        </div>
        <div className="grid grid-cols-2 gap-1.5 my-1">
          <div className="bg-white p-1 rounded border border-orange-200/60 flex flex-col justify-between">
            <span className="font-bold text-[8px] text-stone-700 truncate">Momo</span>
            <span className="text-[8px] text-orange-700 font-semibold">Rs 150</span>
          </div>
          <div className="bg-white p-1 rounded border border-orange-200/60 flex flex-col justify-between">
            <span className="font-bold text-[8px] text-stone-700 truncate">Chowmein</span>
            <span className="text-[8px] text-orange-700 font-semibold">Rs 120</span>
          </div>
        </div>
        <div className="bg-orange-700 text-white text-center text-[9px] py-1 rounded font-medium">Order now</div>
      </div>
    );
  }
  if (kind === "smscampaign") {
    return (
      <div className="w-full h-full flex flex-col justify-between p-2 font-mono text-[9px] text-stone-600 bg-stone-100">
        <div className="flex justify-between items-center border-b border-stone-200 pb-1 text-[8px] uppercase tracking-wider text-stone-400">
          <span>Campaign node</span>
          <span className="w-2 h-2 rounded-full bg-emerald-500" />
        </div>
        <div className="space-y-1 my-1 flex-1 overflow-hidden">
          <div className="bg-stone-200 p-1 rounded text-stone-700 truncate">Group: Kathmandu_East</div>
          <div className="bg-stone-200 p-1 rounded text-stone-500 truncate">Payload: appointment reminder</div>
          <div className="text-emerald-700 text-[8px] font-bold">Delivered 412/420 [98%]</div>
        </div>
        <div className="w-full bg-stone-300 h-1.5 rounded-full overflow-hidden">
          <div className="bg-stone-600 h-full w-4/5" />
        </div>
      </div>
    );
  }
  if (kind === "blogapp") {
    return (
      <div className="w-full h-full p-2 flex flex-col justify-between bg-stone-50 font-serif">
        <div className="border-b border-stone-200 pb-1 flex justify-between items-center">
          <span className="text-[10px] font-bold tracking-tight text-stone-800">The Dev Logs</span>
          <span className="text-[7px] bg-stone-200 font-mono px-1 py-0.5 rounded text-stone-600">MD editor</span>
        </div>
        <div className="my-1 flex-1 space-y-1">
          <div className="text-[9px] font-bold text-stone-900 leading-tight"># Working with Django schemas</div>
          <p className="text-[7px] text-stone-500 font-sans line-clamp-2 leading-tight">
            Markdown blocks format nested tables and layout structures smoothly...
          </p>
        </div>
        <div className="flex justify-between items-center text-[7px] font-sans text-stone-400 border-t border-stone-100 pt-1">
          <span>By Sujana Sharma</span>
          <span className="font-mono">5 min read</span>
        </div>
      </div>
    );
  }
  return null;
}

function ProjectCard({ project, idx }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const dir = idx % 2 === 0 ? 1 : -1;

  const rotateY = useTransform(scrollYProgress, [0, 0.5, 1], [dir * 30, 0, dir * -18]);
  const z = useTransform(scrollYProgress, [0, 0.5, 1], [-140, 0, -90]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.88, 1, 0.92]);
  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.5, 0.85, 1], [0.25, 1, 1, 1, 0.35]);

  return (
    <motion.div
      ref={ref}
      style={{ rotateY, z, scale, opacity, transformPerspective: 1200 }}
      className="bg-[var(--paper)] border-2 border-[var(--brown)] rounded-lg p-4 flex flex-col justify-between shadow-[0_4px_0_var(--brown)] relative overflow-hidden"
    >
      <div>
        <div className="w-full h-24 border border-[var(--brown-light)] rounded bg-stone-100 overflow-hidden shadow-inner mb-3.5 relative select-none">
          <ProjectVisual kind={project.visual} />
        </div>
        <span className="font-body text-[9px] font-extrabold uppercase tracking-wider text-[var(--rust)] block mb-1">
          {project.type}
        </span>
        <h3 className="font-display text-xl font-bold text-[var(--ink)] mb-2">
          {project.title}
        </h3>
        <p className="font-body text-xs text-[var(--brown-light)] leading-relaxed mb-4">
          {project.description}
        </p>
      </div>

      <div>
        <div className="flex flex-wrap gap-1 mb-4">
          {project.stack.map(tech => (
            <span
              key={tech}
              className="font-body text-[9px] font-medium bg-[var(--paper-dark)] border border-[var(--brown-xfaint)] text-[var(--brown-mid)] px-2 py-0.5 rounded"
            >
              {tech}
            </span>
          ))}
        </div>
        
          <a href={project.link}
          target="_blank"
          rel="noreferrer"
          className="w-full inline-flex items-center justify-center text-center font-body text-xs font-bold text-[var(--ink)] bg-[var(--cream-dark)] border border-[var(--brown-mid)] rounded py-2 px-3 hover:bg-[var(--cream-deeper)] transition-all duration-100"
        >
          Explore code source &rarr;
        </a>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-16 px-4 md:px-8 bg-[var(--green)]">
      <div className="max-w-[1020px] mx-auto">
        <div className="mb-10 text-center md:text-left">
          <span className="font-hand text-xl text-[var(--yellow-note)] font-bold block mb-1">
            My creative desk work
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-extrabold text-[var(--paper)] tracking-tight">
            Projects
          </h2>
          <div className="w-16 h-1 bg-[var(--yellow-note)] mt-3 mx-auto md:mx-0 rounded-full" />
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          style={{ perspective: '1400px' }}
        >
          {projects.map((project, idx) => (
            <ProjectCard key={project.title} project={project} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}