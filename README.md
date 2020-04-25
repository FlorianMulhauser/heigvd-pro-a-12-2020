# PRO_2020
Projet de semestre Alves, Cuénoud, Dupont, Mülhauser, Simonet

## API 

#### Format des contenus échangé entre les différents services.

Toutes les vérification pour Read/Write/Update seront côté backend. 

TODO: Décider comment on implémente les messages ensemble, par exemple est-ce que on peut envoyer des média dans le chat/forum. 

* `ChatMessage`: Object JSON sous forme 

  ```typescript
  {
  	id: number; # id unique du ChatMessage
  	author: String; # id unique de l'auteur du message
  	content: String; # contenu du message 
  	timestamp: String; # heure exacte du message au format __ A DEFINIR __  
      course_id: String; # Permet d'identifier a quel cours ce message appartient
  }
  ```

  

* `ForumMessage`: 

  ```typescript
  {
  	id: number; # id unique du ForumMessage
  	author: String; #id unique de l'auteur du message
  	title: String; #titre du ForumMessage
  	content: String;# contenu du post
  	timestamp: String;# heure exacte du message au format __ A DEFINIR __  
  	vote: number; # nombre de vote (positif ou negatif)
  	course_id: String; # Permet d'identifier a quel cours ce message appartient
  }
  ```

  

* `Course`: 

  Sert à recevoir et échanger des information sur les cours auquel l’utilisateur est inscrit. 

  ```typescript
  {
      id: number; # id unique qui permet d'identifier la classe (du cours donné)
      name: String; # le nom complet p.ex "Programmation Concurrente 2020"
      shortName: String; # Le nom court du cours (RES pour réseaux par exemple)
  }
  ```

* `User`: 

  Sert à définir le statut d’un utilisateur afin de déterminer ses droits. 

  ```typescript
  {
  	id: number; #id unique de l'utilisateur
      name: String; # nom complet de l'utilisateur
      mail: String; # mail de l'utilisateur
      status: String; #le status de l'utilisateur
      course: id[]; #les cours auxquel participe l'étudiant 
  }
  ```

  * `status` doit être soit : `PROF` soit `STUD`  soit `ADMIN` . 

  * TODO : Définir comment un `User` peut déterminer si il est admin/prof d’un cours.

    Par exemple un champs : `courseGiven: number[]`qui contiendrait les id des cours auxquels l’user est admin. 

  #### Partie Authentification

  A definir: 

  [Bon lien sur un systeme d’authentification avec angular et JWT]: https://blog.angular-university.io/angular-jwt-authentication/

  ​	

### TODO : Definir comment le backend et la GUI interagissent (http etc.. )

