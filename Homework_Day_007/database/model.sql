create database serviceTransaction;

create extension if not exists "uuid-ossp";

create table users (
    id uuid default uuid_generate_v4() primary key,
    name varchar(64) not null,
    username varchar(64) not null,
    balance bigInt not null,
    password varchar(64) not null
);

create table services (
    id uuid default uuid_generate_v4() primary key,
    name varchar(64) not null,
    price bigint not null,
    owner_id uuid,
    foreign key (owner_id) references users(id)
);

create table usedServices (
    id uuid default uuid_generate_v4() primary key,
    service_id uuid references services(id),
    customer_id uuid references users(id)
);