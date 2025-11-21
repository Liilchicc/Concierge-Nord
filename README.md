# Le Concierge du Nord – Site statique premium

Site vitrine luxe et minimaliste pour la conciergerie Airbnb **Le Concierge du Nord**. Tout est prêt pour un déploiement gratuit sur Vercel (ou Render) via un dépôt GitHub synchronisé.

## Arborescence
```
.
├── assets/                  # Placeholders (logo, hero, galerie, plan, contact)
├── public/                  # Dossier disponible pour des assets publics supplémentaires
├── src/
│   ├── main.js              # JS (Swiper, GSAP, interactions)
│   └── styles.css           # Styles luxe noir/or
├── index.html               # Page principale
└── package.json             # Métadonnées projet (optionnel pour Vercel/Render)
```

## Développement local
Aucune dépendance build n'est requise : ouvrez `index.html` dans votre navigateur ou servez le dossier via un serveur statique.

```bash
# Optionnel : lancer un serveur statique (ex. avec Python)
python -m http.server 8000
```

## Déploiement gratuit sur Vercel (recommandé)
1. Pousser ce dossier sur GitHub (`git init`, `git add .`, `git commit -m "init"`, puis créer un repo et pousser).
2. Sur [vercel.com](https://vercel.com), cliquer sur **Add New Project** > **Import Git Repository** et sélectionner le dépôt.
3. **Framework Preset** : `Other`.  
   **Root Directory** : `/` (racine).  
   **Build Command** : `npm run build` (laisser vide) ou « None ».  
   **Output Directory** : `/` (racine) ou `public` si vous y déplacez les fichiers.
4. Lancer le déploiement. Vercel détecte un site statique et le publie gratuitement.

## Déploiement sur Render (alternative)
1. Pousser le code sur GitHub.
2. Sur [render.com](https://render.com), créer un **Static Site** et connecter le dépôt.
3. **Root Directory** : `/` (ou `public` si vous y déplacez `index.html`).
4. **Build Command** : vide.  
   **Publish Directory** : `/` (ou `public`).
5. Render construit et déploie automatiquement à chaque push.

## Ajout de vos médias
- Remplacez les fichiers `assets/*placeholder*.svg` par vos visuels (mêmes noms de fichiers pour éviter d'éditer le HTML).
- Ajoutez votre logo à la place de `assets/logo-placeholder.svg`.
- Ajoutez vos photos héro, galerie et visuels plan/contact en gardant les noms actuels ou mettez à jour les chemins dans `index.html`.

## Personnalisation rapide
- Couleurs : ajustez les variables dans `src/styles.css` (`--black`, `--dark`, `--gold`).
- Polices : Montserrat / Poppins / Inter via Google Fonts en tête de `styles.css`.
- Animations : GSAP + ScrollTrigger déjà chargés en CDN, configuration dans `src/main.js`.

## Maintenance
- Toutes les dépendances sont chargées via CDN (Swiper, GSAP). Aucun build nécessaire.
- Gardez les IDs de sections (`#hero`, `#services`, etc.) pour la navigation ancrée et les CTA.
