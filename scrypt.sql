create	database MundoVerde;

use MundoVerde;

create table Produtos (
	id INT PRIMARY KEY AUTO_INCREMENT,
	descricao VARCHAR (60) not null,
    categoria int not null,
    preco float null,
    quantidade int not null,
    url varchar(255)
);

/*  
	categoria:
    0 = cereais
    1 = suplementos
    2 = temperos
*/
insert into produtos values (1, 'Granola com castanhas 1kg', 0, 48.18,10, 'cereais.png');

insert into produtos values (2, 'Whey Protein 907g', 1, 379.39, 10, 'sumplementos.png');

insert into produtos values (3, 'Alho em pó', 2, 5.19, 10, 'temperos.png');

select * from produtos;

