import Image from "next/image";
import { notFound } from "next/navigation";
import SiteHeader from "../../components/SiteHeader";
import GameplaySection from "../../components/GameplaySection";
import HeroRoster from "../../components/HeroRoster";
import WorldSection from "../../components/WorldSection";
import MagicAtmosphere from "../../components/MagicAtmosphere";
import HeroFilm from "../../components/HeroFilm";
import ReleaseCountdown from "../../components/ReleaseCountdown";
import { locales, messages } from "../../lib/content";
import { designCopy } from "../../lib/design-copy";
export const dynamicParams = false;
export function generateStaticParams(){ return locales.map(locale=>({locale})); }
export async function generateMetadata({params}){
 const {locale}=await params,c=messages[locale];if(!c)return {};
 return {title:c.meta.title,description:c.meta.description,alternates:{languages:Object.fromEntries(locales.map(code=>[code,`/${code}`]))}};
}
export default async function Home({params}){
 const {locale}=await params;if(!locales.includes(locale))notFound();
 const c=messages[locale],d=designCopy[locale];
 return <div className="site-shell" lang={locale} data-locale={locale}>
 <a className="skip-link" href="#jeu">{d.skip}</a><MagicAtmosphere label={d.motion} locale={locale}/>
 <section className="hero" id="accueil">
 <Image className="hero__image" src="/assets/castle-enchanted.png" alt="" fill priority sizes="100vw"/><div className="hero__veil"/>
 <SiteHeader locale={locale} copy={c}/>
 <div className="hero__content"><h1>{c.hero.titleFirst}</h1><div className="ornament" aria-hidden="true"/><p>{d.tagline}</p><a className="gold-button" href="#jeu">{d.discover}<span aria-hidden="true">›</span></a><ReleaseCountdown locale={locale}/></div>
 <HeroFilm locale={locale}/>
 </section>
 <main className="enchanted">
 <section className="introduction section-wrap" id="jeu"><div className="intro-copy"><h2>{d.intro}</h2><div className="ornament" aria-hidden="true"/><p>{d.body}</p></div><div className="intro-art"><Image src="/assets/forest.jpg" alt={c.world.items[1].alt} fill sizes="(max-width:700px) 100vw, 65vw"/></div></section>
 <GameplaySection copy={c.gameplay} design={d}/><HeroRoster copy={c.heroes} title={d.heroes}/><WorldSection copy={c.world} title={d.world} subtitle={d.worldBody}/>
 <section className="quest" aria-labelledby="quest-title"><Image src="/assets/quest-path.png" alt="" fill sizes="100vw" className="quest__image"/><div className="quest__content"><h2 id="quest-title">{d.quest}</h2><a className="gold-button" href="#gameplay">{d.discover}<span aria-hidden="true">›</span></a></div><Image src="/assets/logo-transparent.png" alt="FORSAKEN" width={1679} height={937} className="quest__logo"/></section>
 </main>
 <footer className="site-footer"><nav aria-label={c.ui.navigation}><a href="#accueil">{d.home}</a><a href="#jeu">{c.nav.game}</a><a href="#heros">{c.nav.heroes}</a><a href="#univers">{c.nav.world}</a><a href="#gameplay">{c.nav.gameplay}</a></nav><p>{c.footer.description}</p><small>© {new Date().getFullYear()} FORSAKEN</small></footer>
 </div>;
}


