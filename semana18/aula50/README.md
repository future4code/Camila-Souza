### Tables - MySQL

CREATE TABLE week18_users ( <br>
id VARCHAR(255) PRIMARY KEY NOT NULL <br>
UNIQUE, email VARCHAR(64) NOT NULL <br>
UNIQUE, password VARCHAR(64) NOT NULL );<br>

CREATE TABLE to_do_list_user_address ( <br>
id INT(64) PRIMARY KEY UNIQUE AUTO_INCREMENT, <br>
logradouro VARCHAR(255) NOT NULL, <br>
número VARCHAR(12) NOT NULL, <br>
complemento VARCHAR(255), <br>
bairro VARCHAR(64) NOT NULL, <br>
cidade VARCHAR(64) NOT NULL, <br>
estado VARCHAR(64) NOT NULL <br>
); <br>

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