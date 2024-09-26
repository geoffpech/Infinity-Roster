-- Active: 1722343158688@@127.0.0.1@3306@infinity_roster

CREATE TABLE band (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL
);

INSERT INTO band(name)
VALUES
("Avenger"),
("X-men"),
("Gardien de la galaxie");

create table hero (
  id int unsigned primary key auto_increment not null,
  name VARCHAR(255) NOT NULL,
  alias VARCHAR(255) NOT NULL,
  biography TEXT NOT NULL,
  image TEXT,
  band_id INT UNSIGNED NOT NULL,
  FOREIGN KEY (band_id) REFERENCES band(id)
  );

INSERT INTO hero(name, alias, biography, image, band_id)
VALUES
('Tony Stark','Iron Man','Génie, milliardaire, playboy et philanthrope, Tony Stark combat le crime dans une armure high-tech qu''il a créée.','Iron-man.png',1),
('Steve Rogers','Captain America','Soldat amélioré par un sérum, il incarne les valeurs américaines et mène les Avengers.','Captain-America.png',1),
('Remy LeBeau','Gambit','Mutant capable de charger des objets d''énergie explosive, souvent avec des cartes à jouer.','Gambit.png',2),
('Kurt Wagner','Nightcrawler','Mutant capable de se téléporter, il est un membre fidèle des X-Men','Nightcrawler.png',2),
('Logan','Wolverine','Mutant aux griffes en adamantium et un facteur de guérison rapide.','Wolverine.png',2),
('Charles Xavier','Professor X','Puissant télépathe, fondateur et leader des X-Men, il prône la paix entre humains et mutants.','Professor-X.png',2),
('Wade Wilson','Deadpool','Mercenaire à l''humour décalé, il possède des capacités de guérison exceptionnelles.','Deadpool.png',2),
('Clint Barton','Hawkeye','Tireur d’élite exceptionnel, il utilise des flèches spéciales pour combattre le crime.','Hawkey.png',1),
('Vision','Vision','Android créé par Ultron, il devient membre des Avengers avec des pouvoirs de densité variable.','Vision.png',1),
('Gamora','Gamora','La femme la plus dangereuse de la galaxie, elle est membre des Gardiens de la Galaxie.','Gamora.png',3),
('Drax','Drax the Destroyer','Membre des Gardiens de la Galaxie, il cherche à venger sa famille en détruisant Thanos.','Drax.png',3),
('Groot','Groot','Créature extraterrestre arboricole, membre des Gardiens de la Galaxie.','Groot.png',3),
('Rocket Raccoon','Rocket','Ingénieur et tacticien expert, membre des Gardiens de la Galaxie.','Rocket.png',3),
('Bruce Banner','Hulk','Après une exposition aux radiations gamma, il se transforme en une créature verte de puissance brute.','Hulk.png',1),
('Star-Lord','Peter Quill','Leader des Gardiens de la Galaxie, il est mi-humain, mi-céleste.','Star-Lord.png',3);

















