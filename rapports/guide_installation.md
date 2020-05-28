# Guide d'installation

### 

### 0. Dépendances à installer pour Angular

* Node: il faut donc installer `npm` (https://nodejs.org/en/download/) versionX
* Typescript: ouvrir un shell et taper `npm install -g typescript` (le `-g` est pour une installation globale)
* Typescript compiler: `npm install -g typescript-compiler`
* angular-cli: `npm install -g angular-cli`

### 1. Installer le projet

* clone le projet / la release sur github

* Dans `heigvd-pro-a-12-2020/backend`, lancer `npm install`

* Dans `heigvd-pro-a-12-2020/corogram` lancer `npm install` 

### 2. Lancer le projet 

#### A) Marche a suivre
* Dans `corogram` lancer la commande : `ng serve --proxy-config proxy.conf.json` 

(sans le fichier proxy les requêtes ne sont pas fait au backend)

* Dans `backend` lancer `npm start` 

* Ensuite avec votre navigateur aller sur `http://localhost:4200/` 

* Pour l’instant il faut utiliser les credentials `admin` et`admin` 

#### B) Infos de connexions dev

* login: testUser, password: admin

#### C) Références utiles pour le lancement d'angular 
* https://developer.ibm.com/recipes/tutorials/angular-2-set-up-and-other-quick-debugging-tips/

#### Erreur potentielles au lancement et solutions

##### Erreur lors de commande avec ng serve/build/test 

> You have to be inside an angular-cli project in order to use the serve command.

Solution, sorte de mise à jour d'angular cli

```
sudo npm uninstall -g angular-cli @angular/cli

sudo npm cache clean --force

npm install npm@latest -g

sudo npm install -g @angular/cli

npm rebuild node-sass --force
```