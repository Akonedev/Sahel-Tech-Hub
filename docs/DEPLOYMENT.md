# Guide de Déploiement Docker - Sahel Tech Hub

## 🐳 Déploiement avec Docker Compose

### Prérequis
- Docker installé (version 20.10+)
- Docker Compose installé (version 2.0+)
- 2GB RAM minimum
- 10GB d'espace disque

### 🚀 Démarrage Rapide

```bash
# 1. Cloner le projet
git clone <repository-url>
cd sahel-tech-hub

# 2. Créer le fichier .env (optionnel pour le dev)
cp .env.example .env

# 3. Lancer tous les services
docker-compose up -d

# 4. Voir les logs
docker-compose logs -f sahel-tech-hub

# 5. Vérifier les services
docker-compose ps
```

Le site sera accessible sur: **http://localhost:34500**

### 📦 Services Inclus

#### 1. **sahel-tech-hub** (Port 34500)
Application Next.js principale
- Framework: Next.js 16
- Node: 20-alpine
- Auto-restart activé

#### 2. **postgres** (Port 34532)
Base de données PostgreSQL
- Version: 16-alpine
- Database: sahel_tech_hub
- User: sahel
- Password: sahel2024 (à changer en production!)

#### 3. **redis** (Port 34579)
Cache et sessions
- Version: 7-alpine
- Persistance: activée

### 🔧 Configuration

#### Variables d'Environnement

Créer un fichier `.env` à la racine:

```env
# Application
NODE_ENV=production
NEXT_PUBLIC_APP_URL=https://votredomaine.com
PORT=34500

# Database
DATABASE_URL=postgresql://sahel:sahel2024@postgres:5432/sahel_tech_hub

# Redis
REDIS_URL=redis://redis:6379

# Email
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=contact@votredomaine.com
SMTP_PASSWORD=votre_password
SMTP_FROM=contact@votredomaine.com

# Sécurité
NEXTAUTH_SECRET=changez-ce-secret-en-production
NEXTAUTH_URL=https://votredomaine.com
```

### 🛠️ Commandes Utiles

#### Gestion des Services

```bash
# Démarrer tous les services
docker-compose up -d

# Arrêter tous les services
docker-compose down

# Redémarrer un service spécifique
docker-compose restart sahel-tech-hub

# Voir les logs
docker-compose logs -f

# Voir les logs d'un service spécifique
docker-compose logs -f sahel-tech-hub

# Rebuilder après modification du code
docker-compose up -d --build

# Voir l'état des services
docker-compose ps

# Exécuter une commande dans un conteneur
docker-compose exec sahel-tech-hub sh
```

#### Gestion de la Base de Données

```bash
# Connexion à PostgreSQL
docker-compose exec postgres psql -U sahel -d sahel_tech_hub

# Backup de la base
docker-compose exec postgres pg_dump -U sahel sahel_tech_hub > backup.sql

# Restaurer un backup
docker-compose exec -T postgres psql -U sahel sahel_tech_hub < backup.sql

# Voir les tables
docker-compose exec postgres psql -U sahel -d sahel_tech_hub -c "\dt"
```

#### Gestion Redis

```bash
# Connexion à Redis CLI
docker-compose exec redis redis-cli

# Vider le cache
docker-compose exec redis redis-cli FLUSHALL

# Voir les clés
docker-compose exec redis redis-cli KEYS '*'
```

### 📊 Monitoring

#### Vérifier la Santé des Services

```bash
# Statut des conteneurs
docker-compose ps

# Utilisation des ressources
docker stats

# Logs en temps réel
docker-compose logs -f --tail=100
```

#### Métriques Application

Accéder aux endpoints:
- Application: http://localhost:34500
- PostgreSQL: localhost:34532
- Redis: localhost:34579

### 🔒 Sécurité

#### En Production

1. **Changer les mots de passe**
```yaml
environment:
  - POSTGRES_PASSWORD=mot_de_passe_fort_aleatoire
```

2. **Utiliser des secrets Docker**
```yaml
secrets:
  db_password:
    file: ./secrets/db_password.txt
```

3. **Limiter l'exposition des ports**
```yaml
ports:
  - "127.0.0.1:34532:5432"  # Uniquement localhost
```

4. **Activer SSL/TLS**
Utiliser un reverse proxy (nginx, traefik) avec Let's Encrypt

### 🌐 Déploiement Production

#### Avec Reverse Proxy (Nginx)

1. **Créer nginx.conf**
```nginx
server {
    listen 80;
    server_name votredomaine.com;
    
    location / {
        proxy_pass http://localhost:34500;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

2. **Ajouter SSL avec Let's Encrypt**
```bash
certbot --nginx -d votredomaine.com
```

#### Avec Traefik

Modifier `docker-compose.yml`:
```yaml
services:
  sahel-tech-hub:
    labels:
      - "traefik.enable=true"
      - "traefik.http.routers.sahel.rule=Host(`votredomaine.com`)"
      - "traefik.http.routers.sahel.entrypoints=websecure"
      - "traefik.http.routers.sahel.tls.certresolver=letsencrypt"
```

### 🔄 Mises à Jour

#### Mise à jour de l'application

```bash
# 1. Récupérer les dernières modifications
git pull origin main

# 2. Rebuilder et redémarrer
docker-compose up -d --build sahel-tech-hub

# 3. Vérifier les logs
docker-compose logs -f sahel-tech-hub
```

#### Mise à jour des dépendances

```bash
# Rebuilder complètement
docker-compose down
docker-compose build --no-cache
docker-compose up -d
```

### 💾 Backup et Restauration

#### Backup Automatique

Créer un script `backup.sh`:
```bash
#!/bin/bash
DATE=$(date +%Y%m%d_%H%M%S)
BACKUP_DIR="./backups"

# Créer le dossier de backup
mkdir -p $BACKUP_DIR

# Backup PostgreSQL
docker-compose exec -T postgres pg_dump -U sahel sahel_tech_hub \
  > $BACKUP_DIR/db_$DATE.sql

# Backup Redis (optionnel)
docker-compose exec redis redis-cli BGSAVE

echo "Backup terminé: $BACKUP_DIR/db_$DATE.sql"
```

Rendre exécutable et planifier:
```bash
chmod +x backup.sh
# Ajouter à crontab pour backup quotidien à 2h du matin
0 2 * * * /path/to/backup.sh
```

#### Restauration

```bash
# Restaurer PostgreSQL
docker-compose exec -T postgres psql -U sahel sahel_tech_hub \
  < backups/db_20250101_020000.sql
```

### 🐛 Dépannage

#### Le conteneur ne démarre pas

```bash
# Voir les logs d'erreur
docker-compose logs sahel-tech-hub

# Vérifier la configuration
docker-compose config

# Rebuilder sans cache
docker-compose build --no-cache sahel-tech-hub
```

#### Port déjà utilisé

```bash
# Trouver le processus utilisant le port
sudo lsof -i :34500

# Ou changer le port dans docker-compose.yml
ports:
  - "34501:34500"
```

#### Base de données inaccessible

```bash
# Vérifier que postgres est démarré
docker-compose ps postgres

# Tester la connexion
docker-compose exec sahel-tech-hub \
  pg_isready -h postgres -p 5432 -U sahel
```

#### Manque d'espace disque

```bash
# Nettoyer les images inutilisées
docker system prune -a

# Nettoyer les volumes
docker volume prune
```

### 📈 Optimisation Performance

#### 1. Ressources Docker

Modifier `docker-compose.yml`:
```yaml
services:
  sahel-tech-hub:
    deploy:
      resources:
        limits:
          cpus: '2'
          memory: 2G
        reservations:
          memory: 512M
```

#### 2. Cache Build

Utiliser BuildKit:
```bash
DOCKER_BUILDKIT=1 docker-compose build
```

#### 3. Multi-stage Build

Le Dockerfile utilise déjà le multi-stage build pour optimiser la taille.

### 🔗 Liens Utiles

- Documentation Docker: https://docs.docker.com
- Documentation Docker Compose: https://docs.docker.com/compose
- Next.js Docker: https://nextjs.org/docs/deployment#docker-image
- PostgreSQL Docker: https://hub.docker.com/_/postgres
- Redis Docker: https://hub.docker.com/_/redis

### 🆘 Support

En cas de problème:
1. Vérifier les logs: `docker-compose logs -f`
2. Consulter la documentation
3. Contacter: support@saheltechhub.com
