create table hero (
  id int unsigned primary key auto_increment not null,
  name VARCHAR(255) NOT NULL,
  alias VARCHAR(255) NOT NULL,
  biography TEXT NOT NULL,
  image TEXT
  );

INSERT INTO hero(name, alias, biography, image)
VALUES
('Tony Stark','Iron Man','Génie, milliardaire, playboy et philanthrope, Tony Stark combat le crime dans une armure high-tech qu''il a créée.','Gambit.png'),
('Steve Rogers','Captain America','Soldat amélioré par un sérum, il incarne les valeurs américaines et mène les Avengers.','Gambit.png'),
('Remy LeBeau','Gambit','Mutant capable de charger des objets d''énergie explosive, souvent avec des cartes à jouer.','Gambit.png'),
('Kurt Wagner','Nightcrawler','Mutant capable de se téléporter, il est un membre fidèle des X-Men','Nightcrawler.png'),
('Logan','Wolverine','Mutant aux griffes en adamantium et un facteur de guérison rapide.','Wolverine.png'),
('Charles Xavier','Professor X','Puissant télépathe, fondateur et leader des X-Men, il prône la paix entre humains et mutants.','Professor-X.png'),
('Wade Wilson','Deadpool','Mercenaire à l''humour décalé, il possède des capacités de guérison exceptionnelles.','Gambit.png'),
('Clint Barton','Hawkeye','Tireur d’élite exceptionnel, il utilise des flèches spéciales pour combattre le crime.','Hawkey.png'),
('Vision','Vision','Android créé par Ultron, il devient membre des Avengers avec des pouvoirs de densité variable.','Vision.png'),
('Gamora','Gamora','La femme la plus dangereuse de la galaxie, elle est membre des Gardiens de la Galaxie.','Gamora.png'),
('Drax','Drax the Destroyer','Membre des Gardiens de la Galaxie, il cherche à venger sa famille en détruisant Thanos.','Drax.png'),
('Groot','Groot','Créature extraterrestre arboricole, membre des Gardiens de la Galaxie.','Groot.png'),
('Rocket Raccoon','Rocket','Ingénieur et tacticien expert, membre des Gardiens de la Galaxie.','Rocket.png'),
('Bruce Banner','Hulk','Après une exposition aux radiations gamma, il se transforme en une créature verte de puissance brute.','Hulk.png'),
('Star-Lord','Peter Quill','Leader des Gardiens de la Galaxie, il est mi-humain, mi-céleste.','Star-Lord.png');














