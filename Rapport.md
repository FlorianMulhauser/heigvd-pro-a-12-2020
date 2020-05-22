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

### Gestion des droits

Les utilisateurs peuvent avoir trois status

* `superadmin` peuvent `read,write,update,delete` tout le contenu (cours/forumPost/message/user….) 
* `admin` ont tous les droits sur les cours dont ils sont admin   (ajouter des gens à ce cours, promote admin/ message post)
* `user`   `read`  tous les messages/post du cours , `write`  nouveau message/post du cours , `update` message envoyé par lui meme

Ces droits sont verifié dans le backend selon le shéma suivant :

Le backend reçoit une requête `http`  avec le `token` JWT (chaque requête contient le token, sauf celle pour s’authentifier, c’est le rôle de `http_interceptor` de l’app Angular de joindre ce token à chaque requête). 

Après avoir verifié que le token est valid (c.f validation backend), le backend dispose déjà de l’user dont provient la requête, ainsi il la compute uniquement si l’user à les bons droits. 

En cas de succès le résultat de la requête est retourné.

En cas d’échec pour cause de mauvais droit l’erreur 401 est retourné. (`unauthorized`)

## Base de donnée

### Stockage de fichier
Nous n'allons implémenter pour des raisons pratique seulement les fichiers jusqu'a 16MB de taille, ainsi on peut les stocker en format `BSON` qui est stockable gratuitement sur notre cluster mangoDB. 
