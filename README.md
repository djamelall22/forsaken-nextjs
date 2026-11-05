# FORSAKEN

Les vidéos sont suivies avec Git LFS. Après un clonage du dépôt, exécuter `git lfs install` puis `git lfs pull` avant de démarrer le site. Installer les dépendances avec `npm ci`.

Site vitrine Next.js suivant la maquette sombre approuvée `design-reference-dark.png`.

## Démarrage

Depuis `C:\Users\djame\Desktop\nounou1\forsaken-nextjs` :

```powershell
npm run build
npm run start -- --hostname 127.0.0.1 --port 3002
```

Ouvrir http://127.0.0.1:3002/fr.

Pour modifier le site avec rechargement automatique :

```powershell
npm run dev -- --hostname 127.0.0.1 --port 3003
```

## Contenu

- Français, anglais, espagnol, coréen et japonais : `/fr`, `/en`, `/es`, `/ko`, `/ja`.
- Textes : `lib/content.js` et `lib/design-copy.js`.
- Images et vidéos du projet : `public/assets`.
- Logo PNG transparent, château original, six portraits, trois environnements, deux vidéos.
- Particules lumineuses et mouvement lent de la forêt, désactivables ; respect de la préférence système de réduction des animations.
- Mise en page adaptée aux téléphones et aux ordinateurs.

Les boutons mènent aux sections du site. Aucun lien commercial, réseau social ou inscription fictive. Le site est local et n’a pas encore été publié sur Internet.

La sortie de compilation utilise `.next-site` afin d’isoler cette version des anciens serveurs de développement.

## Correction de la maquette et film promotionnel

La direction sombre a été rapprochée de `design-reference-dark.png` : Cormorant Garamond locale, feuillages, portraits en buste, château bleu nuit et chemin féerique. Le client a apprécié cette correction avant de demander la vidéo visible dans le hero.

Le film `public/assets/promotion.mp4` est une copie de `Nouveau dossier/1104.mp4` (1 min 44). Il joue sans son dans le hero et offre les commandes natives. Le bouton du header ouvre également un lecteur agrandi. L’arrêt des animations arrête aussi la lecture du hero. Aucune vidéo ne démarre avec le son.

Assets créés avec l’outil ImageGen intégré à partir de la maquette validée : `castle-enchanted.png`, `hero-portraits.png`, `enchanted-frame.png` et `quest-path.png`, tous dans `public/assets`. Les prompts complets sont sauvegardés à côté : `castle-enchanted.prompt.txt`, `hero-portraits.prompt.txt` et `forest-assets-prompts.txt`.

Captures et comparaison : `revision-desktop.png`, `revision-mobile.png`, `hero-film-preview.png`, `design-comparison.png`. Compte rendu : `design-qa.md`.

La date de sortie est définie dans `lib/release.js` : 4 janvier 2027 à minuit (Paris). Le compte à rebours est affiché dans le hero et traduit dans les cinq langues.
