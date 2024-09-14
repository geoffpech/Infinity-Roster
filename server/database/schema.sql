create table hero (
  id int unsigned primary key auto_increment not null,
  name VARCHAR(255) NOT NULL,
  alias VARCHAR(255) NOT NULL,
  biography TEXT NOT NULL,
  image_url TEXT
  );

INSERT INTO hero(name, alias, biography, image_url)
VALUES
('Tony Stark','Iron Man','Génie, milliardaire, playboy et philanthrope, Tony Stark combat le crime dans une armure high-tech qu''il a créée.','https://www.google.com/search?q=iron+man&sca_esv=170c5e6fca5d2d21&sca_upv=1&udm=2&sxsrf=ADLYWIJbshCvPmqgBQ-a0ciPAwBCwPag_A:1725807357328&source=lnt&tbs=ic:trans&sa=X&ved=2ahUKEwjkzO-zzbOIAxUQUaQEHZhkIRQQpwV6BAgCEA8&biw=1707&bih=898&dpr=1.5#vhid=9EExPzvZwrM9FM&vssid=mosaic'),
('Steve Rogers','Captain America','Soldat amélioré par un sérum, il incarne les valeurs américaines et mène les Avengers.','https://static.printler.com/cache/5/0/f/2/c/a/50f2ca9e97f8bbd6813f40370f492968a6af7870.jpghttps://static.printler.com/cache/5/0/f/2/c/a/50f2ca9e97f8bbd6813f40370f492968a6af7870.jpg');

INSERT INTO hero(name, alias, biography)
VALUES
('Remy LeBeau','Gambit','Mutant capable de charger des objets d''énergie explosive, souvent avec des cartes à jouer.'),
('Kurt Wagner','Nightcrawler','Mutant capable de se téléporter, il est un membre fidèle des X-Men'),
('Logan','Wolverine','Mutant aux griffes en adamantium et un facteur de guérison rapide.'),
('Charles Xavier','Professor X','Puissant télépathe, fondateur et leader des X-Men, il prône la paix entre humains et mutants.'),
('Wade Wilson','Deadpool','Mercenaire à l''humour décalé, il possède des capacités de guérison exceptionnelles.'),
('Clint Barton','Hawkeye','Tireur d’élite exceptionnel, il utilise des flèches spéciales pour combattre le crime.'),
('Vision','Vision','Android créé par Ultron, il devient membre des Avengers avec des pouvoirs de densité variable.'),
('Gamora','Gamora','La femme la plus dangereuse de la galaxie, elle est membre des Gardiens de la Galaxie.'),
('Drax','Drax the Destroyer','Membre des Gardiens de la Galaxie, il cherche à venger sa famille en détruisant Thanos.'),
('Groot','Groot','Créature extraterrestre arboricole, membre des Gardiens de la Galaxie.'),
('Rocket Raccoon','Rocket','Ingénieur et tacticien expert, membre des Gardiens de la Galaxie.'),
('Bruce Banner','Hulk','Après une exposition aux radiations gamma, il se transforme en une créature verte de puissance brute.'),
('Star-Lord','Peter Quill','Leader des Gardiens de la Galaxie, il est mi-humain, mi-céleste.');


