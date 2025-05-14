### APIs nécessaires pour le backend de la plateforme de réservation de cours

Voici toutes les API que vous devez implémenter dans le backend pour supporter les fonctionnalités de votre plateforme de réservation de cours:

## 1. Authentification et Utilisateurs

### Inscription

- **Endpoint**: `/api/auth/register`
- **Méthode**: POST
- **Corps de la requête**:

```json
{
  "name": "string",
  "email": "string",
  "password": "string",
  "role": "student" | "teacher"
}
```


- **Réponse**: Utilisateur créé avec token JWT


### Connexion

- **Endpoint**: `/api/auth/login`
- **Méthode**: POST
- **Corps de la requête**:

```json
{
  "email": "string",
  "password": "string"
}
```


- **Réponse**: Token JWT et informations utilisateur


### Récupérer le profil utilisateur

- **Endpoint**: `/api/users/me`
- **Méthode**: GET
- **Authentification**: JWT
- **Réponse**: Données du profil utilisateur


### Mettre à jour le profil utilisateur

- **Endpoint**: `/api/users/me`
- **Méthode**: PUT
- **Authentification**: JWT
- **Corps de la requête**: Données du profil à mettre à jour
- **Réponse**: Profil mis à jour


## 2. Enseignants

### Récupérer tous les enseignants

- **Endpoint**: `/api/teachers`
- **Méthode**: GET
- **Paramètres de requête**:

- `subject`: Filtrer par matière
- `rating`: Filtrer par note minimale
- `price`: Filtrer par fourchette de prix
- `availability`: Filtrer par disponibilité
- `location`: Filtrer par type de cours (online, in-person, both)
- `q`: Recherche textuelle



- **Réponse**: Liste des enseignants avec pagination


### Récupérer un enseignant par ID

- **Endpoint**: `/api/teachers/:id`
- **Méthode**: GET
- **Réponse**: Détails complets de l'enseignant


### Récupérer les enseignants en vedette

- **Endpoint**: `/api/teachers/featured`
- **Méthode**: GET
- **Réponse**: Liste des enseignants en vedette


## 3. Cours

### Récupérer les cours d'un enseignant

- **Endpoint**: `/api/teachers/:id/courses`
- **Méthode**: GET
- **Réponse**: Liste des cours proposés par l'enseignant


### Récupérer un cours par ID

- **Endpoint**: `/api/courses/:id`
- **Méthode**: GET
- **Réponse**: Détails complets du cours


### Créer un cours (pour les enseignants)

- **Endpoint**: `/api/courses`
- **Méthode**: POST
- **Authentification**: JWT (rôle enseignant)
- **Corps de la requête**: Détails du cours
- **Réponse**: Cours créé


### Mettre à jour un cours

- **Endpoint**: `/api/courses/:id`
- **Méthode**: PUT
- **Authentification**: JWT (propriétaire du cours)
- **Corps de la requête**: Détails du cours à mettre à jour
- **Réponse**: Cours mis à jour


### Supprimer un cours

- **Endpoint**: `/api/courses/:id`
- **Méthode**: DELETE
- **Authentification**: JWT (propriétaire du cours)
- **Réponse**: Confirmation de suppression


## 4. Réservations

### Récupérer les créneaux disponibles

- **Endpoint**: `/api/teachers/:id/availability`
- **Méthode**: GET
- **Paramètres de requête**:

- `date`: Date pour laquelle vérifier la disponibilité



- **Réponse**: Liste des créneaux disponibles


### Créer une réservation

- **Endpoint**: `/api/bookings`
- **Méthode**: POST
- **Authentification**: JWT
- **Corps de la requête**:

```json
{
  "teacherId": "string",
  "courseType": "string",
  "date": "date",
  "timeSlot": "string"
}
```


- **Réponse**: Détails de la réservation créée


### Récupérer les réservations de l'utilisateur

- **Endpoint**: `/api/bookings`
- **Méthode**: GET
- **Authentification**: JWT
- **Réponse**: Liste des réservations de l'utilisateur


### Annuler une réservation

- **Endpoint**: `/api/bookings/:id`
- **Méthode**: DELETE
- **Authentification**: JWT
- **Réponse**: Confirmation d'annulation


## 5. Avis et Évaluations

### Récupérer les avis d'un enseignant

- **Endpoint**: `/api/teachers/:id/reviews`
- **Méthode**: GET
- **Réponse**: Liste des avis avec pagination


### Ajouter un avis

- **Endpoint**: `/api/reviews`
- **Méthode**: POST
- **Authentification**: JWT
- **Corps de la requête**:

```json
{
  "teacherId": "string",
  "courseId": "string",
  "rating": "number",
  "comment": "string"
}
```


- **Réponse**: Avis créé


### Modifier un avis

- **Endpoint**: `/api/reviews/:id`
- **Méthode**: PUT
- **Authentification**: JWT (auteur de l'avis)
- **Corps de la requête**: Données de l'avis à mettre à jour
- **Réponse**: Avis mis à jour


## 6. Matières et Catégories

### Récupérer toutes les matières

- **Endpoint**: `/api/subjects`
- **Méthode**: GET
- **Réponse**: Liste des matières disponibles


## 7. Quiz et Contenu Généré par IA

### Générer un quiz

- **Endpoint**: `/api/quiz/generate`
- **Méthode**: POST
- **Authentification**: JWT (rôle enseignant)
- **Corps de la requête**:

```json
{
  "courseId": "string",
  "numberOfQuestions": "number"
}
```


- **Réponse**: Quiz généré avec questions et réponses


### Récupérer un quiz

- **Endpoint**: `/api/courses/:id/quiz`
- **Méthode**: GET
- **Réponse**: Quiz associé au cours


## 8. Messagerie

### Récupérer les conversations

- **Endpoint**: `/api/messages/conversations`
- **Méthode**: GET
- **Authentification**: JWT
- **Réponse**: Liste des conversations


### Récupérer les messages d'une conversation

- **Endpoint**: `/api/messages/conversations/:id`
- **Méthode**: GET
- **Authentification**: JWT
- **Réponse**: Messages de la conversation


### Envoyer un message

- **Endpoint**: `/api/messages`
- **Méthode**: POST
- **Authentification**: JWT
- **Corps de la requête**:

```json
{
  "recipientId": "string",
  "content": "string"
}
```


- **Réponse**: Message envoyé


## 9. Tableau de bord

### Statistiques pour les enseignants

- **Endpoint**: `/api/dashboard/teacher/stats`
- **Méthode**: GET
- **Authentification**: JWT (rôle enseignant)
- **Réponse**: Statistiques (nombre d'étudiants, sessions à venir, revenus, etc.)


### Statistiques pour les étudiants

- **Endpoint**: `/api/dashboard/student/stats`
- **Méthode**: GET
- **Authentification**: JWT (rôle étudiant)
- **Réponse**: Statistiques (cours suivis, sessions à venir, etc.)


## 10. Paiements (pour intégration future)

### Créer une intention de paiement

- **Endpoint**: `/api/payments/create-intent`
- **Méthode**: POST
- **Authentification**: JWT
- **Corps de la requête**:

```json
{
  "bookingId": "string",
  "amount": "number"
}
```


- **Réponse**: Clé client pour le paiement


### Confirmer un paiement

- **Endpoint**: `/api/payments/confirm`
- **Méthode**: POST
- **Authentification**: JWT
- **Corps de la requête**:

```json
{
  "paymentIntentId": "string"
}
```


- **Réponse**: Confirmation du paiement


## Considérations techniques

1. **Authentification**: Utilisez JWT pour l'authentification et la gestion des sessions.
2. **Validation**: Implémentez une validation robuste des données entrantes.
3. **Gestion des erreurs**: Créez des réponses d'erreur standardisées avec des codes HTTP appropriés.
4. **Documentation**: Documentez vos API avec Swagger ou une solution similaire.
5. **Tests**: Écrivez des tests unitaires et d'intégration pour vos endpoints.
6. **Sécurité**: Implémentez CORS, rate limiting, et protection contre les attaques courantes.


Ces API couvrent toutes les fonctionnalités présentées dans votre interface frontend et permettront une intégration complète entre le frontend et le backend.
