# Mall of America Interactive Sales Deck

GitHub Repository: https://github.com/satyamks26/mall-deck

This is my interview project submission: a browser-based interactive sales deck for Mall of America. I built it as a private partner presentation for prospective tenants, sponsors, and event producers, not as a normal public website.

The main goal was to make the experience feel premium and visual first. The video and images lead the story, while the text supports the business pitch in a quieter way.

## Tech Stack

My broader stack is MERN, but for this assignment I focused on the frontend experience because the brief was mainly about UI, storytelling, interactivity, and presentation quality.

- React.js
- Vite
- Framer Motion
- CSS
- Public media assets and AI-generated section visuals

## Setup Instructions

Install dependencies:

```bash
npm install
```

Run locally:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

## Project Structure

```text
src/
  App.jsx
  components/
    Hero.jsx
    Why.jsx
    Experience.jsx
    PitchAdditions.jsx
  style.css
  index.css

public/
  images/
  videos/
```

## Design Decisions

I chose Mall of America because it is more than a shopping mall. It works as a retail destination, entertainment property, tourism driver, sponsorship platform, and event venue.

The experience is designed to feel like a private boardroom pitch. I added an entry screen, cinematic video opening, executive summary, progress rail, premium image-led sections, leasing paths, sponsorship modules, partnership models, and a final executive CTA.

I intentionally reduced the amount of visible text so the presentation does not feel like a regular website. The visuals are meant to create the first impression, and the copy is there to support decision-making for high-end clients.

## Main Sections

- Private presentation entry
- Cinematic opening
- Executive summary
- Why Mall of America
- Audience engine
- Retail leasing
- Luxury tenants
- Attractions and entertainment
- Dining and hospitality
- Events platform
- Leasing paths
- Why now
- Sponsorship architecture
- Partnership models
- Venue capability
- Executive close

## AI Tools Used

I used AI to generate several premium background images for sections where real public assets were limited or where repeated images made the deck feel less polished.

The AI-generated images were used for:

- Executive opportunity
- Audience engine
- Luxury retail
- Dining and hospitality
- Events platform
- Leasing strategy
- Sponsorship activation
- Why now / experiential retail
- Partnership models
- Venue capability

The goal was not to fake the property, but to create polished pitch visuals that match the scale and mood of the deck.

## Content Sources

The main facts and positioning are based on publicly available Mall of America information, including:

- Annual visitors
- Property scale
- Number of stores and dining options
- Entertainment attractions
- Event programming
- Leasing and sponsorship potential

## What I Would Improve With More Time

With more time, I would add a real CMS or admin layer so the sales team could update numbers, images, videos, and CTAs without editing code.

I would also add:

- A downloadable PDF version of the deck
- Client-specific presentation modes
- A real interactive map of the property
- More official Mall of America video and photography
- Analytics to track which sections prospects view the most
- A stronger mobile version, although the current priority is desktop/tablet sales presentation use

## Submission Notes

This project is meant to show how I think as a product builder: combining design, storytelling, frontend execution, AI-assisted asset creation, and business strategy into one interactive sales tool.
