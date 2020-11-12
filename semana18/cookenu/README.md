# COOKENU
##### by Camila Souza - Jackson
***
## DATA
### USER (signup)
- id (unique, with UUID)<br>
- name <br>
- email <br>
- password (min of 6char)<br>
- token (signup & login, with JWT)<br>
### RECIPE
- title <br>
- description/instructions <br>
- creation date <br>
### FOLLOW
- A user can fallow other (id)
### FEED
- Recipes from followed's users <br>
- Recipes by creation date
***
## TABLES - MySQL
CREATE TABLE cookenu_users ( <br>
    id VARCHAR(255) PRIMARY KEY NOT NULL, <br>
    name VARCHAR(64) NOT NULL, <br>
    email VARCHAR(64) NOT NULL, <br>
    password VARCHAR(255) NOT NULL <br>
); <br>
CREATE TABLE cookenu_recipes ( <br>
    id VARCHAR(255) PRIMARY KEY NOT NULL, <br>
    title VARCHAR(64) NOT NULL, <br>
    description TEXT NOT NULL<br>
    created_at DATE NOT NULL <br>
); <br>
CREATE TABLE cookenu_followers ( <br>
    user_id VARCHAR(255) NOT NULL, <br>
    following VARCHAR(64) NOT NULL, <br>
    PRIMARY KEY(user_id, following), <br>
    FOREIGN KEY(user_id) REFERENCES cookenu_users(id),<br>
    FOREIGN KEY(following) REFERENCES cookenu_users(id)<br>
); <br>

***
## ENDPOINTS
### SIGNUP
- Method: POST <br>
- Path: /signup <br>
- Input: <br>
    - Body: <br>
        { <br>
            "name": "Fyodor",<br>
            "email": "fyodor@gmail.com",<br>
            "password": 123456<br>
        }<br>
- Output: <br>
    - Body: <br>
         { <br>
            "access_token": "token de acesso"<br>
        }<br>
- Attention: <br>
    - Code must create the user id;<br>
    - All 3 params must be validated, return message in case of error:
        - Empty;
        - Invalid;

### LOGIN
- Method: POST <br>
- Path: /login <br>
- Input: <br>
    - Body: <br>
        { <br>
            "email": "fyodor@gmail.com",<br>
            "password": 123456<br>
        }<br>
- Output: <br>
    - Body: <br>
         { <br>
            "access_token": "token de acesso"<br>
        }<br>
- Attention: <br>
    - All 2 params must be validated, return message in case of error:
        - Empty;
        - Invalid;

### GET USER PROFILE
- Method: GET <br>
- Path: /user/profile <br>
- Input: <br>
    - Headers: <br>
        Authorization: "Authentication token" <br>
- Output: <br>
    - Body: <br>
         { <br>
            "id": "User's id",<br>
            "name": "Fyodor",<br>
            "email": "fyodor@gmail.com"<br>
        }<br>

### GET USER BY ID
- Method: GET <br>
- Path: /user/:id <br>
- Input: <br>
    - Path Param: <br>
        - "id": "User's id" <br>
    - Headers: <br>
        - Authorization: "Authentication token" <br>
- Output: <br>
    - Body: <br>
         { <br>
            "id": "User's id",<br>
            "name": "Fyodor",<br>
            "email": "fyodor@gmail.com"<br>
        }<br>

### CREATE RECIPE
- Method: POST <br>
- Path: /recipe <br>
- Input: <br>
    - Headers: <br>
        - Authorization: "Authentication token" <br>
    - Body: <br>
        { <br>
            "title": "recipe's title",<br>
            "description": "recipe's description"<br>
        }<br>
- Attention: <br>
    -   The creation date must be sent at the moment of the recipe's creation by the user;

### GET RECIPE
- Method: GET <br>
- Path: /recipe/:id <br>
- Input: <br>
    - Path Param: <br>
        - "id": "Recipe's id" <br>
    - Headers: <br>
        - Authorization: "Authentication token" <br>
- Output: <br>
    - Body: <br>
         { <br>
            "id": "Recipe's id", <br>
            "title": "recipe's title",<br>
            "description": "recipe's description", <br>
            "createdAt": "20/02/2020"
        }<br>
<!-- 
### FOLLOW USER
- Method: POST <br>
- Path: /user/follow <br>
- Input: <br>
    - Headers: <br>
        Authorization: "Authentication token" <br>
    - Body: <br>
         { <br>
            "userToFollowId": "User's id"<br>
        }<br>
- Output: <br>
    - Body: <br>
         { <br>
            "message": "Followed successfully"<br>
        }<br>
- Attention: <br>
    - User's id must be validated, return message in case of error:
        - Empty;
        - Invalid;

### UNFOLLOW USER
- Method: POST <br>
- Path: /user/unfollow <br>
- Input: <br>
    - Headers: <br>
        Authorization: "Authentication token" <br>
    - Body: <br>
         { <br>
            "userToUnfollowId": "User's id"<br>
        }<br>
- Output: <br>
    - Body: <br>
         { <br>
            "message": "Unfollowed successfully"<br>
        }<br>
- Attention: <br>
    - User's id must be validated, return message in case of error:
        - Empty;
        - Invalid;

### GET RECIPE FEED
- Method: GET <br>
- Path: /user/feed <br>
- Input: <br>
    - Headers: <br>
        - Authorization: "Authentication token" <br>
- Output: <br>
    - Body: <br>
         { <br>
            "id": "Recipe's id", <br>
            "title": "recipe's title",<br>
            "description": "recipe's instructions", <br>
            "createdAt": "20/02/2020", <br>
            "userId": "Recipe's creator id", <br>
            "userName": "Recipe's creator name"<br>
        }<br>
*** -->
