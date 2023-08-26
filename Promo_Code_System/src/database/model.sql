create database PromoCodeDB;

\c PromoCodeDB;

create extension if not exists "uuid-ossp";

create table users (
    id uuid default uuid_generate_v4() primary key,
    name varchar(32) not null,
    email varchar(32) not null,
    username varchar(32) not null,
    password varchar(32) not null,
    balance varchar(32) not null
);

create table products (
    id uuid default uuid_generate_v4() primary key,
    name varchar(32) not null,
    price bigint not null,
    amount bigint default 0,
    is_active boolean default true
);

create table promo_codes (
    id uuid default uuid_generate_v4() primary key,
    price bigint not null,
    code_number varchar(32) not null,
    user_id uuid not null,
    expire_date timestamp not null,
    created_at timestamp default current_timestamp,
    foreign key (user_id) references users(id)
);

create table history (
    id uuid default uuid_generate_v4() primary key,
    user_id uuid not null,
    product_id uuid not null,
    promo_code varchar(32) default null,
    created_at timestamp default current_timestamp,
    foreign key (user_id) references users(id),
    foreign key (product_id) references products(id)
);