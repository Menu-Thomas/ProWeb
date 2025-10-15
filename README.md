# Thomas Menu - Site Web Professionnel

Site web moderne et responsive pour un expert en consulting et prototypage en technologies informatiques et IoT. Développement web, mobile et Unity.

## 🚀 Technologies utilisées

- **Next.js 15.5** - Framework React pour applications web
- **TypeScript** - Langage de programmation typé
- **Tailwind CSS** - Framework CSS utilitaire
- **Lucide React** - Icônes modernes
- **ESLint** - Linter pour JavaScript/TypeScript

## 📋 Fonctionnalités

### Pages principales
- **Accueil** - Présentation de l'entreprise et services
- **Services** - Détail des prestations proposées
- **Tarifs** - Grilles tarifaires et forfaits
- **Contact** - Formulaire de contact et informations

### Pages légales
- **Mentions légales**
- **Politique de confidentialité**

### Caractéristiques techniques
- ✅ Design responsive (mobile, tablette, desktop)
- ✅ Optimisation SEO avec métadonnées
- ✅ Navigation intuitive avec menu mobile
- ✅ Formulaire de contact fonctionnel
- ✅ Animations et transitions CSS
- ✅ Code TypeScript strict
- ✅ Build optimisé pour la production

## 🛠️ Installation et développement

### Prérequis
- Node.js 18.x ou supérieur
- npm ou yarn

### Installation des dépendances
```bash
npm install
```

### Lancement en mode développement
```bash
npm run dev
```
Le site sera accessible sur [http://localhost:3000](http://localhost:3000)

## 🌐 Déploiement sur Netlify

### Configuration automatique
Ce projet est préconfiguré pour Netlify avec :
- ✅ Export statique Next.js configuré
- ✅ Fichier `netlify.toml` avec paramètres de build
- ✅ Headers de sécurité configurés
- ✅ Redirections automatiques
- ✅ Cache optimisé pour les assets

### Étapes de déploiement

#### Option 1: Via Git (Recommandé)
1. Pousser votre code sur GitHub/GitLab/Bitbucket
2. Connecter le repository à Netlify
3. Netlify détectera automatiquement la configuration
4. Le déploiement se lancera automatiquement

#### Option 2: Drag & Drop
1. Construire le projet localement :
```bash
npm run export
```
2. Uploader le dossier `out/` sur Netlify

### Variables d'environnement (si nécessaire)
Aucune variable d'environnement requise pour ce projet statique.

### URL de déploiement
Après déploiement, votre site sera accessible via :
- URL temporaire : `https://nom-du-site.netlify.app`
- Domaine personnalisé : Configurable dans les paramètres Netlify

### Optimisations incluses
- 🚀 Build statique optimisé
- 📱 PWA-ready (Service Worker peut être ajouté)
- 🔒 Headers de sécurité HTTPS
- ⚡ Cache des assets configuré
- 🤖 Robots.txt et sitemap.xml
- 📊 SEO optimisé

### Build de production
```bash
npm run build
```

### Démarrage du serveur de production
```bash
npm run start
```

## 📁 Structure du projet

```
proweb/
├── src/
│   ├── app/                    # Pages Next.js (App Router)
│   │   ├── contact/           # Page contact
│   │   ├── services/          # Page services
│   │   ├── tarifs/            # Page tarifs
│   │   ├── mentions-legales/  # Mentions légales
│   │   ├── politique-confidentialite/ # Politique de confidentialité
│   │   ├── globals.css        # Styles globaux
│   │   ├── layout.tsx         # Layout principal
│   │   └── page.tsx          # Page d'accueil
│   └── components/            # Composants réutilisables
│       ├── Header.tsx         # En-tête avec navigation
│       └── Footer.tsx         # Pied de page
├── public/                    # Fichiers statiques
├── .github/                   # Configuration GitHub
├── next.config.js             # Configuration Next.js
├── tailwind.config.js         # Configuration Tailwind
├── tsconfig.json             # Configuration TypeScript
└── package.json              # Dépendances et scripts
```

## 🎨 Design et contenu

### Palette de couleurs
- **Primary** : Bleus (#3b82f6, #2563eb, #1d4ed8)
- **Secondary** : Grises (#475569, #334155, #1e293b)
- **Accent** : Couleurs d'état (vert, rouge, orange)

### Contenu personnalisable
Le contenu actuel utilise des données d'exemple. Pour personnaliser :

1. **Informations de contact** : Modifier dans `src/components/Footer.tsx` et `src/app/contact/page.tsx`
2. **Services** : Éditer le tableau `services` dans `src/app/services/page.tsx`
3. **Tarifs** : Modifier les tableaux `pricingPlans` et `services` dans `src/app/tarifs/page.tsx`
4. **Mentions légales** : Compléter les informations dans `src/app/mentions-legales/page.tsx`

## 🚀 Déploiement

### Déploiement sur Vercel (Recommandé)
1. Connecter le projet à votre compte Vercel
2. Le déploiement se fait automatiquement à chaque push

### Déploiement sur Netlify
1. Build : `npm run build`
2. Dossier de publication : `.next`

### Déploiement sur serveur classique
1. Exécuter `npm run build`
2. Copier les fichiers générés
3. Configurer le serveur web pour servir les fichiers statiques

## 📧 Configuration du formulaire de contact

Le formulaire de contact est actuellement configuré avec une simulation. Pour le rendre fonctionnel :

1. **Solution SaaS** : Intégrer un service comme Formspree, Netlify Forms, ou EmailJS
2. **API personnalisée** : Créer une route API Next.js pour traiter les soumissions
3. **Backend externe** : Connecter à un service d'email existant

## 🔧 Personnalisation

### Modifier les métadonnées SEO
Éditez le fichier `src/app/layout.tsx` pour personnaliser :
- Titre de la page
- Description
- Mots-clés
- Open Graph tags

### Ajouter de nouvelles pages
1. Créer un nouveau dossier dans `src/app/`
2. Ajouter un fichier `page.tsx`
3. Mettre à jour la navigation dans `src/components/Header.tsx`

### Personnaliser les styles
- Modifier `tailwind.config.js` pour les couleurs et thèmes
- Éditer `src/app/globals.css` pour les styles personnalisés

## 📱 Responsive Design

Le site est entièrement responsive avec des breakpoints :
- **Mobile** : < 768px
- **Tablette** : 768px - 1024px
- **Desktop** : > 1024px

## ⚡ Performances

Le site est optimisé pour les performances :
- Images optimisées automatiquement par Next.js
- Code splitting automatique
- Lazy loading des composants
- CSS tree-shaking avec Tailwind

## 🔒 Sécurité et conformité

- Respect du RGPD
- Pas de cookies de tracking
- Formulaires sécurisés
- Headers de sécurité configurés

## 📞 Support

Pour toute question ou personnalisation, contactez l'équipe de développement.

---

**Thomas Menu** - Site web professionnel prêt pour le déploiement 🚀
