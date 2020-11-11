### Tables - MySQL

CREATE TABLE week18_users ( <br>
id VARCHAR(255) PRIMARY KEY NOT NULL <br>
UNIQUE, email VARCHAR(64) NOT NULL <br>
UNIQUE, password VARCHAR(64) NOT NULL );<br>

***
### Endpoints

##### Criar Usuário e signin
- Método: POST <br>
- Path: "/signup" <br>
- Body (input): <br>
    - email (obrigatório)
    - password (obrigatório)
- Resposta (output): <br>
    - token (gerado pelo jwt) <br>

##### Login
- Método: POST <br>
- Path: "/login" <br>
- Body (input): <br>
    - email (obrigatório)
    - password (obrigatório)
- Resposta (output): <br>
    - token (gerado pelo jwt) <br>

##### Selecionar Usuário
- Método: GET <br>
- Path: "/user/:id" <br>
- Body (input): <br>
    - Authorization: token do usuário
- Resposta (output): <br>
    - id: id do usuário <br>
    - email: email do usuário <br>

##### Deletar Usuário
- Método: DELET <br>
- Path: "/user/:id" <br>
- Somente admins podem acessar esse endpoint