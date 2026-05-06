import { useState } from "react"
import { motion } from "framer-motion"

const mediaSlots = {
  retail: "/images/retail.png",
  luxury: "/images/luxury.png",
  entertainment: "/images/entertainment.png",
  dining: "/images/dining-generated.png",
}

const sections = [
  {
    id: "retail",
    kicker: "For flagship retail",
    title: "Open where discovery is already the behavior.",
    body: "Nearly 500 stores, no tax on clothing or shoes, first-to-market momentum, and a visitor mix that blends local loyalty with national and international destination shopping.",
    stats: ["Flagships", "Pop-ups", "Everyday luxury"],
  },
  {
    id: "luxury",
    kicker: "For luxury tenants",
    title: "A polished environment for brands that need theatre.",
    body: "The premium retail pitch is not only adjacency. It is foot traffic with intent, hospitality support, and a destination context that makes launches feel bigger than a store opening.",
    stats: ["Nordstrom", "Fashion events", "High-intent trips"],
  },
  {
    id: "entertainment",
    kicker: "For audience builders",
    title: "Entertainment changes the commercial math.",
    body: "Nickelodeon Universe, SEA LIFE, FlyOver America, immersive attractions, and family programming convert Mall of America from a shopping center into a day-long itinerary.",
    stats: ["7-acre theme park", "1.3M-gallon aquarium", "All-weather draw"],
  },
  {
    id: "dining",
    kicker: "For food & hospitality",
    title: "Food is the stay-longer engine.",
    body: "More than 45 eateries support the full guest journey: quick decisions, family meals, date-night dining, convention traffic, and brand-hosted hospitality moments.",
    stats: ["45+ eateries", "Hospitality moments", "Extended dwell"],
  },
]

const modules = [
  {
    title: "Events Module",
    text: "Over 400 annual events across rotundas, atriums, entertainment venues, and brand-ready public spaces. Built for product launches, celebrity appearances, live music, charity moments, and corporate programming.",
    action: "Book the platform",
  },
  {
    title: "Sponsorship Module",
    text: "Audience-scale partnership packages can connect brands to destination shoppers through naming, seasonal programming, digital media, custom activations, and attraction-led experiences.",
    action: "Build a sponsorship",
  },
  {
    title: "Leasing Paths",
    text: "Segmented pitches for luxury, specialty retail, F&B, entertainment, and short-term pop-up concepts, each anchored to category-specific traffic drivers and adjacent experiences.",
    action: "Find the right space",
  },
]

const audienceSignals = [
  { label: "Tourist gravity", detail: "A landmark that travelers plan around, not a stop they discover by accident." },
  { label: "Family dwell time", detail: "Attractions, restaurants, hotels, and retail keep groups on-property longer." },
  { label: "Tax advantage", detail: "No sales tax on clothing or shoes strengthens fashion and footwear conversion." },
  { label: "Media moments", detail: "Launches, celebrity appearances, and seasonal events create reasons to return." },
]

const leasingPaths = [
  {
    name: "Luxury flagship",
    pitch: "Make the store a destination within the destination: high-touch service, appointment retail, launch events, and premium adjacency.",
    proof: ["High-intent visitors", "Editorial storefront moments", "Travel-driven discovery"],
  },
  {
    name: "Specialty retail",
    pitch: "Use the property as a national discovery engine for products that need trial, story, and physical brand presence.",
    proof: ["Nearly 500-store ecosystem", "Tourist + local mix", "Strong impulse behavior"],
  },
  {
    name: "F&B concept",
    pitch: "Capture guests across full-day itineraries: quick meals, social dining, event hospitality, and family traffic.",
    proof: ["45+ dining context", "Extended dwell time", "Hotel and event adjacency"],
  },
  {
    name: "Pop-up launch",
    pitch: "Create a high-visibility short-term moment for product drops, seasonal campaigns, creator launches, and test markets.",
    proof: ["Fast activation", "Built-in audience", "Content-ready environment"],
  },
]

const sponsorshipTiers = [
  { tier: "Signature", value: "Own a seasonal platform, destination zone, or flagship event series with premium media and on-site presence." },
  { tier: "Activation", value: "Build a product trial, sampling, creator, or launch experience in the path of daily guest traffic." },
  { tier: "Always-on", value: "Use digital, environmental, and programmatic placements to stay visible across the full guest journey." },
]

const venueCapabilities = [
  ["Launch theatre", "LED stage, media wall, VIP arrivals, creator capture"],
  ["Public atrium", "High-volume visibility, sponsor booths, product sampling"],
  ["Family entertainment", "Ride-adjacent moments, character energy, school-break traffic"],
  ["Corporate hosting", "Private receptions, partner dinners, presentation moments"],
  ["Expo format", "Category showcases, ticketed experiences, convention-adjacent traffic"],
]

const urgencyPoints = [
  "Physical retail is becoming experiential.",
  "Brands need destinations, not only distribution.",
  "Audiences are harder to aggregate elsewhere.",
  "Mall of America already has the traffic, media, and event infrastructure.",
]

const dealModels = [
  "Long-term lease",
  "Seasonal pop-up",
  "Sponsored event series",
  "Venue takeover",
  "Brand activation",
  "Product launch",
]

function DeckImage({ src }) {
  const [failed, setFailed] = useState(false)

  if (!src || failed) {
    return null
  }

  return (
    <img
      src={src}
      className="exp-image"
      alt=""
      loading="lazy"
      onError={() => setFailed(true)}
    />
  )
}

export default function Experience() {
  const [activePath, setActivePath] = useState(leasingPaths[0])

  return (
    <>
      <section className="audience-section deck-section" id="audience">
        <motion.div
          className="section-copy"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7 }}
        >
          <span className="eyebrow">Audience engine</span>
          <h2>The audience is already assembled.</h2>
          <p>
            The strongest pitch is not square footage. It is the density of
            intent: shoppers, travelers, families, creators, and event guests
            moving through one property with reasons to stay.
          </p>
        </motion.div>

        <div className="signal-grid">
          {audienceSignals.map((signal, index) => (
            <motion.article
              className="signal-card"
              key={signal.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.45 }}
              transition={{ duration: 0.55, delay: index * 0.06 }}
            >
              <span>0{index + 1}</span>
              <h3>{signal.label}</h3>
              <p>{signal.detail}</p>
            </motion.article>
          ))}
        </div>
      </section>

      {sections.map((sec) => (
        <section key={sec.id} className={`exp-section exp-${sec.id}`} id={sec.id}>
          <DeckImage src={mediaSlots[sec.id]} />
          <div className="exp-overlay"></div>

          <motion.div
            className="exp-content"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8 }}
          >
            <span className="eyebrow">{sec.kicker}</span>
            <h2>{sec.title}</h2>
            <p>{sec.body}</p>
            <div className="stat-strip">
              {sec.stats.map((stat) => <span key={stat}>{stat}</span>)}
            </div>
          </motion.div>
        </section>
      ))}

      <section className="platform-section deck-section" id="events">
        <div className="section-copy">
          <span className="eyebrow">Events + platform</span>
          <h2>More than a venue. A year-round audience engine.</h2>
          <p>
            Mall of America can sell a launch, concert, convention moment, or
            sponsor activation with the thing most venues have to buy:
            built-in traffic.
          </p>
        </div>

        <div className="module-grid">
          {modules.map((module) => (
            <article className="module-card" key={module.title}>
              <span>{module.title}</span>
              <p>{module.text}</p>
              <a href="#partners">{module.action}</a>
            </article>
          ))}
        </div>
      </section>

      <section className="leasing-section deck-section" id="leasing">
        <div className="section-copy">
          <span className="eyebrow">Leasing paths</span>
          <h2>One property. Multiple ways to win.</h2>
          <p>
            A salesperson can tailor the same deck to a luxury house, specialty
            retailer, restaurant group, or pop-up concept without rebuilding the
            pitch from scratch.
          </p>
        </div>

        <div className="path-builder">
          <div className="path-tabs" role="tablist" aria-label="Leasing categories">
            {leasingPaths.map((path) => (
              <button
                className={activePath.name === path.name ? "active" : ""}
                key={path.name}
                onClick={() => setActivePath(path)}
                type="button"
              >
                {path.name}
              </button>
            ))}
          </div>

          <motion.div
            className="path-panel"
            key={activePath.name}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
          >
            <span>{activePath.name}</span>
            <h3>{activePath.pitch}</h3>
            <div className="stat-strip">
              {activePath.proof.map((item) => <span key={item}>{item}</span>)}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="why-now-section deck-section" id="why-now">
        <div className="section-copy">
          <span className="eyebrow">Why now</span>
          <h2>Retail is no longer a place. It is a staged experience.</h2>
        </div>

        <div className="why-now-list">
          {urgencyPoints.map((point, index) => (
            <motion.div
              className="why-now-item"
              key={point}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.45 }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
            >
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{point}</strong>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="sponsorship-section deck-section" id="sponsorship">
        <div className="section-copy">
          <span className="eyebrow">Sponsorship architecture</span>
          <h2>Turn foot traffic into a brand platform.</h2>
          <p>
            Sponsors are not buying logo placement. They are buying a living
            venue where guests can see, touch, share, and remember the brand.
          </p>
        </div>

        <div className="tier-grid">
          {sponsorshipTiers.map((tier) => (
            <article className="tier-card" key={tier.tier}>
              <span>{tier.tier}</span>
              <p>{tier.value}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="models-section deck-section" id="models">
        <div className="section-copy">
          <span className="eyebrow">Available partnership models</span>
          <h2>Choose the commercial shape that matches the ambition.</h2>
        </div>

        <div className="models-grid">
          {dealModels.map((model) => (
            <article key={model}>{model}</article>
          ))}
        </div>
      </section>

      <section className="venue-section deck-section" id="venues">
        <div className="section-copy">
          <span className="eyebrow">Venue capability</span>
          <h2>Built for the moments brands need to manufacture elsewhere.</h2>
          <p>
            The property can flex from public launch theatre to hospitality,
            creator capture, expo programming, and ticketed entertainment.
          </p>
        </div>

        <div className="capability-table">
          {venueCapabilities.map(([format, capabilities]) => (
            <div className="capability-row" key={format}>
              <strong>{format}</strong>
              <span>{capabilities}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="partner-section" id="partners">
        <motion.div
          className="partner-panel"
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
        >
          <span className="eyebrow">Executive close</span>
          <h2>The question is not whether the audience is here. It is where your brand should meet them.</h2>
          <p>
            Use this deck on live sales calls or as a standalone link for
            prospects evaluating leasing, sponsorship, or event booking.
          </p>
          <div className="cta-row">
            <a className="primary-action" href="mailto:lease.inquiry@moa.net">Request leasing brief</a>
            <a className="secondary-action" href="mailto:partnerships@moa.net">Build sponsorship package</a>
            <a className="secondary-action" href="mailto:events@moa.net">Discuss event availability</a>
          </div>
        </motion.div>
      </section>
    </>
  )
}
