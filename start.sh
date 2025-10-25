#!/bin/bash

# Script de démarrage rapide pour Sahel Tech Hub

echo "🚀 Sahel Tech Hub - Démarrage"
echo "=============================="
echo ""

# Vérifier si Node.js est installé
if ! command -v node &> /dev/null; then
    echo "❌ Node.js n'est pas installé"
    echo "Installez Node.js depuis https://nodejs.org"
    exit 1
fi

echo "✅ Node.js $(node --version) détecté"

# Vérifier si les dépendances sont installées
if [ ! -d "node_modules" ]; then
    echo "📦 Installation des dépendances..."
    npm install
fi

echo ""
echo "🎯 Choisissez une option:"
echo "1) Lancer en mode développement (port 34500)"
echo "2) Build de production"
echo "3) Démarrer avec Docker"
echo "4) Quitter"
echo ""
read -p "Votre choix (1-4): " choice

case $choice in
    1)
        echo "🔥 Démarrage du serveur de développement..."
        npm run dev
        ;;
    2)
        echo "🏗️  Build de production..."
        npm run build
        echo "✅ Build terminé!"
        echo "Pour démarrer: npm start"
        ;;
    3)
        if ! command -v docker &> /dev/null; then
            echo "❌ Docker n'est pas installé"
            exit 1
        fi
        echo "🐳 Démarrage avec Docker..."
        docker-compose up -d
        echo "✅ Services démarrés!"
        echo "Application: http://localhost:34500"
        echo "PostgreSQL: localhost:34532"
        echo "Redis: localhost:34579"
        ;;
    4)
        echo "👋 Au revoir!"
        exit 0
        ;;
    *)
        echo "❌ Choix invalide"
        exit 1
        ;;
esac
