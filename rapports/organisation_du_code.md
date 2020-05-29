# Organisation du code

À partir de la racine heigvd-pro-a-12-2020, on a accès au README principal de présentation, puis 3 dossiers. Chaque dossier contient un README qui explique comment utiliser cette partie du code, et donne divers références. Voilà ces trois répertoires:

### 1) Rapports
Ici nous avons nos markedown des différents rapports. C'est la documentation à lire pour donner les informations. On retrouve:

##### Le guide d'installation
Ce guide nous indiques en premier lieu les logiciels requis à l'installation de notre projet, comment les installer. Ensuite il montre étape par étape comment installer le projet et le lancer.

##### Le manuel d'utilisation
Ce manuel permet de faire une présentation fonctionnelle du logiciel. Il va donner une idée des interactions utilisateurs. On présentera donc les différents types d'utilisateurs(élèves, profs, admin) et les différents menus/permissions auxquels ils ont accès. On montre comment faire les actions pour atteindre les buts pratique du logiciel.

##### Organisation du code
C'est le markdown que vous êtes en train de lire. Il présente rapidement l'arborescence et les contenus des différentes parties du projet.

##### Conception technique
Ce rapport sur la conception technique présente l'architecture technique du projet. Il va expliquer l'API, et montrer comments les différentes parties intéragissent ensemble, les connexions entre le frontend et le backlend.Il va donc décrire le fonctionnement du backend et du frontend.


##### Suivi qualité
Ici on explique nos procédures de vérifications de qualité, comme par exemple notre test de la procédures d'installation etc.

## 2) Coronagram

### e2e
Cela permet d'effectuer des test complets end-to-end du code avec Protractor.

### src
Ce dossier contient le principal de l'application

##### Karma
Outil pour effectuer différents test unitaires du code, notament en utilisant réelement des browser.

##### Config proxy
Fichier de configuration pour le proxy

##### Angular Json -> login page

#### C) app
Ici il y a le coeur de l'application. On retrouve tous les componnents de l'app, dans angular toute les sous partie sont organisé en componnent (login,Forum,chat ..)


    ├───app
    │   ├───admin
    │   │   ├───course-management
    │   │   └───user-management
    │   ├───auth
    │   ├───chat
    │   ├───course-detail
    │   ├───course-list
    │   ├───courses
    │   ├───forgot
    │   ├───forum
    │   ├───home
    │   ├───login
    │   ├───modal
    │   ├───page-not-found
    │   ├───pip
    │   └───_service
    │       ├───auth
    │       ├───chat
    │       ├───course
    │       ├───file
    │       ├───forum
    │       ├───modal
    │       ├───random-color
    │       ├───sse
    │       └───user
    ├───assets
    └───environments


## 3) Backend
C'est ici que se trouve le sevrer qui va aller stocker les données dans la DB.

##### Server JS
fichier de base qui lance  notre sevrer qui effectue la connexion avec la DB
##### JWT token pour l'authentification

### API
contiens toute le sous partie du server

    ├───api
    │   ├───controllers
    │   ├───models
    │   └───routes
    ├───images
    └───node_modules


#### controllers
contiens le code qui effectue les requêtes sur la DB et les traitement 
#### models
contiens les modèle de donné qui serons dans la DB.
#### route
Fait le lien (via des routes) entre les différant service de l' API backend et le frontend




