# Outils de participation en cours

Un système de cours participatif qui permet à une classe de chatter ensemble, puis de sélectionner des questions réponses pertinentes dans un forum, et enfin de partager des fichiers.   

HEIG-VD  |  Dépt. TIC  |  Cours PRO  |  Année académique 2019/20 | groupe A-12

Development team:

| Name                                 | Email                              | Github       |
|--------------------------------------|------------------------------------|--------------|
| Claude-André Alves                   | claude-andre.inacioalves@heig-vd.ch| ClaudeAlves  |
| Robin Cuénoud                        | robin.cuenoud@heig-vd.ch           | robincuenoud |
| Maxime Dupont (deputy project lead)  | maxime.dupont@heig-vd.ch           | MaximeADupont|
| Florian Mülhauser (project lead)     | florian.mulhauser@heig-vd.ch       | FlorianMulhauser & Florian |
| Yoann Simonet  | yoann.simonet@heig-vd.ch    | yoannsim   |

## Dependencies

Le logiciel à besoin de ces dépendances là, les autres seront automatiquement installés ultérieurement avec un `npm install`.

* NodeJs 12.16.3
* npm 6.14.4
* Angular CLI 9.1.7 (normalement minimum 9.0.6 c'est bon)
* Typescript 3.1

## Build and install

### 1. Download main dependencies

* Node: il faut donc télécharger et installer `npm` (https://nodejs.org/en/download/) version min 12.16.3 ou +
* Typescript: ouvrir un shell et taper `npm install -g typescript` (le `-g` est pour une installation globale)
* Typescript compiler: `npm install -g typescript-compiler`
* angular-cli: `npm install -g angular-cli`

### 2. Download the software and auto-install it's dependencies

* Git clone this project, or download the latest release 
* Dans `heigvd-pro-a-12-2020/backend`, lancer un shell et taper `npm install`
* Dans `heigvd-pro-a-12-2020/corogram`, lancer un shell et taper `npm install` 

## Run

### A) Marche a suivre
* Dans `corogram` lancer la commande : `ng serve --proxy-config proxy.conf.json` 

(sans le fichier proxy les requêtes ne sont pas fait au backend)

* Dans `backend` lancer `npm start` 

* Ensuite avec votre navigateur aller sur `http://localhost:4200/` 

#### B) Infos de connexions dev

* login: testUser, password: admin

#### C) Références utiles pour le lancement d'angular 
* https://developer.ibm.com/recipes/tutorials/angular-2-set-up-and-other-quick-debugging-tips/

#### D) Erreur potentielles au lancement et solutions

in case of error with npm/ng in A), some are repertoried with their solutions, see file: rapports/guide_installation.md

## Documentation

User manual: see file rapports/manuel_utilisateur.md

API documentation: see file rapports/conception_technique.md

