# Backend 

Fait:

* Réussi a connecter le backend à mangoDB

A faire : 





## Comment lancer 

taper `npm start` dans la console (requis npm tho)



## Comment avancer 

Regarder ce tutoriel : https://www.codementor.io/@olatundegaruba/nodejs-restful-apis-in-10-minutes-q0sgsfhbd

Pour chaque structure de donnée que l’on à il faut imiter celui de Course. (Tasks dans le tutoriel).

Il faut créer un `Controller` dans `api/controllers` , un model dans `api/models` et une route dans `api/routes` . 

Le `Controller` sert à définir les fonctions qui vont CRUD des données.

Le `Model` sert à définir la structure d’une donnée (toutes nos structures doivent être définies dans Model c.f. API).

Les `Routes` sont les moyens de communiquer entre l’app Angular et le backend. 

### Ce qu’il faut comprendre comment faire 

Regarder avec JWT ou autres comment envoyer par requetes (POST/GET) le token JWT et ainsi verifier qu’on retourne seulement ce que l’utilisateur peut voir. (c.f shéma moche d’en dessous).





## Spécification

Le backend va servir à connecter le frontend (corogram) fait en angular avec la database. 

Son rôle va être de garantir que l’utilisateur peut READ/WRITE seulement ce qu’il à le droit. 

Les informations montrées à l’utilisateur seront amenée comme ceci : 

![image-20200427163528833](images/first_spec)

