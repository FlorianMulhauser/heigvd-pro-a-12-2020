# Conception Technique

##### Projet de semestre Alves, Cuénoud, Dupont, Mülhauser, Simonet



TODO: (liste de choses qu'on peut mettre si applicables)

### Architecture technique
### Étude détaillée sur un point particulier 

(par exemple, étude d'un framework tiers, ou d'un protocole applicatif entre 2 composants ...)

### Présentation de l'API

## API

#### Format des contenus échangé entre les différents services.

Toutes les vérification pour Read/Write/Update seront côté backend.

TODO: Décider comment on implémente les messages ensemble, par exemple est-ce que on peut envoyer des média dans le chat/forum.

- `ChatMessage`: Object JSON sous forme

  ```
  {
  	id: number; # id unique du ChatMessage
  	author: String; # id unique de l'auteur du message
  	content: String; # contenu du message 
  	timestamp: String; # heure exacte du message au format __ A DEFINIR __  
      course_id: String; # Permet d'identifier a quel cours ce message appartient
  }
  ```

- `ForumMessage`:

  ```
  {
  	id: number; # id unique du ForumMessage
  	author: String; #id unique de l'auteur du message
  	title: String; #titre du ForumMessage
  	content: String;# contenu du post
  	timestamp: String;# heure exacte du message au format __ A DEFINIR __  
  	upVote: number; # nombre de votes positifs
    downVote: number; # nombre de votes négatifs
  	course_id: String; # Permet d'identifier a quel cours ce message appartient
  }
  ```

- `Course`:

  Sert à recevoir et échanger des information sur les cours auquel l’utilisateur est inscrit.

  ```
  {
      id: number; # id unique qui permet d'identifier la classe (du cours donné)
      name: String; # le nom complet p.ex "Programmation Concurrente 2020"
      shortName: String; # Le nom court du cours (RES pour réseaux par exemple)
  }
  ```

- `User`:

  Sert à définir le statut d’un utilisateur afin de déterminer ses droits.

  ```
  {
  	id: number; #id unique de l'utilisateur
      name: String; # nom complet de l'utilisateur
      mail: String; # mail de l'utilisateur
      status: String; #le status de l'utilisateur
      course: id[]; #les cours auxquel participe l'étudiant 
  }
  ```

  - `status` doit être soit : `PROF` soit `STUD` soit `ADMIN` .

  - TODO : Définir comment un `User` peut déterminer si il est admin/prof d’un cours.

    Par exemple un champs : `courseGiven: number[]`qui contiendrait les id des cours auxquels l’user est admin.

  #### Partie Authentification

  A definir: [bon lien sur l'authentification avec angular et JWT](https://blog.angular-university.io/angular-jwt-authentication/)

  `api/login` `POST`

  ```
  { userId, passWord }
  ```

  Renvoie un token JWT si sucessfull

  Sinon renvoie `Unauthorized` (HTML erreur 401).

### TODO : Definir comment le backend et la GUI interagissent (http etc.. )

Lien utile :

Sur JWT mangodb et angular : https://developer.okta.com/blog/2019/09/11/angular-mongodb







## Normes et guides de développement suivis

