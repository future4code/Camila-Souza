### Exercício 1
a) Excluiria a coluna salary;
<p>
b) Modificaria o nome da coluna por sex no lugar de gender com no máximo 6 caracteres;
<p>
c) Modificaria a coluna gender por gender com até 255 caracteres;
<p>
d) ALTER TABLE Actor CHANGE gender gender VARCHAR(100);
<p>

### Exercício 2
a) UPDATE Actor SET name = "Queen Fernanda Montenegro", birth_date = "1929-11-19" WHERE id = "003";
<p>
b) UPDATE Actor SET name = "JULIANA PÃES" WHERE name = "Juliana Paes";
<p>
UPDATE Actor SET name = "Juliana Paes" WHERE name = "JULIANA PÃES";
<p>
c) UPDATE Actor SET name = "Moacyr Franco", birth_date = "2020-02-10", salary = 600000, gender = "male" WHERE id = "005";
<p>
d) UPDATE Actor SET name = "Teste", birth_date = "2000-01-01", salary = 1000000, gender = "female" WHERE id = "015";
<p>
Nenhuma linha foi afetada, por ter 0 correspondêcia;
<p>

### Exercício 3
a) DELETE FROM Actor WHERE name = "Queen Fernanda Montenegro";
<p>
b) DELETE FROM Actor WHERE gender = "male" AND salary > 1000000;
<p>

### Exercício 4
a) SELECT MAX(salary) FROM Actor;
<p>
b) SELECT MIN(salary) FROM Actor WHERE gender = "female";
<p>
c) SELECT COUNT(*) FROM Actor WHERE gender = "female";
<p>
d) SELECT SUM(salary) FROM Actor;
<p>

### Exercício 5
a) Mostra a quantidade de atores por gênero;
<p>
b) SELECT id, name FROM Actor ORDER BY name DESC;
<p>
c) SELECT * FROM Actor ORDER BY salary;
<p>
d) SELECT * FROM Actor ORDER BY salary DESC LIMIT 3;
<p>
e) SELECT AVG(salary), gender FROM Actor GROUP BY gender;
<p>

### Exercício 6
a) ALTER TABLE Movies ADD playing_limit_date DATE;
<p>
b) ALTER TABLE Movies CHANGE rating rating FLOAT;
<p>
c) UPDATE Movies SET playing_limit_date = "2020-11-11" WHERE id = "002";
<p>
d) DELETE FROM Movies WHERE id = "001";
<p>
UPDATE Movies SET title = "Teste", synopsis = "teste", release_Date = "2020-02-20", rating = 5, playing_limit_date = "2021-04-20" WHERE id = "001";
<p>
Não deu erro, mas não atualizou o id 001, por que ele já não existia e o comando de update não cria outro item;
<p>

### Exercício 7
a) SELECT COUNT(*) FROM Movies WHERE rating > 7.5;
<p>
b) SELECT AVG(rating) FROM Movies;
<p>
c) SELECT COUNT(*) FROM Movies WHERE playing_limit_date > CURDATE();
<p>
d) SELECT COUNT(*) FROM Movies WHERE release_Date > CURDATE();
<p>
e) SELECT MAX(rating) from Movies;
<p>
f) SELECT MIN(rating) from Movies;
<p>

### Exercício 8
a) SELECT * FROM Movies ORDER BY title;
<p>
b) SELECT * FROM Movies ORDER BY title DESC LIMIT 5;
<p>
c) SELECT * FROM Movies ORDER BY release_Date DESC LIMIT 3;
<p>
d) SELECT * FROM Movies ORDER BY rating DESC LIMIT 3;
<p>