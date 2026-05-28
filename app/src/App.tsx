import heroImg from './assets/career_fair.jpg'
import {
  education,
  educationPhotos,
  highlights,
  involvementPhotos,
  involvement,
  profile,
  projectPhotos,
  projects,
  skillPhotos,
  skills,
  workPhotos,
  work,
} from './content'
import './App.css'

function App() {
  return (
    <main className="page">
      <section className="hero-section">
        <div className="shell hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Portfolio</p>
            <h1>{profile.name}</h1>
            <p className="lead">{profile.title}</p>
            <p className="summary">{profile.summary}</p>

            <div className="hero-actions">
              <a className="button button-primary" href={`mailto:${profile.email}`}>
                Email
              </a>
              <a className="button button-secondary" href={profile.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </div>

            <dl className="highlights">
              {highlights.map((item) => (
                <div key={item.label} className="highlight">
                  <dt>{item.label}</dt>
                  <dd>{item.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <aside className="hero-panel" aria-label="Profile preview">
            <img src={heroImg} alt="" className="hero-art" />
            <div className="panel-copy">
              <p className="panel-label">Location</p>
              <p>{profile.location}</p>
              <p className="muted">{profile.availability}</p>
            </div>
          </aside>
        </div>
      </section>

      <section className="section">
        <div className="shell section-grid">
          <div className="section-copy">
            <div className="section-heading">
              <p className="eyebrow">Education</p>
              <h2>Academic background</h2>
            </div>

            <div className="section-media section-media-pair section-media-education">
              {educationPhotos.map((photo) => (
                <img key={photo.alt} src={photo.src} alt={photo.alt} className="inline-photo" />
              ))}
            </div>
          </div>

          <div className="timeline">
            {education.map((item) => (
              <article key={`${item.school}-${item.degree}`} className="timeline-item">
                <div className="timeline-meta">
                  <h3>{item.degree}</h3>
                  <p>{item.meta}</p>
                </div>
                <p>{item.school}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell section-grid section-grid-wide project-shell">
          <div className="section-copy">
            <div className="section-heading">
              <p className="eyebrow">Projects</p>
              <h2>Project experience</h2>
            </div>

            <div className="project-showcase">
              {projects.map((project, index) => (
                <article key={project.name} className={`project-row project-row-${index + 1}`}>
                  <div className="project-card">
                    <div className="project-top">
                      <h3>{project.name}</h3>
                    </div>
                    <p>{project.summary}</p>
                    <p className="project-impact">{project.impact}</p>
                    <ul className="tag-list" aria-label={`${project.name} stack`}>
                      {project.stack.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="section-media section-media-pair section-media-projects">
            {projectPhotos.map((photo) => (
              <img key={photo.alt} src={photo.src} alt={photo.alt} className="inline-photo" />
            ))}
          </div>
        </div>
      </section>

      <section className="section section-split">
        <div className="shell section-grid skills-shell">
          <div className="section-copy">
            <div className="section-heading">
              <p className="eyebrow">Skills</p>
              <h2>Technical skills</h2>
            </div>

            <div className="section-media section-media-single section-media-skills">
              {skillPhotos.map((photo) => (
                <img key={photo.alt} src={photo.src} alt={photo.alt} className="inline-photo" />
              ))}
            </div>
          </div>
          <div className="skills-grid">
            {skills.map((group) => (
              <section key={group.category} className="skill-card">
                <h3>{group.category}</h3>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell section-grid section-grid-wide">
          <div className="section-copy">
            <div className="section-heading">
              <p className="eyebrow">Involvement</p>
              <h2>Activities and leadership</h2>
            </div>

            <div className="timeline">
              {involvement.map((item) => (
                <article key={`${item.org}-${item.title}-${item.period}`} className="timeline-item">
                  <div className="timeline-meta">
                    <h3>{item.title}</h3>
                    <p>{item.period}</p>
                  </div>
                  <p>{item.org}</p>
                  <p>{item.detail}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="section-media section-media-single section-media-involvement">
            {involvementPhotos.map((photo) => (
              <img key={photo.alt} src={photo.src} alt={photo.alt} className="inline-photo" />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell section-grid">
          <div className="section-copy">
            <div className="section-heading">
              <p className="eyebrow">Work</p>
              <h2>Work experience</h2>
            </div>

            <div className="section-media section-media-single section-media-work">
              {workPhotos.map((photo) => (
                <img key={photo.alt} src={photo.src} alt={photo.alt} className="inline-photo" />
              ))}
            </div>
          </div>

          <div className="timeline">
            {work.map((item) => (
              <article key={`${item.org}-${item.title}`} className="timeline-item">
                <div className="timeline-meta">
                  <h3>{item.title}</h3>
                  <p>{item.period}</p>
                </div>
                <p>{item.org}</p>
                <p>{item.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section contact-section">
        <div className="shell contact-shell">
          <div>
            <p className="eyebrow">Contact</p>
            <h2>Get in touch</h2>
          </div>

          <div className="contact-stack">
            <a className="button button-primary" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
            <a
              className="button button-secondary"
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn profile
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}

export default App
