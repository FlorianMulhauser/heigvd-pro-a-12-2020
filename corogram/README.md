# Corogram

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.1.



## Pour la communication avec le backend dans les différents services 

Suivre ce tuto : https://angular.io/guide/http

## Pour run Corogram : 

`ng serve --proxy-config proxy.conf.json` 

Ce fichier `proxy.conf.json` permet de rediriger les requetes vers `/api/` vers `localhost:3000`  ou le serveur node tourne. Ainsi si on déploie vraiment on peut adapter cela vers une “vraie” addresse.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


## Erreur connues 
* ng serve give this error : "Cannot find module '@angular-devkit/build-angular/package.json" -> https://stackoverflow.com/questions/50333003/could-not-find-module-angular-devkit-build-angular
