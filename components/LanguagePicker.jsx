import Link from "next/link";
import { languages, locales } from "../lib/content";

export default function LanguagePicker({ locale, labels, ariaLabel }) {
  return (
    <details className="language-picker">
      <summary aria-label={ariaLabel}>
        <span>{languages[locale].short}</span>
      </summary>
      <div className="language-picker__menu">
        {locales.map((code) => (
          <Link
            key={code}
            href={`/${code}`}
            hrefLang={code}
            lang={code}
            aria-current={code === locale ? "page" : undefined}
          >
            <span>{labels[code]}</span>
            <small>{languages[code].short}</small>
          </Link>
        ))}
      </div>
    </details>
  );
}
