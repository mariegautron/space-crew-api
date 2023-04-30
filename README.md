# 🚀 Space Crew Back-end

Space Crew est une application web de gestion d'équipages spatiaux, conçue pour aider les administrateurs à suivre les membres d'équipage assignés à chaque mission. LE back-end est conçu avec NodeJS, Express, Sequelize et TypeScript, avec une base de données PostgreSQL.

Le projet a été créé pour aider les entreprises spatiales et les agences gouvernementales à mieux gérer leurs équipages d'astronautes. Avec une interface simple et facile à utiliser, Space Crew est la solution idéale pour les missions spatiales de toutes tailles.

Nous espérons que vous apprécierez cette application et que vous trouverez toutes les fonctionnalités dont vous avez besoin pour gérer efficacement votre équipage spatial.

## 👨‍💻 Technologies utilisées

- [NodeJS](https://nodejs.org/en/docs) - un environnement d'exécution JavaScript côté serveur, qui permet d'utiliser du code JavaScript en dehors d'un navigateur web.
- [Express](https://expressjs.com/fr/) - un framework web minimaliste pour Node.js, qui permet de créer facilement des applications web en utilisant des routes, des middleware et des templates.
- [Sequelize](https://sequelize.org/) - un ORM (Object Relational Mapping) pour Node.js qui permet d'interagir avec une base de données relationnelle en utilisant des objets JavaScript.
- [Postgres](https://www.postgresql.org/docs/) - un système de gestion de base de données relationnelle open-source.

## 🤔 Pourquoi avoir choisi ces technologies ?

**Express** a été choisi pour sa simplicité et sa flexibilité, qui permettent de créer rapidement une application web avec des routes et des middleware.

**Sequelize** a été choisi pour sa facilité d'utilisation et sa compatibilité avec plusieurs types de bases de données relationnelles. **Postgres** a été choisi pour sa stabilité, sa sécurité et sa popularité.

Enfin, **Typescript** a été utilisé pour améliorer la qualité du code, en offrant des fonctionnalités telles que la vérification des types et l'auto-complétion, ainsi qu'une meilleure documentation du code.

💻 Installation

Pour installer et exécuter le projet localement, vous devez avoir Node.js et Postgres installés sur votre machine.

Clonez le dépôt GitHub :

```
git clone https://github.com/mariegautron/space-crew-back-end.git
```

Installez les dépendances :

```
cd space-crew-back-end
npm install
```

Créez une base de données Postgres grâce à [psql](https://docs.postgresql.fr/10/app-psql.html) (CLI de postgres) :

```
createdb spacecrew
```

Configurez les variables d'environnement en créant un fichier .env à la racine du projet :

```
API_PORT=8080
DB_HOST=localhost
DB_PORT=5432
DB_NAME=spacecrew
DB_USER=votre-username
DB_PASSWORD=votre-mot-de-passe
```

Lancez le serveur :

```
npm run dev
```


Accédez à l'application à l'adresse suivante : http://localhost:8080.