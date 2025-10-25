# 🔑 Guide de Création d'un Token GitHub

## Problème Rencontré
Le token actuel n'a pas les permissions nécessaires pour pousser le code sur le repository.

## Solution : Créer un Nouveau Token GitHub

### Étapes à suivre :

1. **Aller sur GitHub.com**
   - Connectez-vous à votre compte GitHub
   
2. **Accéder aux Settings**
   - Cliquez sur votre photo de profil (en haut à droite)
   - Cliquez sur "Settings"

3. **Accéder aux Developer Settings**
   - Scrollez tout en bas dans le menu de gauche
   - Cliquez sur "Developer settings"

4. **Créer un Personal Access Token**
   - Cliquez sur "Personal access tokens"
   - Cliquez sur "Tokens (classic)"
   - Cliquez sur "Generate new token" → "Generate new token (classic)"

5. **Configurer le Token**
   - **Note** : "Sahel Tech Hub Push Access"
   - **Expiration** : Choisissez la durée (90 jours recommandé)
   - **Scopes** : Cochez les permissions suivantes :
     - ✅ **repo** (toutes les sous-options)
       - repo:status
       - repo_deployment
       - public_repo
       - repo:invite
       - security_events
     - ✅ **workflow** (si vous utilisez GitHub Actions)
     - ✅ **write:packages** (optionnel)

6. **Générer et Copier**
   - Cliquez sur "Generate token" en bas
   - ⚠️ **IMPORTANT** : Copiez le token immédiatement, vous ne pourrez plus le voir !

---

## Comment Utiliser le Nouveau Token

Une fois que vous avez le nouveau token, exécutez ces commandes :

```bash
cd /home/akone/Documents/Dev/CRMERP/Ever/sahel-tech-hub

# Remplacez YOUR_NEW_TOKEN par le token que vous venez de créer
git remote set-url origin https://Akonedev:YOUR_NEW_TOKEN@github.com/Akonedev/Sahel-Tech-Hub.git

# Poussez le code
git push -u origin main
```

---

## Alternative : Utiliser SSH (Recommandé pour long terme)

### 1. Générer une clé SSH
```bash
ssh-keygen -t ed25519 -C "votre-email@example.com"
# Appuyez sur Enter pour accepter l'emplacement par défaut
# Vous pouvez laisser le mot de passe vide pour plus de simplicité
```

### 2. Copier la clé publique
```bash
cat ~/.ssh/id_ed25519.pub
# Copiez tout le contenu affiché
```

### 3. Ajouter la clé SSH à GitHub
- Allez sur GitHub.com → Settings → SSH and GPG keys
- Cliquez sur "New SSH key"
- Collez la clé publique
- Donnez-lui un nom (ex: "Mon PC Sahel")

### 4. Configurer Git pour utiliser SSH
```bash
cd /home/akone/Documents/Dev/CRMERP/Ever/sahel-tech-hub
git remote set-url origin git@github.com:Akonedev/Sahel-Tech-Hub.git
git push -u origin main
```

---

## Vérification du Repository

Une fois poussé, votre code sera visible sur :
**https://github.com/Akonedev/Sahel-Tech-Hub**

---

## ⚠️ Sécurité des Tokens

- **Ne partagez JAMAIS vos tokens**
- Ne les commitez pas dans le code
- Supprimez les anciens tokens non utilisés
- Utilisez des tokens avec les permissions minimales nécessaires
