# 🚀 Guide de Démarrage Rapide - Sahel Tech Hub

## ⚡ Installation en 3 Étapes

### 1️⃣ Installation des Dépendances
```bash
npm install
```

### 2️⃣ Lancement en Développement
```bash
npm run dev
```

### 3️⃣ Ouvrir dans le Navigateur
Accédez à: **http://localhost:34500**

---

## 🐳 Alternative : Démarrage avec Docker

```bash
# Tout en une commande !
docker-compose up -d

# Accéder à l'application
# http://localhost:34500
```

---

## 📋 Scripts Disponibles

| Commande | Description |
|----------|-------------|
| `npm run dev` | Démarrage développement (port 34500) |
| `npm run build` | Build de production |
| `npm start` | Démarrer en production |
| `npm run lint` | Vérifier le code |
| `./start.sh` | Script interactif de démarrage |

---

## 🎯 Ce qui est Prêt

✅ **Site Vitrine Complet**
- Hero section avec animations
- 12 services IT détaillés
- 4 solutions clé en main
- 9 programmes de formation
- Section incubateur
- Formulaire de contact

✅ **Technologies Modernes**
- Next.js 16 + React 19
- TypeScript + Tailwind CSS 4
- Shadcn UI + Framer Motion
- Configuration Docker complète

✅ **SEO Optimisé**
- Métadonnées complètes
- Sitemap.xml généré
- Robots.txt configuré
- OpenGraph & Twitter Cards

✅ **Documentation**
- README.md
- MARKET_ANALYSIS.md
- DEPLOYMENT.md
- DEVELOPMENT.md
- PROJECT_SUMMARY.md

---

## 🔧 Configuration

### Variables d'Environnement (Optionnel)
```bash
cp .env.example .env
# Modifier les valeurs dans .env
```

### Ports Utilisés
- **34500** : Application Next.js
- **34532** : PostgreSQL
- **34579** : Redis

---

## 🌐 Accès aux Services

| Service | URL |
|---------|-----|
| Application | http://localhost:34500 |
| PostgreSQL | localhost:34532 |
| Redis | localhost:34579 |

---

## 📚 Documentation Détaillée

Consultez les guides complets :
- `README.md` - Vue d'ensemble
- `PROJECT_SUMMARY.md` - Résumé complet
- `DEPLOYMENT.md` - Guide Docker
- `DEVELOPMENT.md` - Bonnes pratiques
- `MARKET_ANALYSIS.md` - Analyse de marché

---

## 🐛 Résolution de Problèmes

### Port déjà utilisé ?
```bash
# Changer le port dans package.json
"dev": "next dev -p 34501"
```

### Erreur de dépendances ?
```bash
rm -rf node_modules package-lock.json
npm install
```

### Docker ne démarre pas ?
```bash
docker-compose down
docker-compose up -d --build
```

---

## 📞 Support

- Email: contact@saheltechhub.com
- Documentation dans le projet
- Guides détaillés fournis

---

## ✨ Prochaines Étapes

1. ✅ **Site fonctionnel** → Prêt !
2. 🔄 **Personnalisation** → Ajouter votre contenu
3. 🔄 **Backend API** → Ajouter les fonctionnalités
4. 🔄 **Déploiement** → Mettre en ligne

---

**Créé avec ❤️ pour le développement du Sahel**
