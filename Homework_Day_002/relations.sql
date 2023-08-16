// https://dbdiagram.io/d/64dc4a1702bd1c4a5ed6eb2e


create table services (
    id serial primary key,
    title varchar(255) not null,
    description varchar(255) not null,
    photo varchar(255) not null,
    learnMore varchar(255) not null
);

create table leaders (
    id serial primary key,
    name varchar(255) not null,
    job varchar(255) not null,
    photo varchar(255) not null,
    about varchar(255) not null
);

create table news (
    id serial primary key,
    title varchar(255) not null,
    owner varchar(255) not null,
    description varchar(255) not null,
    photo varchar(255) not null,
    learnMore varchar(255) not null
);

create table feedbacks (
    id serial primary key,
    owner varchar(255) not null,
    ownerPlace varchar(255) not null,
    description varchar not null
);

create table thingYouGot (
    id serial primary key,
    title varchar(255) not null,
    description varchar(255) not null,
    symbol varchar(255) not null
);