import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section className="hero" id="opening">
      <motion.video
        initial={{ scale: 1.14 }}
        animate={{ scale: 1 }}
        transition={{ duration: 6, ease: "easeOut" }}
        className="hero-video"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        aria-label="Cinematic Mall of America overview video"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </motion.video>

      <div className="hero-overlay"></div>

      <motion.nav
        className="deck-nav"
        aria-label="Sales deck sections"
        initial={{ opacity: 0, y: -18 }}
        animate={{ opacity: [0, 1, 1, 0], y: [-18, 0, 0, -14] }}
        transition={{ duration: 7.5, times: [0, 0.18, 0.72, 1], ease: "easeInOut" }}
      >
        <a className="deck-mark" href="#opening">MOA</a>
        <span className="deck-private-label">Private Partner Presentation</span>
      </motion.nav>

      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 36 }}
        animate={{ opacity: [0, 1, 1, 0], y: [36, 0, 0, -24] }}
        transition={{ duration: 7.5, times: [0, 0.2, 0.72, 1], ease: "easeInOut" }}
      >
        <span className="eyebrow">Boardroom pitch experience</span>
        <h1>The destination economy, already built.</h1>
        <p>
          A cinematic, self-guided pitch for tenants, sponsors, and event
          partners ready to meet 32 million annual guests inside one iconic
          Bloomington landmark.
        </p>
        <div className="hero-actions">
          <a className="primary-action" href="#partners">Schedule partner walkthrough</a>
          <a className="secondary-action" href="#opportunity">View executive summary</a>
        </div>
      </motion.div>

      <motion.div
        className="hero-proof"
        aria-label="Mall of America commercial highlights"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: [0, 1, 1, 0], y: [18, 0, 0, 18] }}
        transition={{ duration: 7.5, times: [0, 0.25, 0.72, 1], ease: "easeInOut" }}
      >
        <div>
          <strong>32M</strong>
          <span>annual visits</span>
        </div>
        <div>
          <strong>$1B+</strong>
          <span>annual sales</span>
        </div>
        <div>
          <strong>400+</strong>
          <span>events yearly</span>
        </div>
      </motion.div>
    </section>
  )
}
