import { motion } from "framer-motion"

const progressItems = [
  ["opening", "Opening"],
  ["opportunity", "Opportunity"],
  ["why", "Proof"],
  ["audience", "Audience"],
  ["retail", "Retail"],
  ["events", "Events"],
  ["leasing", "Leasing"],
  ["sponsorship", "Sponsors"],
  ["venues", "Venues"],
  ["partners", "Close"],
]

const opportunityMetrics = [
  ["32M", "annual visits"],
  ["5.6M", "square feet"],
  ["500", "stores"],
  ["400+", "annual events"],
  ["$1B+", "annual sales"],
]

export function PrivateIntro({ onEnter }) {
  return (
    <section className="private-intro">
      <video className="private-video" autoPlay loop muted playsInline preload="metadata">
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>
      <div className="private-shade"></div>
      <motion.div
        className="private-panel"
        initial={{ opacity: 0, y: 26 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, ease: "easeOut" }}
      >
        <span className="eyebrow">Private partner presentation</span>
        <h1>Mall of America</h1>
        <p>Prepared for prospective tenants, sponsors, and event partners.</p>
        <button type="button" onClick={onEnter}>Enter presentation</button>
      </motion.div>
    </section>
  )
}

export function ProgressRail() {
  return (
    <aside className="progress-rail" aria-label="Presentation progress">
      <span>Private Deck</span>
      <nav>
        {progressItems.map(([id, label], index) => (
          <a key={id} href={`#${id}`} aria-label={label}>
            <strong>{String(index + 1).padStart(2, "0")}</strong>
            <em>{label}</em>
          </a>
        ))}
      </nav>
    </aside>
  )
}

export function StickyCTA() {
  return (
    <a className="sticky-cta" href="#partners">Schedule walkthrough</a>
  )
}

export function ExecutiveSummary() {
  return (
    <section className="opportunity-section deck-section" id="opportunity">
      <motion.div
        className="section-copy"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.7 }}
      >
        <span className="eyebrow">Executive summary</span>
        <h2>The opportunity is already in motion.</h2>
        <p>
          A rare combination of traffic, entertainment, retail density, and
          event infrastructure. The question is where each partner should enter.
        </p>
      </motion.div>

      <div className="summary-strip">
        {opportunityMetrics.map(([value, label]) => (
          <article key={label}>
            <strong>{value}</strong>
            <span>{label}</span>
          </article>
        ))}
      </div>
    </section>
  )
}
