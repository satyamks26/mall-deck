import { motion } from "framer-motion"

const metrics = [
  { value: "5.6M", label: "square feet of retail, dining, hotels, attractions, and experiences" },
  { value: "500", label: "iconic stores and first-to-market retail opportunities" },
  { value: "45+", label: "eateries turning dwell time into lifestyle momentum" },
  { value: "30+", label: "rides and attractions inside Nickelodeon Universe" },
]

export default function Why() {
  return (
    <section className="why deck-section" id="why">
      <motion.div
        className="section-copy"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.45 }}
        transition={{ duration: 0.7 }}
      >
        <span className="eyebrow">Why this property</span>
        <h2>A destination, not just a mall.</h2>
        <p>
          Mall of America brings shopping, theme-park energy, hospitality,
          dining, transit access, and national attention into one sales story.
          For brands, it is a storefront, media platform, event stage, and
          tourist magnet operating under one roof.
        </p>
      </motion.div>

      <div className="why-grid">
        {metrics.map((metric) => (
          <motion.div
            className="metric-card"
            key={metric.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.55 }}
          >
            <strong>{metric.value}</strong>
            <span>{metric.label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
