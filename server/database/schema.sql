create table hero (
  id int unsigned primary key auto_increment not null,
  name VARCHAR(255) NOT NULL,
  alias VARCHAR(255),
  biography TEXT NOT NULL,
  image_url TEXT
  );

create table band (
  id int UNSIGNED primary key auto_increment not null,
  name VARCHAR(255) NOT NULL,
  description TEXT
);

INSERT INTO hero(name, alias, biography, image_url)
VALUES
('Tony Stark','Iron Man','Génie, milliardaire, playboy et philanthrope, Tony Stark combat le crime dans une armure high-tech qu''il a créée.','https://www.google.com/search?q=iron+man&sca_esv=170c5e6fca5d2d21&sca_upv=1&udm=2&sxsrf=ADLYWIJbshCvPmqgBQ-a0ciPAwBCwPag_A:1725807357328&source=lnt&tbs=ic:trans&sa=X&ved=2ahUKEwjkzO-zzbOIAxUQUaQEHZhkIRQQpwV6BAgCEA8&biw=1707&bih=898&dpr=1.5#vhid=9EExPzvZwrM9FM&vssid=mosaic'),
('Steve Rogers','Captain America','Soldat amélioré par un sérum, il incarne les valeurs américaines et mène les Avengers.','https://static.printler.com/cache/5/0/f/2/c/a/50f2ca9e97f8bbd6813f40370f492968a6af7870.jpghttps://static.printler.com/cache/5/0/f/2/c/a/50f2ca9e97f8bbd6813f40370f492968a6af7870.jpg');
