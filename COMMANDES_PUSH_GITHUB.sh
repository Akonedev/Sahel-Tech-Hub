#!/bin/bash

# ============================================
# 🚀 Script de Push vers GitHub
# Sahel Tech Hub
# ============================================

echo "================================================"
echo "🚀 Push Sahel Tech Hub vers GitHub"
echo "================================================"
echo ""

# Couleurs pour le terminal
GREEN='\033[0;32m'
BLUE='\033[0;34m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Aller dans le dossier du projet
cd /home/akone/Documents/Dev/CRMERP/Ever/sahel-tech-hub

echo -e "${BLUE}📁 Dossier actuel:${NC} $(pwd)"
echo ""

# ============================================
# ÉTAPE 1 : Vérifier l'état de git
# ============================================

echo -e "${BLUE}🔍 Étape 1 : Vérification de l'état git...${NC}"
echo ""

if [ ! -d ".git" ]; then
    echo -e "${RED}❌ Erreur : Ce n'est pas un repository git!${NC}"
    exit 1
fi

echo -e "${GREEN}✅ Repository git trouvé${NC}"
echo ""

# Afficher le statut
echo -e "${BLUE}📊 Statut git :${NC}"
git status --short
echo ""

# Afficher les commits
echo -e "${BLUE}📝 Derniers commits :${NC}"
git log --oneline -3
echo ""

# Afficher le remote actuel
echo -e "${BLUE}🌐 Remote configuré :${NC}"
git remote -v
echo ""

# ============================================
# ÉTAPE 2 : Demander le token
# ============================================

echo -e "${YELLOW}⚠️  IMPORTANT : Vous devez créer un nouveau token GitHub${NC}"
echo ""
echo "Pour créer un token :"
echo "1. Allez sur https://github.com/settings/tokens"
echo "2. Cliquez sur 'Generate new token (classic)'"
echo "3. Cochez TOUTES les options sous 'repo'"
echo "4. Générez et copiez le token"
echo ""
echo -e "${YELLOW}Ne partagez JAMAIS votre token avec quelqu'un !${NC}"
echo ""

read -p "$(echo -e ${BLUE}Avez-vous créé votre token ? \(y/n\) : ${NC})" -n 1 -r
echo ""

if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    echo -e "${RED}❌ Annulé. Créez d'abord votre token.${NC}"
    echo ""
    echo "📖 Consultez le guide : GIT_TOKEN_GUIDE.md"
    exit 1
fi

echo ""
read -p "$(echo -e ${BLUE}Entrez votre token GitHub : ${NC})" TOKEN

if [ -z "$TOKEN" ]; then
    echo -e "${RED}❌ Token vide ! Annulation.${NC}"
    exit 1
fi

# ============================================
# ÉTAPE 3 : Configurer le remote avec le token
# ============================================

echo ""
echo -e "${BLUE}🔧 Étape 2 : Configuration du remote...${NC}"

git remote set-url origin "https://Akonedev:${TOKEN}@github.com/Akonedev/Sahel-Tech-Hub.git"

if [ $? -eq 0 ]; then
    echo -e "${GREEN}✅ Remote configuré avec succès${NC}"
else
    echo -e "${RED}❌ Erreur lors de la configuration du remote${NC}"
    exit 1
fi

echo ""

# ============================================
# ÉTAPE 4 : Vérifier qu'il n'y a rien à commiter
# ============================================

echo -e "${BLUE}🔍 Étape 3 : Vérification des fichiers...${NC}"

if [[ -n $(git status --porcelain) ]]; then
    echo -e "${YELLOW}⚠️  Il y a des modifications non commitées${NC}"
    echo ""
    git status --short
    echo ""
    read -p "$(echo -e ${BLUE}Voulez-vous les commiter maintenant ? \(y/n\) : ${NC})" -n 1 -r
    echo ""
    
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        git add -A
        read -p "$(echo -e ${BLUE}Message du commit : ${NC})" COMMIT_MSG
        git commit -m "$COMMIT_MSG"
        echo -e "${GREEN}✅ Commit créé${NC}"
    else
        echo -e "${YELLOW}⚠️  Continuons sans commiter${NC}"
    fi
else
    echo -e "${GREEN}✅ Aucune modification en attente${NC}"
fi

echo ""

# ============================================
# ÉTAPE 5 : Push vers GitHub
# ============================================

echo -e "${BLUE}🚀 Étape 4 : Push vers GitHub...${NC}"
echo ""

git push -u origin main

if [ $? -eq 0 ]; then
    echo ""
    echo -e "${GREEN}════════════════════════════════════════${NC}"
    echo -e "${GREEN}🎉 SUCCÈS ! Code poussé sur GitHub 🎉${NC}"
    echo -e "${GREEN}════════════════════════════════════════${NC}"
    echo ""
    echo -e "${BLUE}🌐 Votre repository est maintenant disponible sur :${NC}"
    echo -e "   ${GREEN}https://github.com/Akonedev/Sahel-Tech-Hub${NC}"
    echo ""
    echo -e "${BLUE}📊 Statistiques :${NC}"
    git log --oneline | wc -l | xargs -I {} echo "   - {} commits poussés"
    echo ""
else
    echo ""
    echo -e "${RED}════════════════════════════════════════${NC}"
    echo -e "${RED}❌ Échec du push${NC}"
    echo -e "${RED}════════════════════════════════════════${NC}"
    echo ""
    echo -e "${YELLOW}Causes possibles :${NC}"
    echo "1. Token invalide ou expiré"
    echo "2. Token sans permissions 'repo'"
    echo "3. Repository n'existe pas sur GitHub"
    echo "4. Problème de connexion internet"
    echo ""
    echo -e "${BLUE}📖 Solutions :${NC}"
    echo "1. Créez un nouveau token : https://github.com/settings/tokens"
    echo "2. Vérifiez que le repository existe : https://github.com/Akonedev/Sahel-Tech-Hub"
    echo "3. Consultez le guide : GIT_TOKEN_GUIDE.md"
    echo ""
    exit 1
fi

# ============================================
# ÉTAPE 6 : Nettoyage sécurisé
# ============================================

echo -e "${BLUE}🧹 Étape 5 : Nettoyage des credentials...${NC}"

# Retirer le token de l'URL remote pour plus de sécurité
git remote set-url origin "https://github.com/Akonedev/Sahel-Tech-Hub.git"

echo -e "${GREEN}✅ Credentials nettoyés du remote${NC}"
echo ""

# ============================================
# FIN
# ============================================

echo -e "${GREEN}════════════════════════════════════════${NC}"
echo -e "${GREEN}✅ Processus terminé avec succès !${NC}"
echo -e "${GREEN}════════════════════════════════════════${NC}"
echo ""
echo -e "${BLUE}🎯 Prochaines étapes :${NC}"
echo "1. Visitez https://github.com/Akonedev/Sahel-Tech-Hub"
echo "2. Vérifiez que tous les fichiers sont présents"
echo "3. Configurez GitHub Pages si besoin"
echo "4. Ajoutez une description au repository"
echo ""
echo -e "${BLUE}📚 Documentation disponible :${NC}"
echo "   - README.md"
echo "   - QUICKSTART.md"
echo "   - DEVELOPMENT.md"
echo "   - DEPLOYMENT.md"
echo ""
echo -e "${GREEN}Fait avec ❤️  pour l'écosystème tech du Sahel 🌍${NC}"
echo ""
