CREATE DATABASE ExamenBD;
use ExamenBD;
CREATE TABLE Cliente(
    Id INT AUTO_INCREMENT PRIMARY KEY,
    Nombre VARCHAR(50),
    Apellido VARCHAR(50),
    Usuario VARCHAR(30),
    Ciudad VARCHAR(50)
);
select * from Cliente;

INSERT INTO Cliente (Nombre, Apellido, Usuario, Ciudad) VALUES
('Juan', 'Almeida', 'jalmeida', 'Quito'),
('Diego', 'Contreras', 'dcontreras', 'Guayaquil'),
('Carlos', 'Gonzaléz', 'cgonzalez', 'Quito'),
('Maria', 'Salazar', 'msalazar', 'Ambato');


