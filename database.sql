CREATE DATABASE my_carwash CHARACTER SET UTF8;

CREATE USER diego@localhost IDENTIFIED BY 'password';

GRANT ALL PRIVILEGES ON my_carwash.* TO diego@localhost;

