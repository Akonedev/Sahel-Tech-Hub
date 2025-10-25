#!/bin/bash

# ============================================
# 🌍 Sahel Tech Hub - Script de Démarrage
# ============================================

set -e

echo "╔══════════════════════════════════════════════════════════════╗"
echo "║            🌍 SAHEL TECH HUB 🌍                              ║"
echo "║        Démarrage de l'application...                         ║"
echo "╚══════════════════════════════════════════════════════════════╝"
echo ""

# Vérifier si Docker est installé
if ! command -v docker &> /dev/null; then
    echo "❌ Docker n'est pas installé!"
    echo "📦 Installez Docker: https://docs.docker.com/get-docker/"
    exit 1
fi

echo "✅ Docker détecté"

# Vérifier si Docker Compose est disponible
if ! docker compose version &> /dev/null; then
    echo "❌ Docker Compose n'est pas disponible!"
    exit 1
fi

echo "✅ Docker Compose détecté"
echo ""

# Arrêter les containers existants
echo "🛑 Arrêt des containers existants..."
docker compose down 2>/dev/null || true

echo ""
echo "🏗️  Construction et démarrage des containers..."
echo "   (Cela peut prendre quelques minutes la première fois)"
echo ""

# Build et démarrage
docker compose up --build -d

# Attendre que l'application soit prête
echo ""
echo "⏳ Attente du démarrage de l'application..."
sleep 15

# Vérifier que l'application répond
if curl -s http://localhost:34500 > /dev/null; then
    echo ""
    echo "╔══════════════════════════════════════════════════════════════╗"
    echo "║                    ✅ SUCCÈS !                               ║"
    echo "╚══════════════════════════════════════════════════════════════╝"
    echo ""
    echo "🌐 Application disponible sur : http://localhost:34500"
    echo ""
    echo "📊 Services actifs:"
    echo "   • Application web : http://localhost:34500"
    echo "   • PostgreSQL      : localhost:34532"
    echo "   • Redis           : localhost:34579"
    echo ""
    echo "📝 Commandes utiles:"
    echo "   • Voir les logs    : docker compose logs -f sahel-tech-hub"
    echo "   • Arrêter          : docker compose down"
    echo "   • Redémarrer       : docker compose restart"
    echo "   • Rebuild          : docker compose up --build -d"
    echo ""
    echo "🎉 Bon développement !"
    echo ""
else
    echo ""
    echo "⚠️  L'application met un peu plus de temps à démarrer..."
    echo "   Vérifiez avec: docker compose logs -f sahel-tech-hub"
    echo ""
fi
