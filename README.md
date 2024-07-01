# GP3-CyberSecu

Bienvenue sur le projet GP3-CyberSecu. Ce projet a été réalisé dans le cadre du cours de Cybersécurité pour implémenter les recommandations de sécurité sur une application web.

## Collaborateurs

- Louis Floquet
- Maxime Steininger

## Technologies Utilisées

- Frontend : React.js
- Backend : Node.js & Express.js
- Base de Données : SQLite

# Configuration du Backend

Ce guide vous expliquera comment configurer et démarrer le projet backend. Assurez-vous de suivre les étapes ci-dessous pour une configuration correcte.

## Prérequis

Avant de commencer, assurez-vous d'avoir les éléments suivants installés sur votre machine :

- [Node.js](https://nodejs.org/) (version 18 ou supérieure recommandée)
- [npm](https://www.npmjs.com/)

## Installation

1. Clonez le dépôt du projet :

   ```bash
   git clone https://github.com/itsmelouis/GP3-CyberSecu.git
   cd GP3-CyberSecu/backend
   ```

2. Installez les dépendances du projet :

Avec npm :

```bash

npm install
```

3. Configuration de l'Environnement

Dans le répertoire racine du projet backend, vous trouverez un fichier nommé .env.example. Copiez ce fichier et renommez-le en .env :

```bash
cp .env.example .env
```

Ouvrez le fichier .env et configurez les variables d'environnement selon vos besoins. Voici un exemple de ce à quoi cela pourrait ressembler :

```bash
SECRET='jesuissecret'
```

4. Démarrage du serveur

Ensuite, vous n'avez plus qu'à lancer le serveur grâce à la commande :

```bash
npm start
```

# Configuration du FrontEnd

Installez les dépendances du projet :
npm install

# Lancer le projet FrontEnd

npm run dev
