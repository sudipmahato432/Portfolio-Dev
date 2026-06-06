import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { to: '/', label: 'home', num: '01' },
    { to: '/blogs', label: 'blogs', num: '02' },
    { to: '/contact', label: 'contact', num: '03' },
  ]

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        padding: '0 clamp(1.5rem, 5vw, 4rem)',
        height: '70px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        background: scrolled ? 'rgba(10,12,15,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(0,255,136,0.08)' : '1px solid transparent',
        transition: 'all 0.3s ease',
      }}
    >
      {/* Logo */}
      <NavLink to="/" style={{ fontFamily: 'var(--font-mono)', fontSize: '1.1rem', fontWeight: 700 }}>
        <span style={{ color: 'var(--green)' }}>&gt;</span>
        <span style={{ color: 'var(--text-primary)', marginLeft: 6 }}>sudip</span>
        <span style={{ color: 'var(--green)' }}>.dev</span>
        <span style={{
          display: 'inline-block', width: 10, height: 18, background: 'var(--green)',
          marginLeft: 3, verticalAlign: 'middle', animation: 'blink 1.2s step-end infinite'
        }} />
      </NavLink>

      {/* Desktop links */}
      <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }} className="nav-desktop">
        {links.map(link => (
          <NavLink key={link.to} to={link.to} style={({ isActive }) => ({
            fontFamily: 'var(--font-mono)', fontSize: '0.82rem', letterSpacing: '0.05em',
            color: isActive ? 'var(--green)' : 'var(--text-secondary)',
            transition: 'color 0.2s',
            display: 'flex', alignItems: 'center', gap: 6,
          })}>
            <span style={{ color: 'var(--text-muted)', fontSize: '0.7rem' }}>{link.num}.</span>
            {link.label}
          </NavLink>
        ))}
      </div>

      {/* Hamburger */}
      <button onClick={() => setMenuOpen(o => !o)} style={{
        background: 'none', border: 'none', padding: 8, display: 'none'
      }} className="hamburger" aria-label="Menu">
        <div style={{
          width: 22, height: 2, background: menuOpen ? 'var(--green)' : 'var(--text-primary)',
          marginBottom: 5, transition: 'all 0.3s',
          transform: menuOpen ? 'rotate(45deg) translate(5px,5px)' : 'none'
        }} />
        <div style={{
          width: 22, height: 2, background: menuOpen ? 'var(--green)' : 'var(--text-primary)',
          marginBottom: 5, transition: 'all 0.3s',
          opacity: menuOpen ? 0 : 1
        }} />
        <div style={{
          width: 22, height: 2, background: menuOpen ? 'var(--green)' : 'var(--text-primary)',
          transition: 'all 0.3s',
          transform: menuOpen ? 'rotate(-45deg) translate(5px,-5px)' : 'none'
        }} />
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            style={{
              position: 'absolute', top: '70px', left: 0, right: 0,
              background: 'rgba(10,12,15,0.98)', backdropFilter: 'blur(20px)',
              borderBottom: '1px solid var(--green-border)',
              padding: '1.5rem 2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem'
            }}
          >
            {links.map(link => (
              <NavLink key={link.to} to={link.to} onClick={() => setMenuOpen(false)}
                style={({ isActive }) => ({
                  fontFamily: 'var(--font-mono)', fontSize: '1rem',
                  color: isActive ? 'var(--green)' : 'var(--text-secondary)',
                })}>
                <span style={{ color: 'var(--text-muted)', marginRight: 8 }}>{link.num}.</span>
                {link.label}
              </NavLink>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
        @media(max-width:640px){
          .nav-desktop{display:none!important}
          .hamburger{display:block!important}
        }
      `}</style>
    </motion.nav>
  )
}
