import { useState } from 'react'
import { motion } from 'framer-motion'
import PageWrapper from '../components/PageWrapper'

const GithubIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
  </svg>
)

const LinkedInIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
)

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null) // null | 'sending' | 'sent' | 'error'
  const [errors, setErrors] = useState({})

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.email.trim()) e.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Invalid email'
    if (!form.message.trim()) e.message = 'Message is required'
    else if (form.message.trim().length < 20) e.message = 'At least 20 characters please'
    return e
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) { setErrors(errs); return }
    setErrors({})
    setStatus('sending')
    // Simulate API call
    setTimeout(() => {
      setStatus('sent')
      setForm({ name: '', email: '', message: '' })
    }, 1800)
  }

  return (
    <PageWrapper>
      <style>{`
        .input-field {
          width: 100%;
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: 4px;
          color: var(--text-primary);
          font-family: var(--font-mono);
          font-size: 0.88rem;
          padding: 0.85rem 1rem;
          outline: none;
          transition: all 0.2s;
          resize: vertical;
        }
        .input-field::placeholder { color: var(--text-muted); }
        .input-field:focus {
          border-color: var(--green);
          box-shadow: 0 0 0 3px rgba(0,255,136,0.08);
          background: var(--bg-card-hover);
        }
        .input-field.error { border-color: #ff4466; }
        .social-link {
          display: flex; align-items: center; gap: 12px;
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: 6px;
          padding: 1.1rem 1.4rem;
          color: var(--text-secondary);
          transition: all 0.3s;
          text-decoration: none;
        }
        .social-link:hover {
          border-color: var(--green);
          color: var(--green);
          background: var(--bg-card-hover);
          transform: translateX(6px);
        }
        .submit-btn {
          background: var(--green);
          color: #0a0c0f;
          border: none;
          border-radius: 3px;
          font-family: var(--font-mono);
          font-size: 0.85rem;
          font-weight: 700;
          padding: 0.9rem 2rem;
          letter-spacing: 0.05em;
          transition: all 0.2s;
          width: 100%;
        }
        .submit-btn:hover:not(:disabled) {
          box-shadow: 0 0 20px rgba(0,255,136,0.35);
          transform: translateY(-2px);
        }
        .submit-btn:disabled { opacity: 0.7; cursor: not-allowed; }
        label {
          display: block;
          font-family: var(--font-mono);
          font-size: 0.72rem;
          color: var(--green);
          letter-spacing: 0.08em;
          margin-bottom: 0.5rem;
        }
        .error-msg {
          font-family: var(--font-mono);
          font-size: 0.7rem;
          color: #ff4466;
          margin-top: 0.3rem;
        }
      `}</style>

      <div style={{ padding: 'clamp(6rem, 10vw, 9rem) clamp(1.5rem, 8vw, 8rem) 5rem' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--green)', letterSpacing: '0.15em', marginBottom: '0.5rem' }}>
            // contact
          </p>
          <h1 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 800, marginBottom: '0.8rem' }}>
            Get In <span style={{ WebkitTextStroke: '1px var(--green)', color: 'transparent' }}>Touch</span>
          </h1>
          <p style={{ color: 'var(--text-secondary)', maxWidth: 480, marginBottom: '3.5rem', fontSize: '0.95rem', lineHeight: 1.8 }}>
            Open to new opportunities, collaborations, or just a good tech conversation.
            Drop me a message and I'll get back to you.
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'clamp(280px, 55%, 560px) 1fr',
          gap: 'clamp(2rem, 5vw, 4rem)',
          alignItems: 'start',
        }} className="contact-grid">

          {/* Form */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
            {status === 'sent' ? (
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                style={{
                  background: 'rgba(0,255,136,0.06)', border: '1px solid var(--green-border)',
                  borderRadius: 6, padding: '3rem 2rem', textAlign: 'center'
                }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>✓</div>
                <div style={{ fontFamily: 'var(--font-mono)', color: 'var(--green)', fontSize: '1rem', marginBottom: '0.5rem' }}>
                  Message sent successfully
                </div>
                <div style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
                  I'll get back to you as soon as possible.
                </div>
                <button style={{
                  marginTop: '1.5rem', fontFamily: 'var(--font-mono)', fontSize: '0.8rem',
                  color: 'var(--green)', background: 'none', border: '1px solid var(--green-border)',
                  padding: '6px 18px', borderRadius: 3, cursor: 'pointer'
                }} onClick={() => setStatus(null)}>send another</button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} noValidate style={{ display: 'flex', flexDirection: 'column', gap: '1.4rem' }}>
                <div>
                  <label>name</label>
                  <input className={`input-field ${errors.name ? 'error' : ''}`}
                    placeholder="John Doe"
                    value={form.name}
                    onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                  />
                  {errors.name && <div className="error-msg">// {errors.name}</div>}
                </div>

                <div>
                  <label>email</label>
                  <input type="email" className={`input-field ${errors.email ? 'error' : ''}`}
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                  />
                  {errors.email && <div className="error-msg">// {errors.email}</div>}
                </div>

                <div>
                  <label>message</label>
                  <textarea className={`input-field ${errors.message ? 'error' : ''}`}
                    placeholder="Hey Sudip, I'd love to discuss..."
                    rows={6}
                    value={form.message}
                    onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                  />
                  {errors.message && <div className="error-msg">// {errors.message}</div>}
                </div>

                <button type="submit" className="submit-btn" disabled={status === 'sending'}>
                  {status === 'sending' ? '// transmitting...' : './send_message'}
                </button>
              </form>
            )}
          </motion.div>

          {/* Social Links */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.35 }}>
            <div style={{
              fontFamily: 'var(--font-mono)', fontSize: '0.72rem',
              color: 'var(--green)', letterSpacing: '0.1em', marginBottom: '1.2rem'
            }}>connect/</div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              <a href="https://linkedin.com/in/sudipmahato" target="_blank" rel="noreferrer" className="social-link">
                <LinkedInIcon />
                <div>
                  <div style={{ fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: '0.9rem' }}>LinkedIn</div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-muted)', marginTop: 2 }}>
                    /in/sudipmahato
                  </div>
                </div>
                <span style={{ marginLeft: 'auto', fontSize: '0.9rem', opacity: 0.5 }}>↗</span>
              </a>

              <a href="https://github.com/sudipmahato" target="_blank" rel="noreferrer" className="social-link">
                <GithubIcon />
                <div>
                  <div style={{ fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: '0.9rem' }}>GitHub</div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-muted)', marginTop: 2 }}>
                    /sudipmahato
                  </div>
                </div>
                <span style={{ marginLeft: 'auto', fontSize: '0.9rem', opacity: 0.5 }}>↗</span>
              </a>
            </div>

            {/* Terminal card */}
            <div style={{
              marginTop: '2rem',
              background: 'var(--bg-card)', border: '1px solid var(--border)',
              borderRadius: 6, overflow: 'hidden'
            }}>
              <div style={{
                background: 'rgba(255,255,255,0.04)', padding: '0.6rem 1rem',
                borderBottom: '1px solid var(--border)',
                display: 'flex', gap: 6, alignItems: 'center'
              }}>
                {['#ff5f56', '#ffbd2e', '#27c93f'].map(c => (
                  <div key={c} style={{ width: 10, height: 10, borderRadius: '50%', background: c }} />
                ))}
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-muted)', marginLeft: 6 }}>
                  terminal
                </span>
              </div>
              <div style={{ padding: '1rem 1.2rem', fontFamily: 'var(--font-mono)', fontSize: '0.78rem', lineHeight: 2 }}>
                <div><span style={{ color: 'var(--green)' }}>$</span> <span style={{ color: 'var(--text-muted)' }}>whoami</span></div>
                <div style={{ color: 'var(--text-secondary)', paddingLeft: '1rem' }}>Sudip Mahato</div>
                <div><span style={{ color: 'var(--green)' }}>$</span> <span style={{ color: 'var(--text-muted)' }}>cat status.txt</span></div>
                <div style={{ color: '#00cc6a', paddingLeft: '1rem' }}>✓ Open to opportunities</div>
                <div><span style={{ color: 'var(--green)' }}>$</span> <span style={{ color: 'var(--text-muted)' }}>echo $LOCATION</span></div>
                <div style={{ color: 'var(--text-secondary)', paddingLeft: '1rem' }}>Kolkata, West Bengal, India</div>
                <div style={{ color: 'var(--green)', opacity: 0.4 }}>█</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media(max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </PageWrapper>
  )
}
