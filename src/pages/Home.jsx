import { motion } from 'framer-motion'
import PageWrapper from '../components/PageWrapper'
import { useState, useEffect } from 'react'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: 'easeOut' }
})

function TypewriterText({ texts }) {
  const [index, setIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = texts[index]
    let timeout
    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80)
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1800)
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 45)
    } else if (deleting && displayed.length === 0) {
      setDeleting(false)
      setIndex((i) => (i + 1) % texts.length)
    }
    return () => clearTimeout(timeout)
  }, [displayed, deleting, index, texts])

  return (
    <span style={{ color: 'var(--green)', fontFamily: 'var(--font-mono)' }}>
      {displayed}
      <span style={{ animation: 'blink 1s step-end infinite' }}>_</span>
    </span>
  )
}

const skills = [
  { cat: 'Languages', items: ['C/C++', 'JavaScript ES6+', 'Python', 'SQL'] },
  { cat: 'Frontend', items: ['React.js', 'Redux', 'Tailwind CSS', 'Material-UI'] },
  { cat: 'Backend', items: ['Node.js', 'Express.js', 'REST APIs', 'JWT Auth'] },
  { cat: 'Database', items: ['MongoDB', 'Indexing', 'Query Optimization'] },
  { cat: 'Tools', items: ['Git/GitHub', 'Jest', 'Mocha', 'Postman', 'Vercel', 'Render'] },
  { cat: 'CS Core', items: ['DSA', 'OOP', 'DBMS', 'OS', 'Networks'] },
]

const experiences = [
  {
    role: 'Systems Engineer',
    company: 'Tata Consultancy Services',
    period: 'May 2025 – Present',
    location: 'Kolkata, India',
    bullets: [
      'Developed Python automation scripts for network change validation across 50+ switches, reducing verification time by 85% (2hrs → 15min).',
      'Building automation solutions for network monitoring; supporting L2/L3 operations for ASDA project infrastructure.',
      'Achieved top 5% ranking pan-India (92/100) in technical assessments covering DSA & problem-solving.',
    ]
  },
  {
    role: 'Graduate Engineering Trainee',
    company: 'Nuvoco Vistas Corp. Ltd.',
    period: 'July 2024 – May 2025',
    location: 'India',
    bullets: [
      'Operated industrial automation systems; resolved technical issues through systematic root cause analysis.',
      'Secured 2nd place in company-wide technical quiz among 250+ employees.',
    ]
  },
  {
    role: 'Web Application Development Intern',
    company: 'Oasis Infobyte',
    period: 'May 2023 – June 2023',
    location: 'Remote',
    bullets: [
      'Optimized React performance with useMemo/useCallback, reducing re-renders by 30% and load times by 1.2s.',
      'Built RESTful API with Express.js handling auth, catalog CRUD & cart; achieved sub-100ms response via MongoDB indexing.',
      'Implemented Jest/Mocha test suite with 75% coverage; developed admin dashboard for 50+ concurrent transactions.',
    ]
  },
]

const projects = [
  {
    title: 'School Management System',
    link: '#',
    stack: ['React.js', 'Redux', 'Material-UI', 'Node.js', 'Express.js', 'MongoDB', 'Jest', 'Chart.js'],
    bullets: [
      'Full-stack platform with role-based access (Admin/Teacher/Student) securing 15+ API endpoints via JWT.',
      'Attendance tracking with automated reporting for 100+ student records.',
      'Interactive analytics with Chart.js; 80% test coverage and <200ms API response times.',
      'CI/CD pipeline via GitHub Actions; deployed on Vercel/Render.',
    ]
  },
  {
    title: 'Digital Hotel Menu – The Grand, Asansol',
    link: '#',
    stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Cloudinary'],
    bullets: [
      'QR-based contactless menu for a 4-star hotel with admin dashboard managing 200+ items.',
      'Cloudinary image optimization cut load time by 50% (3.2s → 1.6s).',
      'MongoDB query indexing reduced latency by 70%; load-tested for 500+ concurrent users.',
    ]
  },
]

export default function Home() {
  return (
    <PageWrapper>
      <style>{`
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
        @keyframes scanline { 0%{transform:translateY(-100%)} 100%{transform:translateY(100vh)} }
        @keyframes glitch {
          0%,95%,100%{transform:translate(0)}
          96%{transform:translate(-2px,1px)}
          97%{transform:translate(2px,-1px)}
          98%{transform:translate(-1px,2px)}
        }
        .skill-pill {
          background: rgba(0,255,136,0.06);
          border: 1px solid rgba(0,255,136,0.18);
          color: var(--green);
          font-family: var(--font-mono);
          font-size: 0.72rem;
          padding: 4px 10px;
          border-radius: 3px;
          transition: all 0.2s;
          white-space: nowrap;
        }
        .skill-pill:hover { background: rgba(0,255,136,0.15); border-color: var(--green); }
        .exp-card {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-left: 2px solid var(--green);
          border-radius: 4px;
          padding: 1.5rem;
          transition: all 0.3s;
        }
        .exp-card:hover { background: var(--bg-card-hover); border-color: rgba(0,255,136,0.3); transform: translateX(4px); }
        .project-card {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: 6px;
          padding: 1.8rem;
          transition: all 0.3s;
          position: relative;
          overflow: hidden;
        }
        .project-card::before {
          content: '';
          position: absolute; top: 0; left: 0; right: 0; height: 2px;
          background: linear-gradient(90deg, transparent, var(--green), transparent);
          transform: translateX(-100%);
          transition: transform 0.5s;
        }
        .project-card:hover::before { transform: translateX(100%); }
        .project-card:hover { background: var(--bg-card-hover); border-color: var(--green-border); transform: translateY(-4px); box-shadow: 0 12px 40px rgba(0,255,136,0.08); }
        .section-title {
          font-family: var(--font-mono);
          font-size: clamp(0.75rem, 1.5vw, 0.85rem);
          color: var(--green);
          letter-spacing: 0.15em;
          text-transform: uppercase;
          margin-bottom: 0.5rem;
        }
        .section-heading {
          font-family: var(--font-sans);
          font-size: clamp(1.6rem, 4vw, 2.4rem);
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 3rem;
        }
        .bullet-dot::before {
          content: '▸';
          color: var(--green);
          margin-right: 8px;
          font-size: 0.8em;
        }
      `}</style>

      {/* Hero */}
      <section style={{
        minHeight: '100vh', display: 'flex', alignItems: 'center',
        padding: 'clamp(5rem, 10vw, 8rem) clamp(1.5rem, 8vw, 8rem)',
        position: 'relative',
      }}>
        {/* Scanline effect */}
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
          background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 4px)',
          pointerEvents: 'none', zIndex: 0
        }} />

        <div style={{ position: 'relative', zIndex: 1, maxWidth: 900 }}>
          <motion.p {...fadeUp(0.1)} style={{
            fontFamily: 'var(--font-mono)', fontSize: '0.85rem',
            color: 'var(--green)', letterSpacing: '0.1em', marginBottom: '1rem'
          }}>
            <span style={{ opacity: 0.5 }}>$ whoami</span>
          </motion.p>

          <motion.h1 {...fadeUp(0.2)} style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 'clamp(2.8rem, 8vw, 6rem)',
            fontWeight: 800, lineHeight: 1.05,
            letterSpacing: '-0.02em',
            marginBottom: '0.5rem',
            animation: 'glitch 8s infinite',
          }}>
            Sudip<br />
            <span style={{
              WebkitTextStroke: '1px var(--green)',
              color: 'transparent',
            }}>Mahato</span>
          </motion.h1>

          <motion.div {...fadeUp(0.35)} style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 'clamp(1rem, 2.5vw, 1.4rem)',
            color: 'var(--text-secondary)',
            marginBottom: '1.5rem', height: '2rem'
          }}>
            <TypewriterText texts={[
              'Systems Engineer @ TCS',
              'Full-Stack Developer',
              'Network Automation Engineer',
              'React.js Enthusiast',
            ]} />
          </motion.div>

          <motion.p {...fadeUp(0.5)} style={{
            color: 'var(--text-secondary)', maxWidth: 540,
            fontSize: 'clamp(0.9rem, 1.5vw, 1rem)',
            lineHeight: 1.8, marginBottom: '2.5rem'
          }}>
            B.Tech Electrical Engineering graduate from <span style={{ color: 'var(--text-primary)' }}>NIT Durgapur</span> (CGPA 7.97).
            Building robust systems and full-stack web applications — from network automation scripts
            to production-grade React apps.
          </motion.p>

          <motion.div {...fadeUp(0.6)} style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="#projects" style={{
              background: 'var(--green)', color: '#0a0c0f',
              fontFamily: 'var(--font-mono)', fontSize: '0.85rem', fontWeight: 700,
              padding: '0.75rem 1.8rem', borderRadius: '3px',
              transition: 'all 0.2s', letterSpacing: '0.05em',
            }}
              onMouseEnter={e => { e.target.style.boxShadow = '0 0 20px rgba(0,255,136,0.4)'; e.target.style.transform = 'translateY(-2px)' }}
              onMouseLeave={e => { e.target.style.boxShadow = 'none'; e.target.style.transform = 'none' }}
            >
              ./view_projects
            </a>
            <a href="#experience" style={{
              border: '1px solid var(--green-border)', color: 'var(--green)',
              fontFamily: 'var(--font-mono)', fontSize: '0.85rem',
              padding: '0.75rem 1.8rem', borderRadius: '3px',
              transition: 'all 0.2s', letterSpacing: '0.05em',
            }}
              onMouseEnter={e => { e.target.style.background = 'var(--green-glow)'; e.target.style.borderColor = 'var(--green)' }}
              onMouseLeave={e => { e.target.style.background = 'transparent'; e.target.style.borderColor = 'var(--green-border)' }}
            >
              ./experience
            </a>
          </motion.div>

          {/* Stats row */}
          <motion.div {...fadeUp(0.75)} style={{
            display: 'flex', gap: 'clamp(1.5rem, 4vw, 3rem)',
            marginTop: '3.5rem', flexWrap: 'wrap'
          }}>
            {[
              { num: '85%', label: 'Automation Efficiency' },
              { num: 'Top 5%', label: 'TCS Assessment' },
              { num: '2+', label: 'Years Experience' },
              { num: '75%+', label: 'Test Coverage' },
            ].map(s => (
              <div key={s.label}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'clamp(1.3rem, 3vw, 1.8rem)', color: 'var(--green)', fontWeight: 700 }}>{s.num}</div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-muted)', letterSpacing: '0.08em' }}>{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Skills */}
      <section style={{ padding: 'clamp(4rem, 8vw, 7rem) clamp(1.5rem, 8vw, 8rem)' }}>
        <motion.div
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}
        >
          <p className="section-title">// skills</p>
          <h2 className="section-heading">Tech Stack</h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '1.2rem'
          }}>
            {skills.map((s, i) => (
              <motion.div key={s.cat}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                style={{
                  background: 'var(--bg-card)', border: '1px solid var(--border)',
                  borderRadius: 6, padding: '1.2rem 1.4rem'
                }}
              >
                <div style={{
                  fontFamily: 'var(--font-mono)', fontSize: '0.7rem',
                  color: 'var(--green)', letterSpacing: '0.1em',
                  marginBottom: '0.8rem', opacity: 0.8
                }}>{s.cat.toLowerCase()}/</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {s.items.map(item => (
                    <span key={item} className="skill-pill">{item}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Experience */}
      <section id="experience" style={{ padding: 'clamp(4rem, 8vw, 7rem) clamp(1.5rem, 8vw, 8rem)' }}>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          <p className="section-title">// experience</p>
          <h2 className="section-heading">Work History</h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', maxWidth: 820 }}>
            {experiences.map((exp, i) => (
              <motion.div key={exp.company} className="exp-card"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.6rem' }}>
                  <div>
                    <div style={{ fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: '1.05rem', color: 'var(--text-primary)' }}>{exp.role}</div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--green)', marginTop: 2 }}>{exp.company}</div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-muted)' }}>{exp.period}</div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-muted)' }}>{exp.location}</div>
                  </div>
                </div>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.4rem', marginTop: '0.8rem' }}>
                  {exp.bullets.map((b, j) => (
                    <li key={j} className="bullet-dot" style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{b}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Projects */}
      <section id="projects" style={{ padding: 'clamp(4rem, 8vw, 7rem) clamp(1.5rem, 8vw, 8rem)' }}>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          <p className="section-title">// projects</p>
          <h2 className="section-heading">Featured Builds</h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
            {projects.map((proj, i) => (
              <motion.div key={proj.title} className="project-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--green)', opacity: 0.6 }}>
                    project_0{i + 1}/
                  </div>
                  <a href={proj.link} style={{
                    fontFamily: 'var(--font-mono)', fontSize: '0.72rem',
                    color: 'var(--green)', border: '1px solid var(--green-border)',
                    padding: '3px 10px', borderRadius: 3,
                    transition: 'all 0.2s'
                  }}
                    onMouseEnter={e => e.target.style.background = 'var(--green-glow)'}
                    onMouseLeave={e => e.target.style.background = 'transparent'}
                  >live ↗</a>
                </div>

                <h3 style={{
                  fontFamily: 'var(--font-sans)', fontWeight: 700,
                  fontSize: '1.15rem', color: 'var(--text-primary)',
                  marginBottom: '1rem', lineHeight: 1.3
                }}>{proj.title}</h3>

                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.4rem', marginBottom: '1.2rem' }}>
                  {proj.bullets.map((b, j) => (
                    <li key={j} className="bullet-dot" style={{ fontSize: '0.84rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{b}</li>
                  ))}
                </ul>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: 'auto', paddingTop: '1rem', borderTop: '1px solid var(--border)' }}>
                  {proj.stack.map(s => (
                    <span key={s} style={{
                      fontFamily: 'var(--font-mono)', fontSize: '0.65rem',
                      color: 'var(--text-muted)', background: 'rgba(255,255,255,0.04)',
                      padding: '2px 8px', borderRadius: 2, border: '1px solid var(--border)'
                    }}>{s}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Education */}
      <section style={{ padding: 'clamp(4rem, 8vw, 7rem) clamp(1.5rem, 8vw, 8rem)' }}>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          <p className="section-title">// education</p>
          <h2 className="section-heading">Academic Background</h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            style={{
              background: 'var(--bg-card)', border: '1px solid var(--border)',
              borderLeft: '2px solid var(--green)', borderRadius: 4,
              padding: '1.8rem 2rem', maxWidth: 620,
              display: 'flex', gap: '1.5rem', alignItems: 'flex-start', flexWrap: 'wrap'
            }}
          >
            <div style={{
              fontFamily: 'var(--font-mono)', fontSize: '2rem', color: 'var(--green)', opacity: 0.3, lineHeight: 1
            }}>▣</div>
            <div>
              <div style={{ fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: '1.15rem', color: 'var(--text-primary)' }}>
                B.Tech – Electrical Engineering
              </div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--green)', margin: '4px 0' }}>
                National Institute of Technology, Durgapur
              </div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                2020 – 2024 &nbsp;|&nbsp; West Bengal, India
              </div>
              <div style={{
                marginTop: '0.8rem', display: 'inline-block',
                fontFamily: 'var(--font-mono)', fontSize: '0.8rem',
                background: 'rgba(0,255,136,0.08)', border: '1px solid var(--green-border)',
                color: 'var(--green)', padding: '4px 14px', borderRadius: 3
              }}>
                CGPA: 7.97 / 10
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer style={{
        padding: '2rem clamp(1.5rem, 8vw, 8rem)',
        borderTop: '1px solid var(--border)',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        flexWrap: 'wrap', gap: '1rem'
      }}>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
          © 2025 Sudip Mahato
        </span>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
          Built with <span style={{ color: 'var(--green)' }}>React</span> + <span style={{ color: 'var(--green)' }}>Vite</span>
        </span>
      </footer>
    </PageWrapper>
  )
}
