# PRO_2020

Projet de semestre Alves, Cuénoud, Dupont, Mülhauser, Simonet

## Introduction

### Structure


Enfait on peut voir les sources depuis le navigateur de toute l'app angular donc on aurait les credentials en clair.
Il faut que il interargissent avec un backend à travers des requetes http pour acceder à la DB.

Pourquoi besoin d'un backend : 
https://academind.com/learn/react/connect-to-database/

Comment faire une app qui mêle jwt, angular et mangodb avec okta : https://developer.okta.com/blog/2019/09/11/angular-mongodb
## Travail en groupe

## Application “corogram”

### Authentification
Pour stocker les user nous avons un username (unique) et nous stockons le hash du password (algo a definir) , un sel (pour pas pouvoir comparer les hash des users etc.. ), et l'algorithme utilisé (comme ça c'est scalable si on change)

### API





## Base de donnée

### Stockage de fichier
Nous n'allons implémenter pour des raisons pratique seulement les fichiers jusqu'a 16MB de taille, ainsi on peut les stocker en format `BSON` qui est stockable gratuitement sur notre cluster mangoDB. 
