import Image from "next/image";
import Link from "next/link";
import LanguagePicker from "./LanguagePicker";
import PromoFilm from "./PromoFilm";

function NavLinks({ locale, labels }) {
  return (
    <>
      <a href="#jeu">{labels.game}</a>
      <a href="#gameplay">{labels.gameplay}</a>
      <a href="#heros">{labels.heroes}</a>
      <a href="#univers">{labels.world}</a>
    </>
  );
}

export default function SiteHeader({ locale, copy }) {
  return (
    <header className="site-header">
      <Link className="brand" href={`/${locale}`} aria-label="FORSAKEN - home">
        <Image
          className="brand__logo"
          src="/assets/logo-transparent.png"
          width={1679}
          height={937}
          alt="FORSAKEN"
          priority
        />
      </Link>

      <nav className="primary-nav" aria-label={copy.ui.navigation}>
        <NavLinks locale={locale} labels={copy.nav} />
      </nav>

      <div className="header-actions">
        <LanguagePicker locale={locale} labels={copy.languages} ariaLabel={copy.ui.language} />
        <PromoFilm locale={locale} />
        <details className="mobile-nav">
          <summary>{copy.ui.menu}</summary>
          <nav className="mobile-nav__panel" aria-label={copy.ui.navigation}>
            <NavLinks locale={locale} labels={copy.nav} />
          </nav>
        </details>
      </div>
    </header>
  );
}
