import { useEffect, useRef, useState } from 'react'
import type { ReactNode } from 'react'
import heroImg from './assets/career_fair.jpg'
import winnersImg from './assets/winners.jpg'
import speakingImg from './assets/speaking.jpg'
import { education, highlights, involvement, profile, projects, skills, work } from './content'
import type { Project, TimelineItem } from './content'
import './App.css'

const sections = [
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
]

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{diagonal ? <path d="M6 18 18 6M6 6h12v12" /> : <path d="M4 12h16m-6-6 6 6-6 6" />}</svg>
}

function ExternalLink({ href, children, className = 'text-link' }: { href: string; children: ReactNode; className?: string }) {
  return <a className={className} href={href} target="_blank" rel="noreferrer">{children}<Arrow diagonal /><span className="sr-only"> (opens in a new tab)</span></a>
}

function Navigation() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')
  const menuButton = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) setActive(entry.target.id)
      }
    }, { rootMargin: '-15% 0px -55% 0px' })
    for (const { id } of sections) {
      const section = document.getElementById(id)
      if (section) observer.observe(section)
    }
    return () => observer.disconnect()
  }, [])

  return <header className="site-header" onKeyDown={(event) => {
    if (event.key === 'Escape' && open) { setOpen(false); menuButton.current?.focus() }
  }}>
    <div className="shell nav-shell">
      <a href="#home" className="wordmark" aria-label={`${profile.name}, home`} onClick={() => { setOpen(false); setActive('') }}>
        <span className="monogram" aria-hidden="true">mt.</span><span>{profile.name}</span>
      </a>
      <button className="menu-toggle" type="button" ref={menuButton} aria-expanded={open} aria-controls="main-navigation" onClick={() => setOpen(!open)}>{open ? 'Close' : 'Menu'}<span aria-hidden="true">{open ? '−' : '+'}</span></button>
      <nav id="main-navigation" className={`navigation ${open ? 'is-open' : ''}`} aria-label="Main navigation">
        {sections.map(({ id, label }) => <a key={id} href={`#${id}`} aria-current={active === id ? 'location' : undefined} onClick={() => { setOpen(false); setActive(id) }}>{label}</a>)}
      </nav>
    </div>
  </header>
}

function SectionHeading({ number, eyebrow, title, children }: { number: string; eyebrow: string; title: string; children?: ReactNode }) {
  return <div className="section-heading"><div><p className="eyebrow"><span>{number}</span>{eyebrow}</p><h2>{title}</h2></div>{children && <p className="section-description">{children}</p>}</div>
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return <article className="project">
    <div className="project-heading"><span className="project-number">0{index + 1}</span><div><p className="meta">{project.meta}</p><h3>{project.name}</h3></div></div>
    <div className="project-body"><p>{project.summary}</p><ul className="tags" aria-label={`${project.name} technologies`}>{project.stack.map(item => <li key={item}>{item}</li>)}</ul></div>
    <div className="project-result"><span className="eyebrow">Outcome</span><p>{project.impact}</p></div>
  </article>
}

function TimelineEntry({ item, compact = false }: { item: TimelineItem; compact?: boolean }) {
  return <article className={`timeline-entry ${compact ? 'compact' : ''}`}><div className="entry-heading"><div><p className="entry-org">{item.org}</p><h3>{item.title}</h3></div><p className="meta">{item.period}</p></div><p className="entry-detail">{item.detail}</p></article>
}

function App() {
  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <Navigation />
    <main id="main" tabIndex={-1}>
      <section className="hero shell" id="home" aria-labelledby="hero-title">
        <div className="hero-copy"><p className="eyebrow"><span className="status-dot" />Computer science & machine learning</p><h1 id="hero-title">Building intelligent systems.<br /><span>With real-world impact.</span></h1><p className="hero-intro">I'm {profile.name}.</p><p className="hero-summary">{profile.summary}</p><div className="hero-actions"><a className="button primary" href="#projects">Explore my work<Arrow /></a><a className="button secondary" href={`mailto:${profile.email}`}>Get in touch<Arrow diagonal /></a></div><div className="hero-socials"><ExternalLink href={profile.github}>GitHub</ExternalLink><ExternalLink href={profile.linkedin}>LinkedIn</ExternalLink></div></div>
        <figure className="portrait"><img src={heroImg} width="1600" height="1600" alt="Miles Trompeter" fetchPriority="high" /><figcaption><span className="portrait-name">{profile.name}</span><span>{profile.location}</span><span className="portrait-caption">B.S. Computer Science → M.S. Machine Learning</span></figcaption></figure>
        <dl className="highlights">{highlights.map(item => <div key={item.label}><dt>{item.label}</dt><dd>{item.value}</dd></div>)}</dl>
      </section>

      <section className="section projects-section" id="projects" aria-label="Projects"><div className="shell"><SectionHeading number="01" eyebrow="Selected work" title="From idea to implementation.">Applied machine learning, multi-agent systems, and the data behind them.</SectionHeading><div className="projects">{projects.map((project, index) => <ProjectCard key={project.name} project={project} index={index} />)}</div><div className="project-gallery"><figure><img src={winnersImg} alt="The team celebrating at the Spring 2026 Innovation Lab award presentation." width="4" height="3" loading="lazy" decoding="async" /><figcaption><span>Celebrating the work</span>Spring 2026 Innovation Lab</figcaption></figure><figure><img src={speakingImg} alt="Miles presenting at an MSOE podium alongside teammates." width="4" height="3" loading="lazy" decoding="async" /><figcaption><span>Sharing the ideas behind it</span>Presenting with the team at MSOE</figcaption></figure></div></div></section>

      <section className="section shell" id="experience" aria-label="Experience"><SectionHeading number="02" eyebrow="Experience" title="Engineering in practice." /><div className="split-layout"><div className="section-aside"><span className="small-label">Industry experience</span><p>Reliable data foundations.<br />Practical machine learning.</p></div><div className="timeline">{work.map(item => <TimelineEntry key={item.org} item={item} />)}</div></div></section>

      <section className="section about-section" id="about" aria-label="About and education"><div className="shell"><SectionHeading number="03" eyebrow="Background & toolkit" title="Always building. Always learning." /><div className="split-layout education-layout"><div className="section-aside"><h3>Education</h3><p>Continuing from computer science into machine learning at MSOE.</p></div><div className="education-list">{education.map(item => <article key={item.degree} className="education-entry"><h3>{item.degree}</h3><p>{item.school}</p><p className="meta">{item.meta}</p></article>)}</div></div><div className="split-layout skills-layout"><div className="section-aside"><h3>Technical toolkit</h3><p>The languages, tools, and platforms I work with.</p></div><div className="skills-grid">{skills.map(group => <div key={group.category} className="skill-group"><h4>{group.category}</h4><ul className="tags">{group.items.map(item => <li key={item}>{item}</li>)}</ul></div>)}</div></div><div className="split-layout involvement-layout"><div className="section-aside"><h3>Beyond the code</h3><p>Technical leadership, mentorship, and a few things outside the classroom.</p></div><div className="timeline">{involvement.map(item => <TimelineEntry key={item.org} item={item} compact />)}</div></div></div></section>

      <section className="contact-section" id="contact" aria-labelledby="contact-title"><div className="shell contact-layout"><div><p className="eyebrow">04 <span>Get in touch</span></p><h2 id="contact-title">Let's build something<br />that matters.</h2><p className="availability"><span className="status-dot" />{profile.availability}</p></div><div className="contact-links"><a className="contact-email" href={`mailto:${profile.email}`}>{profile.email}<Arrow diagonal /></a><div className="contact-socials"><ExternalLink href={profile.linkedin}>LinkedIn</ExternalLink><ExternalLink href={profile.github}>GitHub</ExternalLink></div></div></div></section>
    </main>
    <footer className="shell footer"><p>© {new Date().getFullYear()} {profile.name}</p><a className="text-link" href="#home">Back to top<span aria-hidden="true">↑</span></a></footer>
  </>
}

export default App
