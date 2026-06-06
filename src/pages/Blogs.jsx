import { useState } from 'react'
import { motion } from 'framer-motion'
import PageWrapper from '../components/PageWrapper'

const blogs = [
  {
    id: 1,
    tag: 'Automation',
    title: 'How I Automated Network Change Validation Using Python',
    excerpt: 'A deep-dive into how I built Python scripts that reduced switch verification time from 2+ hours to just 15 minutes — eliminating manual errors across 50+ network devices.',
    readTime: '6 min read',
    date: 'May 2025',
    content: `When I joined TCS as a Systems Engineer, one of the first challenges I encountered was the tedious process of network change validation. Every time a change was pushed across 50+ switches, engineers had to manually SSH into each device and run a series of commands to verify the changes took effect correctly. This process took over 2 hours and was error-prone.

I decided to automate it using Python with the Netmiko library for SSH connections and a YAML-based config file to define expected states per device. The script connects to each switch in parallel using ThreadPoolExecutor, runs the verification commands, and diffs the output against expected values. Any mismatches are flagged in a detailed HTML report.

The result? Verification time dropped from 130+ minutes to under 15 minutes — an 85% efficiency improvement. More importantly, we eliminated human error from the process entirely.`,
  },
  {
    id: 2,
    tag: 'React',
    title: 'Optimizing React Performance: useMemo, useCallback & Beyond',
    excerpt: 'Practical techniques I used during my internship at Oasis Infobyte to slash re-renders by 30% and improve load times by 1.2 seconds in a production React application.',
    readTime: '7 min read',
    date: 'June 2023',
    content: `During my internship at Oasis Infobyte, I was tasked with improving the performance of a React e-commerce application that was suffering from excessive re-renders. The developer tools revealed components were re-rendering on every parent state change, even when their props hadn't changed.

The fix involved three key strategies: First, wrapping expensive computations in useMemo to cache results between renders. Second, using useCallback to memoize event handlers passed as props to child components. Third, splitting the global state into smaller, more focused contexts so unrelated state changes don't trigger unnecessary renders.

Combined, these changes reduced re-renders by 30% and cut load times by 1.2 seconds — a significant improvement in perceived performance.`,
  },
  {
    id: 3,
    tag: 'Backend',
    title: 'Building Sub-100ms REST APIs with Express.js + MongoDB',
    excerpt: 'The indexing strategies and query optimization techniques I used to achieve consistently fast API response times in a production e-commerce backend.',
    readTime: '8 min read',
    date: 'June 2023',
    content: `When I built the REST API for the e-commerce platform at Oasis Infobyte, achieving sub-100ms response times was a key goal. MongoDB, while flexible, can be slow without proper indexing strategy.

The biggest wins came from compound indexes on the most common query patterns — for example, indexing both category and price together for product filtering queries. I also used MongoDB's explain() method to analyze query execution plans and identify collection scans that needed indexes.

For the authentication layer, JWT verification was optimized by caching decoded tokens in memory for their validity window. Combined with response compression using the compression middleware and keeping the Mongoose connection pool warm, we hit consistent sub-100ms response times even under moderate load.`,
  },
  {
    id: 4,
    tag: 'DSA',
    title: 'Achieving Top 5% in TCS Technical Assessment: My Preparation Strategy',
    excerpt: 'How I structured my DSA practice to score 92/100 in TCS technical assessments — covering the problem patterns I focused on and the mistakes to avoid.',
    readTime: '5 min read',
    date: 'April 2025',
    content: `Scoring in the top 5% pan-India in TCS technical assessments required a structured approach to DSA preparation. Rather than randomly solving LeetCode problems, I categorized problems by pattern type: sliding window, two pointers, binary search, BFS/DFS, dynamic programming, and heap/priority queue problems.

I spent 2 weeks on each category, solving 15–20 problems of increasing difficulty before moving on. The key insight was recognizing which pattern applies to a problem quickly — that skill alone separates average performers from top scorers.

I also practiced under timed conditions regularly. Solving a problem correctly but slowly is not enough in competitive assessments. Building the muscle memory to think fast under pressure made a significant difference on the actual test day.`,
  },
  {
    id: 5,
    tag: 'Full-Stack',
    title: 'Building a QR-Based Hotel Menu System: Architecture Deep Dive',
    excerpt: 'From JWT authentication to Cloudinary image optimization — a walkthrough of the technical decisions behind the Digital Hotel Menu system for The Grand, Asansol.',
    readTime: '9 min read',
    date: 'March 2024',
    content: `The Digital Hotel Menu project for The Grand, Asansol presented an interesting set of requirements: a contactless QR-based system where guests could browse 200+ menu items instantly, while hotel staff managed the menu through an admin dashboard.

The biggest technical challenge was image loading performance. With 200+ high-quality food photos, initial load times hit 3.2 seconds — unacceptable for a dining experience. Integrating Cloudinary with automatic format conversion (WebP where supported), responsive sizing, and lazy loading brought this down to 1.6 seconds.

For the database layer, MongoDB indexing on category, availability, and name fields transformed slow full-collection scans into snappy 20ms queries. The real-time search feature uses debounced queries to avoid hammering the database on every keystroke.`,
  },
  {
    id: 6,
    tag: 'DevOps',
    title: 'CI/CD for Solo Developers: GitHub Actions + Vercel/Render',
    excerpt: 'A practical guide to setting up automated testing and deployment pipelines for full-stack projects — without a DevOps team.',
    readTime: '6 min read',
    date: 'January 2024',
    content: `As a solo developer working on full-stack projects, having a proper CI/CD pipeline transformed my workflow. For the School Management System, I set up GitHub Actions to run the Jest test suite on every push to main, blocking merges if coverage dropped below 75%.

The pipeline has three stages: lint → test → deploy. Linting catches style issues early; tests validate functionality; deployment to Vercel (frontend) and Render (backend) happens automatically only when both pass. Zero-downtime deployments on Render are configured by setting up a health check endpoint that the platform pings before switching traffic to the new instance.

The initial setup takes about 2 hours, but the long-term confidence it gives you — especially when refactoring — is invaluable. Every commit is automatically validated.`,
  },
]

const tags = ['All', 'Automation', 'React', 'Backend', 'DSA', 'Full-Stack', 'DevOps']

export default function Blogs() {
  const [activeTag, setActiveTag] = useState('All')
  const [expanded, setExpanded] = useState(null)

  const filtered = activeTag === 'All' ? blogs : blogs.filter(b => b.tag === activeTag)

  return (
    <PageWrapper>
      <style>{`
        .blog-card {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: 6px;
          padding: 1.8rem;
          transition: all 0.3s;
          cursor: pointer;
        }
        .blog-card:hover {
          background: var(--bg-card-hover);
          border-color: var(--green-border);
          transform: translateY(-3px);
          box-shadow: 0 8px 30px rgba(0,255,136,0.07);
        }
        .tag-btn {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          padding: 5px 14px;
          border-radius: 3px;
          border: 1px solid var(--border);
          background: transparent;
          color: var(--text-muted);
          transition: all 0.2s;
          letter-spacing: 0.04em;
        }
        .tag-btn:hover, .tag-btn.active {
          border-color: var(--green);
          color: var(--green);
          background: var(--green-glow);
        }
        .read-more-btn {
          font-family: var(--font-mono);
          font-size: 0.78rem;
          color: var(--green);
          background: none;
          border: none;
          padding: 0;
          cursor: pointer;
          letter-spacing: 0.05em;
          transition: opacity 0.2s;
        }
        .read-more-btn:hover { opacity: 0.7; }
        .blog-content {
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.9;
          margin-top: 1rem;
          padding-top: 1rem;
          border-top: 1px solid var(--border);
        }
      `}</style>

      <div style={{ padding: 'clamp(6rem, 10vw, 9rem) clamp(1.5rem, 8vw, 8rem) 5rem' }}>
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--green)', letterSpacing: '0.15em', marginBottom: '0.5rem' }}>
            // blog
          </p>
          <h1 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 800, marginBottom: '0.8rem' }}>
            Tech <span style={{ WebkitTextStroke: '1px var(--green)', color: 'transparent' }}>Writings</span>
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)', fontSize: '0.85rem', marginBottom: '2.5rem', maxWidth: 500 }}>
            Sharing what I learn — automation, web dev, DSA & system design.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
          style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}
        >
          {tags.map(tag => (
            <button key={tag} className={`tag-btn ${activeTag === tag ? 'active' : ''}`}
              onClick={() => setActiveTag(tag)}>
              {tag}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '1.2rem' }}>
          {filtered.map((blog, i) => (
            <motion.div key={blog.id} className="blog-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              layout
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.8rem' }}>
                <span style={{
                  fontFamily: 'var(--font-mono)', fontSize: '0.68rem',
                  color: 'var(--green)', background: 'rgba(0,255,136,0.08)',
                  border: '1px solid var(--green-border)', padding: '2px 10px', borderRadius: 2
                }}>{blog.tag}</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--text-muted)' }}>
                  {blog.date}
                </span>
              </div>

              <h2 style={{
                fontFamily: 'var(--font-sans)', fontWeight: 700,
                fontSize: '1.05rem', color: 'var(--text-primary)',
                lineHeight: 1.4, marginBottom: '0.7rem'
              }}>{blog.title}</h2>

              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1rem' }}>
                {blog.excerpt}
              </p>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--text-muted)' }}>
                  ⏱ {blog.readTime}
                </span>
                <button className="read-more-btn" onClick={() => setExpanded(expanded === blog.id ? null : blog.id)}>
                  {expanded === blog.id ? '[ collapse ]' : '[ read more ]'}
                </button>
              </div>

              {expanded === blog.id && (
                <motion.div className="blog-content"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                >
                  {blog.content.split('\n\n').map((para, j) => (
                    <p key={j} style={{ marginBottom: '1rem' }}>{para}</p>
                  ))}
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div style={{ textAlign: 'center', padding: '4rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
            // no posts found for "{activeTag}"
          </div>
        )}
      </div>
    </PageWrapper>
  )
}
