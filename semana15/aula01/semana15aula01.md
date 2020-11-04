### Exercício 1
a) VARCHAR (255) - String (número de caracteres);
<p>
DATE - Representa uma data (ano - mês - dia);
<p>
b) Com SHOW DATABASE - Mostra as informações do schema no Editor de Queries;
<p>
SHOW TABLES - Mostra a tabela actor;
<p> 
c) Mostrou um Error Code: 1146, por que ainda não foram inseridos dados para que possa haver uma descrição;
<p>

### Exercício 2
a) INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES (
"002",
"Glória Pires",
1200000,
"1963-08-23",
"female"
);
<p>
b) Código de erro: 1062. Entrada duplicada "002" para chave Primária;
<p>
c) INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES (
"003",
"Fernanda Montenegro",
30000,
"1929-10-19",
"female"
);
<p>
d ) INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES (
"004",
"Antônio Fagundes",
400000,
"1949-04-18",
"male"
);
<p>
e) INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES (
"005",
"Juliana Paes",
719333.33,
"1979-03-26",
"female"
);
<p>
f) INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES (
"006",
"Grazi Massafera",
65000,
"1982-06-28",
"female"
);
<p>

### Exercício 3
a) SELECT * FROM Actor WHERE gender = "female";
<p>
b) SELECT salary FROM Actor WHERE name = "Tony Ramos";
<p>
c) SELECT * FROM Actor WHERE gender = "invalid";
<p>
Retorna a tabela, porém sem nenhuma linha com dados. Isso ocorreu por que o gênero invalid não existe em nenhum item;
<p>
d) SELECT id, name, salary FROM Actor WHERE salary < 500000;
<p>
e) Código de erro: 1054. Coluna "nome" desconhecida na "lista de valores". A forma correta seria: 
<p>
SELECT id, name FROM Actor WHERE id = "002";
<p>

### Exercício 4
a) SELECT * FROM Actor WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000;
<p>
Selecionar na tabela Actor os atores [SELECT * FROM Actor WHERE] começando com a letra A ou J [name LIKE "A%" OR name LIKE "J%")] e com salário superior a 300000[AND salary > 300000];
<p>
b) SELECT * FROM Actor WHERE name NOT LIKE "A%" AND salary > 350000;
<p>
c) SELECT * FROM Actor WHERE name LIKE "G%" OR  name LIKE "%g%";
<p>
d) SELECT * FROM Actor WHERE (name LIKE "%A%" OR name LIKE "%a%" OR name LIKE "%G%" OR name LIKE "%g%") AND salary BETWEEN 350000 AND 900000;
<p>

### Exercício 5
a) CREATE TABLE Movie (
id VARCHAR (255) PRIMARY KEY,
title VARCHAR (255) NOT NULL UNIQUE,
synopsis TEXT NOT NULL,
release_Date DATE NOT NULL,
rating INT NOT NULL
);
<p>
CREATE TABLE Movies [criar a tabela Movies];
<p>(
id VARCHAR (255) PRIMARY KEY, [id com caracteres até 255, sendo a id a Chave Primária];
<p>
title VARCHAR (255) NOT NULL UNIQUE, [título com caracteres até 255, de tipo não nulo e único];
<p>
synopsis TEXT NOT NULL, [sinopse com caracteres até 65.535, de tipo não nulo];
<p>
release_Date DATE NOT NULL, [data de estréia do tipo data, não nulo];
<p>
rating INT NOT NULL [avaliação em números inteiros e não nulo];
);
<p>
b) INSERT INTO Movies (id, title, synopsis, release_Date, rating)
VALUES (
"001",
"Se Eu Fosse Você",
"Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
"2006-01-06",
7
);
<p>
c) INSERT INTO Movies (id, title, synopsis, release_Date, rating)
VALUES (
"002",
"Doce de mãe",
"Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
"2012-12-27",
10
);
<p>
d) INSERT INTO Movies (id, title, synopsis, release_Date, rating)
VALUES (
"003",
"Dona Flor e Seus Dois Maridos",
"Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
"2017-11-02",
8
);
<p>
e) INSERT INTO Movies (id, title, synopsis, release_Date, rating)
VALUES (
"004",
"Deus é Brasileiro",
"Cansado da humanidade, Deus resolve tirar férias para descansar e procura alguém no Brasil capaz de substituí-lo. O borracheiro e pescador Taoca e a solitária Madá deverão guiá-lo até Quincas das Mulas, candidato de Deus a santo.",
"2003-01-31",
9
);
<p>

### Exercício 6
a) SELECT id, title, rating FROM Movies WHERE id = "003";
<p>
b) SELECT * FROM Movies WHERE title LIKE "%Deus%";
<p>
c) SELECT id, title, synopsis FROM Movies WHERE rating > 7;
<p>

### Exercício 7
a) SELECT * FROM Movies WHERE title LIKE "%vida%";
<p>
b) SELECT * FROM Movies WHERE title LIKE "%vida%" OR synopsis LIKE "%vida%";
<p>
c) SELECT * FROM Movies WHERE release_Date < "2020-10-10";
<p>
d) SELECT * FROM Movies WHERE release_Date < "2020-10-10" AND rating > 7;
<p>
