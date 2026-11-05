import "./globals.css";
import "@fontsource/cormorant-garamond/latin-400.css";
import "@fontsource/cormorant-garamond/latin-400-italic.css";
import "@fontsource/cormorant-garamond/latin-500.css";
import "@fontsource/cormorant-garamond/latin-500-italic.css";
import "./reference-refinement.css";

export const metadata = {
  title: {
    default: "FORSAKEN",
    template: "%s | FORSAKEN",
  },
  description:
    "FORSAKEN is a dark fantasy tactical RPG concept. Gather six heroes and master the battlefield, one turn at a time.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
