import React from 'react';
import { motion } from 'framer-motion';

const projectsData = [
  {
    title: "sms-campaign",
    type: "Backend Automation",
    description: "An SMS application built to schedule messages, organize contact groups, and track delivery logs to handle automated messaging flows efficiently.",
    stack: ["Django", "Python", "Database Models"],
    link: "https://github.com/Sujana-deve",
    // Mini CSS Illustration matching the project's purpose
    renderVisual: () => (
      <div className="w-full h-full flex flex-col justify-between p-2 font-mono text-[9px] text-stone-600 bg-stone-100">
        <div className="flex justify-between items-center border-b border-stone-200 pb-1 text-[8px] uppercase tracking-wider text-stone-400">
          <span>Campaign Node [Active]</span>
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
        </div>
        <div className="space-y-1 my-1 flex-1 overflow-hidden">
          <div className="bg-stone-200 p-1 rounded text-stone-700 truncate">&gt; Dest: Group_Europe_04</div>
          <div className="bg-stone-200 p-1 rounded text-stone-500 truncate">&gt; Payload: "Your alert verification..."</div>
          <div className="text-emerald-700 text-[8px] font-bold">&gt;&gt; Dispatching log stream OK [200]</div>
        </div>
        <div className="w-full bg-stone-300 h-1.5 rounded-full overflow-hidden">
          <div className="bg-stone-600 h-full w-4/5"></div>
        </div>
      </div>
    )
  },
  {
    title: "foodapp",
    type: "Full-Stack Web App",
    description: "A web platform where users can browse food items, customize their cart selections, and follow a straightforward checkout flow.",
    stack: ["React.js", "Django", "Tailwind CSS"],
    link: "https://github.com/Sujana-deve",
    renderVisual: () => (
      <div className="w-full h-full p-2 flex flex-col justify-between bg-[#fceddb]">
        <div className="flex justify-between items-center text-[10px] font-bold text-amber-900 border-b border-amber-200 pb-1">
          <span>Fresh Menu</span>
          <span className="bg-amber-800 text-white text-[8px] px-1.5 py-0.5 rounded-full">3 Items</span>
        </div>
        <div className="grid grid-cols-2 gap-1.5 my-1">
          <div className="bg-white p-1 rounded border border-amber-200/60 flex flex-col justify-between">
            <span className="font-bold text-[8px] text-stone-700 truncate">Classic Burger</span>
            <span className="text-[8px] text-amber-700 font-semibold">$8.50</span>
          </div>
          <div className="bg-white p-1 rounded border border-amber-200/60 flex flex-col justify-between">
            <span className="font-bold text-[8px] text-stone-700 truncate">Crispy Fries</span>
            <span className="text-[8px] text-amber-700 font-semibold">$3.20</span>
          </div>
        </div>
        <div className="bg-amber-800 text-white text-center text-[9px] py-1 rounded font-medium shadow-sm">
          Proceed to Order Summary
        </div>
      </div>
    )
  },
  {
    title: "chatapp",
    type: "Web Application",
    description: "A messaging interface built to handle conversational text inputs, keep track of active chat sessions, and update user threads smoothly.",
    stack: ["Django REST", "Python", "State Management"],
    link: "https://github.com/Sujana-deve",
    renderVisual: () => (
      <div className="w-full h-full p-2 flex flex-col justify-between bg-zinc-50 font-sans">
        <div className="flex items-center gap-1 border-b border-zinc-200 pb-1">
          <div className="w-2 h-2 rounded-full bg-blue-500"></div>
          <span className="text-[9px] font-bold text-zinc-700">Active Session Room</span>
        </div>
        <div className="flex flex-col gap-1.5 my-1 flex-1 justify-end">
          <div className="bg-zinc-200 text-zinc-800 p-1 rounded text-[8px] max-w-[75%] self-start rounded-tl-none">
            Querying server parameters...
          </div>
          <div className="bg-blue-600 text-white p-1 rounded text-[8px] max-w-[75%] self-end rounded-tr-none">
            Thread context initialized.
          </div>
        </div>
        <div className="border-t border-zinc-200 pt-1 flex gap-1 items-center">
          <div className="flex-1 bg-white border border-zinc-300 rounded h-3.5 px-1 text-[8px] text-zinc-400 flex items-center">Type update...</div>
          <div className="w-3.5 h-3.5 rounded bg-blue-600 flex items-center justify-center text-white text-[8px]">↑</div>
        </div>
      </div>
    )
  },
  {
    title: "tracker",
    type: "Personal Analytics",
    description: "A simple budgeting application designed to log day-to-day expenditures, sort entries into categories, and display balance updates.",
    stack: ["Django", "React Core", "Data Serialization"],
    link: "https://github.com/Sujana-deve",
    renderVisual: () => (
      <div className="w-full h-full p-2 flex flex-col justify-between bg-slate-50">
        <div className="flex justify-between items-center text-[9px] font-bold text-slate-700 border-b border-slate-200 pb-1">
          <span>Expense Tracker</span>
          <span className="text-emerald-600 font-mono text-[8px] bg-emerald-50 px-1 rounded">Bal: $1,420</span>
        </div>
        <div className="flex items-end justify-between h-10 px-2 my-1 border-b border-slate-200">
          <div className="w-3 bg-slate-300 h-6 rounded-t-sm" title="Utilities"></div>
          <div className="w-3 bg-amber-500 h-9 rounded-t-sm" title="Food"></div>
          <div className="w-3 bg-slate-400 h-4 rounded-t-sm" title="Travel"></div>
          <div className="w-3 bg-emerald-500 h-11 rounded-t-sm" title="Savings"></div>
        </div>
        <div className="flex justify-between text-[8px] font-mono text-slate-400">
          <span>Util</span><span>Food</span><span>Trav</span><span>Save</span>
        </div>
      </div>
    )
  },
  {
    title: "bloggingapp",
    type: "Content Platform",
    description: "A blogging engine where users can create accounts, write posts using markdown text formatting, and leave comments on articles.",
    stack: ["Django ORM", "Auth Middleware", "Python"],
    link: "https://github.com/Sujana-deve",
    renderVisual: () => (
      <div className="w-full h-full p-2 flex flex-col justify-between bg-stone-50 font-serif">
        <div className="border-b border-stone-200 pb-1 flex justify-between items-center">
          <span className="text-[10px] font-bold tracking-tight text-stone-800">The Dev Logs</span>
          <span className="text-[7px] bg-stone-200 font-mono px-1 py-0.2 rounded text-stone-600">MD Editor</span>
        </div>
        <div className="my-1 flex-1 space-y-1">
          <div className="text-[9px] font-bold text-stone-900 leading-tight"># Working with Django System Schemas</div>
          <p className="text-[7px] text-stone-500 font-sans line-clamp-2 leading-tight">
            Markdown blocks allow authors to format nested tables, technical configurations, and layout structures smoothly...
          </p>
        </div>
        <div className="flex justify-between items-center text-[7px] font-sans text-stone-400 border-t border-stone-100 pt-1">
          <span>By Sujana Sharma</span>
          <span className="font-mono">5 min read</span>
        </div>
      </div>
    )
  },
  {
    title: "react clock",
    type: "Frontend Utility",
    description: "A real-time clock interface built to practice time updating synchronization and responsive UI rendering loop configurations in React.",
    stack: ["React Hooks", "CSS Animations", "JavaScript"],
    link: "https://github.com/Sujana-deve",
    renderVisual: () => (
      <div className="w-full h-full p-2 flex flex-col items-center justify-between bg-neutral-900 text-emerald-400 font-mono">
        <div className="w-full text-left text-[7px] text-neutral-500 border-b border-neutral-800 pb-0.5 tracking-wider uppercase">
          SYSTEM_TIME_LOOP
        </div>
        <div className="my-1 text-center flex flex-col justify-center items-center">
          <div className="text-sm font-bold tracking-widest bg-neutral-950 px-2 py-0.5 rounded border border-neutral-800 shadow-inner">
            12:49:21
          </div>
          <span className="text-[6px] text-neutral-500 mt-1 uppercase tracking-widest animate-pulse">
            Interval Synchronized
          </span>
        </div>
        <div className="w-full flex justify-between text-[6px] text-neutral-600">
          <span>Hz: 60</span>
          <span>Thread: Native</span>
        </div>
      </div>
    )
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 px-4 md:px-8 bg-[var(--green)]">
      <div className="max-w-[1020px] mx-auto">
        
        {/* Section Header */}
        <div className="mb-10 text-center md:text-left">
          <span className="font-hand text-xl text-[var(--yellow-note)] font-bold block mb-1">
            My Creative Desk Work
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-extrabold text-[var(--paper)] tracking-tight">
            Recent Repositories
          </h2>
          <div className="w-16 h-1 bg-[var(--yellow-note)] mt-3 mx-auto md:mx-0 rounded-full" />
        </div>

        {/* Compact Structured Scrapbook Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="bg-[var(--paper)] border-2 border-[var(--brown)] rounded-lg p-4 flex flex-col justify-between shadow-[0_4px_0_var(--brown)] hover:shadow-[0_6px_0_var(--brown)] hover:-translate-y-0.5 transition-all duration-150 relative overflow-hidden group"
            >
              <div>
                {/* Simulated Interactive UI Viewport (Replaces Empty Box + Emoji) */}
                <div className="w-full h-24 border border-[var(--brown-light)] rounded bg-stone-100 overflow-hidden shadow-inner mb-3.5 relative select-none">
                  {project.renderVisual()}
                </div>

                {/* Meta Tag Line */}
                <span className="font-body text-[9px] font-extrabold uppercase tracking-wider text-[var(--rust)] block mb-1">
                  {project.type}
                </span>

                {/* Clean Generic Project Name */}
                <h3 className="font-display text-xl font-bold text-[var(--ink)] mb-2 group-hover:text-[var(--brown)] transition-colors duration-150">
                  {project.title}
                </h3>

                {/* Grounded Description */}
                <p className="font-body text-xs text-[var(--brown-light)] leading-relaxed mb-4">
                  {project.description}
                </p>
              </div>

              <div>
                {/* Tech Badges Row */}
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

                {/* Link Trigger */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full inline-flex items-center justify-center text-center font-body text-xs font-bold text-[var(--ink)] bg-[var(--cream-dark)] border border-[var(--brown-mid)] rounded py-2 px-3 hover:bg-[var(--cream-deeper)] transition-all duration-100"
                >
                  Explore Code Source &rarr;
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}