import { useEffect, useState } from 'react';
import { Link, NavLink, Route, Routes, useLocation } from 'react-router-dom';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem('portfolio-theme') === 'dark');

  useEffect(() => {
    document.body.classList.toggle('dark-theme', darkMode);
  }, [darkMode]);

  function toggleTheme() {
    const nextMode = !darkMode;
    setDarkMode(nextMode);
    localStorage.setItem('portfolio-theme', nextMode ? 'dark' : 'light');
  }

  return (
    <header className="site-header">
      <nav className="nav shell" aria-label="Primary navigation">
        <Link className="wordmark" to="/"><span>TL</span> Tristan Laquindanum</Link>
        <button className="menu-toggle" type="button" aria-expanded={menuOpen} aria-controls="nav-links" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? 'Close' : 'Menu'}
        </button>
        <div className={`nav-links${menuOpen ? ' open' : ''}`} id="nav-links">
          <NavLink to="/" end>About</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/experience">Experience</NavLink>
          <NavLink className="nav-contact" to="/contact">Let's talk <span aria-hidden="true">↗</span></NavLink>
          <button className="theme-toggle" type="button" aria-label="Toggle dark mode" aria-pressed={darkMode} onClick={toggleTheme}>
            {darkMode ? 'Light mode' : 'Dark mode'}
          </button>
        </div>
      </nav>
    </header>
  );
}

function Footer() {
  return <footer className="site-footer shell"><span>© 2026 Tristan Laquindanum</span><span>Made with curiosity.</span></footer>;
}

function Home() {
  return (
    <main>
      <section className="hero shell">
        <div className="hero-copy reveal">
          <p className="eyebrow">Designer · Developer · Lifelong learner</p>
          <h1>I make digital things feel <em>clearer.</em></h1>
          <p className="hero-intro">I'm Tristan, a front-end developer who turns complex ideas into useful, human-centered experiences.</p>
          <div className="hero-actions">
            <Link className="button button-dark" to="/projects">Explore my work <span aria-hidden="true">↗</span></Link>
            <Link className="text-link" to="/contact">Contact Tristan Laquindanum</Link>
          </div>
        </div>
        <div className="hero-art reveal" aria-label="Abstract portrait placeholder" role="img">
          <div className="sun"></div><div className="portrait-shape"></div>
          <div className="art-label">Currently<br /><strong>building<br />with care</strong></div>
          <span className="art-mark">✳</span>
        </div>
      </section>

      <section className="intro-band">
        <div className="shell split-section">
          <p className="section-kicker">01 / A little about me</p>
          <div className="large-copy reveal">
            <h2>Good work lives where curiosity meets intention.</h2>
            <p>I enjoy the space between a rough idea and a finished experience: asking better questions, shaping the details, and making sure the result works for the people using it.</p>
            <Link className="arrow-link" to="/experience">More about my journey <span aria-hidden="true">→</span></Link>
          </div>
        </div>
      </section>

      <section className="skills-section shell">
        <div className="section-heading"><p className="section-kicker">02 / What I bring</p><p className="muted">A practical toolkit, always evolving.</p></div>
        <div className="skill-grid">
          <article className="skill-card reveal"><span className="skill-number">01</span><h3>Front-end craft</h3><p>Semantic HTML, thoughtful CSS, JavaScript, and responsive interfaces that hold up across devices.</p></article>
          <article className="skill-card reveal"><span className="skill-number">02</span><h3>Product thinking</h3><p>Turning fuzzy requirements into focused flows, clear content, and decisions people can understand.</p></article>
          <article className="skill-card reveal"><span className="skill-number">03</span><h3>Visual systems</h3><p>Building flexible design languages with typography, color, motion, and reusable components.</p></article>
        </div>
      </section>

      <section className="contact-band">
        <div className="shell contact-content">
          <p className="section-kicker">03 / Start a conversation</p>
          <h2>Have a good question?<br /><em>Let's find a good answer.</em></h2>
          <Link className="button button-light" to="/contact">Send me a note <span aria-hidden="true">↗</span></Link>
        </div>
      </section>
    </main>
  );
}

function Projects() {
  const projects = [
    { number: '01', title: 'Field Notes', type: 'Web app · Product design', description: 'A calmer way for distributed teams to capture, organize, and share what they learn.', image: 'image-one', featured: true },
    { number: '02', title: 'Common Ground', type: 'Brand · Editorial', description: 'A visual identity for a neighborhood food cooperative.', image: 'image-two' },
    { number: '03', title: 'Small Signals', type: 'Data · Interaction', description: 'Making local climate data easier to see and act on.', image: 'image-three' },
  ];

  return (
    <main>
      <section className="page-hero shell"><p className="eyebrow">Selected work / 2022—2026</p><h1>A few things<br /><em>I've made.</em></h1><p className="page-lede">A small collection of projects where design, technology, and a little stubbornness came together.</p></section>
      <section className="project-list shell">
        <article className="project-card project-card-featured reveal" key={projects[0].number}>
          <div className={`project-image ${projects[0].image}`}><span>{projects[0].number}</span></div>
          <div className="project-meta"><p className="project-type">{projects[0].type}</p><h2>{projects[0].title}</h2><p>{projects[0].description}</p><span className="arrow-link">View project <span aria-hidden="true">↗</span></span></div>
        </article>
        <div className="project-pair">
          {projects.slice(1).map((project) => (
            <article className="project-card reveal" key={project.number}>
              <div className={`project-image ${project.image}`}><span>{project.number}</span></div>
              <div className="project-meta"><p className="project-type">{project.type}</p><h2>{project.title}</h2><p>{project.description}</p><span className="arrow-link">View project <span aria-hidden="true">↗</span></span></div>
            </article>
          ))}
        </div>
        <div className="add-project"><span>04</span><p>Your next project could live here.</p><Link className="arrow-link" to="/contact">Let's work together <span aria-hidden="true">→</span></Link></div>
      </section>
    </main>
  );
}

function Experience() {
  const skills = [
    ['Semantic HTML', 'Development', 'Advanced'],
    ['Responsive CSS', 'Development', 'Advanced'],
    ['JavaScript', 'Development', 'Intermediate'],
    ['Accessibility', 'Design + development', 'Intermediate'],
    ['Prototyping', 'Design', 'Advanced'],
  ];

  return (
    <main>
      <section className="page-hero shell"><p className="eyebrow">The path so far</p><h1>Experience<br /><em>with context.</em></h1><p className="page-lede">The roles, lessons, and people that have shaped how I think about building useful things.</p></section>
      <section className="timeline-section shell">
        <div className="timeline-column">
          <p className="section-kicker">01 / Experience</p>
          <TimelineItem date="2024—Now" title="Product Designer & Developer" org="Northstar Studio · Remote" text="I partner with early-stage teams to turn complex products into simple, confident experiences." />
          <TimelineItem date="2021—2024" title="Front-end Developer" org="Brightside Digital · Chicago, IL" text="Built accessible marketing sites and product interfaces for organizations doing meaningful work." />
          <TimelineItem date="2019—2021" title="Design Fellow" org="Civic Lab · Chicago, IL" text="Learned to listen closely, prototype quickly, and make room for the people closest to a problem." />
        </div>
        <div className="timeline-column education">
          <p className="section-kicker">02 / Education</p>
          <TimelineItem date="2015—2019" title="BFA, Interaction Design" org="School of the Art Institute of Chicago" text="Focused on interaction design, visual systems, and everyday life." />
          <p className="section-kicker principles-kicker">03 / Principles</p>
          <ul className="principles"><li>Stay curious longer.</li><li>Make the complicated legible.</li><li>Leave things better than you found them.</li></ul>
        </div>
      </section>
      <section className="skills-table-section shell" aria-labelledby="skills-table-title">
        <p className="section-kicker">04 / Capability overview</p><h2 id="skills-table-title">Skills at a glance</h2>
        <table className="skills-table">
          <caption>Selected design and development skills by comfort level</caption>
          <thead><tr><th scope="col">Skill</th><th scope="col">Category</th><th scope="col">Comfort level</th></tr></thead>
          <tbody>{skills.map((skill) => <tr key={skill[0]}><td>{skill[0]}</td><td>{skill[1]}</td><td>{skill[2]}</td></tr>)}</tbody>
        </table>
      </section>
    </main>
  );
}

function TimelineItem({ date, title, org, text }) {
  return <div className="timeline-item"><p className="timeline-date">{date}</p><div><h2>{title}</h2><p className="timeline-org">{org}</p><p>{text}</p></div></div>;
}

function Contact() {
  const [status, setStatus] = useState('');
  const [statusType, setStatusType] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      setStatus('Please complete the highlighted fields.');
      setStatusType('error');
      return;
    }
    const data = new FormData(form);
    const name = String(data.get('name')).trim();
    const firstName = name.split(/\s+/)[0];
    setStatus(`Thanks, ${firstName}! Your message is ready for Tristan to review.`);
    setStatusType('success');
    form.reset();
  }

  return (
    <main>
      <section className="page-hero shell"><p className="eyebrow">Contact</p><h1>Let's make<br /><em>something clear.</em></h1><p className="page-lede">Share a little about your project, collaboration, or question.</p></section>
      <section className="contact-section shell">
        <div className="contact-details"><p className="section-kicker">Start a conversation</p><h2>Tell me what you're building.</h2><p>Fields marked with an asterisk are required. This prototype validates and displays your message locally; it does not send data to a server.</p></div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-grid">
            <div className="form-field"><label htmlFor="name">Name <span aria-hidden="true">*</span></label><input id="name" name="name" type="text" autoComplete="name" required /></div>
            <div className="form-field"><label htmlFor="email">Email <span aria-hidden="true">*</span></label><input id="email" name="email" type="email" autoComplete="email" required /></div>
          </div>
          <div className="form-grid">
            <div className="form-field"><label htmlFor="interest">Inquiry type <span aria-hidden="true">*</span></label><select id="interest" name="interest" required><option value="">Choose one</option><option value="project">A project</option><option value="job">A job opportunity</option><option value="collaboration">A collaboration</option><option value="question">A general question</option></select></div>
            <fieldset className="form-field"><legend>Preferred contact method</legend><label><input type="radio" name="contact-method" value="email" defaultChecked /> Email</label><label><input type="radio" name="contact-method" value="video" /> Video call</label></fieldset>
          </div>
          <div className="form-field"><label htmlFor="message">Message</label><textarea id="message" name="message" rows="6" placeholder="A little context goes a long way." /></div>
          <div className="consent-row"><label><input type="checkbox" name="consent" required /> I agree that Tristan may respond to this inquiry. <span aria-hidden="true">*</span></label></div>
          <button className="button button-dark" type="submit">Send inquiry <span aria-hidden="true">↗</span></button>
          <p className={`form-status form-status-${statusType}`} role="status" aria-live="polite">{status}</p>
        </form>
      </section>
    </main>
  );
}

function NotFound() {
  return <main className="shell page-hero"><p className="eyebrow">404</p><h1>Page <em>not found.</em></h1><Link className="arrow-link" to="/">Return home <span aria-hidden="true">→</span></Link></main>;
}

export default function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    const titles = {
      '/': 'Tristan Laquindanum | Portfolio',
      '/projects': 'Projects | Tristan Laquindanum',
      '/experience': 'Experience | Tristan Laquindanum',
      '/contact': 'Contact | Tristan Laquindanum',
    };
    document.title = titles[location.pathname] || 'Tristan Laquindanum | Portfolio';
  }, [location.pathname]);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}
