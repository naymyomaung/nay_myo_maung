import { useEffect, useState } from 'react'
import { SpeedInsights } from '@vercel/speed-insights/react'
import cvFile from './assets/Nay-Myo-Maung-CV.pdf'

const navLinks = [
  { label: 'Home', to: '#home' },
  { label: 'About', to: '#about' },
  { label: 'Expertise', to: '#expertise' },
  { label: 'Projects', to: '#projects' },
  { label: 'Contact', to: '#contact' },
]

const homeActions = [
  { label: 'Projects', to: '#projects' },
  { label: 'Contact', to: '#contact' },
]

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const closeMenu = () => setIsOpen(false)

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <a
          href="#home"
          onClick={closeMenu}
          className="text-sm font-semibold tracking-[0.3em] text-white uppercase"
        >
          Nay Myo Maung
        </a>

        <button
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          className="inline-flex items-center justify-center rounded-xl border border-white/10 px-3 py-2 text-slate-200 transition hover:border-cyan-400/40 hover:text-cyan-300 md:hidden"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5" aria-hidden="true">
            <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
          </svg>
        </button>

        <div className="hidden flex-wrap items-center justify-end gap-2 md:flex">
          {navLinks.map((link) => (
            <NavItem key={link.to} to={link.to} label={link.label} onClick={closeMenu} />
          ))}
        </div>
      </nav>

      {isOpen && (
        <div className="border-t border-white/10 px-4 py-4 sm:px-6 md:hidden">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <NavItem key={link.to} to={link.to} label={link.label} onClick={closeMenu} />
            ))}
          </div>
        </div>
      )}
    </header>
  )
}

function NavItem({ to, label, onClick }) {
  return (
    <a
      href={to}
      onClick={onClick}
      className="rounded-full border border-white/10 px-4 py-2 text-sm text-slate-300 transition hover:border-cyan-400/30 hover:text-white"
    >
      {label}
    </a>
  )
}

function InfoSection({ id, eyebrow, title, description, actions = [] }) {
  return (
    <section id={id} className="relative overflow-hidden scroll-mt-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.16),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.16),transparent_30%)]" />
      <div className="relative mx-auto flex min-h-[calc(100vh-81px)] max-w-7xl items-center justify-center px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="max-w-3xl text-center">
          <span className="mb-6 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-xs font-medium tracking-[0.35em] text-cyan-300 uppercase">
            {eyebrow}
          </span>
          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-7xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg mx-auto">
            {description}
          </p>
          {actions.length > 0 ? (
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:flex-wrap sm:justify-center">
              {actions.map((action, index) => (
                <a
                  key={action.to}
                  href={action.to}
                  className={
                    index === 0
                      ? 'rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300'
                      : 'rounded-full border border-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:border-cyan-400/30 hover:text-cyan-300'
                  }
                >
                  {action.label}
                </a>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  )
}

function HomeSection() {
  return (
    <section id="home" className="relative overflow-hidden scroll-mt-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.16),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.16),transparent_30%)]" />
      <div className="relative mx-auto flex min-h-[calc(100vh-81px)] max-w-7xl items-center justify-center px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="max-w-3xl text-center">
          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-7xl">
            Nay Myo Maung{' '}
            <span className="align-middle text-xl text-cyan-300 sm:text-2xl lg:text-3xl">(Izumi)</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            I am a C# and React Web Developer specializing in building modern, scalable, and user-friendly enterprise web applications with robust backend architecture, responsive front-end interfaces, clean code, creative problem-solving, and efficient AI-assisted and traditional development workflows.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:flex-wrap sm:justify-center">
            {homeActions.map((action, index) => (
              <a
                key={action.to}
                href={action.to}
                className={
                  index === 0
                    ? 'rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300'
                    : 'rounded-full border border-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:border-cyan-400/30 hover:text-cyan-300'
                }
              >
                {action.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function AboutSection() {
const highlights = [
    'C# and React Developer',
    'Enterprise Web Solutions',
    'IT Support Specialist',
    'Responsive UI/UX Focus',
    'Robust Backend Architecture',
    'AI-Assisted Workflows',
  ];

  return (
    <section id="about" className="relative overflow-hidden scroll-mt-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.16),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.16),transparent_30%)]" />
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div className="rounded-4xl border border-white/10 bg-slate-900/65 p-8 backdrop-blur-xl sm:p-10">
            <span className="inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-xs font-medium tracking-[0.35em] text-cyan-300 uppercase">
              About Me
            </span>
            <div className="mt-8 space-y-6 text-sm leading-8 text-slate-300 sm:text-base lg:text-lg">
              <p>
I’m Nay Myo Maung, a 23-year-old C# and React Developer and IT Support Specialist from Taunggyi, Shan State, Myanmar. I specialize in building modern, scalable, and user-friendly enterprise web applications with robust backend architecture, responsive design, and maintainable code.              </p>
              <p>
My main focus is C# and React development, with strong capabilities in creating practical digital solutions that combine strong UI/UX structure, performance, and real-world functionality. I work with both AI-assisted workflows and traditional development methods to improve productivity and deliver efficient results.              </p>
              <p>
I’m passionate about modern technology, continuous learning, and developing web experiences that are both visually clean and technically reliable.              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-4xl border border-white/10 bg-slate-900/65 p-8 backdrop-blur-xl">
              <p className="text-xs uppercase tracking-[0.3em] text-cyan-300">Profile Highlights</p>
              <div className="mt-6 flex flex-wrap gap-3">
                {highlights.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs text-cyan-200 sm:text-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <a
                href={cvFile}
                download="Nay-Myo-Maung-CV.pdf"
                className="mt-8 inline-flex items-center gap-3 rounded-full bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5" aria-hidden="true">
                  <path d="M12 3v12m0 0 4-4m-4 4-4-4M5 21h14" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Download CV
              </a>
            </div>

            <div className="rounded-4xl border border-white/10 bg-linear-to-r from-cyan-400/10 to-fuchsia-500/10 p-8 backdrop-blur-xl">
              <p className="text-xs uppercase tracking-[0.3em] text-slate-300">Focus</p>
              <p className="mt-4 text-sm leading-8 text-slate-200 sm:text-base">
                Modern technology, continuous learning, clean web interfaces, scalable systems, and practical solutions with real-world value.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ExpertiseSection() {
  const workList = [
    {
      title: 'IT Support Assistant',
      location: 'Myat Taw Win Hospital, Taunggyi',
      description:
        'Providing day-to-day technical support, troubleshooting hardware and software issues, assisting users, and helping maintain reliable IT operations in the hospital environment.',
      date: 'September 26 2025 - Present',
    },
    {
      title: 'C# and React Web Developer',
      location: 'Freelance',
      description:
        'Developing modern enterprise web applications with C# and React, focusing on robust backend architecture, responsive interfaces, clean code, and practical solutions for client and personal projects.',
      date: 'Present',
    },
  ]

  return (
    <section id="expertise" className="relative overflow-hidden scroll-mt-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.16),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.16),transparent_30%)]" />
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="max-w-3xl">
          <span className="inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-xs font-medium tracking-[0.35em] text-cyan-300 uppercase">
            Experience
          </span>
          <h2 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Work experience and present role.
          </h2>
        </div>

        <div className="mt-12 grid gap-5">
          {workList.map((work, index) => (
            <article
              key={`${work.title}-${index}`}
              className="rounded-4xl border border-white/10 bg-slate-900/65 p-6 backdrop-blur-xl"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-cyan-300">
                    Experience {String(index + 1).padStart(2, '0')}
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold text-white">{work.title}</h3>
                  <p className="mt-2 text-sm text-slate-400">{work.location}</p>
                </div>
                <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs text-cyan-200">
                  {work.date}
                </span>
              </div>
              <p className="mt-5 max-w-4xl text-sm leading-8 text-slate-300 sm:text-base">
                {work.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectsSection() {
  const projects = [
    {
      title: 'E-Card Fan Made Web Game',
      description:
        'The E-Card game is a high-stakes psychological psychological card game featured in the Japanese manga and anime series Gambling Apocalypse Kaiji. It is a two-player bluffing game based on a strict social hierarchy.',
      stack: ['React', 'Tailwind CSS'],
      liveUrl: 'https://e-card-six.vercel.app/',
      liveLabel: 'Live Demo',
      codeUrl: 'https://github.com/izumi-dev98/E_Card-.git',
      codeLabel: 'Source Code',
    },
      {
      title: 'NOSH CPMS',
      description:
        'A Smart Parking Management System built with React, TypeScript, Vite, and Supabase. It streamlines parking operations with real-time slot tracking, multi-category vehicle handling, detailed reporting, and secure role-based access control (RBAC). Designed for efficiency and scalability!',
      stack: ['React', 'Tailwind CSS' , 'Supabase'],
      liveUrl: 'https://nosh-cpms.vercel.app/',
      liveLabel: 'Live Demo',
      codeUrl: 'https://github.com/izumi-dev98/Nosh_CPMS.git',
      codeLabel: 'Source Code',
    },
    {
      title: 'Nosh Pos ',
      description:
        'A restaurant / retail Point of Sale (POS) system built with React, Vite, Tailwind CSS, and Supabase.The app supports checkout, inventory control, purchase orders, FIFO inventory tracking, payment methods, discount management, reporting, and expiry alerts.',
      stack: ['Supabase', 'React'],
      liveUrl: 'https://github.com/izumi-dev98/ATY_F-B_POS',
      liveLabel: 'Live Demo',
      codeUrl: 'https://github.com/izumi-dev98/ATY_F-B_POS.git',
      codeLabel: 'Source Code',
    },
  ]

  const projectsPerPage = 3
  const [currentPage, setCurrentPage] = useState(0)
  const totalPages = Math.ceil(projects.length / projectsPerPage)
  const visibleProjects = projects.slice(
    currentPage * projectsPerPage,
    currentPage * projectsPerPage + projectsPerPage,
  )

  const scrollToProjectsTop = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const handlePrev = () => {
    setCurrentPage((page) => (page === 0 ? totalPages - 1 : page - 1))
    scrollToProjectsTop()
  }

  const handleNext = () => {
    setCurrentPage((page) => (page === totalPages - 1 ? 0 : page + 1))
    scrollToProjectsTop()
  }

  return (
    <section id="projects" className="relative overflow-hidden scroll-mt-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.16),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(168,85,247,0.16),transparent_30%)]" />
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="max-w-3xl">
          <span className="inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-xs font-medium tracking-[0.35em] text-cyan-300 uppercase">
            Projects
          </span>
          <h2 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Selected work and practical development projects.
          </h2>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {visibleProjects.map((project) => (
            <article
              key={project.title}
              className="group rounded-4xl border border-white/10 bg-slate-900/65 p-5 backdrop-blur-xl transition hover:-translate-y-1 hover:border-cyan-400/30 sm:p-6"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  
                  <h3 className="mt-4 text-2xl font-semibold text-white">{project.title}</h3>
                </div>
                <span className="mt-1 h-3 w-3 rounded-full bg-cyan-300 shadow-[0_0_16px_rgba(34,211,238,0.7)]" />
              </div>

              <p className="mt-6 text-sm leading-8 text-slate-300">{project.description}</p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-2 text-xs text-cyan-200"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
                >
                  {project.liveLabel}
                </a>
                <a
                  href={project.codeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
                >
                  {project.codeLabel}
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <button
            type="button"
            onClick={handlePrev}
            className="rounded-full border border-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:border-cyan-400/30 hover:text-cyan-300"
          >
            Prev
          </button>
          <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200">
            {String(currentPage + 1).padStart(2, '0')} / {String(totalPages).padStart(2, '0')}
          </span>
          <button
            type="button"
            onClick={handleNext}
            className="rounded-full bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
          >
            Next
          </button>
        </div>
      </div>
    </section>
  )
}

function ContactSection() {
  const contactItems = [
    {
      label: 'Phone Number',
      value: '09671014148',
      href: 'tel:09671014148',
    },
    {
      label: 'Gmail',
      value: 'naymyomaung.dev@gmail.com',
      href: 'mailto:naymyomaung.dev@gmail.com',
    },
  ]

  const socialItems = [
    {
      label: 'Telegram',
      href: 'https://t.me/Izumi267',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
          <path d="M21.6 4.2 3.9 11.02c-1.2.48-1.2 1.15-.22 1.45l4.54 1.42 10.5-6.62c.5-.3.96-.14.59.19l-8.5 7.68-.32 4.78c.47 0 .68-.21.94-.46l2.29-2.23 4.76 3.51c.88.48 1.5.23 1.72-.82L23.1 5.9c.32-1.28-.49-1.86-1.5-1.7Z" />
        </svg>
      ),
    },
    {
      label: 'Facebook',
      href: 'https://www.facebook.com/share/196FQnNuhW/',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
          <path d="M13.5 21v-7h2.35l.35-2.73H13.5V9.53c0-.8.22-1.34 1.37-1.34h1.46V5.75c-.25-.03-1.1-.1-2.08-.1-2.05 0-3.45 1.25-3.45 3.56v2.06H8.5V14h2.3v7h2.7Z" />
        </svg>
      ),
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/nay-myo-maung-dev/',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
          <path d="M6.94 8.5A1.56 1.56 0 1 1 6.93 5.4a1.56 1.56 0 0 1 .01 3.1ZM5.6 9.75h2.67V18H5.6V9.75Zm4.34 0h2.56v1.13h.03c.36-.68 1.23-1.4 2.53-1.4 2.7 0 3.2 1.78 3.2 4.08V18h-2.67v-3.93c0-.94-.02-2.15-1.31-2.15-1.31 0-1.51 1.02-1.51 2.08V18H9.94V9.75Z" />
        </svg>
      ),
    },
    {
      label: 'GitHub',
      href: 'https://github.com/izumi-dev98',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
          <path d="M12 2C6.48 2 2 6.6 2 12.26c0 4.53 2.87 8.37 6.84 9.73.5.1.66-.22.66-.5 0-.24-.01-1.04-.01-1.88-2.78.62-3.37-1.22-3.37-1.22-.45-1.18-1.12-1.49-1.12-1.49-.92-.64.07-.63.07-.63 1.01.08 1.55 1.07 1.55 1.07.9 1.58 2.36 1.12 2.94.85.09-.67.35-1.12.63-1.38-2.22-.26-4.55-1.15-4.55-5.1 0-1.13.39-2.05 1.03-2.77-.1-.26-.45-1.31.1-2.73 0 0 .84-.28 2.75 1.06A9.3 9.3 0 0 1 12 6.84c.85 0 1.7.12 2.5.35 1.9-1.34 2.74-1.06 2.74-1.06.56 1.42.21 2.47.1 2.73.64.72 1.03 1.64 1.03 2.77 0 3.96-2.34 4.83-4.57 5.08.36.32.68.95.68 1.92 0 1.38-.01 2.5-.01 2.84 0 .28.17.61.67.5A10.18 10.18 0 0 0 22 12.26C22 6.6 17.52 2 12 2Z" />
        </svg>
      ),
    },
   
  ]

  return (
    <section id="contact" className="relative overflow-hidden scroll-mt-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.16),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.16),transparent_30%)]" />
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="max-w-3xl">
          <span className="inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-xs font-medium tracking-[0.35em] text-cyan-300 uppercase">
            Contact
          </span>
          <h2 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Let’s connect and build something useful.
          </h2>
          <p className="mt-6 text-sm leading-8 text-slate-300 sm:text-base lg:text-lg">
            Feel free to contact me for collaboration, freelance work, development opportunities, or technical discussions.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {contactItems.map((item) => {
            const isDirectAction = item.href.startsWith('mailto:') || item.href.startsWith('tel:')

            const handleContactClick = (event) => {
              if (isDirectAction) {
                event.preventDefault()
                window.location.href = item.href
              }
            }

            return (
              <a
                key={item.label}
                href={item.href}
                onClick={handleContactClick}
                className="rounded-4xl border border-white/10 bg-slate-900/65 p-6 backdrop-blur-xl transition hover:border-cyan-400/30 hover:-translate-y-1 sm:p-8"
              >
                <p className="text-xs uppercase tracking-[0.3em] text-cyan-300">{item.label}</p>
                <p className="mt-4 text-xl font-semibold text-white break-all">{item.value}</p>
              </a>
            )
          })}
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {socialItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-full border border-white/10 bg-slate-900/65 px-5 py-3 text-white backdrop-blur-xl transition hover:border-cyan-400/30 hover:-translate-y-1"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-cyan-400/20 bg-cyan-400/10 text-cyan-200">
                {item.icon}
              </span>
              <span className="text-sm text-slate-200">{item.label}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById('about')
      if (!aboutSection) return

      const aboutTop = aboutSection.offsetTop
      setIsVisible(window.scrollY >= aboutTop - 120)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToHome = () => {
    document.getElementById('home')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  if (!isVisible) {
    return null
  }

  return (
    <button
      type="button"
      onClick={scrollToHome}
      className="fixed right-4 bottom-4 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-cyan-400/30 bg-slate-900/80 text-cyan-300 shadow-[0_0_24px_rgba(34,211,238,0.25)] backdrop-blur-xl transition hover:-translate-y-1 hover:border-cyan-300 hover:text-white sm:right-6 sm:bottom-6"
      aria-label="Back to top"
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5" aria-hidden="true">
        <path d="M12 19V5M5 12l7-7 7 7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  )
}

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950/95">
      <div className="mx-auto flex max-w-7xl justify-center px-6 py-8 text-center text-sm text-slate-400 lg:px-8">
        <p>© 2026 Nay Myo Maung (Izumi). All rights reserved.</p>
      </div>
    </footer>
  )
}

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <main>
        <HomeSection />
        <AboutSection />
        <ExpertiseSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
      <BackToTopButton />
      <SpeedInsights />
    </div>
  )
}

export default App
