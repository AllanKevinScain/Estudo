DELIMITER $$
create trigger registrarPresenca
after insert
on aulabancodedados.aluno
for each row
BEGIN
	IF (NEW.nota > 0) then insert into aulabancodedados.presenca (idaluno, dia, presenca) values (NEW.id, now(), 1); end if;
END$$