# Design QA — correction et film promotionnel

## Résultat

final result: passed

Cible : maquette `design-reference-dark.png`, puis direction corrigée explicitement appréciée par le client et ajout demandé d’un lecteur promotionnel visible dans le hero. Il ne s’agit pas d’une reproduction pixel par pixel : le film dans le hero est un changement explicite demandé après validation de la direction corrigée.

## Preuves

- `design-comparison.png` : référence à gauche, version finale à droite, largeur normalisée de 1024 px par panneau.
- `revision-desktop.png` : page complète finale.
- `revision-mobile.png` : rendu mobile 390 × 844.
- `hero-film-preview.png` : vidéo visible dans l’accueil.
- Référence 1024 × 1536 ; capture finale normalisée 1024 × 1598. Les contrôles fonctionnels et les descriptions originales expliquent la différence résiduelle de hauteur.

## Corrections des écarts initiaux

- P1 : ancien château gris et recadrage trop serré. Remplacé par une scène extraite/recréée avec ImageGen à partir de la maquette, palette bleu nuit et or, pont et forteresse reconnaissables.
- P1 : absence des feuillages et du chemin féerique. Ajout de fonds de bordure et de pied de page générés à partir de la référence.
- P1 : portraits sur fonds gris et cadrages en pied. Remplacés par des bustes cohérents avec la maquette sur fond sombre.
- P2 : page trop étirée et typographie trop massive. Proportions rapprochées de la référence, police Cormorant Garamond chargée localement, titres et espacements corrigés.
- P2 : lecteur visible dépassant de la section hero lors du premier contrôle. Largeur et position corrigées ; film à 336 px, bas du hero à 350 px au viewport 1024.
- P2 : image de gameplay tronquée. Cadrage modifié afin de montrer toute l’interface du combat.

## Surfaces de fidélité

- Typographie : titres sérif ivoire, italiques dans le hero et la quête, hiérarchie rapprochée de la référence ; police locale sans requête vers Google.
- Rythme : mêmes sections, même ordre, six portraits sur ordinateur et trois environnements ; adaptation en deux colonnes de portraits sur téléphone.
- Couleurs : bleu-vert nocturne, or vieilli, ivoire, lumières chaudes ; aucune ancienne section beige ou rouge.
- Images : assets générés inspectés, logo transparent, sources utilisateur conservées. Les cryptes restent un original du projet ; aucune source ne correspondait exactement aux arches forestières de la maquette.
- Contenu : noms de classes originaux conservés plutôt que les noms inventés du mock. Pas de wishlist ni de liens sociaux fictifs. Ajout du film explicitement demandé par le client.

## Vérifications fonctionnelles

- Build de production réussi pour FR, EN, ES, KO et JA.
- Cinq pages ouvertes : aucun débordement horizontal, CTA et vidéo contenus dans le hero.
- Film original `1104.mp4`, durée lue 104,42 secondes, dimensions 2560 × 1440.
- Lecture automatique dans le hero observée, sans son ; commandes natives et lecture en boucle.
- Bouton de réduction des animations arrête aussi le film.
- Lecteur agrandi ouvert et fermé sur ordinateur et téléphone ; vidéo du hero suspendue pendant son ouverture.
- Préférence système de réduction des animations prise en compte dans le code ; contrôle OS non changé pendant le test.
- Pas d’erreur console observée lors des contrôles du lecteur.
- Dernier aperçu laissé ouvert en français sur http://127.0.0.1:3002/fr.

## Limites

Contrôle mobile par émulation de largeur, pas sur téléphone physique. La lecture complète des 104 secondes n’a pas été visionnée. Traductions non révisées par un linguiste. La vidéo originale est conservée sans transcodage ; une optimisation du poids pourra précéder la publication publique.

## Mise à jour — hero 90vh et cadre de luxe

Demandes utilisateur : hero à 90 ou 100vh, cadre luxueux autour de la vidéo. Choix appliqué : 90svh (repli 90vh), contenu centré sur ordinateur, empilé sur mobile et extensible si nécessaire.

Vérifié dans le navigateur : 810 px pour une fenêtre de 900 px ; 759,6 px sur mobile pour 844 px. Aucun débordement horizontal mobile, film contenu dans le hero. Lecture active vérifiée. Cadre PNG à alpha transparent posé en surimpression avec pointer-events:none pour préserver les commandes natives.

Captures : `hero-luxury-desktop.png`, `hero-luxury-mobile.png`. Build de production réussi.

Asset : `public/assets/video-luxury-frame.png`, 1672 × 941, alpha vérifié. Généré avec ImageGen intégré. Prompt : cadre vidéo 16:9 transparent, double rail fin en or champagne ancien, coins gravés de feuillages elfiques, petits joyaux turquoise, éclairage doré discret, centre entièrement transparent, sans texte ni scène.

## Compte à rebours de sortie

Échéance demandée « dans deux mois » interprétée depuis le 4 novembre 2026 : 4 janvier 2027 à 00:00 heure de Paris, soit `2027-01-04T00:00:00+01:00`. Configuration centralisée dans `lib/release.js`. Affichage jours/heures/minutes/secondes actualisé chaque seconde, cinq traductions, plancher à zéro après échéance.

Build réussi. Compteur observé dans le navigateur avec secondes décroissantes. Captures `hero-countdown-desktop.png` et `hero-countdown-mobile.png`. Mobile : largeur sans dépassement, section extensible au-delà de 90svh pour contenir titre, compteur et vidéo sans superposition.
