create table user (
  id int unsigned primary key auto_increment not null,
  email varchar(255) not null unique,
  password varchar(255) not null
);

create table item (
  id int unsigned primary key auto_increment not null,
  title varchar(255) not null,
  user_id int unsigned not null,
  foreign key(user_id) references user(id)
);

create table category (
  id int unsigned primary key auto_increment not null,
  name varchar(255) not null
);

create table program (
id int unsigned primary key auto_increment not null,
title  VARCHAR(255) not NULL,
synopsis text not null,
poster VARCHAR(255) not NULL,
country VARCHAR(255) not null,
years INT,
category_id INT
);