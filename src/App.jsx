import { useState } from 'react'
import Hero from './components/Hero'
import Why from './components/Why'
import Experience from './components/Experience'
import { ExecutiveSummary, PrivateIntro, ProgressRail, StickyCTA } from './components/PitchAdditions'

function App() {
  const [entered, setEntered] = useState(false)

  if (!entered) {
    return <PrivateIntro onEnter={() => setEntered(true)} />
  }

  return (
    <div className="deck-shell">
      <ProgressRail />
      <StickyCTA />
      <Hero />
      <ExecutiveSummary />
      <Why />
      <Experience />
    </div>
  )
}

export default App
