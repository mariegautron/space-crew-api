# 🚀 Space Crew Back-end

<p><img src="https://img.shields.io/github/last-commit/mariegautron/space-crew-api.svg?style=flat-square" alt="shields"></p>

Space Crew est une application web de gestion d'équipages spatiaux, conçue pour aider les administrateurs à suivre les membres d'équipage assignés à chaque mission. LE back-end est conçu avec **NodeJS, Express, Prisma et TypeScript, avec une base de données PostgreSQL**.

Le projet a été créé pour aider les entreprises spatiales et les agences gouvernementales à mieux gérer leurs équipages d'astronautes. Avec une interface simple et facile à utiliser, Space Crew est la solution idéale pour les missions spatiales de toutes tailles.

Nous espérons que vous apprécierez cette application et que vous trouverez toutes les fonctionnalités dont vous avez besoin pour gérer efficacement votre équipage spatial.

Lien du repo front-end : https://github.com/mariegautron/space-crew-front

## 🚀 Déploiement

L'api NodeJS et la base de données GraphQL sont déployées avec [Render](https://render.com/) à l'adresse suivante : https://space-crew-api.onrender.com/

:warning: Étant donné que c'est la version gratuite, d'important ralentissement peuvent être présents.

## 👨‍💻 Technologies utilisées

- [NodeJS](https://nodejs.org/en/docs) - un environnement d'exécution JavaScript côté serveur, qui permet d'utiliser du code JavaScript en dehors d'un navigateur web.
- [Express](https://expressjs.com/fr/) - un framework web minimaliste pour Node.js, qui permet de créer facilement des applications web en utilisant des routes, des middleware et des templates.
- [Prisma](https://www.prisma.io/docs) - un ORM (Object Relational Mapping) pour Node.js qui permet d'interagir avec une base de données relationnelle en utilisant des objets JavaScript.
- [Postgres](https://www.postgresql.org/docs/) - un système de gestion de base de données relationnelle open-source.

## 🤔 Pourquoi avoir choisi ces technologies ?

**Express** a été choisi pour sa simplicité et sa flexibilité, qui permettent de créer rapidement une application web avec des routes et des middleware.

**Prisma** a été choisi pour sa facilité d'utilisation et sa compatibilité avec plusieurs types de bases de données relationnelles. **Postgres** a été choisi pour sa stabilité, sa sécurité et sa popularité.

Enfin, **Typescript** a été utilisé pour améliorer la qualité du code, en offrant des fonctionnalités telles que la vérification des types et l'auto-complétion, ainsi qu'une meilleure documentation du code.

## 💻 Installation

Pour installer et exécuter le projet localement, vous devez avoir Docker et Docker Compose installés sur votre machine.

Clonez le dépôt GitHub :

```
git clone https://github.com/mariegautron/space-crew-back-end.git
```

Configurez les variables d'environnement en créant un fichier .env à la racine du projet :

```
API_PORT=8080
DATABASE_URL=postgres://votre-username:votre-mot-de-passe@db:5432/spacecrew
```

Installez et démarrez les conteneurs Docker grâce à la commande suivante :

```
make install start
```

Accédez à l'application à l'adresse suivante : http://localhost:8080.

## 📁 Structure des fichiers

La structure de fichiers de ce projet suit une architecture de type MVC (Modèle-Vue-Contrôleur) pour organiser et séparer les différentes parties de l'application.

- **prisma** : ce dossier contient les fichiers nécessaires pour interagir avec la base de données à l'aide de Prisma. Il contient les migrations, les fichiers de fixtures pour la base de données et le schéma de données défini dans schema.prisma.
- **src/controllers** : contient les contrôleurs de l'application, qui reçoivent les requêtes HTTP des utilisateurs, traitent ces requêtes en utilisant les modèles appropriés, et renvoient les réponses correspondantes. Les contrôleurs sont responsables de la logique métier de l'application et utilisent les modèles pour effectuer les opérations CRUD.
- **src/models** : contient les modèles de données de l'application, qui interagissent avec la base de données. Chaque fichier dans ce dossier est responsable d'une table de la base de données, et définit les fonctions pour effectuer des opérations CRUD (Create, Read, Update, Delete) sur cette table avec Prisma.
- **src/routes** : ce dossier contient les fichiers de définition des routes pour chaque type de ressource, comme les astronautes, les missions et les équipages.ma.

Cette structure permet une organisation claire et cohérente du code, en séparant les différents types de fichiers en fonction de leur rôle dans l'application.

## 💄 Linter & prettier

Afin de garantir une cohérence dans le style de code et d'éviter les erreurs potentielles, nous avons utilisé deux outils d'analyse de code : **Eslint et Prettier**.

Les deux outils ont été configurés dans le fichier `.eslintrc.json` et `.prettierrc.json` à la racine du projet. Ils ont été intégrés dans le flux de travail du projet grâce à l'utilisation de hooks Git, afin de s'assurer que le code est toujours conforme aux règles de style et de formatage avant de faire des commits.

Cette configuration permet de maintenir un code propre, lisible et cohérent, et d'assurer la qualité du code tout au long du développement du projet.

Quelques commandes utiles :

```
npm run lint // Linter
npm run format // Linter --fix
npm run pretty // Formatter
npm run clean:code // format && pretry
```

## Roadmap

### Features

- [x] Liste des astronautes
- [ ] Ajouter un astronaute
- [ ] Modifier un astronaute
- [x] Suprimer un astronaute
- [ ] Rechercher un astronaute (par nom ou mission)
- [ ] Filtrer la liste d'astronautes (astronautes sans mission)
- [ ] Affecter/supprimer une mission à un astronaute
- [ ] S'inscrire/se connecter pour manipuler les astronautes

### Autre

- [x] Linter/Formatter
- [ ] Tests
- [x] Swagger
- [ ] Lancer front & back en une seule commande (Git submodules ?)
