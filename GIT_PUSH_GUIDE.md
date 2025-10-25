# Guide pour Pousser le Code vers GitHub

## 🔐 Problème Actuel
Les tokens fournis semblent invalides ou expirés. Voici les solutions :

## ✅ Solution 1 : Générer un Nouveau Token (Recommandé)

### Étape 1 : Créer un Personal Access Token
1. Aller sur GitHub : https://github.com/settings/tokens
2. Cliquer sur "Generate new token" → "Generate new token (classic)"
3. Donner un nom : "Sahel Tech Hub Deploy"
4. Cocher les permissions :
   - ✅ `repo` (accès complet aux repositories)
   - ✅ `workflow` (si vous utilisez GitHub Actions)
5. Cliquer sur "Generate token"
6. **COPIER LE TOKEN** (il ne sera plus visible après)

### Étape 2 : Utiliser le Token
```bash
cd /home/akone/Documents/Dev/CRMERP/Ever/sahel-tech-hub

# Méthode 1 : Avec le token dans l'URL
git remote set-url origin https://VOTRE_TOKEN@github.com/Akonedev/Sahel-Tech-Hub.git
git push origin main

# Méthode 2 : Avec git credential helper
git config credential.helper store
git push origin main
# Entrer le token quand demandé
```

## ✅ Solution 2 : Utiliser SSH (Plus Sécurisé)

### Étape 1 : Générer une Clé SSH
```bash
ssh-keygen -t ed25519 -C "votre-email@example.com"
# Appuyer sur Entrée pour accepter l'emplacement par défaut
# Choisir un mot de passe (optionnel)
```

### Étape 2 : Ajouter la Clé à GitHub
```bash
# Copier la clé publique
cat ~/.ssh/id_ed25519.pub

# Aller sur GitHub : https://github.com/settings/keys
# Cliquer sur "New SSH key"
# Coller la clé et sauvegarder
```

### Étape 3 : Configurer Git pour SSH
```bash
cd /home/akone/Documents/Dev/CRMERP/Ever/sahel-tech-hub
git remote set-url origin git@github.com:Akonedev/Sahel-Tech-Hub.git
git push origin main
```

## 📤 Commandes Rapides de Push

### Push Initial
```bash
cd /home/akone/Documents/Dev/CRMERP/Ever/sahel-tech-hub
git add -A
git commit -m "Site vitrine Sahel Tech Hub complet avec animations"
git branch -M main
git push -u origin main
```

### Push de Mises à Jour
```bash
git add -A
git commit -m "Votre message de commit"
git push origin main
```

## 🔍 Vérifier l'État Git

```bash
# Voir les modifications
git status

# Voir l'historique
git log --oneline -10

# Voir le remote configuré
git remote -v
```

## 🆘 En Cas de Problème

### Erreur "Authentication failed"
- Le token est invalide/expiré → Générer un nouveau token
- Les permissions sont insuffisantes → Vérifier les scopes du token

### Erreur "Repository not found"
- Vérifier que le repository existe sur GitHub
- Vérifier que vous avez accès au repository
- Vérifier l'URL : https://github.com/Akonedev/Sahel-Tech-Hub

### Forcer un Push (Attention !)
```bash
# ⚠️ Uniquement si vous êtes sûr
git push -f origin main
```

## 📊 État Actuel du Code

```
✅ Dernières modifications enregistrées localement
✅ Application fonctionnelle sur Docker (port 34500)
✅ Toutes les améliorations implémentées
⏳ En attente de push vers GitHub
```

## 🎯 Prochaine Action

1. **Générer un nouveau token GitHub** avec les permissions `repo`
2. **Exécuter** :
   ```bash
   cd /home/akone/Documents/Dev/CRMERP/Ever/sahel-tech-hub
   git remote set-url origin https://NOUVEAU_TOKEN@github.com/Akonedev/Sahel-Tech-Hub.git
   git push origin main
   ```

---

**Note** : Une fois le code poussé, il sera disponible sur :
https://github.com/Akonedev/Sahel-Tech-Hub
