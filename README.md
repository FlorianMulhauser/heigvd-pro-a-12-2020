# Outils de participation en cours

Un système de cours participatif qui permet à une classe de chatter ensemble pour réagir au cours, puis de sélectionner des questions réponses pertinentes dans un forum, et enfin de partager des fichiers.   

HEIG-VD  |  Dépt. TIC  |  Cours PRO  |  Année académique 2019/20 | groupe A-12

Équipe de développement:

| Name                                 | Email                              | Github       |
|--------------------------------------|------------------------------------|--------------|
| Claude-André Alves                   | claude-andre.inacioalves@heig-vd.ch| ClaudeAlves  |
| Robin Cuénoud                        | robin.cuenoud@heig-vd.ch           | robincuenoud |
| Maxime Dupont (deputy project lead)  | maxime.dupont@heig-vd.ch           | MaximeADupont|
| Florian Mülhauser (project lead)     | florian.mulhauser@heig-vd.ch       | FlorianMulhauser & Florian |
| Yoann Simonet  | yoann.simonet@heig-vd.ch    | yoannsim   |

## Dépendances

Le logiciel à préalablement besoin de ces dépendances là, les autres seront automatiquement installés ultérieurement avec un `npm install`.

* NodeJs 12.16.3
* npm 6.14.4
* Angular CLI 9.1.7 (normalement minimum 9.0.6 c'est bon)
* Typescript 3.1

## Téléchargements et installations
Dans un cas final ou le produit serait utilisé par plusieurs personnes, il serait hébergé sur un serveur et il faudrait juste se connecter à la webapp en saississant le bon URL sur votre navigateur et en s'identifiant. On a pensé que ça ne servait à rien de se concentrer là dessus pour notre projet, nous allons donc vous montrer comment l'installer et le faire tourner en local. Ce sera donc la même démarche que pour une équipe qui reprendrait le développement de cette application.

### 1. Télécharger les dépendances principales requises

* Node: il faut donc télécharger et installer `npm` (https://nodejs.org/en/download/) version min 12.16.3 ou +
* Typescript: ouvrir un shell et taper `npm install -g typescript` (le `-g` est pour une installation globale)
* Typescript compiler: `npm install -g typescript-compiler`
* angular-cli: `npm install -g angular-cli`

### 2. Télécharger le logicielle et installation automatique de ces dépendances

* Git clone ce projet, ou télécharger la dernière release disponible sur ce git.
* Dans `heigvd-pro-a-12-2020/backend`, lancer un shell et taper `npm install`
* Dans `heigvd-pro-a-12-2020/corogram`, lancer un shell et taper `npm install` 

## Exécution

### A) Marche a suivre
* Dans `heigvd-pro-a-12-2020/corogram`, ouvrir un shell et lancer la commande : `ng serve --proxy-config proxy.conf.json` 

(sans le fichier proxy les requêtes ne sont pas fait au backend)

* Dans `heigvd-pro-a-12-2020/backend`, ouvrir un shell et lancer la commande: `npm start` 

* Ensuite avec votre navigateur aller sur `http://localhost:4200/` 

#### B) Infos de connexions dev

* login user : testUser, password: admin
* login administrateur: admin, password: admin

#### C) Références utiles pour le lancement d'angular 
En cas de besoin, plus d'explications pour lancer l'environement, notament pour mettre en place un IDE, sont disponible avec ce lien.
* https://developer.ibm.com/recipes/tutorials/angular-2-set-up-and-other-quick-debugging-tips/

#### D) Erreur potentielles au lancement et solutions

En cas d'erreur en rentrant des commandes avec npm/ng au point A), certaines rencontrées sont répertoriées, voir fichier: rapports/guide_installation.md

## Documentation

Guide d'utilisateur: voir fichier `rapports/manuel_utilisateur.md`

API documentation: voir fichier `rapports/conception_technique.md`

