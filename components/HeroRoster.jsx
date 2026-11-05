import { Axe, Shield, Swords, BowArrow, WandSparkles, Skull } from "lucide-react";
const symbols = [Axe, Shield, Swords, BowArrow, WandSparkles, Skull];

export default function HeroRoster({ copy, title }) {
  return <section className="heroes section-wrap" id="heros">
    <h2 className="ruled-title">{title}</h2>
    <div className="hero-roster">{[3, 0, 4, 2, 1, 5].map((index, position) => {
      const hero = copy.items[index];
      const Symbol = symbols[position];
      return <article className="hero-card" key={hero.image} tabIndex={0}>
        <div className="hero-card__portrait" role="img" aria-label={hero.alt} style={{ backgroundPosition: `${position * 20}% top` }} />
        <div className="hero-card__veil" />
        <div className="hero-card__copy"><span className="hero-card__emblem"><Symbol size={16} strokeWidth={1.2} aria-hidden="true" /></span><h3>{hero.name}</h3><p>{hero.role}</p></div>
      </article>;
    })}</div>
  </section>;
}
